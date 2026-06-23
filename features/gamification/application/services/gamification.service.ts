import { FirebaseGamificationRepository } from '@/features/gamification/infrastructure/firebase/gamification.repository';
import { UserStats } from '@/features/gamification/domain/entities/user-stats.entity';
import { auth } from '@/shared/lib/firebase/config';

// Cross-Domain Side Effects
import { logDailyActivity } from '@/features/heatmap/application/services/activity.service';
import { checkAndUnlockAchievements } from '@/features/achievements/application/services/achievements.service';

const repository = new FirebaseGamificationRepository();

export class GamificationService {
    static async awardXP(baseXP: number, questionCount: number): Promise<void> {
        try {
            const user = auth?.currentUser;
            if (!user) return;

            const totalXP = baseXP * questionCount;
            let stats = await repository.getUserStats(user.uid);

            if (!stats) {
                stats = new UserStats({
                    uid: user.uid,
                    xp: 0,
                    level: 1,
                    currentStreak: 0,
                    lastStudyDate: null,
                    displayName: user.displayName || 'Aspiring Scholar'
                });
            } else {
                stats.props.displayName = user.displayName || stats.props.displayName || 'Aspiring Scholar';
            }

            // Execute Entity Logic
            stats.addXP(totalXP);

            // Persist (Firebase offline cache handles connection drops gracefully)
            await repository.saveUserStats(stats);

            // 🛡️ THE FIX: Explicitly handle floating cross-domain promises
            void logDailyActivity(totalXP);
            void checkAndUnlockAchievements({ xp: stats.props.xp, currentStreak: stats.props.currentStreak });

        } catch (error) {
            console.error("Gamification Engine Error:", error);
            // We swallow the error so it doesn't crash the Quiz UI if the database blips.
        }
    }
}