"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { LogOut } from 'lucide-react';

import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { SenseiHelp } from '@/features/ai-sensei/presentation/SenseiHelp';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';

export const ReadingQuizRunner = () => {
    const engine = useQuizEngine();
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const [currentOptions, setCurrentOptions] = useState<string[]>([]);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'reading_passages'));
                const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setQuestions(docs.sort(() => 0.5 - Math.random()).slice(0, 3));
            } catch (error) {
                console.error("Failed to load Reading Passages", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchQuestions();
    }, []);

    const currentQ = questions[currentIndex];

    useEffect(() => {
        if (currentQ) {
            const combined = [currentQ.correctAnswer, ...(currentQ.distractors || [])];
            setCurrentOptions(combined.sort(() => 0.5 - Math.random()));
            setHasAnswered(false);
            setIsCorrect(false);
            setSelectedAnswer(null);
        }
    }, [currentQ]);

    const handleSelectOption = async (option: string) => {
        if (hasAnswered) return;

        setSelectedAnswer(option);
        const correct = option === currentQ.correctAnswer;
        setIsCorrect(correct);
        setHasAnswered(true);


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
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-primary">
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-6xl mb-4">📖</motion.div>
                <h2 className="text-2xl font-black animate-pulse">Loading Passages...</h2>
            </div>
        );
    }

    if (engine.isFinished) {
        return <QuizSuccessScreen engine={engine} title="Reading Complete!" />;
    }

    return (
        <div className="max-w-5xl mx-auto py-10 px-5 overflow-hidden">
            <div className="flex justify-between mb-5 items-center">
                <span className="bg-background border border-border px-3 py-1 rounded-md text-muted font-black text-xs uppercase tracking-widest shadow-sm">
                    Reading Comprehension • {currentIndex + 1}/{questions.length}
                </span>
                <div className="flex items-center gap-4">
                    <span className="text-violet-500 font-black tracking-widest uppercase text-sm">Score: {engine.score}</span>
                    <button onClick={engine.exitEarly} className="text-muted hover:text-red-500 transition-colors">
                        <LogOut size={20} />
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                    <Card className="p-8 shadow-xl border-t-8 border-violet-500 bg-card/60 backdrop-blur-xl h-full">
                        <h3 className="text-muted font-bold mb-6 uppercase text-xs tracking-widest border-b border-border/50 pb-2">Passage:</h3>
                        <p className="text-2xl font-bold text-primary leading-loose text-justify tracking-wide whitespace-pre-wrap">
                            {currentQ.passage}
                        </p>
                    </Card>

                    <div className="flex flex-col h-full">
                        <Card className="p-8 shadow-md border-2 border-border mb-6 bg-background/50">
                            <h3 className="text-muted font-bold mb-3 uppercase text-xs tracking-widest">Question:</h3>
                            <h2 className="text-2xl font-black text-primary leading-snug">{currentQ.question}</h2>
                        </Card>

                        <div className="space-y-4 flex-1">
                            {currentOptions.map((opt: string, idx: number) => {
                                let btnStyle = "border-border/50 bg-card/60 hover:border-violet-500/50 hover:bg-violet-500/5 text-primary";
                                if (hasAnswered) {
                                    if (opt === currentQ.correctAnswer) btnStyle = "border-green-500 bg-green-500/10 text-green-600 font-black shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                                    else if (opt === selectedAnswer) btnStyle = "border-red-500 bg-red-500/10 text-red-600 font-black shadow-[0_0_15px_rgba(239,68,68,0.2)]";
                                    else btnStyle = "border-border/20 bg-background/50 opacity-40 text-muted";
                                }

                                return (
                                    <motion.button key={idx} whileHover={!hasAnswered ? { scale: 1.01 } : {}} whileTap={!hasAnswered ? { scale: 0.99 } : {}} onClick={() => handleSelectOption(opt)} disabled={hasAnswered} className={`w-full text-left p-6 rounded-2xl border-2 text-xl font-bold transition-all duration-300 outline-none ${btnStyle}`}>
                                        {opt}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {hasAnswered && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
                                <div className={`p-4 rounded-xl border-2 mb-6 ${isCorrect ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
                                    <h3 className={`font-black text-lg mb-1 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>{isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</h3>
                                    {currentQ.explanation && <p className="text-sm font-bold text-muted pt-2 border-t border-border/50">💡 {currentQ.explanation}</p>}
                                </div>
                                <Button onClick={handleNextQuestion} className="w-full py-6 text-xl shadow-[0_0_20px_rgba(139,92,246,0.2)] bg-violet-600 hover:bg-violet-700 border-none text-white">
                                    {currentIndex + 1 === questions.length ? 'Finish Reading 🏆' : 'Next Passage ➡️'}
                                </Button>
                                {!isCorrect && selectedAnswer && (
                                    <div className="mt-4">
                                        <SenseiHelp question={`Passage: "${currentQ.passage}" \nQuestion: "${currentQ.question}"`} wrongAnswer={selectedAnswer} correctAnswer={currentQ.correctAnswer} />
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};