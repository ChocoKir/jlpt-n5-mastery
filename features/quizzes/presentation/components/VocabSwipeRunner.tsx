"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { Button } from '@/shared/ui/Button';
import { N5_VOCAB } from '@/shared/data/vocab';
import { LogOut } from 'lucide-react';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';

const SWIPE_THRESHOLD = 120;

export const VocabSwipeRunner = () => {
    const engine = useQuizEngine();
    const [cards, setCards] = useState<any[]>([]);
    const [totalCards, setTotalCards] = useState(0);

    useEffect(() => {
        const generateSwipeDeck = (count = 10) => {
            const deck = [];
            const shuffledVocab = [...N5_VOCAB].sort(() => 0.5 - Math.random());

            for (let i = 0; i < count; i++) {
                const target = shuffledVocab[i];
                const isMatch = Math.random() > 0.5;

                let proposedMeaning = target.meaning;
                if (!isMatch) {
                    const wrongWord = shuffledVocab[Math.floor(Math.random() * shuffledVocab.length)];
                    proposedMeaning = wrongWord.meaning;
                }

                deck.push({
                    id: `swipe_${i}_${target.id}`,
                    word: target.word,
                    reading: target.reading,
                    proposedMeaning,
                    actualMeaning: target.meaning,
                    isMatch
                });
            }
            setCards(deck);
            setTotalCards(deck.length);
        };
        generateSwipeDeck(10);
    }, []);

    const x = useMotionValue(0);
    const rotate = useTransform(x, [-200, 200], [-15, 15]);
    const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);
    const backgroundColor = useTransform(x, [-150, 0, 150], ["rgba(239, 68, 68, 0.2)", "rgba(0,0,0,0)", "rgba(16, 185, 129, 0.2)"]);
    const nopeOpacity = useTransform(x, [-100, -50, 0], [1, 0, 0]);
    const matchOpacity = useTransform(x, [0, 50, 100], [0, 0, 1]);

    // 🛠️ FIX: Replaced 'event' with '_' to silence the unused variable warning
    const handleDragEnd = (_: any, info: any) => {
        const offset = info.offset.x;
        const currentCard = cards[0];

        if (Math.abs(offset) > SWIPE_THRESHOLD) {
            const userGuessedMatch = offset > 0;

            if (userGuessedMatch === currentCard.isMatch) {
                engine.recordCorrect();
            } else {
                engine.recordWrong(currentCard);
            }

            setCards(prev => prev.slice(1));
            x.set(0);

            if (cards.length === 1) {
                // 🛠️ FIX: Added 'void' to the floating promise
                void engine.finishSession();
            }
        }
    };

    if (cards.length === 0 && !engine.isFinished) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-primary">
                <motion.div animate={{ rotateY: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} className="text-6xl mb-4">🎴</motion.div>
                <h2 className="text-2xl font-black animate-pulse uppercase tracking-widest text-sm">Shuffling Deck...</h2>
            </div>
        );
    }

    if (engine.isFinished) return <QuizSuccessScreen engine={engine} title="Deck Cleared!" />;

    return (
        <div className="max-w-md mx-auto my-10 px-5 overflow-hidden relative z-10">
            <div className="flex justify-between items-start mb-10">
                <div className="text-left">
                    <h1 className="text-3xl font-black text-primary tracking-tight">Rapid Swipe</h1>
                    <p className="text-muted font-bold uppercase tracking-widest text-[10px] mt-1">Swipe Right if correct, Left if wrong.</p>
                </div>
                <button onClick={engine.exitEarly} className="p-3 bg-card border border-border/50 rounded-xl text-muted hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 transition-colors">
                    <LogOut size={20} />
                </button>
            </div>

            <div className="relative w-full aspect-[3/4] flex items-center justify-center perspective-1000">
                <AnimatePresence>
                    {cards.map((card, index) => {
                        const isTop = index === 0;

                        return (
                            <motion.div
                                key={card.id}
                                style={{ x: isTop ? x : 0, rotate: isTop ? rotate : 0, opacity: isTop ? opacity : 1, zIndex: cards.length - index, scale: isTop ? 1 : 1 - index * 0.05, y: isTop ? 0 : index * 15, }}
                                drag={isTop ? "x" : false} dragConstraints={{ left: 0, right: 0 }} dragElastic={0.7} onDragEnd={isTop ? handleDragEnd : undefined} className="absolute inset-0 w-full h-full flex items-center justify-center touch-none cursor-grab active:cursor-grabbing"
                            >
                                <motion.div style={{ backgroundColor: isTop ? backgroundColor : undefined }} className="w-full h-full bg-card/60 backdrop-blur-xl border-2 border-border/50 rounded-3xl shadow-2xl flex flex-col justify-between p-8 overflow-hidden relative">
                                    {isTop && (
                                        <>
                                            <motion.div style={{ opacity: matchOpacity }} className="absolute top-8 left-8 border-4 border-green-500 text-green-500 bg-green-500/10 rounded-xl px-4 py-2 font-black text-2xl uppercase tracking-widest rotate-[-15deg] backdrop-blur-sm z-20">Match</motion.div>
                                            <motion.div style={{ opacity: nopeOpacity }} className="absolute top-8 right-8 border-4 border-red-500 text-red-500 bg-red-500/10 rounded-xl px-4 py-2 font-black text-2xl uppercase tracking-widest rotate-[15deg] backdrop-blur-sm z-20">Trap</motion.div>
                                        </>
                                    )}

                                    <div className={`flex-1 flex flex-col items-center justify-center text-center mt-12 transition-opacity duration-300 ${isTop ? 'opacity-100' : 'opacity-0'}`}>
                                        <p className="text-[10px] font-black text-muted uppercase tracking-widest mb-4">Does this mean...</p>
                                        <h2 className="text-7xl sm:text-8xl font-black text-primary mb-2 font-japanese drop-shadow-sm">{card.word}</h2>
                                        <p className="text-xl sm:text-2xl font-bold text-accent mb-8 font-japanese">{card.reading}</p>
                                        <div className="w-16 h-1 bg-border/50 rounded-full mb-8"></div>
                                        <h3 className="text-2xl sm:text-3xl font-black text-primary uppercase tracking-wide leading-tight">{card.proposedMeaning} ?</h3>
                                    </div>

                                    <div className={`text-center text-muted font-bold text-[10px] uppercase tracking-widest transition-opacity duration-300 ${isTop ? 'opacity-100' : 'opacity-0'}`}>
                                        Card {totalCards - cards.length + 1} of {totalCards}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            <div className="flex gap-4 mt-8">
                <Button variant="secondary" onClick={() => handleDragEnd(null, { offset: { x: -200 } })} className="flex-1 py-5 text-xl font-black bg-red-500/10 text-red-500 border-red-500/30 hover:bg-red-500 hover:text-white transition-colors">
                    ❌ Trap
                </Button>
                <Button onClick={() => handleDragEnd(null, { offset: { x: 200 } })} className="flex-1 py-5 text-xl font-black bg-green-500 hover:bg-green-600 text-white border-green-600 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    Match ✅
                </Button>
            </div>
        </div>
    );
};