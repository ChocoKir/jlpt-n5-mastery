"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut } from 'lucide-react';

import { QuizService } from '@/features/quizzes/application/services/quiz.service';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { SenseiHelp } from '@/features/ai-sensei/presentation/SenseiHelp';
import { KanjiDrawPad } from './KanjiDrawPad';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';

export const KanjiQuizRunner = () => {
    const engine = useQuizEngine();
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const [hasDrawn, setHasDrawn] = useState(false);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            const generated = await QuizService.generateKanjiQuiz(5);
            setQuestions(generated);
            setIsLoading(false);
        };
        void fetchQuestions();
    }, []);

    useEffect(() => {
        setHasDrawn(false);
        setHasAnswered(false);
        setIsCorrect(false);
        setSelectedAnswer(null);
    }, [currentIndex]);

    const currentQ = questions[currentIndex];
    const extractKanji = (qStr: string) => {
        if (!qStr) return "字";
        const parts = qStr.split(': ');
        return parts.length > 1 ? parts[1].replace('?', '') : "字";
    };

    const handleSelectOption = async (option: string) => {
        if (hasAnswered) return;

        setSelectedAnswer(option);
        const correct = option === currentQ.correctAnswer;
        setIsCorrect(correct);
        setHasAnswered(true);

        const fullId = String(currentQ.id || `kanji_${currentIndex}`);

        if (correct) {
            engine.recordCorrect();
        } else {
            engine.recordWrong(currentQ);
        }
    };

    const handleNextQuestion = () => {
        if (currentIndex + 1 >= questions.length) engine.finishSession();
        else setCurrentIndex(prev => prev + 1);
    };

    if (isLoading) {
        return (
            <div className="text-center mt-32 text-primary animate-pulse tracking-widest uppercase">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} className="text-6xl mb-4 inline-block">✍️</motion.div>
                <h2 className="text-2xl font-black">Preparing Ink...</h2>
            </div>
        );
    }

    if (engine.isFinished) {
        return <QuizSuccessScreen engine={engine} title="Dojo Cleared!" />;
    }

    const targetKanji = extractKanji(currentQ.question);

    return (
        <div className="max-w-[600px] my-10 mx-auto px-5 relative z-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-black text-primary tracking-tight">Kanji Dojo</h1>
                <div className="flex items-center gap-4">
                    <span className="text-muted font-black text-xs uppercase tracking-widest bg-card border border-border/50 px-3 py-1.5 rounded-xl shadow-sm">
                        {currentIndex + 1} / {questions.length}
                    </span>
                    <button onClick={engine.exitEarly} className="text-muted hover:text-red-500 transition-colors">
                        <LogOut size={20} />
                    </button>
                </div>
            </div>

            <ProgressBar current={currentIndex} total={questions.length} className="mb-8" />

            <AnimatePresence mode="wait">
                <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
                    <SpotlightCard className="p-8 shadow-xl border-t-8 border-accent mb-6 bg-card/60 backdrop-blur-xl" glowColor="rgba(255, 42, 84, 0.1)">
                        <div className="mb-8 flex flex-col items-center">
                            <KanjiDrawPad targetKanji={targetKanji} onCompleteAction={() => setHasDrawn(true)} disabled={hasDrawn} />
                        </div>

                        <AnimatePresence>
                            {hasDrawn && (
                                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="border-t-2 border-border/50 pt-8">
                                    <h3 className="text-muted font-black text-center mb-6 uppercase tracking-widest text-xs">Select the correct meaning</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {currentQ.options.map((opt: string, idx: number) => {
                                            let btnStyle = "border-border/50 bg-background/50 hover:border-accent hover:text-accent font-bold";
                                            if (hasAnswered) {
                                                if (opt === currentQ.correctAnswer) btnStyle = "border-green-500 bg-green-500/10 text-green-500 font-black shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                                                else if (opt === selectedAnswer) btnStyle = "border-red-500 bg-red-500/10 text-red-500 font-black shadow-[0_0_15px_rgba(239,68,68,0.2)]";
                                                else btnStyle = "border-border/20 bg-background/20 opacity-40 text-muted";
                                            }

                                            return (
                                                <button key={idx} onClick={() => handleSelectOption(opt)} disabled={hasAnswered} className={`w-full text-center p-5 rounded-2xl border-2 text-lg transition-all duration-300 outline-none ${btnStyle}`}>
                                                    {opt}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </SpotlightCard>

                    {hasAnswered && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
                            <div className={`p-4 rounded-2xl border-2 mb-6 shadow-sm ${isCorrect ? 'bg-green-500/10 text-green-500 border-green-500/50' : 'bg-red-500/10 text-red-500 border-red-500/50'}`}>
                                <h3 className="font-black text-xl mb-1">{isCorrect ? "✅ Perfect Stroke & Translation!" : "❌ Incorrect Meaning."}</h3>
                                <p className="text-sm font-bold text-muted pt-2 mt-2 border-t border-border/50">💡 {currentQ.explanation}</p>
                            </div>
                            <Button onClick={handleNextQuestion} className="w-full py-6 text-xl font-black shadow-lg">
                                {currentIndex + 1 === questions.length ? 'Finish Dojo 🏆' : 'Next Kanji ➡️'}
                            </Button>
                            {!isCorrect && selectedAnswer && (
                                <SenseiHelp question={`What is the meaning of the Kanji: ${targetKanji}`} wrongAnswer={selectedAnswer} correctAnswer={currentQ.correctAnswer} />
                            )}
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};