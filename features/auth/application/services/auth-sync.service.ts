import { User } from 'firebase/auth';
import { FirebaseGamificationRepository } from '@/features/gamification/infrastructure/firebase/gamification.repository';
// 👈 Import our offline database
import { localDB } from '@/shared/lib/offline/db';

export class AuthSyncService {
    static async syncUserData(user: User): Promise<void> {
        try {
            const gamificationRepo = new FirebaseGamificationRepository();
            await gamificationRepo.getUserStats(user.uid);
        } catch (error) {
            console.error("Failed to sync initial cloud data:", error);
        }
    }

    // 🛡️ SECURITY FIX: Make this async to wipe IndexedDB
    static async clearLocalCache(): Promise<void> {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('srs_data');
            localStorage.removeItem('user_stats');
            localStorage.removeItem('daily_quests_data');

            // Wipe offline queues to prevent data leaks between accounts
            try {
                await localDB.questions.clear();
                await localDB.syncQueue.clear();
            } catch (e) {
                console.error("Failed to clear offline DB", e);
            }
        }
    }
}