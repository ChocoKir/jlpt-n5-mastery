"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    BarChart, Bar, XAxis, YAxis,
    CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts';
import { ActivityCalendar, ThemeInput } from 'react-activity-calendar';
import { Flame, TrendingUp, Target, Activity, BookOpen, Hash, MessageSquareQuote } from 'lucide-react';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { AnalyticsService, ActivityData } from '../application/services/analytics.service';

export const AnalyticsDashboard = () => {
    const [progress, setProgress] = useState<any>(null);
    const [mockHistory, setMockHistory] = useState<any[]>([]);
    const [heatmapData, setHeatmapData] = useState<ActivityData[]>([]);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadAnalytics = async () => {
            try {
                // 🛠️ FIX: Added 'await' here since it now calls Firebase!
                const mastery = await AnalyticsService.getMasteryProgress();
                const history = await AnalyticsService.getMockExamHistory();
                const activity = await AnalyticsService.getActivityData();
                const streak = AnalyticsService.calculateCurrentStreak(activity);

                setProgress(mastery);
                setMockHistory(history);
                setHeatmapData(activity);
                setCurrentStreak(streak);
            } catch (error) {
                console.error("Failed to load analytics:", error);
            } finally {
                setIsLoading(false);
            }
        };
        void loadAnalytics();
    }, []);

    if (isLoading || !progress) {
        return (
            <div className="max-w-5xl mx-auto py-32 text-center flex flex-col items-center">
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="text-6xl mb-6">
                    <Activity className="w-16 h-16 text-accent" />
                </motion.div>
                <h2 className="text-3xl font-black text-primary animate-pulse tracking-widest uppercase">Syncing Telemetry...</h2>
            </div>
        );
    }

    const readinessScore = Math.round((progress.vocab.percent + progress.kanji.percent + progress.grammar.percent) / 3);
    const totalLearned = progress.vocab.learned + progress.kanji.learned + progress.grammar.learned;

    const calendarTheme: ThemeInput = {
        light: ['hsl(var(--muted) / 0.2)', '#fed7aa', '#fb923c', '#ea580c', '#c2410c'],
        dark: ['hsl(var(--muted) / 0.1)', '#9a3412', '#c2410c', '#ea580c', '#f97316'],
    };

    const CustomExamTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            const score = payload[0].value;
            const isPassing = score >= 80;
            return (
                <div className="bg-card/90 backdrop-blur-xl border border-border/50 p-4 rounded-xl shadow-2xl z-50">
                    <p className="font-black text-muted mb-1 uppercase tracking-widest text-[10px]">{label}</p>
                    <p className={`text-3xl font-black drop-shadow-md ${isPassing ? 'text-green-500' : 'text-accent'}`}>
                        {score} <span className="text-lg text-muted">/ 180</span>
                    </p>
                    <p className="text-xs font-bold mt-1 text-primary">
                        {isPassing ? '✅ Passing Score' : '❌ Needs Improvement'}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="max-w-7xl mx-auto py-10 px-5 relative z-10 animate-in fade-in duration-500">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center sm:text-left">
                <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-2xl mb-4 text-accent border border-accent/20 shadow-[0_0_30px_rgba(255,42,84,0.2)]">
                    <Activity size={32} strokeWidth={2} />
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-primary drop-shadow-sm mb-2 tracking-tight">Combat Telemetry</h1>
                <p className="text-muted font-bold tracking-widest uppercase text-sm">Real-time N5 performance analytics</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard title="Overall Readiness" value={`${readinessScore}%`} icon={<Target size={24} />} color={readinessScore >= 80 ? "text-green-500" : "text-accent"} glow={readinessScore >= 80 ? "rgba(16,185,129,0.15)" : "rgba(255,42,84,0.15)"} />
                <StatCard title="Total Items Mastered" value={totalLearned.toLocaleString()} icon={<TrendingUp size={24} />} color="text-indigo-500" glow="rgba(99,102,241,0.15)" />
                <StatCard title="Consistency Streak" value={`${currentStreak} Days`} icon={<Flame size={24} />} color="text-orange-500" glow="rgba(249,115,22,0.15)" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                    <SpotlightCard className="p-6 h-full flex flex-col bg-card/60 backdrop-blur-md" glowColor="rgba(99, 102, 241, 0.15)">
                        <h3 className="text-xl font-black text-primary mb-8 flex items-center gap-2"><BookOpen className="text-indigo-500" /> Syllabus Completion</h3>
                        <div className="space-y-8 flex-grow flex flex-col justify-center">
                            <ProgressBar label="Vocabulary" current={progress.vocab.learned} total={progress.vocab.total} percent={progress.vocab.percent} colorClass="bg-orange-500" icon={<BookOpen size={16}/>} />
                            <ProgressBar label="Kanji" current={progress.kanji.learned} total={progress.kanji.total} percent={progress.kanji.percent} colorClass="bg-rose-500" icon={<Hash size={16}/>}/>
                            <ProgressBar label="Grammar" current={progress.grammar.learned} total={progress.grammar.total} percent={progress.grammar.percent} colorClass="bg-green-500" icon={<MessageSquareQuote size={16}/>}/>
                        </div>
                    </SpotlightCard>
                </motion.div>

                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="lg:col-span-2">
                    <SpotlightCard className="p-6 h-[400px] flex flex-col bg-card/60 backdrop-blur-md" glowColor="rgba(255, 42, 84, 0.15)">
                        <div className="flex justify-between items-end mb-6">
                            <h3 className="text-xl font-black text-primary flex items-center gap-2"><Target className="text-accent" /> Mock Exam Trends</h3>
                            <span className="text-[10px] font-black text-muted uppercase tracking-widest bg-background px-3 py-1.5 rounded-lg border border-border/50">Score out of 180</span>
                        </div>

                        {/* 🛠️ FIX: Recharts explicit sizing constraint */}
                        <div className="flex-grow w-full relative -ml-4" style={{ minHeight: '300px' }}>
                            {mockHistory.length > 0 ? (
                                <ResponsiveContainer width="99%" height={300}>
                                    <BarChart data={mockHistory} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
                                        <defs>
                                            <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/><stop offset="95%" stopColor="#6366F1" stopOpacity={0.2}/></linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} opacity={0.5} />
                                        <XAxis dataKey="label" stroke="hsl(var(--muted))" fontSize={12} tickLine={false} axisLine={false} fontWeight="bold" />
                                        <YAxis domain={[0, 180]} stroke="hsl(var(--muted))" fontSize={12} tickLine={false} axisLine={false} fontWeight="bold" />
                                        <Tooltip content={<CustomExamTooltip />} cursor={{ fill: 'hsl(var(--muted))', opacity: 0.1 }} />
                                        <ReferenceLine y={80} stroke="#EF4444" strokeDasharray="5 5" label={{ position: 'insideTopRight', value: 'PASS (80)', fill: '#EF4444', fontSize: 10, fontWeight: 'black' }} />
                                        <Bar dataKey="score" fill="url(#colorScore)" radius={[8, 8, 0, 0]} maxBarSize={60} />
                                    </BarChart>
                                </ResponsiveContainer>
                            ) : (
                                <div className="w-full h-full absolute inset-0 flex flex-col items-center justify-center text-muted">
                                    <Target size={48} className="opacity-20 mb-4" />
                                    <p className="font-bold">No Mock Exams completed yet.</p>
                                </div>
                            )}
                        </div>
                    </SpotlightCard>
                </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <SpotlightCard className="p-8 bg-card/60 backdrop-blur-md" glowColor="rgba(249, 115, 22, 0.15)">
                    <div className="flex justify-between items-center mb-8 border-b border-border/50 pb-4">
                        <h3 className="text-xl font-black text-primary flex items-center gap-2"><Flame className="text-orange-500" /> Consistency Grid</h3>
                        <span className="text-[10px] font-black text-muted uppercase tracking-widest bg-background px-3 py-1.5 rounded-lg border border-border/50">Last 6 Months</span>
                    </div>
                    <div className="flex justify-center overflow-x-auto pb-4 custom-scrollbar">
                        <div className="min-w-fit pr-4">
                            {/* 🛠️ FIX: Only render the calendar if data exists to prevent silent crashes */}
                            {heatmapData && heatmapData.length > 0 ? (
                                <ActivityCalendar
                                    data={heatmapData}
                                    theme={calendarTheme}
                                    showWeekdayLabels={true}
                                    colorScheme="dark"
                                    labels={{ totalCount: '{{count}} items studied in the last half year' }}
                                    blockSize={14}
                                    blockMargin={6}
                                    fontSize={12}
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center h-[150px] w-full text-muted opacity-60">
                                    <Flame size={32} className="mb-2" />
                                    <p className="text-sm font-bold tracking-widest uppercase">No Activity Data Yet</p>
                                    <p className="text-xs">Complete a quiz to start your streak!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </SpotlightCard>
            </motion.div>
        </div>
    );
};

