"use client";

import { useState, useCallback } from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { useAuth } from '@/features/auth/presentation/hooks/useAuth';
import { GamificationService } from '@/features/gamification/application/services/gamification.service';
import { srsService } from '@/features/spaced-repetition/application/services/srs.service';
import { logDailyActivity } from '@/features/heatmap/application/services/activity.service';
import { playCorrectSound, playWrongSound, playLevelUpFanfare } from '@/shared/lib/audio/audio-service';
import { fireLevelUpConfetti } from '@/shared/lib/effects/particles';

export const useQuizEngine = () => {
    const router = useTransitionRouter();
    const { user } = useAuth();

    const [score, setScore] = useState(0);
    const [attempted, setAttempted] = useState(0);
    const [missedItems, setMissedItems] = useState<any[]>([]);
    const [isFinished, setIsFinished] = useState(false);

    const recordCorrect = useCallback(() => {
        playCorrectSound();
        setScore(s => s + 1);
        setAttempted(a => a + 1);
    }, []);

    const recordWrong = useCallback((itemData: any) => {
        playWrongSound();
        setMissedItems(m => [...m, itemData]);
        setAttempted(a => a + 1);
    }, []);

    const finishSession = useCallback(async () => {
        setIsFinished(true);
        fireLevelUpConfetti();
        playLevelUpFanfare();

        if (attempted > 0) {
            // 1. Award XP & Update Heatmap locally
            void GamificationService.awardXP(score, attempted);
            logDailyActivity(score * 10);

            // Dispatch event to instantly update the Heatmap UI
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new Event('gamificationUpdated'));
            }

            // 2. Sync to Firebase (Review Tab) if user is logged in
            if (user && missedItems.length > 0) {
                try {
                    await srsService.processQuizResults(user.uid, missedItems);
                } catch (error) {
                    console.error("Failed to sync SRS to database:", error);
                }
            }
        }
    }, [attempted, score, missedItems, user]);

    const exitEarly = useCallback(() => {
        if (attempted > 0) {
            // 🛠️ FIX: Added void to handle the floating promise
            void finishSession();
        } else {
            router.push('/study');
        }
    }, [attempted, finishSession, router]);

    return {
        score,
        attempted,
        missedItems,
        isFinished,
        recordCorrect,
        recordWrong,
        finishSession,
        exitEarly,
        router
    };
};