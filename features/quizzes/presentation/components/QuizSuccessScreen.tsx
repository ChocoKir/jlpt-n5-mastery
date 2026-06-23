"use client";

import React from 'react';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';

// This accepts the engine we just built as a prop
export const QuizSuccessScreen = ({ engine, title = "Session Complete" }: { engine: any, title?: string }) => {
    return (
        <div className="max-w-xl mx-auto my-10 px-5 text-center relative z-10 animate-in fade-in duration-500">
            <SpotlightCard className="p-8 md:p-12 border-t-8 border-accent bg-card/80 backdrop-blur-xl" glowColor="rgba(255, 42, 84, 0.2)">
                <div className="text-6xl mb-4 drop-shadow-md">🎉</div>
                <h2 className="text-3xl font-black text-primary mb-2">{title}</h2>
                <h1 className="text-6xl text-accent font-black my-4">
                    {engine.score} <span className="text-2xl text-muted">/ {engine.attempted}</span>
                </h1>

                {engine.missedItems.length > 0 ? (
                    <div className="mt-8 text-left bg-background/50 border border-border/50 rounded-2xl p-6">
                        <h3 className="text-sm font-black text-red-500 mb-4 uppercase tracking-widest flex items-center gap-2">
                            <span>❌</span> Areas for Review
                        </h3>
                        <div className="space-y-3 max-h-60 overflow-y-auto hide-scrollbar pr-2">
                            {engine.missedItems.map((item: any, idx: number) => (
                                <div key={idx} className="bg-card p-4 rounded-xl border border-border shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                    <div>
                                        <span className="font-japanese text-xl font-black text-primary mr-2">{item.word || item.question}</span>
                                        {item.reading && <span className="font-japanese text-sm font-bold text-muted">{item.reading}</span>}
                                    </div>
                                    <span className="text-sm font-bold text-accent bg-accent/10 px-3 py-1 rounded-lg text-right">
                                        {item.actualMeaning || item.correctAnswer}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="mt-8 bg-green-500/10 border border-green-500/30 rounded-2xl p-6 text-green-500 font-black uppercase tracking-widest">
                        Flawless Victory! 🌸
                    </div>
                )}

                <div className="flex gap-4 mt-8">
                    <Button variant="secondary" onClick={() => engine.router.push('/study')} className="flex-1 py-4 font-black">
                        Exit Dojo
                    </Button>
                    <Button onClick={() => window.location.reload()} className="flex-1 py-4 font-black shadow-lg">
                        Go Again 🔄
                    </Button>
                </div>
            </SpotlightCard>
        </div>
    );
};