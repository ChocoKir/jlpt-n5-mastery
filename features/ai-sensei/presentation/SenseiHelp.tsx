"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/shared/ui/Button';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { askSensei } from '../application/services/ai.service';

interface SenseiHelpProps {
    question: string;
    wrongAnswer: string;
    correctAnswer: string;
}

export const SenseiHelp = ({ question, wrongAnswer, correctAnswer }: SenseiHelpProps) => {
    const [explanation, setExplanation] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleAskSensei = async () => {
        setIsLoading(true);
        try {
            const response = await askSensei(question, wrongAnswer, correctAnswer);
            setExplanation(response);
        } catch (error) {
            setExplanation("Sensei's connection was interrupted. Please try again. 📡");
        }
        setIsLoading(false);
    };

    return (
        <div className="mt-6 w-full">
            <AnimatePresence mode="wait">
                {!explanation ? (
                    <motion.div key="ask-btn" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <Button
                            onClick={handleAskSensei}
                            isLoading={isLoading}
                            variant="secondary"
                            className="w-full bg-indigo-500/10 text-indigo-500 hover:bg-indigo-500/20 border-2 border-indigo-500/30 font-black py-5 shadow-sm"
                        >
                            <span className="flex items-center justify-center gap-3">
                                <span className="text-2xl drop-shadow-sm">🦉</span> Ask Sensei Why You Missed This
                            </span>
                        </Button>
                    </motion.div>
                ) : (
                    <motion.div key="explanation-card" initial={{ opacity: 0, y: 10, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
                        <SpotlightCard glowColor="rgba(99, 102, 241, 0.2)" className="p-6 bg-indigo-500/5 border-2 border-indigo-500/30 text-left relative group">
                            <h4 className="text-indigo-500 font-black text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                                <span className="text-2xl drop-shadow-sm">🦉</span> Sensei Says:
                            </h4>

                            <p className="text-primary font-bold m-0 leading-relaxed whitespace-pre-wrap text-sm sm:text-base">
                                {explanation}
                            </p>

                            <button
                                onClick={() => setExplanation(null)}
                                className="absolute top-4 right-4 text-muted hover:text-indigo-500 transition-colors opacity-0 group-hover:opacity-100 p-2 bg-background border border-border/50 rounded-xl shadow-sm outline-none"
                                title="Dismiss Explanation"
                            >
                                ✖
                            </button>
                        </SpotlightCard>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};