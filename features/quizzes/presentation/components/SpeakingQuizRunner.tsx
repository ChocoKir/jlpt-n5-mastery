"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { LogOut } from 'lucide-react';

import { useSpeechRecognition } from '@/shared/hooks/useSpeechRecognition';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { SenseiHelp } from '@/features/ai-sensei/presentation/SenseiHelp';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';

export const SpeakingQuizRunner = () => {
    const engine = useQuizEngine();
    const { isListening, transcript, startListening } = useSpeechRecognition();
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'speaking_questions'));
                const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setQuestions(docs.sort(() => 0.5 - Math.random()).slice(0, 5));
            } catch (error) {
                console.error("Failed to load Speaking Questions", error);
            } finally {
                setIsLoading(false);
            }
        };
        void fetchQuestions();
    }, []);

    const currentQ = questions[currentIndex];

    useEffect(() => {
        if (transcript && !hasAnswered && !isListening && currentQ) {
            void checkAnswer(transcript);
        }
    }, [transcript, hasAnswered, isListening, currentQ]);

    const checkAnswer = useCallback(async (spokenText: string) => {
        if (!currentQ || hasAnswered) return;

        const cleanedSpoken = spokenText.replace(/[。、\s\?？!！]/g, '').trim();

        // Ensure graceful handling of expectedResponse strings or arrays
        const acceptableList = Array.isArray(currentQ.expectedResponse)
            ? currentQ.expectedResponse
            : [currentQ.expectedResponse];

        const matched = acceptableList.some((opt: string) => {
            const cleanedOpt = opt.replace(/[。、\s\?？!！]/g, '').trim();
            return cleanedSpoken === cleanedOpt || cleanedSpoken.includes(cleanedOpt);
        });

        setIsCorrect(matched);
        setHasAnswered(true);

        if (matched) {
            engine.recordCorrect();
        } else {
            engine.recordWrong({
                question: currentQ.scenario,
                correctAnswer: acceptableList[0]
            });
        }
    }, [currentQ, hasAnswered, engine]);

    const handleNextQuestion = () => {
        if (currentIndex + 1 >= questions.length) engine.finishSession();
        else {
            setHasAnswered(false);
            setIsCorrect(false);
            setCurrentIndex(prev => prev + 1);
        }
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-primary">
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-6xl mb-4">🎙️</motion.div>
                <h2 className="text-2xl font-black animate-pulse">Connecting to Dojo...</h2>
            </div>
        );
    }

    if (engine.isFinished) {
        return <QuizSuccessScreen engine={engine} title="Speaking Complete!" />;
    }

    return (
        <div className="max-w-2xl mx-auto py-10 px-5 overflow-hidden">
            <div className="flex justify-between mb-5 items-center">
                <span className="bg-background border border-border px-3 py-1 rounded-md text-muted font-black text-xs uppercase tracking-widest shadow-sm">
                    Speaking Practice • {currentIndex + 1}/{questions.length}
                </span>
                <div className="flex items-center gap-4">
                    <span className="text-indigo-500 font-black tracking-widest uppercase text-sm">Score: {engine.score}</span>
                    <button onClick={engine.exitEarly} className="text-muted hover:text-red-500 transition-colors" aria-label="Exit">
                        <LogOut size={20} />
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={currentIndex} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
                    <Card className="p-8 shadow-xl border-t-8 border-indigo-500 mb-6 text-center bg-card/60 backdrop-blur-xl">
                        <h3 className="text-muted font-bold mb-2 uppercase tracking-widest text-xs border-b border-border/50 pb-2">Scenario: {currentQ.scenario}</h3>
                        <h3 className="text-muted font-bold mb-4 uppercase tracking-widest text-[10px]">Translate and speak aloud:</h3>
                        <h1 className="text-2xl sm:text-3xl text-primary font-black my-6 leading-tight border border-border/40 p-4 rounded-xl bg-background/40">
                            "{currentQ.prompt}"
                        </h1>

                        <div className="relative w-32 h-32 mx-auto mb-10 mt-8">
                            {isListening && <motion.div animate={{ scale: [1, 1.6], opacity: [0.6, 0] }} transition={{ repeat: Infinity, duration: 1.2 }} className="absolute inset-0 bg-red-500 rounded-full" />}
                            <button onClick={startListening} disabled={isListening || hasAnswered} className={`relative z-10 w-full h-full rounded-full flex items-center justify-center text-5xl shadow-lg border-4 transition-all outline-none ${isListening ? 'bg-red-50 text-red-500 border-red-500' : 'bg-card text-indigo-500 border-border hover:border-indigo-400 hover:bg-indigo-50 hover:scale-105'} ${hasAnswered ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} aria-label="Microphone">
                                🎙️
                            </button>
                        </div>
                        <p className={`text-sm font-bold tracking-wide uppercase transition-colors ${isListening ? 'text-red-500 animate-pulse' : 'text-muted'}`}>
                            {isListening ? "Listening... (Speak Japanese)" : "Tap Mic to Speak"}
                        </p>
                    </Card>

                    {hasAnswered && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
                            <div className={`p-6 rounded-2xl border-2 mb-6 ${isCorrect ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
                                <h3 className={`font-black text-xl mb-4 text-center ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                                    {isCorrect ? "✅ Perfect Pronunciation!" : "❌ Not quite."}
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                                    <div className="bg-background/80 p-4 rounded-xl border border-border/50">
                                        <p className="m-0 text-xs font-black text-muted uppercase tracking-widest mb-1">You said:</p>
                                        <p className={`m-0 text-lg font-bold ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>{transcript || "(Nothing detected)"}</p>
                                    </div>
                                    <div className="bg-background/80 p-4 rounded-xl border border-border/50">
                                        <p className="m-0 text-xs font-black text-muted uppercase tracking-widest mb-1">Expected:</p>
                                        <p className="m-0 text-lg font-bold text-indigo-600">
                                            {Array.isArray(currentQ.expectedResponse) ? currentQ.expectedResponse[0] : currentQ.expectedResponse}
                                        </p>
                                    </div>
                                </div>
                                {currentQ.explanation && <p className="text-sm font-bold text-muted mt-4 pt-3 border-t border-border/50 text-center">💡 {currentQ.explanation}</p>}
                            </div>

                            <Button onClick={handleNextQuestion} className="w-full py-6 text-xl shadow-[0_0_20px_rgba(99,102,241,0.2)] bg-indigo-500 hover:bg-indigo-600 border-none text-white">
                                {currentIndex + 1 === questions.length ? 'Finish Quiz 🏆' : 'Next Prompt ➡️'}
                            </Button>

                            {!isCorrect && (
                                <div className="mt-4">
                                    <SenseiHelp
                                        question={`How do you say: "${currentQ.prompt}" in Japanese for scenario: ${currentQ.scenario}?`}
                                        wrongAnswer={transcript || "(User did not speak)"}
                                        correctAnswer={Array.isArray(currentQ.expectedResponse) ? currentQ.expectedResponse[0] : currentQ.expectedResponse}
                                    />
                                </div>
                            )}
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};