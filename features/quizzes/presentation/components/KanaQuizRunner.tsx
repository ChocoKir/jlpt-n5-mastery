"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { ArrowRight, Keyboard, LogOut } from 'lucide-react';

import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { AnimatedCounter } from '@/shared/ui/AnimatedCounter';
import { HIRAGANA } from '@/shared/data/kana';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';

export const KanaQuizRunner = () => {
    const engine = useQuizEngine();

    const [questions, setQuestions] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [inputAnswer, setInputAnswer] = useState('');
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [shakeTrigger, setShakeTrigger] = useState(false);

    useEffect(() => {
        const FULL_KANA_POOL = [...HIRAGANA];
        const shuffled = [...FULL_KANA_POOL].sort(() => 0.5 - Math.random()).slice(0, 10);
        setQuestions(shuffled);
    }, []);

    const currentQ = questions[currentIndex];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputAnswer.trim() || hasAnswered) return;

        const correct = inputAnswer.trim().toLowerCase() === currentQ.romaji.toLowerCase();
        setHasAnswered(true);
        setIsCorrect(correct);

        if (correct) {
            engine.recordCorrect();
            toast.success("Matrix Match Confirmed!");
        } else {
            engine.recordWrong({ question: currentQ.character, correctAnswer: currentQ.romaji });
            setShakeTrigger(true);
            setTimeout(() => setShakeTrigger(false), 400);
            toast.error(`Incorrect. Proper link: ${currentQ.romaji}`);
        }
    };

    const handleNext = () => {
        if (currentIndex + 1 >= questions.length) {
            engine.finishSession();
        } else {
            setHasAnswered(false);
            setInputAnswer('');
            setCurrentIndex(prev => prev + 1);
        }
    };

    if (questions.length === 0) return null;

    if (engine.isFinished) {
        return <QuizSuccessScreen engine={engine} title="Kana Decryption Complete" />;
    }

    return (
        <div className="max-w-xl mx-auto py-10 px-5 relative z-10">
            <div className="flex justify-between items-center mb-6">
                <span className="bg-card border border-border/50 px-3 py-1.5 rounded-xl text-muted font-black text-xs uppercase tracking-widest shadow-sm">
                    Rapid Kana • {currentIndex + 1} / {questions.length}
                </span>
                <div className="flex items-center gap-4">
                    <span className="text-sky-500 font-black tracking-widest uppercase text-sm">
                        Score: <AnimatedCounter value={engine.score} />
                    </span>
                    <button onClick={engine.exitEarly} className="text-muted hover:text-red-500 transition-colors">
                        <LogOut size={20} />
                    </button>
                </div>
            </div>

            <motion.div animate={shakeTrigger ? { x: [-10, 10, -10, 10, 0] } : {}}>
                <SpotlightCard className="p-10 text-center mb-6 bg-card/40 backdrop-blur-xl border-border/50 shadow-2xl" glowColor="rgba(14, 165, 233, 0.15)">
                    <span className="text-xs font-black text-muted uppercase tracking-widest bg-background border border-border/50 px-3 py-1 rounded-full shadow-inner">Decode Character</span>
                    <h1 className="text-7xl font-black text-primary font-japanese mt-8 mb-4">
                        {currentQ.character}
                    </h1>
                </SpotlightCard>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative flex items-center bg-card/40 backdrop-blur-md border-2 border-border/50 focus-within:border-sky-500 rounded-2xl px-4 transition-colors shadow-lg">
                    <Keyboard className="text-muted mr-3" size={22} />
                    <input
                        type="text"
                        value={inputAnswer}
                        onChange={(e) => setInputAnswer(e.target.value)}
                        disabled={hasAnswered}
                        placeholder="Type Romaji mapping (e.g. 'ka')"
                        className="w-full py-5 bg-transparent text-xl font-black text-primary outline-none placeholder:text-muted/50"
                        autoFocus
                    />
                    {!hasAnswered && (
                        <button type="submit" disabled={!inputAnswer.trim()} className="absolute right-3 p-3 bg-sky-500 text-white rounded-xl disabled:opacity-30 transition-opacity">
                            <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                    )}
                </div>

                <AnimatePresence>
                    {hasAnswered && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className={`p-5 rounded-2xl border-2 backdrop-blur-md ${isCorrect ? 'border-green-500/30 bg-green-500/5 text-green-500' : 'border-red-500/30 bg-red-500/5 text-red-500'}`}>
                            <h4 className="font-black text-lg flex items-center gap-2">
                                {isCorrect ? '✅ Decryption Link Synced' : `❌ Structural Mismatch. Target link was: ${currentQ.romaji}`}
                            </h4>
                            <Button onClick={handleNext} className="w-full mt-4 py-4 font-black bg-primary text-primary-foreground border-none shadow-md">
                                Next Transmission ➡️
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
};