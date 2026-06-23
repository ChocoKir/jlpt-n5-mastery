"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { QuizService } from '@/features/quizzes/application/services/quiz.service';
import { MockExamQuestion } from '@/features/quizzes/domain/entities/quiz.entity';
import { playLevelUpFanfare, playWrongSound } from '@/shared/lib/audio/audio-service';
import { fireLevelUpConfetti } from '@/shared/lib/effects/particles';

import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { AnimatedCounter } from '@/shared/ui/AnimatedCounter';
import { FuriganaText } from '@/shared/ui/FuriganaText';
import { Flag, LayoutGrid, AlertTriangle, Maximize, Volume2 } from 'lucide-react';

import { useAuth } from '@/features/auth/presentation/hooks/useAuth';
import { srsService } from '@/features/spaced-repetition/application/services/srs.service';
import { GamificationService } from '@/features/gamification/application/services/gamification.service';
import { logDailyActivity } from '@/features/heatmap/application/services/activity.service';

import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';

const TOTAL_TIME_SECONDS = 105 * 60; // 105 Minutes

interface ExamSection {
    title: string;
    questions: MockExamQuestion[];
}

// ==========================================
// 💾 ZUSTAND EXAM STORE (WITH PERSISTENCE)
// ==========================================
interface ExamStore {
    examState: 'intro' | 'loading' | 'running' | 'finished';
    timeLeft: number;
    examSections: ExamSection[];
    currentSectionIdx: number;
    currentQuestionIdx: number;
    answers: Record<string, string>;
    flaggedQuestions: string[];
    cheatWarnings: number;

    setExamState: (state: 'intro' | 'loading' | 'running' | 'finished') => void;
    startNewExam: (sections: ExamSection[]) => void;
    tickTimer: () => void;
    setAnswer: (qId: string, answer: string) => void;
    toggleFlag: (qId: string) => void;
    navigate: (secIdx: number, qIdx: number) => void;
    addCheatWarning: () => void;
    resetExam: () => void;
}

const useExamStore = create<ExamStore>()(
    persist(
        (set) => ({
            examState: 'intro',
            timeLeft: TOTAL_TIME_SECONDS,
            examSections: [],
            currentSectionIdx: 0,
            currentQuestionIdx: 0,
            answers: {},
            flaggedQuestions: [],
            cheatWarnings: 0,

            setExamState: (state) => set({ examState: state }),
            startNewExam: (sections) => set({
                examState: 'running',
                examSections: sections,
                timeLeft: TOTAL_TIME_SECONDS,
                currentSectionIdx: 0,
                currentQuestionIdx: 0,
                answers: {},
                flaggedQuestions: [],
                cheatWarnings: 0
            }),
            tickTimer: () => set((state) => ({ timeLeft: Math.max(0, state.timeLeft - 1) })),
            setAnswer: (qId, answer) => set((state) => ({ answers: { ...state.answers, [qId]: answer } })),
            toggleFlag: (qId) => set((state) => {
                const isFlagged = state.flaggedQuestions.includes(qId);
                return { flaggedQuestions: isFlagged ? state.flaggedQuestions.filter(id => id !== qId) : [...state.flaggedQuestions, qId] };
            }),
            navigate: (secIdx, qIdx) => set({ currentSectionIdx: secIdx, currentQuestionIdx: qIdx }),
            addCheatWarning: () => set((state) => ({ cheatWarnings: state.cheatWarnings + 1 })),
            resetExam: () => set({ examState: 'intro', examSections: [], answers: {}, flaggedQuestions: [] })
        }),
        { name: 'jlpt-n5-mock-exam-storage' }
    )
);