const StatCard = ({ title, value, icon, color, glow }: any) => (
    <motion.div whileHover={{ y: -5 }}>
        <SpotlightCard className="p-6 bg-card/60 backdrop-blur-md border border-border/50" glowColor={glow}>
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-[10px] sm:text-xs font-black text-muted uppercase tracking-widest">{title}</h4>
                <div className={`p-2.5 bg-background rounded-xl shadow-sm border border-border/50 ${color}`}>{icon}</div>
            </div>
            <p className="text-3xl sm:text-4xl font-black text-primary tracking-tight drop-shadow-sm">{value}</p>
        </SpotlightCard>
    </motion.div>
);

const ProgressBar = ({ label, current, total, percent, colorClass, icon }: any) => (
    <div>
        <div className="flex justify-between items-end mb-2">
            <span className="font-bold text-primary flex items-center gap-2 text-sm sm:text-base"><span className={`p-1 rounded-md bg-background border border-border/50 shadow-sm ${colorClass.replace('bg-', 'text-')}`}>{icon}</span> {label}</span>
            <span className="text-xs font-black text-muted uppercase tracking-widest bg-background px-2 py-1 rounded-md border border-border/50 shadow-sm">{current} <span className="opacity-50">/ {total}</span></span>
        </div>
        <div className="w-full bg-background h-4 rounded-full overflow-hidden shadow-inner border border-border/50 relative">
            <motion.div initial={{ width: 0 }} animate={{ width: `${percent}%` }} transition={{ duration: 1.5, ease: "easeOut" }} className={`h-full relative overflow-hidden ${colorClass}`}><div className="absolute inset-0 bg-white/20 w-full h-1/2"></div></motion.div>
        </div>
    </div>
);