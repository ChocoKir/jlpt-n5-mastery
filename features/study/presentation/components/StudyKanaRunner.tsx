"use client";

import React, { useState, useEffect } from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { ALL_KANA } from '@/shared/data/kana';
import { Flashcard } from '@/shared/ui/Flashcard';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { GamificationService } from '@/features/gamification/application/services/gamification.service';
import { fireLevelUpConfetti } from '@/shared/lib/effects/particles';
import { playLevelUpFanfare } from '@/shared/lib/audio/audio-service';

type KanaItem = typeof ALL_KANA[0];

export const StudyKanaRunner = () => {
    const router = useTransitionRouter();
    const [sessionKana, setSessionKana] = useState<KanaItem[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [finished, setFinished] = useState(false);
    const [stats, setStats] = useState({ known: 0, learning: 0 });

    useEffect(() => {
        // Grab 20 random Kana for a quick drill
        const shuffled = [...ALL_KANA].sort(() => 0.5 - Math.random()).slice(0, 20);
        setSessionKana(shuffled);
    }, []);

    const currentKana = sessionKana[currentIndex];

    const handleNextCard = (knewIt: boolean) => {
        setStats(prev => ({
            known: knewIt ? prev.known + 1 : prev.known,
            learning: !knewIt ? prev.learning + 1 : prev.learning
        }));

        if (currentKana) {
        }

        if (currentIndex + 1 < sessionKana.length) {
            setCurrentIndex(prev => prev + 1);
        } else {
            fireLevelUpConfetti();
            playLevelUpFanfare();
            // Award XP based on correct answers
            void GamificationService.awardXP(knewIt ? stats.known + 1 : stats.known, 1);
            setFinished(true);
        }
    };

    if (sessionKana.length === 0) return (
        <div className="text-center mt-32 text-primary font-black text-xl animate-pulse tracking-widest uppercase">
            Loading Memory Matrix... 🔤
        </div>
    );

    if (finished) {
        return (
            <div className="max-w-[500px] my-20 mx-auto px-5 text-center relative z-10">
                <SpotlightCard glowColor="rgba(59, 130, 246, 0.15)" className="p-10 border-t-8 border-blue-500 shadow-2xl">
                    <div className="text-6xl mb-6 drop-shadow-md">🎉</div>
                    <h2 className="text-3xl text-primary font-black tracking-tight">Great Session!</h2>
                    <p className="text-muted font-bold my-4 uppercase tracking-widest text-sm">You reviewed {sessionKana.length} Kana characters.</p>

                    <div className="flex justify-center gap-6 my-8 p-6 bg-background/50 rounded-2xl border border-border/50">
                        <div className="text-xl font-black text-blue-500 flex flex-col">
                            <span>✅ Got it</span>
                            <span className="text-3xl">{stats.known}</span>
                        </div>
                        <div className="w-px bg-border/50"></div>
                        <div className="text-xl font-black text-rose-500 flex flex-col">
                            <span>❌ Practice</span>
                            <span className="text-3xl">{stats.learning}</span>
                        </div>
                    </div>
                    <Button onClick={() => router.push('/dashboard')} className="w-full py-6 text-lg shadow-lg">Return to Base</Button>
                </SpotlightCard>
            </div>
        );
    }

    return (
        <div className="max-w-[600px] my-10 mx-auto px-5 relative z-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-black text-primary tracking-tight">Kana Drills</h1>
                <span className="text-muted font-black text-xs uppercase tracking-widest bg-card border border-border/50 px-3 py-1.5 rounded-xl">
                    {currentIndex + 1} / {sessionKana.length}
                </span>
            </div>

            <ProgressBar current={currentIndex} total={sessionKana.length} className="mb-8" indicatorClassName="bg-blue-500" />

            <Flashcard
                frontContent={
                    <div className="flex flex-col items-center justify-center h-full">
                        <h1 className="text-9xl text-primary font-black drop-shadow-md font-japanese">{currentKana.character}</h1>
                    </div>
                }
                backContent={
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <p className="text-xs font-black text-muted uppercase tracking-wider mb-2 border-b-2 border-border/50 pb-2 w-1/2 mx-auto">Romaji</p>
                        <h1 className="text-7xl text-blue-500 font-black tracking-widest uppercase mb-4">{currentKana.romaji}</h1>
                        <p className="text-sm text-primary font-black uppercase tracking-widest bg-background border border-border/50 px-4 py-2 rounded-xl shadow-sm">
                            {currentKana.type}
                        </p>
                    </div>
                }
                onNext={handleNextCard}
            />
        </div>
    );
};