"use client";

import React, { useEffect, useState } from 'react';
import { Link } from 'next-view-transitions';
import { motion, Variants } from 'framer-motion';
import { useAuth } from '@/features/auth/presentation/hooks/useAuth';
import { getUserDashboardData, DashboardStats } from '../application/services/dashboard.service';

import { DailyQuests } from '@/features/quests/presentation/DailyQuests';
import { StudyHeatmap } from '@/features/heatmap/presentation/StudyHeatmap';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { AnimatedCounter } from '@/shared/ui/AnimatedCounter';
import { Trophy, Flame, Target, Sparkles, Swords, BookOpen, Headphones } from 'lucide-react';

export default function Dashboard() {
    const { user } = useAuth();
    const displayName = user?.displayName || user?.email?.split('@')[0] || "Ninja";
    const [stats, setStats] = useState<DashboardStats | null>(null);

    // Dynamic Time-of-Day Greeting
    const hour = new Date().getHours();
    let greeting = "Good evening";
    if (hour < 12) greeting = "Good morning";
    else if (hour < 18) greeting = "Good afternoon";

    useEffect(() => {
        if (user?.uid) {
            getUserDashboardData(user.uid).then(setStats);
        }
    }, [user]);

    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
    };

    return (
        <div className="max-w-7xl mx-auto py-10 px-5 relative z-10 overflow-hidden">
            {/* Header Area */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
                <h2 className="text-xl font-black text-muted uppercase tracking-widest mb-1 flex items-center gap-2">
                    <Sparkles size={18} className="text-yellow-500" /> {greeting}
                </h2>
                <h1 className="text-4xl md:text-5xl font-black text-primary tracking-tight">
                    Ready to train, <span className="text-accent">{displayName}</span>?
                </h1>
            </motion.div>

            {/* Top Stats Row */}
            {stats && (
                <motion.div variants={containerVariants} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <motion.div variants={itemVariants}>
                        <SpotlightCard glowColor="rgba(234, 179, 8, 0.15)" className="p-8 border-t-8 border-yellow-500 bg-card/60 backdrop-blur-xl h-full flex flex-col justify-center">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-xs font-black text-muted uppercase tracking-widest">Total Experience</p>
                                <Trophy size={20} className="text-yellow-500" />
                            </div>
                            <h2 className="text-5xl font-black text-primary flex items-end gap-2">
                                <AnimatedCounter value={stats.xp} /> <span className="text-2xl text-yellow-500 pb-1">XP</span>
                            </h2>
                        </SpotlightCard>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <SpotlightCard glowColor="rgba(59, 130, 246, 0.15)" className="p-8 border-t-8 border-blue-500 bg-card/60 backdrop-blur-xl h-full flex flex-col justify-center">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-xs font-black text-muted uppercase tracking-widest">Current Rank</p>
                                <Target size={20} className="text-blue-500" />
                            </div>
                            <h2 className="text-5xl font-black text-primary">Level <AnimatedCounter value={stats.level} /></h2>
                        </SpotlightCard>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <SpotlightCard glowColor="rgba(239, 68, 68, 0.15)" className="p-8 border-t-8 border-red-500 bg-card/60 backdrop-blur-xl h-full flex flex-col justify-center">
                            <div className="flex items-center justify-between mb-2">
                                <p className="text-xs font-black text-muted uppercase tracking-widest">Study Streak</p>
                                <Flame size={20} className="text-red-500" />
                            </div>
                            <h2 className="text-5xl font-black text-primary flex items-end gap-2">
                                <AnimatedCounter value={stats.currentStreak} /> <span className="text-2xl text-red-500 pb-1">Days</span>
                            </h2>
                        </SpotlightCard>
                    </motion.div>
                </motion.div>
            )}

            {/* The Gauntlet (Hero Section) */}
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-14">
                <Link href="/quiz/mock-exam" className="block outline-none group">
                    <SpotlightCard glowColor="rgba(220, 38, 38, 0.2)" className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 bg-red-500/5 border-2 border-red-500/20 border-l-8 border-l-red-600 transition-all duration-300 group-hover:border-red-500/50">
                        <div className="text-7xl md:text-8xl drop-shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">⛩️</div>
                        <div className="text-center md:text-left">
                            <h2 className="text-xs font-black text-red-500 uppercase tracking-widest mb-2 flex items-center justify-center md:justify-start gap-2">
                                <Swords size={16} /> The Ultimate Challenge
                            </h2>
                            <h3 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-3">Official JLPT N5 Mock Exam</h3>
                            <p className="text-muted text-lg font-bold mb-4">105 Minutes • 89 Questions • Authentic Grading</p>
                            <span className="inline-block bg-red-600 text-white font-black px-6 py-2 rounded-xl shadow-lg shadow-red-500/30 group-hover:bg-red-500 transition-colors">
                                Enter The Gauntlet ➡️
                            </span>
                        </div>
                    </SpotlightCard>
                </Link>
            </motion.section>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-14">
                <div className="lg:col-span-2 space-y-10">
                    {/* Data Library */}
                    <section>
                        <h2 className="text-2xl font-black text-primary mb-6 flex items-center gap-3 border-b-2 border-border/50 pb-4">
                            <span className="text-3xl">📖</span> The Library
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <StudyCard icon="🔤" title="Kana" desc="Basic Alphabet" href="/study/kana" colorClass="border-blue-500" />
                            <StudyCard icon="📚" title="Vocab" desc="800 Words" href="/study/vocab" colorClass="border-orange-500" />
                            <StudyCard icon="🏯" title="Kanji" desc="103 Characters" href="/study/kanji" colorClass="border-rose-500" />
                            <StudyCard icon="📐" title="Grammar" desc="74 Rules" href="/study/grammar" colorClass="border-green-500" />
                        </div>
                    </section>

                    {/* Heatmap & Quests */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <StudyHeatmap />
                        <DailyQuests />
                    </div>
                </div>

                {/* Training Grounds - Categorized Vertical List */}
                <div className="lg:col-span-1">
                    <section className="bg-card/40 backdrop-blur-xl border-2 border-border/50 rounded-3xl p-6 shadow-xl h-full">
                        <h2 className="text-2xl font-black text-primary mb-6 flex items-center gap-3 border-b-2 border-border/50 pb-4">
                            <span className="text-3xl">⚔️</span> Training Grounds
                        </h2>

                        <div className="space-y-8">
                            {/* Core Reflexes */}
                            <div>
                                <h3 className="text-[10px] font-black text-muted uppercase tracking-widest mb-3 flex items-center gap-2"><Flame size={14} className="text-orange-500" /> Core Reflexes</h3>
                                <div className="space-y-2">
                                    <MiniGameLink icon="⚡" title="Kana Speed Match" href="/quiz/kana-speed-match" />
                                    <MiniGameLink icon="🎴" title="Vocab Swipe" href="/quiz/vocab-swipe" />
                                    <MiniGameLink icon="🧩" title="Vocab Memory" href="/quiz/vocab-memory" />
                                    <MiniGameLink icon="✍️" title="Kanji Draw Pad" href="/quiz/kanji" />
                                </div>
                            </div>

                            {/* Applied Reading */}
                            <div>
                                <h3 className="text-[10px] font-black text-muted uppercase tracking-widest mb-3 flex items-center gap-2"><BookOpen size={14} className="text-blue-500" /> Applied Reading</h3>
                                <div className="space-y-2">
                                    <MiniGameLink icon="🧱" title="Syntax Scramble" href="/quiz/grammar-scramble" />
                                    <MiniGameLink icon="🎭" title="Synonym Match" href="/quiz/synonyms" />
                                    <MiniGameLink icon="📄" title="Cloze Passages" href="/quiz/cloze" />
                                    <MiniGameLink icon="🕵️‍♂️" title="Info Retrieval" href="/quiz/info-retrieval" />
                                </div>
                            </div>

                            {/* Immersion */}
                            <div>
                                <h3 className="text-[10px] font-black text-muted uppercase tracking-widest mb-3 flex items-center gap-2"><Headphones size={14} className="text-emerald-500" /> Immersion</h3>
                                <div className="space-y-2">
                                    <MiniGameLink icon="📱" title="LINE Pragmatics" href="/quiz/grammar-chat" />
                                    <MiniGameLink icon="🎯" title="Spatial Listening" href="/quiz/listening-hotspot" />
                                    <MiniGameLink icon="🎙️" title="Speaking Drills" href="/quiz/speaking" />
                                    <MiniGameLink icon="🎧" title="Audio Exams" href="/quiz/listening" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

// ---------------------------------------------------------
// Sub-Components
// ---------------------------------------------------------

const StudyCard = ({ icon, title, desc, href, colorClass }: { icon: string, title: string, desc: string, href: string, colorClass: string }) => (
    <Link href={href} className="block h-full outline-none group">
        <SpotlightCard className={`h-full flex flex-col p-5 cursor-pointer transition-all duration-300 border-t-4 border-t-transparent group-hover:${colorClass} bg-card/60 backdrop-blur-md`}>
            <div className="text-4xl mb-3 drop-shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 origin-bottom-left">{icon}</div>
            <h3 className="m-0 mb-1 text-primary font-black text-lg leading-tight">{title}</h3>
            <p className="text-muted m-0 font-bold text-xs">{desc}</p>
        </SpotlightCard>
    </Link>
);

const MiniGameLink = ({ icon, title, href }: { icon: string, title: string, href: string }) => (
    <Link href={href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-background/80 border border-transparent hover:border-border/50 transition-colors group outline-none">
        <span className="text-xl bg-background p-1.5 rounded-lg border border-border/50 shadow-sm group-hover:scale-110 transition-transform">{icon}</span>
        <span className="font-bold text-primary text-sm tracking-wide group-hover:text-accent transition-colors">{title}</span>
        <span className="ml-auto opacity-0 group-hover:opacity-100 text-accent transition-opacity text-xs font-black">PLAY ➡️</span>
    </Link>
);