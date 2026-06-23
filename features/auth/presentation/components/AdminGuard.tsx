"use client";

import React, { useEffect, useState } from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { useAuth } from '@/features/auth/presentation/hooks/useAuth';

export const AdminGuard = ({ children }: { children: React.ReactNode }) => {
    // 🛠️ FIX: Adjusted variable name to 'isLoading' to match our unified AuthContext
    const { user, isLoading } = useAuth();
    const router = useTransitionRouter();

    const [isChecking, setIsChecking] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const verifyAdminStatus = async () => {
            if (isLoading) return;

            if (!user) {
                router.replace('/auth/login');
                return;
            }

            try {
                const userDoc = await getDoc(doc(db, 'users', user.uid));

                if (userDoc.exists() && userDoc.data().isAdmin === true) {
                    setIsAuthorized(true);
                } else {
                    router.replace('/dashboard');
                }
            } catch (error) {
                console.error("Admin verification failed:", error);
                router.replace('/dashboard');
            } finally {
                setIsChecking(false);
            }
        };

        void verifyAdminStatus();
    }, [user, isLoading, router]);

    if (isLoading || isChecking) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-transparent">
                <div className="text-sm font-black text-accent animate-pulse flex items-center gap-3 uppercase tracking-widest bg-card/60 backdrop-blur-xl border border-border/50 px-6 py-3 rounded-2xl shadow-lg">
                    <span className="text-xl">🛡️</span> Securing Gateway...
                </div>
            </div>
        );
    }

    if (!isAuthorized) return null;

    return <>{children}</>;
};