"use client";

import React, { useState, useEffect } from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { N5_VOCAB } from '@/shared/data/vocab';
import { Flashcard } from '@/shared/ui/Flashcard';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { FuriganaText } from '@/shared/ui/FuriganaText';
import { GamificationService } from '@/features/gamification/application/services/gamification.service';
import { fireLevelUpConfetti } from '@/shared/lib/effects/particles';
import { playLevelUpFanfare } from '@/shared/lib/audio/audio-service';

type VocabItem = typeof N5_VOCAB[0];

export const VocabStudyRunner = () => {
    const router = useTransitionRouter();
    const [sessionVocab, setSessionVocab] = useState<VocabItem[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [finished, setFinished] = useState(false);
    const [stats, setStats] = useState({ known: 0, learning: 0 });

    useEffect(() => {
        const shuffled = [...N5_VOCAB].sort(() => 0.5 - Math.random()).slice(0, 20);
        setSessionVocab(shuffled);
    }, []);

    const currentVocab = sessionVocab[currentIndex];

    const playAudio = (text: string) => {
        if (!text || typeof window === 'undefined') return;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    };

    const handleNextCard = (knewIt: boolean) => {
        setStats(prev => ({
            known: knewIt ? prev.known + 1 : prev.known,
            learning: !knewIt ? prev.learning + 1 : prev.learning
        }));

        if (currentIndex + 1 < sessionVocab.length) {
            setCurrentIndex(prev => prev + 1);
        } else {
            fireLevelUpConfetti();
            playLevelUpFanfare();
            void GamificationService.awardXP(knewIt ? stats.known + 1 : stats.known, 1);
            setFinished(true);
        }
    };

    if (sessionVocab.length === 0) {
        return <div className="text-center mt-32 text-primary animate-pulse font-black text-xl tracking-widest uppercase">Loading Matrix... 📚</div>;
    }

    if (finished) {
        return (
            <div className="max-w-[500px] my-20 mx-auto px-5 text-center relative z-10">
                <SpotlightCard glowColor="rgba(249, 115, 22, 0.15)" className="p-10 border-t-8 border-orange-500 shadow-2xl">
                    <div className="text-6xl mb-6 drop-shadow-md">🎉</div>
                    <h2 className="text-3xl text-primary font-black tracking-tight">Great Session!</h2>
                    <p className="text-muted font-bold my-4 uppercase tracking-widest text-sm">Reviewed {sessionVocab.length} Vocabulary Words.</p>

                    <div className="flex justify-center gap-6 my-8 p-6 bg-background/50 rounded-2xl border border-border/50">
                        <div className="text-xl font-black text-orange-500 flex flex-col">
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
                <h1 className="text-2xl font-black text-primary tracking-tight">Vocab Drills</h1>
                <span className="text-muted font-black text-xs uppercase tracking-widest bg-card border border-border/50 px-3 py-1.5 rounded-xl">
                    {currentIndex + 1} / {sessionVocab.length}
                </span>
            </div>

            <ProgressBar current={currentIndex} total={sessionVocab.length} className="mb-8" indicatorClassName="bg-orange-500" />

            <Flashcard
                frontContent={
                    <div className="flex flex-col items-center justify-center h-full relative w-full">
                        <button
                            onClick={(e) => { e.stopPropagation(); playAudio(currentVocab.word); }}
                            className="absolute top-0 right-0 opacity-50 hover:opacity-100 text-muted hover:text-orange-500 transition-all p-4 bg-background rounded-full shadow-sm border border-border/50 outline-none z-10 text-xl"
                            title="Listen"
                        >
                            🔊
                        </button>
                        <h1 className="text-7xl text-primary font-black mb-6 drop-shadow-md font-japanese"><FuriganaText>{currentVocab.word}</FuriganaText></h1>
                        <p className="text-xs text-orange-500 font-black uppercase tracking-widest bg-orange-500/10 px-4 py-2 rounded-xl border border-orange-500/20">{currentVocab.type}</p>
                    </div>
                }
                backContent={
                    <div className="flex flex-col items-center justify-center h-full w-full">
                        <p className="text-xs font-black text-muted uppercase tracking-wider mb-4 border-b-2 border-border/50 pb-2 w-1/2 mx-auto">Meaning</p>
                        <h2 className="text-4xl text-primary font-black mb-6 uppercase tracking-wide">{currentVocab.meaning}</h2>
                        <p className="text-3xl text-orange-500 font-black mb-4 font-japanese drop-shadow-sm">{currentVocab.reading}</p>
                    </div>
                }
                onNext={handleNextCard}
            />
        </div>
    );
};