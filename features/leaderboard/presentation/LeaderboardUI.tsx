"use client";

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { useAuth } from '@/features/auth/presentation/hooks/useAuth';
import { LeaderboardService } from '../application/leaderboard.service';
import { LeaderboardUser } from '../domain/entities/leaderboard.entity';
// 🛠️ FIX: Removed unused 'Card' import
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { AnimatedCounter } from '@/shared/ui/AnimatedCounter';

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemAnim: Variants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }
};

export const LeaderboardUI = () => {
    const { user } = useAuth();
    const [leaders, setLeaders] = useState<LeaderboardUser[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            const topUsers = await LeaderboardService.getTopUsers();
            setLeaders(topUsers);
            setIsLoading(false);
        };

        void fetchLeaderboard();
    }, []);

    if (isLoading) {
        return (
            <div className="max-w-3xl mx-auto my-10 px-5 text-center animate-pulse relative z-10">
                <h2 className="text-4xl font-black text-primary mb-6">Hall of Fame 🏆</h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className="h-24 bg-card/60 rounded-3xl border border-border/50"></div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto my-10 px-5 relative z-10">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-black text-primary mb-3 tracking-tight">Hall of Fame 🏆</h1>
                <p className="text-lg text-muted font-bold uppercase tracking-widest">Global Top 50 Scholars</p>
            </div>

            <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
                {leaders.length === 0 ? (
                    <SpotlightCard className="text-center text-muted font-bold p-10 border-2 border-dashed border-border/50 bg-background/50">
                        The matrix is empty. Complete a quiz to claim 1st place!
                    </SpotlightCard>
                ) : (
                    leaders.map((leader, index) => {
                        const isCurrentUser = user?.uid === leader.id;

                        // Styling logic for the Podium
                        let rankStyle = "bg-card/40 border-border/50 text-primary hover:border-primary/30";
                        let rankBadge = `#${index + 1}`;
                        let glowColor = "rgba(255,255,255,0.05)";

                        if (index === 0) {
                            rankStyle = "bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border-yellow-500 text-yellow-700 dark:text-yellow-400 scale-[1.02] shadow-[0_0_20px_rgba(250,204,21,0.15)]";
                            rankBadge = "🥇 1st";
                            glowColor = "rgba(250,204,21,0.2)";
                        } else if (index === 1) {
                            rankStyle = "bg-slate-300/10 dark:bg-slate-700/30 border-slate-400 text-slate-600 dark:text-slate-300 shadow-md scale-[1.01]";
                            rankBadge = "🥈 2nd";
                        } else if (index === 2) {
                            rankStyle = "bg-amber-700/5 border-amber-600 text-amber-800 dark:text-amber-500 shadow-sm";
                            rankBadge = "🥉 3rd";
                        }

                        // Highlight the currently logged-in user
                        if (isCurrentUser && index > 2) {
                            rankStyle = "bg-accent/10 border-accent text-accent shadow-sm scale-[1.01]";
                            glowColor = "rgba(255,42,84,0.15)";
                        }

                        return (
                            <motion.div variants={itemAnim} key={leader.id}>
                                <SpotlightCard glowColor={glowColor} className={`flex items-center justify-between p-6 border-2 transition-all duration-300 ${rankStyle}`}>
                                    <div className="flex items-center gap-4 sm:gap-6">
                                        <span className="text-2xl sm:text-3xl font-black w-16 sm:w-20 text-center drop-shadow-sm">{rankBadge}</span>
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-black leading-tight flex items-center gap-2">
                                                {leader.displayName}
                                                {isCurrentUser && <span className="text-[10px] bg-accent text-white px-2 py-0.5 rounded-full uppercase tracking-widest hidden sm:inline-block">You</span>}
                                            </h3>
                                            <p className="text-xs sm:text-sm font-bold opacity-75 uppercase tracking-wider">
                                                Level {leader.level} Ninja • 🔥 {leader.currentStreak}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right flex flex-col items-end">
                                        <span className="text-3xl sm:text-4xl font-black drop-shadow-sm leading-none">
                                            <AnimatedCounter value={leader.xp} />
                                        </span>
                                        <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest opacity-75 mt-1">Total XP</span>
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        );
                    })
                )}
            </motion.div>
        </div>
    );
};