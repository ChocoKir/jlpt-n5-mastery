"use client";

import React, { useState, useEffect } from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { motion } from 'framer-motion';
import { useAuth } from '@/features/auth/presentation/hooks/useAuth';
import { FirebaseGamificationRepository } from '@/features/gamification/infrastructure/firebase/gamification.repository';
import { UserProfileService } from '@/features/user/application/services/user-profile.service';
import { UserProfileData } from '@/features/user/domain/entities/user-profile.entity';

import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { StudyHeatmap } from '@/features/heatmap/presentation/StudyHeatmap';
import { Achievements } from '@/features/achievements/presentation/Achievements';

export default function DashboardPage() {
    const { user } = useAuth();
    const router = useTransitionRouter();

    const [stats, setStats] = useState<any>(null);
    const [profile, setProfile] = useState<UserProfileData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!user?.uid) return;

        const loadDashboardData = async () => {
            try {
                // Fetch stats and active profile credentials concurrently
                const repo = new FirebaseGamificationRepository();
                const [userStats, profileData] = await Promise.all([
                    repo.getUserStats(user.uid),
                    UserProfileService.getProfile(user.uid)
                ]);

                if (userStats) {
                    setStats(userStats.toJSON());
                } else {
                    setStats({ level: 1, xp: 0, currentStreak: 0 });
                }

                if (profileData) {
                    setProfile(profileData);
                }
            } catch (error) {
                console.error("Failed to load dashboard sync data:", error);
                setStats({ level: 1, xp: 0, currentStreak: 0 });
            } finally {
                setIsLoading(false);
            }
        };

        void loadDashboardData();
    }, [user?.uid]);

    // Avatar presentation validator (detect emoji block vs cropped Base64 frame)
    const isAvatarUrl = profile?.avatar && (profile.avatar.startsWith('data:image') || profile.avatar.startsWith('http'));

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto py-10 px-5">
                {/* Premium Frosted Glass Greeting */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 mb-10 rounded-3xl border-2 border-border/60 bg-card/40 backdrop-blur-3xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                >
                    <div className="flex items-center gap-5">
                        {/* 🚀 Dynamic Identity Circle */}
                        <button
                            onClick={() => router.push('/dashboard/profile?edit=true')}
                            className="group relative w-16 h-16 shrink-0 flex items-center justify-center bg-background border-2 border-accent rounded-full shadow-inner overflow-hidden text-3xl transition-transform hover:scale-105 outline-none cursor-pointer"
                        >
                            {isAvatarUrl ? (
                                <img src={profile?.avatar} alt="Identity Frame" className="w-full h-full object-cover group-hover:opacity-40 transition-opacity" />
                            ) : (
                                <span className="group-hover:opacity-40 transition-opacity">{profile?.avatar || '🥷'}</span>
                            )}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/20 backdrop-blur-[2px]">
                                ✏️
                            </div>
                        </button>

                        <div>
                            <h1 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-1">
                                Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-500">{profile?.displayName || 'Scholar'}</span>
                            </h1>

                            <div className="flex items-center gap-3 mt-1">
                                <p className="text-muted font-bold tracking-wider uppercase text-[10px] m-0">
                                    {user?.email}
                                </p>
                                <span className="text-border/50 text-[10px]">•</span>
                                <button
                                    onClick={() => router.push('/dashboard/profile?edit=true')}
                                    className="text-[10px] font-black text-accent uppercase tracking-widest hover:text-primary transition-colors outline-none cursor-pointer"
                                >
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    <Button onClick={() => router.push('/quiz/custom')} className="py-4 px-8 text-base shadow-lg shadow-accent/20 w-full md:w-auto">
                        Custom Training ⚙️
                    </Button>
                </motion.div>

                {/* Neon Stats Grid */}
                {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-pulse">
                        {[1, 2, 3].map(i => <div key={i} className="h-36 bg-card rounded-3xl border border-border" />)}
                    </div>
                ) : (
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                        }}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                    >
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } }
                            }}
                            className="h-full"
                        >
                            <Card className="p-8 h-full border border-border/60 bg-card/50 backdrop-blur-md flex items-center gap-6 shadow-md hover:border-accent/50 transition-colors">
                                <span className="text-5xl drop-shadow-md">⛩️</span>
                                <div>
                                    <span className="text-xs font-black text-muted uppercase tracking-widest block mb-1">Current Level</span>
                                    <span className="text-4xl font-black text-primary leading-none">Level {stats?.level || 1}</span>
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } }
                            }}
                            className="h-full"
                        >
                            <Card className="p-8 h-full border border-border/60 bg-card/50 backdrop-blur-md flex items-center gap-6 shadow-md hover:border-accent/50 transition-colors">
                                <span className="text-5xl drop-shadow-md">💎</span>
                                <div>
                                    <span className="text-xs font-black text-muted uppercase tracking-widest block mb-1">Total XP</span>
                                    <span className="text-4xl font-black text-primary leading-none">{stats?.xp?.toLocaleString() || 0}</span>
                                </div>
                            </Card>
                        </motion.div>

                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } }
                            }}
                            className="h-full"
                        >
                            <Card className="p-8 h-full border border-border/60 bg-card/50 backdrop-blur-md flex items-center gap-6 shadow-md hover:border-accent/50 transition-colors">
                                <span className="text-5xl drop-shadow-md">🔥</span>
                                <div>
                                    <span className="text-xs font-black text-muted uppercase tracking-widest block mb-1">Daily Streak</span>
                                    <span className="text-4xl font-black text-primary leading-none">{stats?.currentStreak || 0} Days</span>
                                </div>
                            </Card>
                        </motion.div>
                    </motion.div>
                )}

                {/* Interactive Study Modules */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    initial="hidden"
                    animate="visible"
                    className="space-y-10"
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } } }}>
                        <StudyHubSection router={router} />
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } } }}>
                        <StudyHeatmap />
                    </motion.div>

                    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } } }}>
                        <Achievements />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

