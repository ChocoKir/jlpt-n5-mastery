"use client";

import React from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { motion, Variants } from 'framer-motion';
import {
    BookOpen, Headphones, Sparkles, Mic, // 🚀 ADDED 'Mic'
    Swords, Settings2, WholeWord, Target,
    MessageSquareQuote, TextSelect, Zap, MessageCircle, ScanSearch, FileText
} from 'lucide-react';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { WebGLBackground } from '@/shared/ui/WebGLBackground';

export default function QuizCenterHub() {
    const router = useTransitionRouter();

    const containerVars: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
    };

    const itemVars: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } }
    };

    return (
        <div className="relative min-h-[80vh] flex flex-col justify-center">
            <WebGLBackground />

            <div className="max-w-7xl mx-auto py-10 px-5 relative z-10 w-full">
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-accent/10 rounded-3xl mb-4 text-accent border border-accent/20 shadow-[0_0_30px_rgba(255,42,84,0.2)] backdrop-blur-md">
                        <Swords size={48} strokeWidth={1.5} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-primary drop-shadow-lg mb-3 tracking-tight font-japanese">
                        The Proving Grounds
                    </h1>
                    <p className="text-muted font-bold tracking-widest uppercase text-sm">Select your trial</p>
                </motion.div>

                <motion.div variants={containerVars} initial="hidden" animate="visible" className="space-y-12">

                    {/* ADVANCED TRIALS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div variants={itemVars}>
                            <HeroCard
                                title="The Gauntlet" desc="Full 105-minute N5 Mock Exam." icon={<Target size={40} />}
                                color="border-accent text-accent" glow="rgba(255, 42, 84, 0.2)"
                                onClick={() => router.push('/quiz/mock-exam')}
                            />
                        </motion.div>
                        <motion.div variants={itemVars}>
                            <HeroCard
                                title="Custom Training" desc="Configure focus, length, and modules." icon={<Settings2 size={40} />}
                                color="border-indigo-500 text-indigo-500" glow="rgba(99, 102, 241, 0.2)"
                                onClick={() => router.push('/quiz/custom')}
                            />
                        </motion.div>
                    </div>

                    {/* STANDARD ASSESSMENTS */}
                    <div>
                        <h3 className="text-sm font-black text-muted uppercase tracking-widest mb-4 ml-2 flex items-center gap-2">
                            <BookOpen size={16} /> Standard Assessments
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <motion.div variants={itemVars}><ModuleCard title="Vocabulary" icon={<BookOpen />} onClick={() => router.push('/quiz/vocab')} color="text-orange-500" glow="rgba(249, 115, 22, 0.2)" /></motion.div>
                            <motion.div variants={itemVars}><ModuleCard title="Kanji" icon={<TextSelect />} onClick={() => router.push('/quiz/kanji')} color="text-rose-500" glow="rgba(244, 63, 94, 0.2)" /></motion.div>
                            <motion.div variants={itemVars}><ModuleCard title="Grammar" icon={<MessageSquareQuote />} onClick={() => router.push('/quiz/grammar')} color="text-green-500" glow="rgba(16, 185, 129, 0.2)" /></motion.div>
                            <motion.div variants={itemVars}><ModuleCard title="Reading" icon={<FileText />} onClick={() => router.push('/quiz/reading')} color="text-violet-500" glow="rgba(139, 92, 246, 0.2)" /></motion.div>
                        </div>
                    </div>

                    {/* SPECIALIZED MINI-GAMES */}
                    <div>
                        <h3 className="text-sm font-black text-muted uppercase tracking-widest mb-4 ml-2 flex items-center gap-2">
                            <Zap size={16} /> Specialized Training
                        </h3>
                        {/* 🛠️ FIX: Changed grid-cols-4 to grid-cols-3 or let it wrap naturally with 9 items */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <motion.div variants={itemVars}><ModuleCard title="Vocab Swipe" icon={<Zap />} onClick={() => router.push('/quiz/vocab-swipe')} color="text-orange-400" glow="rgba(251, 146, 60, 0.2)" /></motion.div>
                            <motion.div variants={itemVars}><ModuleCard title="Kanji Context" icon={<TextSelect />} onClick={() => router.push('/quiz/kanji-context')} color="text-rose-400" glow="rgba(251, 113, 133, 0.2)" /></motion.div>
                            <motion.div variants={itemVars}><ModuleCard title="Syntax Star" icon={<Sparkles />} onClick={() => router.push('/quiz/star')} color="text-yellow-500" glow="rgba(234, 179, 8, 0.2)" /></motion.div>
                            <motion.div variants={itemVars}><ModuleCard title="Cloze Passages" icon={<FileText />} onClick={() => router.push('/quiz/cloze')} color="text-violet-400" glow="rgba(167, 139, 250, 0.2)" /></motion.div>
                            <motion.div variants={itemVars}><ModuleCard title="Info Retrieval" icon={<ScanSearch />} onClick={() => router.push('/quiz/info-retrieval')} color="text-blue-500" glow="rgba(59, 130, 246, 0.2)" /></motion.div>
                            <motion.div variants={itemVars}><ModuleCard title="Synonyms" icon={<WholeWord />} onClick={() => router.push('/quiz/synonyms')} color="text-emerald-500" glow="rgba(16, 185, 129, 0.2)" /></motion.div>
                            <motion.div variants={itemVars}><ModuleCard title="LINE Chat" icon={<MessageCircle />} onClick={() => router.push('/quiz/grammar-chat')} color="text-green-400" glow="rgba(74, 222, 128, 0.2)" /></motion.div>
                            <motion.div variants={itemVars}><ModuleCard title="Spatial Audio" icon={<Headphones />} onClick={() => router.push('/quiz/listening-hotspot')} color="text-cyan-400" glow="rgba(34, 211, 238, 0.2)" /></motion.div>
                            {/* 🚀 NEW: Speaking Quiz Link */}
                            <motion.div variants={itemVars}><ModuleCard title="Speaking Drills" icon={<Mic />} onClick={() => router.push('/quiz/speaking')} color="text-pink-500" glow="rgba(236, 72, 153, 0.2)" /></motion.div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}

// Sub-components utilizing our SpotlightCards
const HeroCard = ({ title, desc, icon, color, glow, onClick }: any) => (
    <SpotlightCard
        glowColor={glow}
        onClick={onClick}
        className={`p-8 cursor-pointer outline-none flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 group border-2 border-border/50 hover:border-current transition-colors bg-card/60 backdrop-blur-md ${color}`}
    >
        <div className="bg-background/80 p-4 rounded-2xl border border-border/50 shadow-inner group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <div>
            <h3 className="text-3xl font-black mb-1 tracking-tight text-primary group-hover:text-current transition-colors">{title}</h3>
            <p className="font-bold opacity-80 text-sm text-muted">{desc}</p>
        </div>
    </SpotlightCard>
);

const ModuleCard = ({ title, icon, color, glow, onClick }: any) => (
    <SpotlightCard
        glowColor={glow}
        onClick={onClick}
        className={`p-6 cursor-pointer outline-none flex flex-col items-center text-center group border-2 border-border/50 hover:border-current transition-colors bg-card/60 backdrop-blur-md ${color}`}
    >
        <div className="mb-4 text-muted group-hover:text-current group-hover:scale-110 transition-all">{icon}</div>
        <h3 className="text-sm font-black tracking-wide text-primary group-hover:text-current transition-colors">{title}</h3>
    </SpotlightCard>
);