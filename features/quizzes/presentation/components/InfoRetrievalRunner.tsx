"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { LogOut } from 'lucide-react';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { FuriganaText } from '@/shared/ui/FuriganaText';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';

interface InfoQuestion { id: string; documentType: string; passage: string; question: string; distractors: string[]; options?: string[]; correctAnswer: string; explanation: string; }

export const InfoRetrievalRunner = () => {
    const engine = useQuizEngine();
    const [questions, setQuestions] = useState<InfoQuestion[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIdx, setCurrentIdx] = useState(0);

    const [currentOptions, setCurrentOptions] = useState<string[]>([]);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'info_retrieval'));
                const docs = snapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        ...data,
                        // 🛠️ FIX: Combine correctAnswer and distractors into an options array
                        options: [data.correctAnswer, ...(data.distractors || [])].sort(() => 0.5 - Math.random())
                    };
                }) as InfoQuestion[];
                setQuestions(docs.sort(() => 0.5 - Math.random()).slice(0, 3));
            } catch (error) {
                console.error("Failed to load Info Retrieval", error);
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
        else engine.recordWrong(currentQ);
    };

    const handleNext = () => {
        if (currentIdx + 1 >= questions.length) engine.finishSession();
        else setCurrentIdx(prev => prev + 1);
    };

    const renderDocument = (type: string, passageText: string) => {
        const lines = (passageText || "").split('\n');

        switch (type) {
            case 'receipt':
                return (
                    <div className="bg-[#fdfbf7] text-slate-800 p-6 sm:p-8 font-mono border-x-4 border-dashed border-slate-300 w-full max-w-sm mx-auto">
                        <h4 className="text-center font-bold text-xl mb-4 border-b-2 border-slate-300 border-dashed pb-2">レシート</h4>
                        {lines.map((line, i) => <p key={i} className="flex justify-between my-1 text-sm">{line}</p>)}
                    </div>
                );
            case 'schedule':
                return (
                    <div className="bg-blue-50/80 p-6 sm:p-8 rounded-xl border-4 border-blue-200 w-full font-japanese">
                        <h4 className="bg-blue-600 text-white text-center py-2 px-4 rounded-md font-bold mb-6">時刻表 (Timetable)</h4>
                        <div className="space-y-3">
                            {lines.map((line, i) => {
                                const parts = line.split(/\s{2,}|\|/);
                                return (
                                    <div key={i} className="flex justify-between items-center border-b border-blue-200/50 pb-2">
                                        {parts.map((p, pIdx) => <span key={pIdx} className={pIdx === 0 ? "font-bold text-blue-900" : "text-blue-800"}>{p}</span>)}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="bg-yellow-50 text-slate-800 p-8 border-[6px] border-double border-yellow-400 rounded-sm font-japanese w-full relative">
                        <h4 className="text-center font-black text-xl mb-6 mt-2 text-yellow-900 border-b border-yellow-300 pb-2">お知らせ (Notice)</h4>
                        {lines.map((line, i) => <p key={i} className="my-2 text-lg leading-relaxed text-yellow-950"><FuriganaText>{line}</FuriganaText></p>)}
                    </div>
                );
        }
    };

    if (isLoading) return <div className="flex justify-center items-center min-h-[50vh]"><h2 className="text-2xl font-black">Loading Document...</h2></div>;
    if (engine.isFinished) return <QuizSuccessScreen engine={engine} title="Investigation Complete!" />;

    return (
        <div className="max-w-5xl mx-auto my-10 px-5 relative z-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-black text-primary">Information Retrieval</h1>
                <button onClick={engine.exitEarly} className="text-muted"><LogOut size={20} /></button>
            </div>

            <ProgressBar current={currentIdx} total={questions.length} className="mb-8" indicatorClassName="bg-emerald-500" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex flex-col items-center justify-center p-4 bg-background/50 border-2 rounded-3xl">
                    {renderDocument(currentQ.documentType, currentQ.passage)}
                </div>

                <div className="flex flex-col h-full">
                    <SpotlightCard className="p-8 border-t-8 border-emerald-500 bg-card/80 mb-6">
                        <h2 className="text-2xl sm:text-3xl font-black text-primary leading-snug font-japanese">
                            <FuriganaText>{currentQ.question}</FuriganaText>
                        </h2>
                    </SpotlightCard>

                    <div className="space-y-4 flex-1">
                        {currentOptions.map((opt, idx) => {
                            let btnStyle = "border-border/50 bg-card/60 hover:border-emerald-500 text-primary";
                            if (hasAnswered) {
                                if (opt === currentQ.correctAnswer) btnStyle = "border-green-500 bg-green-500/10 text-green-600 font-black";
                                else if (opt === selectedAnswer) btnStyle = "border-red-500 bg-red-500/10 text-red-600 font-black";
                                else btnStyle = "opacity-40 text-muted";
                            }
                            return (
                                <button key={idx} onClick={() => handleSelectOption(opt)} disabled={hasAnswered} className={`w-full text-left p-6 rounded-2xl border-2 text-xl font-bold font-japanese ${btnStyle}`}>
                                    <FuriganaText>{opt}</FuriganaText>
                                </button>
                            );
                        })}
                    </div>

                    {hasAnswered && (
                        <div className="mt-8">
                            <div className="p-5 rounded-2xl border-2 mb-6 border-green-500/30 bg-green-500/5">
                                <h3 className="font-black text-xl mb-2 text-green-500">{isCorrect ? '✅ Data Verified!' : '❌ Incorrect Analysis.'}</h3>
                                {currentQ.explanation && <p className="text-sm font-bold text-muted pt-2 border-t border-border/50">{currentQ.explanation}</p>}
                            </div>
                            <Button onClick={handleNext} className="w-full py-6 text-xl bg-emerald-500 text-white font-black">Next Document ➡️</Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};