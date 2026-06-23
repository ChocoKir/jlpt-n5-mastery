import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';

export interface DashboardStats {
    xp: number;
    level: number;
    currentStreak: number;
    longestStreak: number;
}

export const getUserDashboardData = async (userId: string): Promise<DashboardStats> => {
    const userRef = doc(db, 'user_stats', userId);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        return {
            xp: data.xp || 0,
            level: data.level || 1,
            currentStreak: data.currentStreak || 0,
            longestStreak: data.longestStreak || 0,
        };
    }

    // Default fallback if they haven't earned any XP yet
    return { xp: 0, level: 1, currentStreak: 0, longestStreak: 0 };
};