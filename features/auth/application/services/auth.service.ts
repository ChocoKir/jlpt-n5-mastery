import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    User
} from 'firebase/auth';
import { auth } from '@/shared/lib/firebase/config';

export type AuthResult = { user: User | null; error: string | null };

const getErrorMessage = (error: any): string => {
    const code = error?.code;
    if (code === 'auth/user-not-found' || code === 'auth/wrong-password') return "Invalid email or password.";
    if (code === 'auth/email-already-in-use') return "An account with this email already exists.";
    if (code === 'auth/weak-password') return "Password should be at least 6 characters.";
    if (code === 'auth/popup-closed-by-user') return "Google sign-in was cancelled.";
    return "An unexpected error occurred. Please try again.";
};

export class AuthService {
    static async loginWithEmail(email: string, pass: string): Promise<AuthResult> {
        try {
            const result = await signInWithEmailAndPassword(auth, email, pass);
            return { user: result.user, error: null };
        } catch (error: any) {
            return { user: null, error: getErrorMessage(error) };
        }
    }

    static async registerWithEmail(email: string, pass: string): Promise<AuthResult> {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, pass);
            return { user: result.user, error: null };
        } catch (error: any) {
            return { user: null, error: getErrorMessage(error) };
        }
    }
}