"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { playCorrectSound, playWrongSound, playLevelUpFanfare } from '@/shared/lib/audio/audio-service';
import { fireLevelUpConfetti } from '@/shared/lib/effects/particles';
import { GamificationService } from '@/features/gamification/application/services/gamification.service';

// 🛠️ FIX: Import the single source of truth for Grammar
import { N5_GRAMMAR } from '@/shared/data/grammar';

interface ScrambleLevel {
    id: string;
    english: string;
    target: string;
    pieces: string[];
}

export const GrammarScramble = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [scrambleData, setScrambleData] = useState<ScrambleLevel[]>([]);
    const [currentLevel, setCurrentLevel] = useState(0);
    const [availablePieces, setAvailablePieces] = useState<string[]>([]);
    const [selectedPieces, setSelectedPieces] = useState<string[]>([]);
    const [mistakes, setMistakes] = useState(0);
    const [gameComplete, setGameComplete] = useState(false);

    // Dynamically generates 5 random levels from your Grammar DB
    const generateDynamicLevels = (): ScrambleLevel[] => {
        // Filter out any grammar points that don't have example sentences
        const validGrammar = N5_GRAMMAR.filter(g => g.examples && g.examples.length > 0);
        const shuffled = [...validGrammar].sort(() => 0.5 - Math.random()).slice(0, 5);

        return shuffled.map(g => {
            const example = g.examples[0];
            const rawJapanese = example.japanese;

            // If the sentence has spaces (common in N5), split by space.
            // If no spaces, fallback to splitting into 2-character chunks.
            const pieces = rawJapanese.includes(' ')
                ? rawJapanese.split(' ')
                : rawJapanese.match(/.{1,2}/g) || [rawJapanese];

            return {
                id: g.id,
                english: example.english,
                target: rawJapanese.replace(/\s+/g, ''), // Strip spaces for strict comparison
                pieces: pieces
            };
        });
    };

    const loadLevel = (levelIndex: number, levels: ScrambleLevel[]) => {
        const levelData = levels[levelIndex];
        setAvailablePieces([...levelData.pieces].sort(() => 0.5 - Math.random()));
        setSelectedPieces([]);
    };

    const startGame = () => {
        const newLevels = generateDynamicLevels();
        setScrambleData(newLevels);
        setIsPlaying(true);
        setCurrentLevel(0);
        setMistakes(0);
        setGameComplete(false);
        loadLevel(0, newLevels);
    };

    const handleSelectPiece = (piece: string, index: number) => {
        const newAvailable = [...availablePieces];
        newAvailable.splice(index, 1);
        setAvailablePieces(newAvailable);
        setSelectedPieces([...selectedPieces, piece]);
    };

    const handleDeselectPiece = (piece: string, index: number) => {
        const newSelected = [...selectedPieces];
        newSelected.splice(index, 1);
        setSelectedPieces(newSelected);
        setAvailablePieces([...availablePieces, piece]);
    };

    const checkAnswer = () => {
        const currentData = scrambleData[currentLevel];
        const userAnswer = selectedPieces.join(''); // Join without spaces for comparison

        if (userAnswer === currentData.target) {
            playCorrectSound();

            if (currentLevel + 1 < scrambleData.length) {
                setTimeout(() => {
                    setCurrentLevel(prev => prev + 1);
                    loadLevel(currentLevel + 1, scrambleData);
                }, 1000);
            } else {
                setTimeout(() => handleWin(), 500);
            }
        } else {
            playWrongSound();
            setMistakes(prev => prev + 1);

            const el = document.getElementById('answer-board');
            if (el) {
                el.classList.add('animate-shake');
                setTimeout(() => el.classList.remove('animate-shake'), 500);
            }
        }
    };

    const handleWin = () => {
        playLevelUpFanfare();
        fireLevelUpConfetti();
        const earnedXP = Math.max(10, 50 - (mistakes * 5));
        void GamificationService.awardXP(earnedXP, 1);
        setGameComplete(true);
    };

    return (
        <div className="max-w-3xl mx-auto py-10 px-5 relative z-10 text-center">
            <div className="mb-10">
                <h1 className="text-4xl font-black text-blue-500 mb-3 tracking-tight">Syntax Scramble 🧩</h1>
                <p className="text-lg text-muted font-bold uppercase tracking-widest text-xs">Reconstruct the sentences to master Japanese grammar.</p>
            </div>

            {!isPlaying && !gameComplete ? (
                <SpotlightCard className="p-12 border-t-8 border-blue-500 shadow-2xl bg-card/80">
                    <div className="text-6xl mb-6 drop-shadow-md">🧱</div>
                    <h2 className="text-3xl font-black text-primary mb-4">Sentence Builder</h2>
                    <p className="text-muted font-bold mb-8">Click the floating Japanese blocks in the correct order to match the English meaning. Perfect syntax yields maximum XP!</p>
                    <Button onClick={startGame} className="w-full py-6 text-xl font-black bg-blue-500 hover:bg-blue-600 border-blue-600 shadow-[0_0_20px_rgba(59,130,246,0.3)] text-white">
                        Start Challenge
                    </Button>
                </SpotlightCard>
            ) : gameComplete ? (
                <SpotlightCard className="p-12 border-t-8 border-accent shadow-2xl bg-card/80">
                    <div className="text-6xl mb-6 drop-shadow-md">🏆</div>
                    <h2 className="text-3xl font-black text-primary mb-2">Challenge Cleared!</h2>
                    <h1 className="text-5xl font-black text-accent my-6">Master Builder</h1>
                    <p className="text-muted font-bold mb-8 uppercase tracking-widest text-sm">XP added to your profile. (Mistakes: {mistakes})</p>
                    <Button onClick={startGame} className="w-full py-6 text-xl font-black text-white">
                        Play Again 🔄
                    </Button>
                </SpotlightCard>
            ) : (
                <div className="space-y-6">
                    <div className="flex justify-between items-center bg-card/60 backdrop-blur-md p-4 rounded-2xl border-2 border-border/50 shadow-sm">
                        <div className="text-left">
                            <span className="text-[10px] font-black text-muted uppercase tracking-widest block">Level</span>
                            <span className="text-3xl font-black text-blue-500 leading-none">{currentLevel + 1} / {scrambleData.length}</span>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-black text-muted uppercase tracking-widest block">Mistakes</span>
                            <span className="text-3xl font-black text-rose-500 leading-none">{mistakes}</span>
                        </div>
                    </div>

                    <SpotlightCard glowColor="rgba(59, 130, 246, 0.15)" className="p-8 border-4 border-blue-500/30 bg-blue-500/5">
                        <p className="text-xs font-black text-blue-500 uppercase tracking-widest mb-2">Target Meaning</p>
                        <h2 className="text-3xl sm:text-4xl font-black text-primary tracking-tight drop-shadow-md">{scrambleData[currentLevel]?.english}</h2>
                    </SpotlightCard>

                    <div id="answer-board" className="min-h-[100px] p-4 bg-background/50 border-2 border-dashed border-border/80 rounded-2xl flex flex-wrap items-center justify-center gap-3">
                        {selectedPieces.length === 0 && (
                            <span className="text-muted font-bold text-sm uppercase tracking-widest">Construct sentence here</span>
                        )}
                        <AnimatePresence>
                            {selectedPieces.map((piece, idx) => (
                                <motion.button
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    key={`sel_${idx}_${piece}`}
                                    onClick={() => handleDeselectPiece(piece, idx)}
                                    className="px-6 py-4 bg-blue-500 text-white rounded-xl font-black text-2xl shadow-md border-b-4 border-blue-700 outline-none font-japanese"
                                >
                                    {piece}
                                </motion.button>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="min-h-[100px] p-4 flex flex-wrap items-center justify-center gap-3">
                        <AnimatePresence>
                            {availablePieces.map((piece, idx) => (
                                <motion.button
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    key={`avail_${idx}_${piece}`}
                                    onClick={() => handleSelectPiece(piece, idx)}
                                    className="px-6 py-4 bg-card/80 text-primary border-2 border-border/50 rounded-xl font-black text-2xl shadow-sm hover:border-blue-500 hover:text-blue-500 transition-colors outline-none font-japanese"
                                >
                                    {piece}
                                </motion.button>
                            ))}
                        </AnimatePresence>
                    </div>

                    <Button
                        onClick={checkAnswer}
                        disabled={selectedPieces.length !== scrambleData[currentLevel]?.pieces.length}
                        className="w-full py-6 text-xl font-black shadow-lg text-white bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
                    >
                        Check Syntax ✅
                    </Button>
                </div>
            )}
        </div>
    );
};