const StudyHubSection = ({ router }: { router: any }) => (
    <Card className="p-10 border-t-8 border-indigo-500 shadow-xl bg-card/50 backdrop-blur-xl">
        <div className="mb-8">
            <h2 className="text-3xl font-black text-primary mb-2 flex items-center gap-3">
                <span className="text-4xl">📚</span> Training Grounds
            </h2>
            <p className="text-muted font-bold uppercase tracking-widest text-xs">Master core Japanese modules</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModuleCard
                title="Vocabulary" desc="800 core N5 words" icon="📓"
                onClick={() => router.push('/quiz/vocab')} glow="hover:border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]"
            />
            <ModuleCard
                title="Kanji Library" desc="103 essential characters" icon="🏯"
                onClick={() => router.push('/quiz/kanji')} glow="hover:border-rose-500 hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]"
            />
            <ModuleCard
                title="Grammar Guide" desc="74 critical N5 rules" icon="📐"
                onClick={() => router.push('/quiz/grammar')} glow="hover:border-green-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            />
            <ModuleCard
                title="The Gauntlet" desc="Simulated mock exams" icon="⏱️"
                onClick={() => router.push('/quiz/mock-exam')} glow="hover:border-accent hover:shadow-[0_0_20px_rgba(255,42,84,0.2)]"
            />
        </div>
    </Card>
);

const ModuleCard = ({ title, desc, icon, onClick, glow }: { title: string, desc: string, icon: string, onClick: () => void, glow: string }) => (
    <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`p-6 bg-background/60 border-2 border-border/60 rounded-2xl cursor-pointer transition-all duration-300 ${glow}`}
    >
        <span className="text-5xl mb-4 block drop-shadow-sm">{icon}</span>
        <h3 className="text-xl font-black text-primary m-0 mb-1 leading-tight">{title}</h3>
        <p className="text-muted font-bold text-xs uppercase tracking-wider m-0">{desc}</p>
    </motion.div>
);