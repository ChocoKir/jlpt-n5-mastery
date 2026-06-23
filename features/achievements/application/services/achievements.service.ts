import { auth } from '@/shared/lib/firebase/config';
// 🛡️ THE FIX: Use absolute aliases to eliminate relative path hell
import { FirebaseAchievementsRepository } from '@/features/achievements/infrastructure/firebase/achievements.repository';
import { Achievement } from '@/features/achievements/domain/entities/user-achievements.entity';

interface EvalStats {
    xp: number;
    currentStreak: number;
    level: number;
}

const MASTER_ACHIEVEMENTS = [
    { id: 'first_quiz', icon: '🎯', title: 'First Blood', description: 'Complete your first study session.', condition: (stats: EvalStats) => stats.xp > 0 },
    { id: 'streak_3', icon: '🔥', title: 'Warming Up', description: 'Reach a 3-day study streak.', condition: (stats: EvalStats) => stats.currentStreak >= 3 },
    { id: 'streak_7', icon: '🌋', title: 'Unstoppable', description: 'Reach a 7-day study streak.', condition: (stats: EvalStats) => stats.currentStreak >= 7 },
    { id: 'xp_500', icon: '⭐', title: 'Dedicated Scholar', description: 'Earn 500 total XP.', condition: (stats: EvalStats) => stats.xp >= 500 },
    { id: 'xp_1000', icon: '👑', title: 'N5 Master', description: 'Earn 1,000 total XP.', condition: (stats: EvalStats) => stats.xp >= 1000 },
    { id: 'level_5', icon: '🛡️', title: 'Ninja Veteran', description: 'Reach Ninja Level 5.', condition: (stats: EvalStats) => stats.level >= 5 }
];

const repository = new FirebaseAchievementsRepository();

export const getAchievements = async (uid: string): Promise<Achievement[]> => {
    try {
        const userEntity = await repository.getUserAchievements(uid);
        const unlockedSet = new Set(userEntity.unlockedIds);

        return MASTER_ACHIEVEMENTS.map(badge => ({
            id: badge.id,
            title: badge.title,
            description: badge.description,
            icon: badge.icon,
            unlocked: unlockedSet.has(badge.id)
        }));
    } catch (error) {
        console.error("Failed to fetch achievements:", error);
        return MASTER_ACHIEVEMENTS.map(b => ({ ...b, unlocked: false }));
    }
};

export const checkAndUnlockAchievements = async (stats: { xp: number; currentStreak: number }): Promise<void> => {
    try {
        const user = auth.currentUser;
        if (!user) return;

        const level = Math.floor(stats.xp / 500) + 1;
        const evalStats: EvalStats = { ...stats, level };

        const userEntity = await repository.getUserAchievements(user.uid);
        const unlockedSet = new Set(userEntity.unlockedIds);

        let newlyUnlocked = false;

        for (const badge of MASTER_ACHIEVEMENTS) {
            if (!unlockedSet.has(badge.id) && badge.condition(evalStats)) {
                userEntity.unlockedIds.push(badge.id);
                newlyUnlocked = true;
            }
        }

        if (newlyUnlocked) {
            await repository.saveUserAchievements(userEntity);
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new Event('achievementsUpdated'));
            }
        }
    } catch (error) {
        console.error("Failed to check achievements:", error);
    }
};