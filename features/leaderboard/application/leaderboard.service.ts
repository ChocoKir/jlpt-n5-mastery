import { collectionGroup, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { LeaderboardUser } from '@/features/leaderboard/domain/entities/leaderboard.entity';

export class LeaderboardService {
    static async getTopUsers(): Promise<LeaderboardUser[]> {
        try {
            // 🛡️ THE FIX: Use collectionGroup to query the 'stats' subcollections we created in the Gamification engine!
            const statsGroupRef = collectionGroup(db, 'stats');
            const q = query(statsGroupRef, orderBy('xp', 'desc'), limit(50));
            const snapshot = await getDocs(q);

            return snapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: data.uid || doc.id, // Fallback to doc ID if uid isn't explicitly saved
                    displayName: data.displayName || 'Anonymous Scholar',
                    xp: data.xp || 0,
                    level: data.level || 1,
                    currentStreak: data.currentStreak || 0
                };
            });
        } catch (error) {
            console.error("Error fetching leaderboard:", error);
            return [];
        }
    }
}