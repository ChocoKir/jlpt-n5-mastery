"use client";

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/shared/ui/Button';

interface FlashcardProps {
    frontContent: ReactNode;
    backContent: ReactNode;
    onNext: (knewIt: boolean) => void;
}

export const Flashcard = ({ frontContent, backContent, onNext }: FlashcardProps) => {
    const [isRevealed, setIsRevealed] = useState(false);

    // Reset flip state when a new card is loaded
    useEffect(() => {
        setIsRevealed(false);
    }, [frontContent]);

    return (
        <div className="w-full min-h-[400px] flex flex-col perspective-1000">
            {/* The 3D Flipping Container */}
            <motion.div
                className="flex-1 relative w-full mb-6 transform-style-3d transition-all duration-500"
                animate={{ rotateY: isRevealed ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                {/* FRONT OF CARD */}
                <div className="absolute inset-0 bg-card border-2 border-border rounded-3xl p-8 shadow-lg flex flex-col justify-center items-center text-center backface-hidden">
                    {frontContent}
                </div>

                {/* BACK OF CARD (Flipped 180 degrees) */}
                <div className="absolute inset-0 bg-card border-2 border-accent/50 rounded-3xl p-8 shadow-[0_0_30px_rgba(255,42,84,0.1)] flex flex-col justify-center items-center text-center backface-hidden rotate-y-180">
                    {backContent}
                </div>
            </motion.div>

            {/* Controls */}
            <div className="h-20">
                <AnimatePresence mode="wait">
                    {!isRevealed ? (
                        <motion.div key="reveal" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                            <Button onClick={() => setIsRevealed(true)} className="w-full py-6 text-xl shadow-lg border-none">
                                Reveal Answer 👀
                            </Button>
                        </motion.div>
                    ) : (
                        <motion.div key="grade" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="flex gap-4">
                            <Button
                                onClick={() => onNext(false)}
                                variant="secondary"
                                className="flex-1 py-6 text-lg border-red-500/50 text-red-500 hover:bg-red-500/10 hover:border-red-500"
                            >
                                ❌ Review Again
                            </Button>
                            <Button
                                onClick={() => onNext(true)}
                                className="flex-1 py-6 text-lg bg-green-500 hover:bg-green-600 text-white border-none shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                            >
                                ✅ Mastered
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};