import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/shared/lib/firebase/config';

export interface IAuthRepository {
    onAuthStateChanged(callback: (user: User | null) => void): () => void;
    logout(): Promise<void>;
}

export class FirebaseAuthRepository implements IAuthRepository {
    onAuthStateChanged(callback: (user: User | null) => void): () => void {
        return onAuthStateChanged(auth, callback);
    }

    async logout(): Promise<void> {
        await signOut(auth);
    }
}