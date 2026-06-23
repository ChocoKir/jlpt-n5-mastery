"use client";

import React, { createContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/shared/lib/firebase/config';
import { FirebaseAuthRepository } from '../../infrastructure/firebase/auth.repository';
import { AuthSyncService } from '../../application/services/auth-sync.service';

export interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    loginWithGoogle: () => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    isLoading: true,
    loginWithGoogle: async () => {},
    logout: async () => {}
});

const authRepo = new FirebaseAuthRepository();

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = authRepo.onAuthStateChanged(async (currentUser) => {
            setUser(currentUser);

            if (currentUser) {
                // 1. Sync offline/gamification data
                await AuthSyncService.syncUserData(currentUser);

                // 2. Ensure master Firestore document exists
                const userRef = doc(db, 'users', currentUser.uid);
                const docSnap = await getDoc(userRef);

                if (!docSnap.exists()) {
                    await setDoc(userRef, {
                        displayName: currentUser.displayName,
                        email: currentUser.email,
                        photoURL: currentUser.photoURL,
                        totalXp: 0,
                        currentLevel: 1,
                        currentStreak: 0,
                        longestStreak: 0,
                        isAdmin: false, // Explicitly default to false
                        createdAt: new Date().toISOString()
                    }, { merge: true });
                }
            }

            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Google Login failed:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await authRepo.logout();
            await AuthSyncService.clearLocalCache();
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const value = useMemo(() => ({ user, isLoading, loginWithGoogle, logout }), [user, isLoading]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};