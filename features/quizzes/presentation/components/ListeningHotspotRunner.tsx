"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { Volume2, LogOut, MapPin, FileText } from 'lucide-react';

import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { FuriganaText } from '@/shared/ui/FuriganaText';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';

export const ListeningHotspotRunner = () => {
    const engine = useQuizEngine();
    const [questions, setQuestions] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentIdx, setCurrentIdx] = useState(0);

    const [options, setOptions] = useState<string[]>([]);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showTranscript, setShowTranscript] = useState(false);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'spatial_listening'));
                const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setQuestions(docs.sort(() => 0.5 - Math.random()).slice(0, 5));
            } catch (error) {
                console.error("Failed to load Spatial Listening Questions", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchQuestions();
    }, []);

    const scenario = questions[currentIdx];

    useEffect(() => {
        if (scenario) {
            setOptions([scenario.correctAnswer, ...(scenario.distractors || [])].sort(() => 0.5 - Math.random()));
            setHasAnswered(false);
            setSelectedOption(null);
            setShowTranscript(false);
        }
    }, [scenario, currentIdx]);

    // Ensure audio stops if user navigates away
    useEffect(() => {
        return () => {
            if (typeof window !== 'undefined') window.speechSynthesis.cancel();
        };
    }, []);

    const playPromptAudio = () => {
        if (!scenario || typeof window === 'undefined') return;
        setIsPlaying(true);
        window.speechSynthesis.cancel();

        // 🛠️ FIX: Combine the transcript and the question for the audio engine
        const utterance = new SpeechSynthesisUtterance(`${scenario.transcript} 。。。 ${scenario.question}`);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85; // Slightly slower for N5 comprehension

        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);

        window.speechSynthesis.speak(utterance);
    };

    const handleOptionClick = (option: string) => {
        if (hasAnswered) return;
        setSelectedOption(option);
        setHasAnswered(true);
        window.speechSynthesis.cancel(); // Stop audio if they answer early

        if (option === scenario.correctAnswer) {
            engine.recordCorrect();
        } else {
            engine.recordWrong({ question: scenario.question, correctAnswer: scenario.correctAnswer });
        }
    };

    const handleNext = () => {
        if (currentIdx + 1 >= questions.length) {
            engine.finishSession();
        } else {
            window.speechSynthesis.cancel();
            setCurrentIdx(prev => prev + 1);
        }
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-cyan-500">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1 }} className="mb-4">
                    <Volume2 size={64} />
                </motion.div>
                <h2 className="text-2xl font-black animate-pulse uppercase tracking-widest text-sm">Loading Audio Vectors...</h2>
            </div>
        );
    }

    if (engine.isFinished) return <QuizSuccessScreen engine={engine} title="Location Secured!" />;

    return (
        <div className="max-w-3xl mx-auto my-10 px-5 relative z-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl sm:text-3xl font-black text-primary tracking-tight">Spatial Audio</h1>
                <div className="flex items-center gap-4">
                    <span className="text-muted font-black text-xs uppercase tracking-widest bg-card border border-border/50 px-3 py-1.5 rounded-xl shadow-sm">
                        Zone {currentIdx + 1} / {questions.length}
                    </span>
                    <button onClick={() => { window.speechSynthesis.cancel(); engine.exitEarly(); }} className="text-muted hover:text-red-500 transition-colors">
                        <LogOut size={20} />
                    </button>
                </div>
            </div>

            <ProgressBar current={currentIdx} total={questions.length} className="mb-8" indicatorClassName="bg-cyan-500" />

            {/* Radar / Audio Player Area */}
            <SpotlightCard glowColor="rgba(6, 182, 212, 0.15)" className="p-8 border-t-8 border-cyan-500 bg-card/80 backdrop-blur-xl mb-6 text-center">
                <p className="text-cyan-500 font-black text-xs uppercase tracking-widest mb-6">Listen to the dialogue and pinpoint the location</p>

                <div className="flex flex-col items-center justify-center mb-6">
                    <button onClick={playPromptAudio} className={`relative w-28 h-28 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all border-4 outline-none mb-6 ${isPlaying ? 'bg-cyan-50 text-cyan-500 border-cyan-400 scale-110' : 'bg-background text-primary border-border/50 hover:border-cyan-400 hover:scale-105'}`}>
                        {isPlaying && <motion.div animate={{ scale: [1, 1.8], opacity: [0.5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="absolute inset-0 bg-cyan-400 rounded-full" />}
                        <Volume2 size={48} className={`relative z-10 ${isPlaying ? 'animate-pulse' : ''}`} />
                    </button>

                    <h2 className="text-xl sm:text-2xl font-black text-primary font-japanese leading-relaxed">
                        <FuriganaText>{scenario.question}</FuriganaText>
                    </h2>
                </div>

                <div className="flex justify-center">
                    <button onClick={() => setShowTranscript(!showTranscript)} className="text-sm font-bold text-muted hover:text-cyan-500 flex items-center gap-2 transition-colors">
                        <FileText size={16} /> {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
                    </button>
                </div>

                <AnimatePresence>
                    {showTranscript && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-4 overflow-hidden">
                            <div className="bg-background/50 border border-border/50 p-4 rounded-xl text-left">
                                <p className="font-japanese text-primary whitespace-pre-wrap leading-loose">
                                    <FuriganaText>{scenario.transcript}</FuriganaText>
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </SpotlightCard>

            {/* Location Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {options.map((opt, idx) => {
                    let btnStyle = "border-border/50 bg-card/60 hover:border-cyan-500/50 hover:bg-cyan-500/5 text-primary";
                    if (hasAnswered) {
                        if (opt === scenario.correctAnswer) btnStyle = "border-green-500 bg-green-500/10 text-green-600 font-black shadow-[0_0_15px_rgba(16,185,129,0.2)]";
                        else if (opt === selectedOption) btnStyle = "border-red-500 bg-red-500/10 text-red-600 font-black shadow-[0_0_15px_rgba(239,68,68,0.2)]";
                        else btnStyle = "border-border/20 bg-background/50 opacity-40 text-muted";
                    }

                    return (
                        <motion.button key={idx} whileHover={!hasAnswered ? { scale: 1.02 } : {}} whileTap={!hasAnswered ? { scale: 0.98 } : {}} onClick={() => handleOptionClick(opt)} disabled={hasAnswered} className={`w-full text-left p-5 rounded-2xl border-2 text-lg font-bold transition-all duration-300 outline-none font-japanese flex items-center gap-4 ${btnStyle}`}>
                            <MapPin size={24} className={hasAnswered && opt === scenario.correctAnswer ? "text-green-500" : "text-cyan-500/50"} />
                            <FuriganaText>{opt}</FuriganaText>
                        </motion.button>
                    );
                })}
            </div>

            {/* Results & Next Button */}
            <AnimatePresence>
                {hasAnswered && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <div className={`p-5 rounded-2xl border-2 mb-6 shadow-sm ${selectedOption === scenario.correctAnswer ? 'border-green-500/30 bg-green-500/5' : 'border-red-500/30 bg-red-500/5'}`}>
                            <h3 className={`font-black text-xl mb-2 ${selectedOption === scenario.correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
                                {selectedOption === scenario.correctAnswer ? '✅ Location Confirmed!' : '❌ Incorrect Coordinates.'}
                            </h3>
                            {scenario.explanation && <p className="text-sm font-bold text-muted pt-2 border-t border-border/50 leading-relaxed">💡 {scenario.explanation}</p>}
                        </div>

                        <Button onClick={handleNext} className="w-full py-6 text-xl shadow-[0_0_20px_rgba(6,182,212,0.2)] bg-cyan-500 hover:bg-cyan-600 border-none text-white font-black">
                            {currentIdx + 1 >= questions.length ? 'Finalize Scan 🏆' : 'Next Zone ➡️'}
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};