"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { CheckCircle2, XCircle, Volume2, LogOut } from 'lucide-react';

import { Button } from '@/shared/ui/Button';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { SenseiHelp } from '@/features/ai-sensei/presentation/SenseiHelp';
import { AudioVisualizer } from '@/shared/ui/AudioVisualizer';
import { FuriganaText } from '@/shared/ui/FuriganaText';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';

export const ListeningQuizRunner = () => {
    const engine = useQuizEngine();
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const [currentOptions, setCurrentOptions] = useState<string[]>([]);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'listening_questions'));
                const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setQuestions(docs.sort(() => 0.5 - Math.random()).slice(0, 5));
            } catch (error) {
                console.error("Failed to load Listening Questions", error);
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

    const handlePlayTTSFallback = () => {
        if (!currentQ || !currentQ.transcript || isPlaying) return;
        setIsPlaying(true);
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(currentQ.transcript);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85;
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
    };

    const handleSelectOption = async (option: string) => {
        if (hasAnswered) return;
        window.speechSynthesis.cancel();

        setSelectedAnswer(option);
        const correct = option === currentQ.correctAnswer;
        setIsCorrect(correct);
        setHasAnswered(true);


        if (correct) {
            engine.recordCorrect();
        } else {
            engine.recordWrong({ question: currentQ.transcript, correctAnswer: currentQ.correctAnswer });
        }
    };

    const handleNextQuestion = () => {
        if (currentIndex + 1 >= questions.length) engine.finishSession();
        else setCurrentIndex(prev => prev + 1);
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-cyan-500">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="mb-4">
                    <Volume2 size={64} />
                </motion.div>
                <h2 className="text-2xl font-black animate-pulse uppercase tracking-widest text-sm">Tuning Frequency...</h2>
            </div>
        );
    }

    if (engine.isFinished) {
        return <QuizSuccessScreen engine={engine} title="Listening Trial Complete!" />;
    }

    return (
        <div className="max-w-2xl mx-auto py-10 px-5 overflow-hidden relative z-10">
            <div className="flex justify-between mb-5 items-center">
                <span className="bg-background border border-border/50 px-3 py-1.5 rounded-xl text-muted font-black text-xs uppercase tracking-widest shadow-sm">
                    Listening Comprehension • {currentIndex + 1}/{questions.length}
                </span>
                <div className="flex items-center gap-4">
                    <span className="text-cyan-500 font-black tracking-widest uppercase text-sm drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
                        Score: {engine.score}
                    </span>
                    <button onClick={engine.exitEarly} className="text-muted hover:text-red-500 transition-colors">
                        <LogOut size={20} />
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
                    <SpotlightCard className="p-8 mb-6 text-center bg-card/40 backdrop-blur-xl border-border/50" glowColor="rgba(6, 182, 212, 0.15)">
                        <h2 className="text-2xl font-black text-primary mb-8">{currentQ.question}</h2>

                        <div className="mb-8">
                            {currentQ.audioUrl ? (
                                <AudioVisualizer audioUrl={currentQ.audioUrl} />
                            ) : (
                                <div className="relative w-32 h-32 mx-auto">
                                    {isPlaying && <motion.div animate={{ scale: [1, 1.5], opacity: [0.5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute inset-0 bg-cyan-400 rounded-full" />}
                                    <button onClick={handlePlayTTSFallback} className={`relative z-10 w-full h-full rounded-full flex items-center justify-center text-5xl shadow-lg transition-all border-4 outline-none ${isPlaying ? 'bg-cyan-50 text-cyan-500 border-cyan-400' : 'bg-card text-primary border-border hover:border-cyan-400 hover:bg-cyan-50/50 hover:scale-105'}`}>
                                        {isPlaying ? <Volume2 size={40} className="animate-pulse" /> : '▶️'}
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="space-y-4">
                            {currentOptions.map((opt: string, idx: number) => {
                                let btnStyle = "border-border/50 bg-card/60 hover:border-cyan-500/50 hover:bg-cyan-500/5 text-primary";
                                if (hasAnswered) {
                                    if (opt === currentQ.correctAnswer) btnStyle = "border-green-500 bg-green-500/10 text-green-500 font-black shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                                    else if (opt === selectedAnswer) btnStyle = "border-red-500 bg-red-500/10 text-red-500 font-black shadow-[0_0_15px_rgba(239,68,68,0.2)]";
                                    else btnStyle = "border-border/20 bg-background/50 opacity-40 text-muted";
                                }

                                return (
                                    <motion.button key={idx} whileHover={!hasAnswered ? { scale: 1.01 } : {}} whileTap={!hasAnswered ? { scale: 0.99 } : {}} onClick={() => handleSelectOption(opt)} disabled={hasAnswered} className={`w-full text-center p-5 rounded-2xl border-2 transition-all duration-300 outline-none flex items-center justify-between group ${btnStyle}`}>
                                        <span className="text-xl font-bold flex-grow text-center">
                                            {/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/.test(opt) ? <FuriganaText>{opt}</FuriganaText> : opt}
                                        </span>
                                        <div className="shrink-0 ml-3">
                                            {hasAnswered && opt === currentQ.correctAnswer && <CheckCircle2 size={24} className="text-green-500" />}
                                            {hasAnswered && opt === selectedAnswer && opt !== currentQ.correctAnswer && <XCircle size={24} className="text-red-500" />}
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </SpotlightCard>

                    {hasAnswered && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
                            <div className={`p-5 rounded-2xl border-2 mb-6 backdrop-blur-md ${isCorrect ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
                                <h3 className={`font-black text-lg mb-2 flex items-center gap-2 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                                    {isCorrect ? <><CheckCircle2 size={20}/> Translation Verified</> : <><XCircle size={20}/> Structural Mismatch</>}
                                </h3>
                                <div className="mt-3 pt-3 border-t border-border/50 text-left">
                                    <span className="text-xs font-black text-muted uppercase tracking-widest block mb-1">Transcript</span>
                                    <p className="text-primary font-bold text-lg mb-2"><FuriganaText>{currentQ.transcript}</FuriganaText></p>
                                    {currentQ.explanation && <p className="text-sm font-medium text-muted bg-background/50 p-3 rounded-xl border border-border/50">{currentQ.explanation}</p>}
                                </div>
                            </div>
                            <Button onClick={handleNextQuestion} className="w-full py-6 text-xl shadow-[0_0_20px_rgba(56,189,248,0.2)] bg-cyan-500 hover:bg-cyan-600 border-none text-white">
                                {currentIndex + 1 === questions.length ? 'Finalize Analysis 🏆' : 'Next Transmission ➡️'}
                            </Button>
                            {!isCorrect && selectedAnswer && (
                                <div className="mt-4">
                                    <SenseiHelp question={`Transcript: "${currentQ.transcript}" \nQuestion: "${currentQ.question}"`} wrongAnswer={selectedAnswer} correctAnswer={currentQ.correctAnswer} />
                                </div>
                            )}
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};