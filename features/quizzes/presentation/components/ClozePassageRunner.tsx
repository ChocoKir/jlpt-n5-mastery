"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { LogOut } from 'lucide-react';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { FuriganaText } from '@/shared/ui/FuriganaText';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';

export const ClozePassageRunner = () => {
    const engine = useQuizEngine();
    const [questions, setQuestions] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIdx, setCurrentIdx] = useState(0);

    const [hasAnswered, setHasAnswered] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'cloze_passages'));
                const docs = snapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        ...data,
                        text: data.question || data.passage || data.sentence || data.content || "",
                        options: [data.correctAnswer, ...(data.distractors || [])].sort(() => 0.5 - Math.random())
                    };
                });
                setQuestions(docs.sort(() => 0.5 - Math.random()).slice(0, 5));
            } catch (error) {
                console.error("Failed to load Cloze Passages", error);
            } finally {
                setIsLoading(false);
            }
        };
        // 🛠️ FIX: Added void
        void fetchQuestions();
    }, []);

    const currentQ = questions[currentIdx];

    useEffect(() => {
        if (currentQ) {
            setHasAnswered(false);
            setSelectedAnswer(null);
            setIsCorrect(false);
        }
    }, [currentQ, currentIdx]);

    const handleSelectOption = (option: string) => {
        if (hasAnswered) return;
        setSelectedAnswer(option);
        const correct = option === currentQ.correctAnswer;
        setIsCorrect(correct);
        setHasAnswered(true);

        if (correct) {
            engine.recordCorrect();
        } else {
            engine.recordWrong({ question: currentQ.text, correctAnswer: currentQ.correctAnswer });
        }
    };

    const handleNext = () => {
        // 🛠️ FIX: Added void
        if (currentIdx + 1 >= questions.length) void engine.finishSession();
        else setCurrentIdx(prev => prev + 1);
    };

    // 🛠️ FIX: Escaped the brackets in the regex properly
    const renderTextWithBlank = (text: string) => {
        const parts = text.split(/(\[\s*___\s*\]|（\s*）|___+)/g);

        return parts.map((part, idx) => {
            if (part.match(/(\[\s*___\s*\]|（\s*）|___+)/)) {
                return (
                    <span key={idx} className={`inline-block min-w-[4rem] text-center px-4 py-1 mx-1 border-b-4 font-black rounded-lg transition-colors ${
                        !hasAnswered ? 'bg-blue-500/10 border-blue-500 text-blue-500 shadow-sm' :
                            isCorrect ? 'bg-green-500/20 border-green-500 text-green-500' : 'bg-red-500/20 border-red-500 text-red-500 line-through'
                    }`}>
                        {hasAnswered ? selectedAnswer : "?"}
                    </span>
                );
            }
            return <span key={idx}><FuriganaText>{part}</FuriganaText></span>;
        });
    };

    if (isLoading) return <div className="flex flex-col items-center justify-center min-h-[50vh] text-blue-500"><h2 className="text-2xl font-black animate-pulse">Loading Passages...</h2></div>;
    if (engine.isFinished) return <QuizSuccessScreen engine={engine} title="Grammar Cleared!" />;

    return (
        <div className="max-w-5xl mx-auto my-10 px-5 relative z-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-black text-primary tracking-tight">Text Grammar</h1>
                <div className="flex items-center gap-4">
                    <span className="text-muted font-black text-xs uppercase tracking-widest bg-card border border-border/50 px-3 py-1.5 rounded-xl shadow-sm">Question {currentIdx + 1} / {questions.length}</span>
                    <button onClick={engine.exitEarly} className="text-muted hover:text-red-500 transition-colors"><LogOut size={20} /></button>
                </div>
            </div>
            <ProgressBar current={currentIdx} total={questions.length} className="mb-8" indicatorClassName="bg-blue-500" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SpotlightCard className="p-8 sm:p-10 shadow-xl border-2 border-border/50 bg-card/80 backdrop-blur-xl flex flex-col justify-center min-h-[250px]">
                    <h2 className="text-xl sm:text-2xl font-black text-primary leading-loose font-japanese text-center">
                        {renderTextWithBlank(currentQ?.text || "")}
                    </h2>
                </SpotlightCard>

                <div className="flex flex-col h-full">
                    <SpotlightCard glowColor="rgba(59, 130, 246, 0.15)" className="p-6 border-t-8 border-blue-500 bg-card/80 backdrop-blur-xl flex-1 flex flex-col">
                        <h3 className="text-muted font-black text-xs uppercase tracking-widest mb-4">Select the missing word</h3>
                        <div className="space-y-3 flex-1 flex flex-col justify-center">
                            {currentQ?.options?.map((opt: string, idx: number) => {
                                let btnStyle = "bg-background/50 border-border/50 hover:border-blue-500 hover:text-blue-500 text-primary";
                                if (hasAnswered) {
                                    if (opt === currentQ.correctAnswer) btnStyle = "bg-green-500/10 border-green-500 text-green-600 shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                                    else if (opt === selectedAnswer) btnStyle = "bg-red-500/10 border-red-500 text-red-600 shadow-[0_0_15px_rgba(239,68,68,0.2)]";
                                    else btnStyle = "opacity-40 text-muted border-border/20 bg-background/20";
                                }
                                return (
                                    <button key={idx} onClick={() => handleSelectOption(opt)} disabled={hasAnswered} className={`w-full p-5 rounded-xl border-2 font-bold text-xl transition-all outline-none font-japanese shadow-sm ${btnStyle}`}>
                                        <FuriganaText>{opt}</FuriganaText>
                                    </button>
                                );
                            })}
                        </div>
                    </SpotlightCard>

                    <AnimatePresence>
                        {hasAnswered && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                                <Button onClick={handleNext} className="w-full py-6 text-xl font-black shadow-lg bg-blue-500 text-white hover:bg-blue-600 border-none">
                                    {currentIdx + 1 >= questions.length ? 'Finish Module 🏆' : 'Next Question ➡️'}
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};