"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_KANA } from '@/shared/data/kana';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { playCorrectSound, playWrongSound, playLevelUpFanfare } from '@/shared/lib/audio/audio-service';
import { fireLevelUpConfetti } from '@/shared/lib/effects/particles';
import { GamificationService } from '@/features/gamification/application/services/gamification.service';

export const KanaSpeedMatch = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);
    const [options, setOptions] = useState<typeof ALL_KANA>([]);
    const [target, setTarget] = useState<typeof ALL_KANA[0] | null>(null);

    // Game Timer Logic
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isPlaying && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0 && isPlaying) {
            setIsPlaying(false);
            endGame();
        }
        return () => clearInterval(timer);
    }, [isPlaying, timeLeft]);

    const generateRound = () => {
        // Pick 9 random unique kana
        const shuffled = [...ALL_KANA].sort(() => 0.5 - Math.random()).slice(0, 9);
        setOptions(shuffled);
        // Pick one of those 9 as the target
        const newTarget = shuffled[Math.floor(Math.random() * 9)];
        setTarget(newTarget);
    };

    const startGame = () => {
        setScore(0);
        setTimeLeft(30);
        setIsPlaying(true);
        generateRound();
    };

    const endGame = () => {
        playLevelUpFanfare();
        fireLevelUpConfetti();
        // Award XP based on speed score!
        void GamificationService.awardXP(score, 1);
    };

    const handleGuess = (guess: typeof ALL_KANA[0]) => {
        if (!target) return;
        if (guess.id === target.id) {
            playCorrectSound();
            setScore(prev => prev + 10);
            generateRound();
        } else {
            playWrongSound();
            setScore(prev => Math.max(0, prev - 5)); // Penalty for wrong guess!

            // Add a little time penalty shake effect (Optional UI flourish)
            const el = document.getElementById('timer-bar');
            if (el) {
                el.classList.add('animate-shake');
                setTimeout(() => el.classList.remove('animate-shake'), 500);
            }
        }
    };

    return (
        <div className="max-w-2xl mx-auto py-10 px-5 relative z-10 text-center">
            <div className="mb-10">
                <h1 className="text-4xl font-black text-rose-500 mb-3 tracking-tight">Kana Speed Match ⚡</h1>
                <p className="text-lg text-muted font-bold uppercase tracking-widest text-xs">Test your reaction time. Match the Romaji to the Kana.</p>
            </div>

            {!isPlaying && timeLeft === 30 ? (
                <SpotlightCard className="p-12 border-t-8 border-rose-500 shadow-2xl bg-card/80">
                    <div className="text-6xl mb-6 drop-shadow-md">⏱️</div>
                    <h2 className="text-3xl font-black text-primary mb-4">Ready your reflexes.</h2>
                    <p className="text-muted font-bold mb-8">You have 30 seconds to match as many Kana as possible. Wrong answers deduct points!</p>
                    <Button onClick={startGame} className="w-full py-6 text-xl font-black bg-rose-500 hover:bg-rose-600 border-rose-600 shadow-[0_0_20px_rgba(244,63,94,0.3)]">
                        Start Game
                    </Button>
                </SpotlightCard>
            ) : !isPlaying && timeLeft === 0 ? (
                <SpotlightCard className="p-12 border-t-8 border-accent shadow-2xl bg-card/80">
                    <div className="text-6xl mb-6 drop-shadow-md">🏆</div>
                    <h2 className="text-3xl font-black text-primary mb-2">Time's Up!</h2>
                    <h1 className="text-7xl font-black text-accent my-6">{score} <span className="text-2xl text-muted">PTS</span></h1>
                    <p className="text-muted font-bold mb-8 uppercase tracking-widest text-sm">XP added to your profile.</p>
                    <Button onClick={startGame} className="w-full py-6 text-xl font-black">
                        Play Again 🔄
                    </Button>
                </SpotlightCard>
            ) : (
                <div className="space-y-6">
                    {/* The HUD */}
                    <div className="flex justify-between items-center bg-card/60 backdrop-blur-md p-4 rounded-2xl border-2 border-border/50 shadow-sm">
                        <div className="text-left">
                            <span className="text-[10px] font-black text-muted uppercase tracking-widest block">Score</span>
                            <span className="text-3xl font-black text-rose-500 leading-none">{score}</span>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-black text-muted uppercase tracking-widest block">Time Left</span>
                            <span id="timer-bar" className={`text-3xl font-black leading-none ${timeLeft <= 5 ? 'text-red-500 animate-pulse' : 'text-primary'}`}>
                                00:{timeLeft.toString().padStart(2, '0')}
                            </span>
                        </div>
                    </div>

                    {/* The Prompt */}
                    <SpotlightCard glowColor="rgba(244, 63, 94, 0.15)" className="p-8 border-4 border-rose-500/30 bg-rose-500/5">
                        <p className="text-xs font-black text-rose-500 uppercase tracking-widest mb-2">Find This Character</p>
                        <h2 className="text-8xl font-black text-primary uppercase tracking-widest drop-shadow-md">{target?.romaji}</h2>
                    </SpotlightCard>

                    {/* The Grid */}
                    <div className="grid grid-cols-3 gap-4">
                        <AnimatePresence mode="popLayout">
                            {options.map((kana) => (
                                <motion.div
                                    key={kana.id}
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button
                                        onClick={() => handleGuess(kana)}
                                        className="w-full aspect-square bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-3xl shadow-sm hover:border-rose-500 hover:bg-rose-500/10 transition-colors flex items-center justify-center outline-none"
                                    >
                                        <span className="text-5xl sm:text-6xl font-black text-primary font-japanese drop-shadow-sm">
                                            {kana.character}
                                        </span>
                                    </button>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            )}
        </div>
    );
};