import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { IAchievementsRepository } from '../../domain/repositories/achievements.repository.interface';
import { UserAchievements } from '../../domain/entities/user-achievements.entity';

export class FirebaseAchievementsRepository implements IAchievementsRepository {
    async getUserAchievements(uid: string): Promise<UserAchievements> {
        const docRef = doc(db, 'users', uid, 'achievements', 'main');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const data = docSnap.data();
            return new UserAchievements(uid, data.unlockedIds || []);
        }

        // If they don't have a document yet, return a fresh entity
        return new UserAchievements(uid, []);
    }

    async saveUserAchievements(achievements: UserAchievements): Promise<void> {
        const docRef = doc(db, 'users', achievements.uid, 'achievements', 'main');
        await setDoc(docRef, achievements.toJSON(), { merge: true });
    }
}