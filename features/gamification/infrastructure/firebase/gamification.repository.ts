import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { IGamificationRepository } from '@/features/gamification/domain/repositories/gamification.repository.interface';
import { UserStats, UserStatsProps } from '@/features/gamification/domain/entities/user-stats.entity';

export class FirebaseGamificationRepository implements IGamificationRepository {
    async getUserStats(uid: string): Promise<UserStats | null> {
        const statsRef = doc(db, 'users', uid, 'stats', 'main');
        const docSnap = await getDoc(statsRef);

        if (docSnap.exists()) {
            const data = { uid, ...docSnap.data() } as UserStatsProps;
            return new UserStats(data); // Rehydrate the entity!
        }
        return null;
    }

    async saveUserStats(stats: UserStats): Promise<void> {
        const statsRef = doc(db, 'users', stats.props.uid, 'stats', 'main');
        const { uid, ...dataToSave } = stats.toJSON(); // Don't save uid as a field if it's the doc path

        await setDoc(statsRef, dataToSave, { merge: true });
    }
}