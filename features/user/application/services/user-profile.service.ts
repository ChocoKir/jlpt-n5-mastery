import { updateProfile, User } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { UserProfileData } from '@/features/user/domain/entities/user-profile.entity';

export class UserProfileService {
    static async getProfile(uid: string): Promise<UserProfileData | null> {
        const docSnap = await getDoc(doc(db, 'users', uid));
        if (docSnap.exists()) {
            const data = docSnap.data();
            return {
                displayName: data.displayName || '',
                avatar: data.avatar || '🥷',
                dailyGoal: data.dailyGoal || 50
            };
        }
        return null;
    }

    static async updateProfile(user: User, data: UserProfileData): Promise<void> {
        // Update Firebase Auth identity
        await updateProfile(user, {
            displayName: data.displayName,
            photoURL: data.avatar
        });

        // Update custom Firestore data
        await updateDoc(doc(db, 'users', user.uid), {
            displayName: data.displayName,
            avatar: data.avatar,
            dailyGoal: data.dailyGoal
        });
    }
}