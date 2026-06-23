"use client";

import React, { useState, useEffect } from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { motion } from 'framer-motion';

import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { Flashcard } from '@/shared/ui/Flashcard';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { FuriganaText } from '@/shared/ui/FuriganaText';

import { useAuth } from '@/features/auth/presentation/hooks/useAuth';
// 🛠️ FIX: Using the direct named imports that your file is expecting
import { getDueReviews, updateSRSItem } from '../application/services/srs.service';
import { playCorrectSound, playWrongSound } from '@/shared/lib/audio/audio-service';
import { GamificationService } from '@/features/gamification/application/services/gamification.service';
import { fireLevelUpConfetti } from '@/shared/lib/effects/particles';

interface MappedReviewItem {
    id: string;
    typeLabel: string;
    frontPrimary: string;
    frontSecondary?: string;
    backPrimary: string;
    backSecondary?: string;
}

export const DailyReviewRunner = () => {
    const router = useTransitionRouter();
    const { user } = useAuth(); // Grab the logged-in user
    const [reviewQueue, setReviewQueue] = useState<MappedReviewItem[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [sessionScore, setSessionScore] = useState(0);

    useEffect(() => {
        const fetchAndMapReviews = async () => {
            if (!user) return; // Wait until user is loaded

            // 🛠️ FIX: Pass 1 argument (user.uid)
            const dueItems = await getDueReviews(user.uid);
            const mappedQueue: MappedReviewItem[] = [];

            for (const item of dueItems) {
                // If it has a payload, it's from our new dynamic system
                if (item.payload) {
                    mappedQueue.push({
                        id: item.id,
                        typeLabel: item.payload.typeLabel || 'REVIEW',
                        frontPrimary: item.payload.frontPrimary || 'Missing Text',
                        frontSecondary: item.payload.frontSecondary,
                        backPrimary: item.payload.backPrimary || 'Missing Answer',
                        backSecondary: item.payload.backSecondary
                    });
                }
            }

            setReviewQueue(mappedQueue.sort(() => Math.random() - 0.5));
            setIsLoading(false);
        };

        void fetchAndMapReviews();
    }, [user]);

    const playTTS = (text?: string) => {
        if (!text || typeof window === 'undefined') return;
        // Strip English from TTS to prevent robotic garbling
        const japaneseOnly = text.replace(/[a-zA-Z]/g, '');
        const utterance = new SpeechSynthesisUtterance(japaneseOnly);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    };

    const handleNext = async (isCorrect: boolean) => {
        if (!user) return;
        const currentItem = reviewQueue[currentIndex];
        if (!currentItem) return;

        if (isCorrect) {
            playCorrectSound();
            setSessionScore(prev => prev + 1);
        } else {
            playWrongSound();
        }

        // 🛠️ FIX: Pass 4 arguments (uid, itemId, isCorrect, payload)
        void updateSRSItem(user.uid, currentItem.id, isCorrect, null);

        if (currentIndex + 1 >= reviewQueue.length) {
            fireLevelUpConfetti();
            void GamificationService.awardXP(sessionScore + (isCorrect ? 1 : 0), reviewQueue.length);
        }

        setCurrentIndex(prev => prev + 1);
    };

    if (isLoading) {
        return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-32">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="text-6xl mb-4 inline-block">🧠</motion.div>
                <h2 className="text-2xl font-black text-primary tracking-widest uppercase">Unlocking Memory Vault...</h2>
            </motion.div>
        );
    }

    if (reviewQueue.length === 0) {
        return (
            <div className="max-w-md mx-auto my-20 px-5 text-center">
                <Card className="p-10 shadow-xl border-t-8 border-green-500 bg-green-500/5">
                    <span className="text-6xl mb-6 block drop-shadow-md">✨</span>
                    <h2 className="text-3xl text-primary font-black mb-2">Caught Up!</h2>
                    <p className="text-muted font-bold mb-8">You have 0 reviews due right now.</p>
                    <Button onClick={() => router.push('/dashboard')} className="w-full py-6 text-lg font-black shadow-lg">Return to Base</Button>
                </Card>
            </div>
        );
    }

    if (currentIndex >= reviewQueue.length) {
        return (
            <div className="max-w-md mx-auto my-20 px-5 text-center">
                <Card className="p-10 shadow-xl border-t-8 border-accent bg-accent/5">
                    <h2 className="text-2xl text-primary font-bold">Review Complete! 🎉</h2>
                    <h1 className="text-6xl text-accent font-black my-6">+{sessionScore * 5} <span className="text-3xl">XP</span></h1>
                    <Button onClick={() => router.push('/dashboard')} className="w-full py-6 text-lg font-black shadow-lg">Return to Base</Button>
                </Card>
            </div>
        );
    }

    const currentItem = reviewQueue[currentIndex];

    const FrontView = (
        <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <span className="absolute top-0 left-0 text-xs font-black text-muted uppercase tracking-widest bg-background border border-border/50 px-3 py-1 rounded-md">
                {currentItem.typeLabel}
            </span>
            {currentItem.frontPrimary && (
                <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4 font-japanese drop-shadow-sm leading-snug whitespace-pre-wrap">
                    <FuriganaText>{currentItem.frontPrimary}</FuriganaText>
                </h2>
            )}
            {currentItem.frontSecondary && <p className="text-base font-bold text-muted uppercase tracking-widest">{currentItem.frontSecondary}</p>}
        </div>
    );

    const BackView = (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <p className="text-xs font-black text-muted uppercase tracking-wider mb-4 border-b-2 border-border/50 pb-2">Answer</p>
            <h3 className="text-2xl sm:text-3xl font-black text-accent mb-4 font-japanese whitespace-pre-wrap leading-relaxed">
                <FuriganaText>{currentItem.backPrimary}</FuriganaText>
            </h3>
            {currentItem.backSecondary && (
                <p className="text-base font-bold text-primary border-t border-border/50 pt-2 w-full whitespace-pre-wrap leading-relaxed">
                    <FuriganaText>{currentItem.backSecondary}</FuriganaText>
                </p>
            )}
        </div>
    );

    return (
        <div className="max-w-[800px] my-10 mx-auto px-5 relative z-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-black text-primary tracking-tight">Daily Review</h1>
                <span className="bg-card px-4 py-1.5 rounded-xl font-black text-sm text-muted shadow-sm border border-border/50">
                    {reviewQueue.length - currentIndex} Remaining
                </span>
            </div>

            <ProgressBar current={currentIndex} total={reviewQueue.length} className="mb-8" />

            <div className="aspect-[4/3] sm:aspect-video w-full">
                <Flashcard frontContent={FrontView} backContent={BackView} onNext={handleNext} />
            </div>
        </div>
    );
};