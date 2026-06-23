"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { LogOut } from 'lucide-react';
import { Button } from '@/shared/ui/Button';
import { FuriganaText } from '@/shared/ui/FuriganaText';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';
// 🛠️ FIX: Removed unused 'SenseiHelp' import

interface ChatMessage { id: string; sender: 'npc' | 'user'; text: string; }

export const GrammarChatRunner = () => {
    const engine = useQuizEngine();
    const [questions, setQuestions] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentScenarioIdx, setCurrentScenarioIdx] = useState(0);
    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [hasAnswered, setHasAnswered] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'grammar_chats'));
                const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                const allAnswers = docs.map((d: any) => d.expectedResponse);
                const processedDocs = docs.map((doc: any) => {
                    const distractors = allAnswers.filter(a => a !== doc.expectedResponse).sort(() => 0.5 - Math.random()).slice(0, 3);
                    return {
                        ...doc,
                        options: [doc.expectedResponse, ...distractors].sort(() => 0.5 - Math.random())
                    };
                });

                setQuestions(processedDocs.sort(() => 0.5 - Math.random()).slice(0, 4));
            } catch (error) {
                console.error("Failed to load Pragmatic Chats", error);
            } finally {
                setIsLoading(false);
            }
        };
        // 🛠️ FIX: Added void
        void fetchQuestions();
    }, []);

    const scenario = questions[currentScenarioIdx];

    useEffect(() => {
        if (!scenario) return;
        setChatHistory([]);
        setHasAnswered(false);

        let delay = 500;
        scenario.chatHistory.forEach((msgObj: any, idx: number) => {
            setTimeout(() => {
                setChatHistory(prev => [...prev, { id: `npc_${idx}`, sender: 'npc', text: msgObj.message }]);
            }, delay);
            delay += 1200;
        });
    }, [currentScenarioIdx, scenario]);

    useEffect(() => {
        // Optional chaining for smooth scrolling
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatHistory]);

    const handleSendReply = (reply: string) => {
        if (hasAnswered) return;
        setChatHistory(prev => [...prev, { id: `user_${Date.now()}`, sender: 'user', text: reply }]);
        setHasAnswered(true);

        if (reply === scenario.expectedResponse) {
            engine.recordCorrect();
            setTimeout(() => handleNext(), 1500);
        } else {
            engine.recordWrong({ question: `Chat: ${scenario.prompt}`, correctAnswer: scenario.expectedResponse });
        }
    };

    const handleNext = () => {
        // 🛠️ FIX: Added void
        if (currentScenarioIdx + 1 >= questions.length) void engine.finishSession();
        else setCurrentScenarioIdx(prev => prev + 1);
    };

    if (isLoading) return <div className="flex justify-center items-center min-h-[50vh]"><h2 className="text-2xl font-black">Loading...</h2></div>;
    if (engine.isFinished) return <QuizSuccessScreen engine={engine} title="Chat Cleared!" />;

    return (
        <div className="max-w-md mx-auto my-10 px-5 relative z-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-black text-primary tracking-tight">Pragmatics Chat</h1>
                <div className="flex items-center gap-4">
                    <span className="text-muted font-black text-xs uppercase tracking-widest bg-card border border-border/50 px-3 py-1.5 rounded-xl">
                        {currentScenarioIdx + 1} / {questions.length}
                    </span>
                    <button onClick={engine.exitEarly} className="text-muted"><LogOut size={20} /></button>
                </div>
            </div>

            <div className="bg-card border-4 border-border/50 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col h-[600px] relative">
                <div className="bg-background/90 backdrop-blur-md p-4 border-b border-border/50 flex items-center gap-3 z-10">
                    <span className="text-3xl bg-card p-2 rounded-full border border-border/50">👤</span>
                    <div>
                        <h3 className="font-black text-primary">Friend</h3>
                        <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Online
                        </p>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50 dark:bg-slate-900/50">
                    <AnimatePresence>
                        {chatHistory.map((msg) => (
                            <motion.div key={msg.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-4 rounded-2xl text-sm sm:text-base font-bold shadow-sm ${msg.sender === 'user' ? 'bg-green-500 text-white rounded-tr-sm border border-green-600' : 'bg-card text-primary rounded-tl-sm border border-border/50'}`}>
                                    <FuriganaText>{msg.text}</FuriganaText>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                    <div ref={chatEndRef} />
                </div>

                <div className="bg-background border-t border-border/50 p-4">
                    {!hasAnswered ? (
                        <div className="space-y-2">
                            <p className="text-xs font-bold text-muted mb-2">{scenario.prompt}</p>
                            {scenario.chatHistory.length === chatHistory.length && scenario.options.map((opt: string, idx: number) => (
                                <button key={idx} onClick={() => handleSendReply(opt)} className="w-full text-left p-4 rounded-xl bg-card border-2 border-border/50 hover:border-green-500 font-bold font-japanese">
                                    <FuriganaText>{opt}</FuriganaText>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-2">
                            {chatHistory[chatHistory.length - 1].text === scenario.expectedResponse ? (
                                <div className="text-center text-green-500 font-black animate-pulse flex items-center justify-center gap-2">✅ Perfect Reply!</div>
                            ) : (
                                <div>
                                    <div className="p-4 bg-red-500/10 border-2 border-red-500/50 rounded-xl mb-4 text-red-500">
                                        <h3 className="font-black mb-1">❌ Awkward Silence...</h3>
                                        <p className="text-sm font-bold mt-2">{scenario.explanation}</p>
                                    </div>
                                    <Button onClick={handleNext} className="w-full py-4 font-black shadow-lg">Next Chat ➡️</Button>
                                </div>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};