export const MockExamRunner = () => {
    const router = useTransitionRouter();
    const [mounted, setMounted] = useState(false);
    const [showGrid, setShowGrid] = useState(false);
    const { user } = useAuth();
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);

    const {
        examState, timeLeft, examSections, currentSectionIdx, currentQuestionIdx,
        answers, flaggedQuestions, cheatWarnings,
        setExamState, startNewExam, tickTimer, setAnswer, toggleFlag, navigate, addCheatWarning, resetExam
    } = useExamStore();

    useEffect(() => setMounted(true), []);

    // 🕒 Timer Engine
    useEffect(() => {
        if (!mounted) return;
        let timer: NodeJS.Timeout;
        if (examState === 'running' && timeLeft > 0) {
            timer = setInterval(() => tickTimer(), 1000);
        } else if (timeLeft === 0 && examState === 'running') {
            handleSubmitExam();
        }
        return () => clearInterval(timer);
    }, [examState, timeLeft, mounted, tickTimer]);

    // 🛡️ ANTI-CHEAT: Tab Blur Detection
    useEffect(() => {
        if (!mounted || examState !== 'running') return;
        const handleVisibilityChange = () => {
            if (document.hidden) {
                addCheatWarning();
                toast.error("⚠️ SECURITY WARNING: TAB SWITCH DETECTED", {
                    description: "Leaving the exam environment is prohibited. Multiple infractions will void your exam.",
                    duration: 8000,
                    icon: <AlertTriangle className="text-red-500" />
                });
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, [examState, mounted, addCheatWarning]);

    // 🛡️ ANTI-CHEAT: Prevent Accidental Close/Refresh
    useEffect(() => {
        if (!mounted) return;
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (examState === 'running') {
                e.preventDefault();
                e.returnValue = '';
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [examState, mounted]);

    const enforceFullscreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.warn("Fullscreen request denied:", err);
            });
        }
    };

    const exitFullscreen = () => {
        if (document.fullscreenElement && document.exitFullscreen) {
            document.exitFullscreen().catch(() => {});
        }
    };

    const generateAndStartExam = async () => {
        setExamState('loading');
        enforceFullscreen();
        try {
            const questions = await QuizService.generateMockExam();
            const grouped = questions.reduce((acc: ExamSection[], q: MockExamQuestion) => {
                const sectionTitle = q.section || 'General';
                const section = acc.find((s) => s.title === sectionTitle);
                if (section) section.questions.push(q);
                else acc.push({ title: sectionTitle, questions: [q] });
                return acc;
            }, []);
            startNewExam(grouped);
        } catch (error) {
            console.error("Failed to load exam", error);
            setExamState('intro');
        }
    };

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    const calculateScore = () => {
        let correctCount = 0;
        let total = 0;
        examSections.forEach(section => {
            section.questions.forEach(q => {
                if (!q.id) return;
                total++;
                if (answers[String(q.id)] === q.correctAnswer) correctCount++;
            });
        });

        const percentage = correctCount / (total || 1);
        const estimatedScore = Math.round(percentage * 180);
        const passed = estimatedScore >= 80;

        return { correctCount, totalQuestions: total, estimatedScore, passed };
    };

    const handleSubmitExam = async () => {
        exitFullscreen();
        const { correctCount, totalQuestions, estimatedScore, passed } = calculateScore();

        if (passed) {
            playLevelUpFanfare();
            fireLevelUpConfetti();
        } else {
            playWrongSound();
        }

        setExamState('finished');

        // 1. Log Activity & XP
        void GamificationService.awardXP(estimatedScore, totalQuestions);
        logDailyActivity(estimatedScore * 5);
        if (typeof window !== 'undefined') window.dispatchEvent(new Event('gamificationUpdated'));

        if (user) {
            // ==== 🛠️ NEW: SAVE EXAM SCORE TO FIREBASE ====
            try {
                const examId = `exam_${Date.now()}`;
                await setDoc(doc(db, `users/${user.uid}/mock_exams`, examId), {
                    score: estimatedScore,
                    rawScore: correctCount,
                    passed: passed,
                    date: new Date().toISOString()
                });
            } catch (error) {
                console.error("Failed to save mock exam score:", error);
            }
            // ==============================================

            // 2. Sync missed questions to Spaced Repetition (Review Tab)
            const missedItems: any[] = [];
            examSections.forEach(section => {
                section.questions.forEach(q => {
                    if (q.id && answers[String(q.id)] !== q.correctAnswer) {
                        missedItems.push(q);
                    }
                });
            });

            if (missedItems.length > 0) {
                try {
                    await srsService.processQuizResults(user.uid, missedItems);
                } catch (error) {
                    console.error("Failed to sync Mock Exam SRS:", error);
                }
            }
        }
    };

    // 🛡️ SECURITY: Smart Submission Check
    const handleAttemptSubmit = () => {
        const answeredCount = Object.keys(answers).length;
        if (answeredCount < totalExamQuestions) {
            const confirmUnanswered = window.confirm(`⚠️ WARNING: You have ${totalExamQuestions - answeredCount} UNANSWERED questions! \n\nAre you absolutely sure you want to submit?`);
            if (confirmUnanswered) handleSubmitExam();
        } else {
            const confirmSubmit = window.confirm("Are you sure you are ready to submit your exam?");
            if (confirmSubmit) handleSubmitExam();
        }
    };

    const handleNext = () => {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
        const currentSection = examSections[currentSectionIdx];
        if (currentQuestionIdx < currentSection.questions.length - 1) {
            navigate(currentSectionIdx, currentQuestionIdx + 1);
        } else if (currentSectionIdx < examSections.length - 1) {
            navigate(currentSectionIdx + 1, 0);
        }
    };

    const handlePrev = () => {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
        if (currentQuestionIdx > 0) {
            navigate(currentSectionIdx, currentQuestionIdx - 1);
        } else if (currentSectionIdx > 0) {
            navigate(currentSectionIdx - 1, examSections[currentSectionIdx - 1].questions.length - 1);
        }
    };

    const playListeningAudio = (text: string) => {
        if (typeof window === 'undefined') return;
        setIsPlayingAudio(true);
        window.speechSynthesis.cancel();

        // Strip English from the string so the Japanese voice engine doesn't sound glitchy
        const japaneseOnly = text.replace(/[a-zA-Z]/g, '');
        const utterance = new SpeechSynthesisUtterance(japaneseOnly);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85;

        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
    };

    const { globalQuestionIndex, totalExamQuestions } = useMemo(() => {
        let globalIndex = 0;
        let totalQ = 0;
        examSections.forEach((s, sIdx) => {
            s.questions.forEach((_, qIdx) => {
                totalQ++;
                if (sIdx < currentSectionIdx || (sIdx === currentSectionIdx && qIdx < currentQuestionIdx)) {
                    globalIndex++;
                }
            });
        });
        return { globalQuestionIndex: globalIndex, totalExamQuestions: totalQ };
    }, [examSections, currentSectionIdx, currentQuestionIdx]);

    if (!mounted) return null;

    // --- RENDER: INTRO ---
    if (examState === 'intro') {
        return (
            <div className="max-w-2xl mx-auto my-20 px-5 text-center relative z-10">
                <SpotlightCard glowColor="rgba(220, 38, 38, 0.15)" className="p-12 border-t-8 border-red-600 shadow-2xl bg-card/80 backdrop-blur-xl">
                    <span className="text-6xl block mb-6 drop-shadow-md">⛩️</span>
                    <h1 className="text-4xl font-black text-primary mb-4 tracking-tight">JLPT N5 Mock Exam</h1>
                    <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-6 rounded-2xl text-left mb-8 shadow-inner">
                        <p className="mb-3 font-black text-lg flex items-center gap-2"><AlertTriangle size={20} /> THE GAUNTLET RULES</p>
                        <ul className="list-disc pl-5 space-y-2 font-bold text-sm">
                            <li>You have exactly <strong>105 minutes</strong> to complete all modules.</li>
                            <li>The exam will run in <span className="underline decoration-wavy">Fullscreen Mode</span>.</li>
                            <li>Your progress is <strong>auto-saved</strong> if you accidentally refresh.</li>
                            <li><strong>Anti-Cheat is active.</strong> Highlighting text, copy/pasting, and tab switching are prohibited.</li>
                            <li>You must score at least <strong>80 / 180</strong> to pass.</li>
                        </ul>
                    </div>
                    <Button onClick={generateAndStartExam} className="w-full text-xl py-6 font-black bg-red-600 hover:bg-red-700 border-none shadow-[0_0_20px_rgba(220,38,38,0.3)] text-white flex items-center justify-center gap-2">
                        <Maximize size={20} /> Enter Fullscreen & Start
                    </Button>
                </SpotlightCard>
            </div>
        );
    }

    // --- RENDER: LOADING ---
    if (examState === 'loading') {
        return (
            <div className="max-w-2xl mx-auto my-32 px-5 text-center animate-pulse relative z-10">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }} className="text-6xl mb-6 inline-block">⚙️</motion.div>
                <h2 className="text-3xl font-black text-primary tracking-tight">Generating Secure Exam...</h2>
            </div>
        );
    }

    // --- RENDER: FINISHED ---
    if (examState === 'finished') {
        const { correctCount, totalQuestions, estimatedScore, passed } = calculateScore();
        return (
            <div className="max-w-2xl mx-auto my-10 px-5 text-center relative z-10">
                <SpotlightCard glowColor={passed ? "rgba(16, 185, 129, 0.2)" : "rgba(220, 38, 38, 0.2)"} className={`p-12 shadow-2xl border-t-8 ${passed ? 'border-green-500' : 'border-red-500'} bg-card/80`}>
                    <h2 className="text-xl font-black text-muted mb-4 uppercase tracking-widest">Exam Complete</h2>
                    <h1 className={`text-6xl font-black mb-8 drop-shadow-md ${passed ? 'text-green-500' : 'text-red-500'}`}>
                        {passed ? 'PASSED 🎉' : 'FAILED ❌'}
                    </h1>

                    {cheatWarnings > 0 && (
                        <div className="bg-red-500/10 text-red-500 p-4 rounded-xl mb-6 font-bold flex items-center justify-center gap-2 border border-red-500/30">
                            <AlertTriangle size={20} /> {cheatWarnings} Security Infractions Logged
                        </div>
                    )}

                    <div className="flex justify-center gap-8 mb-10 p-8 bg-background/50 border border-border/50 rounded-3xl shadow-inner">
                        <div className="flex-1 text-center">
                            <p className="text-xs font-black text-muted uppercase tracking-widest mb-2">Raw Accuracy</p>
                            <p className="text-4xl font-black text-primary leading-none">
                                <AnimatedCounter value={correctCount} /> <span className="text-2xl text-muted">/ {totalQuestions}</span>
                            </p>
                        </div>
                        <div className="w-px bg-border/50"></div>
                        <div className="flex-1 text-center">
                            <p className="text-xs font-black text-muted uppercase tracking-widest mb-2">Scaled Score</p>
                            <p className="text-4xl font-black text-primary leading-none">
                                <AnimatedCounter value={estimatedScore} /> <span className="text-2xl text-muted">/ 180</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Button variant="secondary" onClick={resetExam} className="flex-1 font-black py-6 border-2 hover:bg-card">Discard & Retake</Button>
                        <Button onClick={() => { resetExam(); router.push('/dashboard'); }} className="flex-1 font-black py-6 shadow-lg bg-red-600 hover:bg-red-700 border-none text-white">Return to Base</Button>
                    </div>
                </SpotlightCard>
            </div>
        );
    }

    const currentSection = examSections[currentSectionIdx];
    const currentQuestion = currentSection?.questions[currentQuestionIdx];
    if (!currentSection || !currentQuestion) return null;

    const isFirstQuestion = currentSectionIdx === 0 && currentQuestionIdx === 0;
    const isLastQuestion = currentSectionIdx === examSections.length - 1 && currentQuestionIdx === currentSection.questions.length - 1;
    const safeQuestionId = String(currentQuestion.id || 'unknown');
    const isFlagged = flaggedQuestions.includes(safeQuestionId);
    const isListeningSection = currentSection.title.includes('Listening') || currentSection.title.includes('聴解');

    // --- RENDER: RUNNING ---
    return (
        // 🛡️ SECURITY: Prevent copy, cut, paste, and text selection
        <div
            className="max-w-4xl mx-auto my-10 px-5 relative z-10 select-none"
            onCopy={(e) => e.preventDefault()}
            onCut={(e) => e.preventDefault()}
            onPaste={(e) => e.preventDefault()}
            onContextMenu={(e) => e.preventDefault()}
        >
            <div className="sticky top-4 z-50 bg-background/95 backdrop-blur-xl border-2 border-red-500/50 rounded-2xl p-4 sm:p-6 flex justify-between items-center shadow-[0_0_30px_rgba(220,38,38,0.1)] mb-6">
                <div>
                    <h3 className="font-black text-red-500 uppercase tracking-widest text-[10px] mb-1">Section {currentSectionIdx + 1} of {examSections.length}</h3>
                    <p className="font-black text-primary text-sm sm:text-base leading-tight">{currentSection.title}</p>
                </div>
                <div className="flex items-center gap-6">
                    <button onClick={() => setShowGrid(!showGrid)} className="text-muted hover:text-primary transition-colors flex flex-col items-center gap-1">
                        <LayoutGrid size={24} />
                        <span className="text-[10px] font-black uppercase tracking-widest">Jump</span>
                    </button>
                    <div className="text-right">
                        <p className="font-black text-red-500 uppercase tracking-widest text-[10px] mb-1">Time Remaining</p>
                        <p className={`text-2xl sm:text-3xl font-black font-mono tracking-tighter leading-none ${timeLeft < 300 ? 'text-red-500 animate-pulse' : 'text-primary'}`}>
                            {formatTime(timeLeft)}
                        </p>
                    </div>
                </div>
            </div>

            <ProgressBar current={globalQuestionIndex} total={totalExamQuestions} className="mb-6" indicatorClassName="bg-red-500" />

            {/* 🗺️ THE JUMP GRID */}
            <AnimatePresence>
                {showGrid && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden mb-8">
                        <div className="p-6 bg-card/80 backdrop-blur-md border-2 border-border/50 rounded-3xl shadow-inner">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="font-black text-primary">Exam Overview</h4>
                                <div className="flex gap-4 text-xs font-bold text-muted">
                                    <span className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500/20 border-green-500 border rounded-sm"></div> Answered</span>
                                    <span className="flex items-center gap-1"><div className="w-3 h-3 bg-yellow-500/20 border-yellow-500 border rounded-sm"></div> Flagged</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {currentSection.questions.map((q, idx) => {
                                    const qId = String(q.id);
                                    const answered = answers[qId] !== undefined;
                                    const flagged = flaggedQuestions.includes(qId);
                                    const isCurrent = currentQuestionIdx === idx;

                                    let bgClass = "bg-background border-border/50 text-muted hover:border-primary";
                                    if (answered) bgClass = "bg-green-500/10 border-green-500 text-green-600";
                                    if (flagged) bgClass = "bg-yellow-500/10 border-yellow-500 text-yellow-600 font-black";
                                    if (isCurrent) bgClass += " ring-2 ring-primary ring-offset-2 ring-offset-background scale-110";

                                    return (
                                        <button key={idx} onClick={() => { navigate(currentSectionIdx, idx); setShowGrid(false); }} className={`w-10 h-10 rounded-lg border-2 font-black text-sm flex items-center justify-center transition-all ${bgClass}`}>
                                            {idx + 1}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                <motion.div key={safeQuestionId} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
                    <SpotlightCard glowColor="rgba(220, 38, 38, 0.05)" className="p-6 sm:p-10 shadow-xl border-t-8 border-accent mb-8 min-h-[400px] flex flex-col bg-card/80 backdrop-blur-md">
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-border/50">
                            <span className="font-black text-muted uppercase tracking-widest text-[10px] sm:text-xs">
                                Question {currentQuestionIdx + 1} of {currentSection.questions.length}
                            </span>

                            <div className="flex gap-3">
                                <button onClick={() => toggleFlag(safeQuestionId)} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-[10px] sm:text-xs font-black uppercase tracking-widest transition-colors ${isFlagged ? 'bg-yellow-500/10 text-yellow-600 border-yellow-500/30' : 'bg-card text-muted hover:text-primary border-border/50'}`}>
                                    <Flag size={14} className={isFlagged ? 'fill-yellow-600' : ''} /> {isFlagged ? 'Flagged' : 'Flag'}
                                </button>
                                <span className={`hidden sm:inline-block text-[10px] sm:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border ${answers[safeQuestionId] !== undefined ? 'bg-green-500/10 text-green-500 border-green-500/30' : 'bg-card text-muted border-border/50'}`}>
                                    {answers[safeQuestionId] !== undefined ? 'Answered ✓' : 'Pending'}
                                </span>
                            </div>
                        </div>

                        {/* Audio Player for Listening Section */}
                        {isListeningSection && (
                            <div className="bg-cyan-500/10 p-6 rounded-2xl border border-cyan-500/30 mb-8 flex flex-col items-center justify-center">
                                <button onClick={() => playListeningAudio(currentQuestion.question)} className={`relative w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all border-4 outline-none mb-4 ${isPlayingAudio ? 'bg-cyan-50 text-cyan-500 border-cyan-400 scale-110' : 'bg-background text-primary border-border hover:border-cyan-400 hover:scale-105'}`}>
                                    {isPlayingAudio && <motion.div animate={{ scale: [1, 1.5], opacity: [0.5, 0] }} transition={{ repeat: Infinity }} className="absolute inset-0 bg-cyan-400 rounded-full" />}
                                    <Volume2 size={32} className={`relative z-10 ${isPlayingAudio ? 'animate-pulse' : ''}`} />
                                </button>
                                <p className="text-[10px] font-black text-cyan-600 uppercase tracking-widest">Play Audio Track</p>
                            </div>
                        )}

                        {currentQuestion.passage && !isListeningSection && (
                            <div className="bg-background/60 p-6 rounded-2xl border border-border/50 mb-8 shadow-inner">
                                <p className="text-[10px] font-black text-muted uppercase tracking-widest mb-3">📖 Reading Passage</p>
                                <p className="text-lg sm:text-xl font-bold text-primary whitespace-pre-wrap leading-loose font-japanese"><FuriganaText>{currentQuestion.passage}</FuriganaText></p>
                            </div>
                        )}

                        <h2 className="text-2xl sm:text-3xl font-black text-primary mb-10 leading-relaxed whitespace-pre-wrap font-japanese drop-shadow-sm">
                            <FuriganaText>{currentQuestion.question}</FuriganaText>
                        </h2>

                        <div className="space-y-4 mt-auto">
                            {currentQuestion.options.map((opt, idx) => {
                                const isSelected = answers[safeQuestionId] === opt;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => setAnswer(safeQuestionId, opt)}
                                        className={`w-full text-left p-5 sm:p-6 rounded-2xl border-2 text-lg sm:text-xl font-bold transition-all duration-200 outline-none flex items-center ${
                                            isSelected
                                                ? 'border-accent bg-accent/10 text-accent shadow-[0_0_15px_rgba(255,42,84,0.15)] scale-[1.01]'
                                                : 'border-border/50 bg-background/50 hover:border-accent/50 hover:bg-accent/5 text-primary'
                                        }`}
                                    >
                                        <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg border-2 mr-4 text-sm font-black shrink-0 ${isSelected ? 'border-accent text-accent' : 'border-border/50 text-muted'}`}>
                                            {idx + 1}
                                        </span>
                                        <span className="font-japanese"><FuriganaText>{opt}</FuriganaText></span>
                                    </button>
                                );
                            })}
                        </div>
                    </SpotlightCard>
                </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center gap-4">
                <Button onClick={handlePrev} disabled={isFirstQuestion} variant="secondary" className="px-6 sm:px-10 py-6 font-black border-2 hover:bg-card">
                    ⬅️ Previous
                </Button>

                {isLastQuestion ? (
                    <Button onClick={handleAttemptSubmit} className="px-6 sm:px-10 py-6 bg-red-600 hover:bg-red-700 border-none text-white font-black shadow-[0_0_20px_rgba(220,38,38,0.3)]">
                        Submit Exam 📝
                    </Button>
                ) : (
                    <Button onClick={handleNext} className="px-6 sm:px-10 py-6 font-black shadow-lg">
                        Next ➡️
                    </Button>
                )}
            </div>
        </div>
    );
};