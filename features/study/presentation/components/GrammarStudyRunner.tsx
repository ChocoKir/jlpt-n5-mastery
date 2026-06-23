"use client";

import React, { useState } from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { N5_GRAMMAR } from '@/shared/data/grammar';
import { Flashcard } from '@/shared/ui/Flashcard';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { ProgressBar } from '@/shared/ui/ProgressBar';

export const GrammarStudyRunner = () => {
    const router = useTransitionRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [finished, setFinished] = useState(false);
    const [stats, setStats] = useState({ known: 0, learning: 0 });

    const currentGrammar = N5_GRAMMAR[currentIndex];

    const handleNextCard = (knewIt: boolean) => {
        setStats(prev => ({
            known: knewIt ? prev.known + 1 : prev.known,
            learning: !knewIt ? prev.learning + 1 : prev.learning
        }));

        if (currentGrammar) {
            // Fire and forget the DB update so the UI doesn't lag
        }

        if (currentIndex + 1 < N5_GRAMMAR.length) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setFinished(true);
        }
    };

    if (finished) {
        return (
            <div className="max-w-[500px] my-20 mx-auto px-5 text-center relative z-10">
                <SpotlightCard glowColor="rgba(16, 185, 129, 0.15)" className="p-10 border-t-8 border-green-500 shadow-2xl">
                    <div className="text-6xl mb-6 drop-shadow-md">🎉</div>
                    <h2 className="text-3xl text-primary font-black tracking-tight">Great Session!</h2>
                    <p className="text-muted font-bold my-4 uppercase tracking-widest text-sm">Reviewed {N5_GRAMMAR.length} Grammar Rules</p>

                    <div className="flex justify-center gap-6 my-8 p-6 bg-background/50 rounded-2xl border border-border/50">
                        <div className="text-xl font-black text-green-500 flex flex-col">
                            <span>✅ Got it</span>
                            <span className="text-3xl">{stats.known}</span>
                        </div>
                        <div className="w-px bg-border/50"></div>
                        <div className="text-xl font-black text-red-500 flex flex-col">
                            <span>❌ Practice</span>
                            <span className="text-3xl">{stats.learning}</span>
                        </div>
                    </div>
                    <Button onClick={() => router.push('/dashboard')} className="w-full py-6 text-lg shadow-lg">Return to Base</Button>
                </SpotlightCard>
            </div>
        );
    }

    if (!currentGrammar) return null;

    const explanationText = `📝 Formula: ${currentGrammar.formation}\n\n${currentGrammar.meaning}\n\n🗣️ Example:\n${currentGrammar.examples[0]?.japanese}\n"${currentGrammar.examples[0]?.english}"`;

    return (
        <div className="max-w-[600px] my-10 mx-auto px-5 relative z-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-black text-primary tracking-tight">Grammar Drills</h1>
                <span className="text-muted font-black text-xs uppercase tracking-widest bg-card border border-border/50 px-3 py-1.5 rounded-xl">
                    {currentIndex + 1} / {N5_GRAMMAR.length}
                </span>
            </div>

            <ProgressBar current={currentIndex} total={N5_GRAMMAR.length} className="mb-8" />

            <Flashcard
                frontContent={
                    <div className="flex flex-col items-center justify-center h-full px-4">
                        <h2 className="text-5xl sm:text-6xl text-primary font-black mb-6 font-japanese drop-shadow-sm">{currentGrammar.grammar}</h2>
                        <p className="text-sm text-blue-500 font-black uppercase tracking-widest bg-blue-500/10 px-4 py-2 rounded-xl border border-blue-500/20">{currentGrammar.category}</p>
                    </div>
                }
                backContent={
                    <div className="flex flex-col items-start justify-center h-full text-left w-full px-4 sm:px-8">
                        <h2 className="text-3xl text-primary font-black mb-6 border-b-2 border-border/50 pb-4 w-full font-japanese">{currentGrammar.grammar}</h2>
                        <p className="text-lg whitespace-pre-wrap text-muted font-bold leading-relaxed">{explanationText}</p>
                    </div>
                }
                onNext={handleNextCard}
            />
        </div>
    );
};