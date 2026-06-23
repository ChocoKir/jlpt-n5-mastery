"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { CheckCircle2, XCircle, Flame, Keyboard, LogOut } from 'lucide-react';
import { useHotkeys } from 'react-hotkeys-hook';

import { QuizService } from '../../application/services/quiz.service';
import { Button } from '@/shared/ui/Button';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { AnimatedCounter } from '@/shared/ui/AnimatedCounter';
import { SenseiHelp } from '@/features/ai-sensei/presentation/SenseiHelp';
import { FuriganaText } from '@/shared/ui/FuriganaText';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';

export const VocabQuizRunner = () => {
    const engine = useQuizEngine();
    const searchParams = useSearchParams();

    const countParam = parseInt(searchParams?.get('count') || '10', 10);
    const focusParam = searchParams?.get('focus') || 'all';

    const [questions, setQuestions] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [streak, setStreak] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [shakeTrigger, setShakeTrigger] = useState(false);

    useEffect(() => {
        const quizData = QuizService.generateCustomVocabQuiz(countParam, focusParam, 'current_user');
        setQuestions(quizData);
        setIsLoading(false);
    }, [countParam, focusParam]);

    const currentQ = questions[currentIndex];

    // PRO-GAMER HOTKEYS
    useHotkeys('1', () => handleHotkeySelect(0), { enabled: !hasAnswered && !!currentQ }, [currentQ, hasAnswered]);
    useHotkeys('2', () => handleHotkeySelect(1), { enabled: !hasAnswered && !!currentQ }, [currentQ, hasAnswered]);
    useHotkeys('3', () => handleHotkeySelect(2), { enabled: !hasAnswered && !!currentQ }, [currentQ, hasAnswered]);
    useHotkeys('4', () => handleHotkeySelect(3), { enabled: !hasAnswered && !!currentQ }, [currentQ, hasAnswered]);
    useHotkeys('space, enter', (e) => {
        e.preventDefault();
        if (!hasAnswered && selectedOption) handleCheckAnswer();
        else if (hasAnswered) handleNext();
    }, { enableOnFormTags: false }, [selectedOption, hasAnswered, currentIndex]);

    const handleHotkeySelect = (index: number) => {
        if (currentQ && currentQ.options[index]) setSelectedOption(currentQ.options[index]);
    };

    const handleCheckAnswer = async () => {
        if (!selectedOption || hasAnswered) return;
        const isCorrect = selectedOption === currentQ.correctAnswer;
        setHasAnswered(true);

        if (isCorrect) {
            engine.recordCorrect();
            setStreak(prev => {
                const newStreak = prev + 1;
                if (newStreak % 5 === 0) {
                    toast.success(`UNSTOPPABLE! 🔥 ${newStreak} Question Streak!`, {
                        description: "+50 Streak Multiplier XP applied.",
                        icon: <Flame className="text-orange-500 animate-bounce" />
                    });
                }
                return newStreak;
            });
        } else {
            engine.recordWrong(currentQ);
            setStreak(0);
            setShakeTrigger(true);
            setTimeout(() => setShakeTrigger(false), 500);
            toast.error("Incorrect", { description: "Item schedule expedited for review." });
        }
    };

    const handleNext = () => {
        if (currentIndex + 1 >= questions.length) engine.finishSession();
        else {
            setHasAnswered(false);
            setSelectedOption(null);
            setCurrentIndex(prev => prev + 1);
        }
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }} className="text-4xl text-accent mb-4">🌸</motion.div>
                <h2 className="text-xl font-black text-primary animate-pulse tracking-widest uppercase text-sm">Synchronizing Dictionary...</h2>
            </div>
        );
    }

    if (engine.isFinished) {
        return <QuizSuccessScreen engine={engine} title="Trial Concluded" />;
    }

    return (
        <div className="max-w-3xl mx-auto py-10 px-5 relative z-10">
            <div className="flex justify-between items-center mb-6">
                <span className="bg-card border border-border/50 px-3 py-1.5 rounded-xl text-muted font-black text-xs uppercase tracking-widest shadow-sm backdrop-blur-md">
                    Vocab Trial • {currentIndex + 1} / {questions.length}
                </span>

                <span className="hidden sm:flex items-center gap-2 text-xs font-black text-muted opacity-60 bg-background px-3 py-1.5 rounded-xl border border-border/50">
                    <Keyboard size={14} /> Use 1-4 and Spacebar
                </span>

                <div className="flex items-center gap-4 font-black text-sm uppercase tracking-widest">
                    {streak >= 3 && <span className="text-orange-500 flex items-center gap-1 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)] animate-pulse">🔥 {streak} Streak</span>}
                    <span className="text-accent drop-shadow-[0_0_8px_rgba(255,42,84,0.3)]">Score: <AnimatedCounter value={engine.score} /></span>
                    <button onClick={engine.exitEarly} className="text-muted hover:text-red-500 transition-colors bg-card p-2 rounded-xl border border-border/50">
                        <LogOut size={20} />
                    </button>
                </div>
            </div>

            <motion.div animate={shakeTrigger ? { x: [-10, 10, -10, 10, -5, 5, 0], rotate: [-1, 1, -1, 1, 0] } : {}} transition={{ duration: 0.4 }}>
                <SpotlightCard className="p-8 mb-6 bg-card/40 backdrop-blur-xl border-border/50 shadow-2xl relative text-center" glowColor="rgba(255, 255, 255, 0.05)">
                    <span className="text-xs font-black text-muted uppercase tracking-widest bg-background border border-border/50 px-3 py-1 rounded-full shadow-inner">Target Character</span>
                    <h1 className="text-5xl md:text-6xl font-black text-primary tracking-tight mt-6 mb-2 font-japanese">{currentQ.word}</h1>
                    <p className="text-xl font-bold text-muted tracking-wide">{currentQ.reading}</p>
                </SpotlightCard>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {currentQ.options.map((option: string, idx: number) => {
                    const isSelected = selectedOption === option;
                    const isCorrectChoice = option === currentQ.correctAnswer;

                    let cardStyle = "border-border/50 bg-card/40 hover:border-primary/30";
                    if (isSelected && !hasAnswered) cardStyle = "border-accent bg-accent/5 text-accent shadow-[0_0_20px_rgba(255,42,84,0.15)] scale-[1.02]";
                    if (hasAnswered && isCorrectChoice) cardStyle = "border-green-500 bg-green-500/10 text-green-500 shadow-[0_0_20px_rgba(16,185,129,0.15)] font-black";
                    if (hasAnswered && isSelected && !isCorrectChoice) cardStyle = "border-red-500 bg-red-500/10 text-red-500";

                    return (
                        <button key={idx} onClick={() => setSelectedOption(option)} disabled={hasAnswered} className={`p-5 rounded-2xl border-2 text-left transition-all duration-200 outline-none flex items-center justify-between group cursor-pointer disabled:cursor-not-allowed backdrop-blur-md ${cardStyle}`}>
                            <span className="text-lg font-bold"><FuriganaText>{option}</FuriganaText></span>
                            <div className="shrink-0 ml-3">
                                {hasAnswered && isCorrectChoice && <CheckCircle2 size={20} className="text-green-500" />}
                                {hasAnswered && isSelected && !isCorrectChoice && <XCircle size={20} className="text-red-500" />}
                                {!hasAnswered && <span className={`w-6 h-6 rounded-md border-2 flex items-center justify-center text-xs font-black transition-colors ${isSelected ? 'border-accent text-accent' : 'border-border/50 text-muted group-hover:border-accent/50'}`}>{idx + 1}</span>}
                            </div>
                        </button>
                    );
                })}
            </div>

            <AnimatePresence mode="wait">
                {!hasAnswered ? (
                    <motion.div key="check-btn" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                        <Button onClick={handleCheckAnswer} disabled={!selectedOption} className="w-full py-5 text-xl font-black shadow-[0_0_30px_rgba(255,42,84,0.2)]">Confirm Analysis (Space) 🎯</Button>
                    </motion.div>
                ) : (
                    <motion.div key="next-panel" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                        <div className={`p-6 rounded-2xl border-2 backdrop-blur-md ${selectedOption === currentQ.correctAnswer ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
                            <div className="flex items-center gap-2 font-black text-lg mb-2">
                                {selectedOption === currentQ.correctAnswer ? <span className="text-green-500 flex items-center gap-1.5"><CheckCircle2 size={18}/> Matrix Match Verified</span> : <span className="text-red-500 flex items-center gap-1.5"><XCircle size={18}/> Sequence Divergence</span>}
                            </div>
                            <p className="text-sm font-bold text-muted whitespace-pre-line leading-relaxed">{currentQ.explanation}</p>
                        </div>

                        <Button onClick={handleNext} className="w-full py-5 text-xl font-black">{currentIndex + 1 === questions.length ? 'Finalize Report 🏆' : 'Next Engagement (Space) ➡️'}</Button>

                        {selectedOption !== currentQ.correctAnswer && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                <SenseiHelp question={`Explain the Japanese vocabulary word "${currentQ.word}" (${currentQ.reading}). Why does it mean "${currentQ.correctAnswer}"?`} wrongAnswer={selectedOption || ''} correctAnswer={currentQ.correctAnswer} />
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};