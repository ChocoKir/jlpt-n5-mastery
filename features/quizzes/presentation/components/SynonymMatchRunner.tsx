"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { Replace, LogOut } from 'lucide-react';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { FuriganaText } from '@/shared/ui/FuriganaText';
import { SenseiHelp } from '@/features/ai-sensei/presentation/SenseiHelp';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';

interface SynonymQuestion { id: string; question: string; distractors: string[]; correctAnswer: string; explanation: string; options?: string[]; }

export const SynonymMatchRunner = () => {
    const engine = useQuizEngine();
    const [questions, setQuestions] = useState<SynonymQuestion[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIdx, setCurrentIdx] = useState(0);

    const [currentOptions, setCurrentOptions] = useState<string[]>([]);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'synonym_questions'));
                const docs = snapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        ...data,
                        options: [data.correctAnswer, ...(data.distractors || [])].sort(() => 0.5 - Math.random())
                    };
                }) as SynonymQuestion[];

                setQuestions(docs.sort(() => 0.5 - Math.random()).slice(0, 5));
            } catch (error) {
                console.error("Failed to load Synonym Questions", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchQuestions();
    }, []);

    const currentQ = questions[currentIdx];

    useEffect(() => {
        if (currentQ && currentQ.options) {
            setCurrentOptions(currentQ.options);
            setHasAnswered(false);
            setIsCorrect(false);
            setSelectedAnswer(null);
        }
    }, [currentQ]);

    const handleSelectOption = (option: string) => {
        if (hasAnswered) return;
        setSelectedAnswer(option);
        const correct = option === currentQ.correctAnswer;
        setIsCorrect(correct);
        setHasAnswered(true);

        if (correct) engine.recordCorrect();
        else engine.recordWrong({ question: currentQ.question, correctAnswer: currentQ.correctAnswer });
    };

    const handleNext = () => {
        if (currentIdx + 1 >= questions.length) engine.finishSession();
        else setCurrentIdx(prev => prev + 1);
    };

    if (isLoading) return <div className="flex justify-center items-center min-h-[50vh]"><h2 className="text-2xl font-black">Loading...</h2></div>;
    if (engine.isFinished) return <QuizSuccessScreen engine={engine} title="Nuance Mastered!" />;

    // Splitting by Japanese brackets 【 】
    const sentenceParts = currentQ.question.split(/(【.*?】)/);

    return (
        <div className="max-w-3xl mx-auto my-10 px-5 relative z-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl sm:text-3xl font-black text-primary tracking-tight">Phrase Replacement</h1>
                <div className="flex items-center gap-4">
                    <span className="text-muted font-black text-xs uppercase tracking-widest bg-card border border-border/50 px-3 py-1.5 rounded-xl shadow-sm">Query {currentIdx + 1} / {questions.length}</span>
                    <button onClick={engine.exitEarly} className="text-muted"><LogOut size={20} /></button>
                </div>
            </div>

            <ProgressBar current={currentIdx} total={questions.length} className="mb-8" indicatorClassName="bg-fuchsia-500" />

            <AnimatePresence mode="wait">
                <motion.div key={currentIdx} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <SpotlightCard glowColor="rgba(217, 70, 239, 0.15)" className="p-8 sm:p-10 border-t-8 border-fuchsia-500 bg-card/80 backdrop-blur-xl mb-6 text-center">
                        <h3 className="text-fuchsia-500 font-black text-xs uppercase tracking-widest mb-6">Select a module to replace the highlighted phrase</h3>
                        <div className="text-2xl sm:text-3xl font-bold text-primary mb-10 leading-loose font-japanese flex flex-wrap items-center justify-center gap-2">
                            {sentenceParts.map((part, idx) => {
                                if (part.startsWith('【') && part.endsWith('】')) {
                                    const targetWord = part.slice(1, -1);
                                    return (
                                        <div key={idx} className="relative inline-flex items-center justify-center min-w-[120px] h-14 bg-background border-2 border-dashed border-fuchsia-500/50 rounded-xl px-4 overflow-hidden">
                                            <AnimatePresence mode="popLayout">
                                                {!hasAnswered ? (
                                                    <motion.span key="original" initial={{ y: 0, opacity: 1 }} exit={{ y: -40, opacity: 0 }} className="text-fuchsia-500 font-black">{targetWord}</motion.span>
                                                ) : (
                                                    <motion.span key="replacement" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className={`font-black ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>{selectedAnswer}</motion.span>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                }
                                return <span key={idx}><FuriganaText>{part}</FuriganaText></span>;
                            })}
                        </div>
                    </SpotlightCard>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {currentOptions.map((opt, idx) => {
                            let btnStyle = "border-border/50 bg-card/60 hover:border-fuchsia-500/50 hover:bg-fuchsia-500/5 text-primary";
                            if (hasAnswered) {
                                if (opt === currentQ.correctAnswer) btnStyle = "border-green-500 bg-green-500/10 text-green-600 font-black";
                                else if (opt === selectedAnswer) btnStyle = "border-red-500 bg-red-500/10 text-red-600 font-black";
                                else btnStyle = "border-border/20 bg-background/50 opacity-40 text-muted";
                            }
                            return (
                                <button key={idx} onClick={() => handleSelectOption(opt)} disabled={hasAnswered} className={`w-full text-center p-6 rounded-2xl border-2 text-xl font-bold transition-all duration-300 font-japanese flex items-center justify-center gap-3 ${btnStyle}`}>
                                    <FuriganaText>{opt}</FuriganaText>
                                </button>
                            );
                        })}
                    </div>

                    {hasAnswered && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <div className={`p-5 rounded-2xl border-2 mb-6 ${isCorrect ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
                                <h3 className={`font-black text-xl mb-2 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>{isCorrect ? '✅ Perfect Synonym Match!' : '❌ Incorrect Nuance.'}</h3>
                                {currentQ.explanation && <p className="text-sm font-bold text-muted pt-2 border-t border-border/50">💡 {currentQ.explanation}</p>}
                            </div>
                            <Button onClick={handleNext} className="w-full py-6 text-xl bg-fuchsia-500 text-white font-black">Next Query ➡️</Button>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};