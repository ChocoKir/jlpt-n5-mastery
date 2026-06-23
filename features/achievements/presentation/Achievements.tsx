"use client";

import React, { useState, useEffect } from 'react';
// 🛡️ THE FIX: Import the 'Variants' type from framer-motion
import { motion, Variants } from 'framer-motion';
import { useAuth } from '@/features/auth/presentation/hooks/useAuth';
import { getAchievements } from '../application/services/achievements.service';
import { Achievement } from '../domain/entities/user-achievements.entity';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';

// 🛡️ THE FIX: Explicitly type these objects as 'Variants' so "spring" isn't widened to a generic string
const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }
};

export const Achievements = () => {
    const { user } = useAuth();
    const [badges, setBadges] = useState<Achievement[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!user?.uid) return;

        const loadBadges = async () => {
            const fetchedBadges = await getAchievements(user.uid);
            setBadges(fetchedBadges);
            setIsLoading(false);
        };

        void loadBadges();

        window.addEventListener('achievementsUpdated', loadBadges);
        return () => window.removeEventListener('achievementsUpdated', loadBadges);
    }, [user?.uid]);

    if (isLoading) {
        return (
            <SpotlightCard className="p-10 mb-8 border-border/50" glowColor="rgba(250, 204, 21, 0.1)">
                <h3 className="text-2xl font-black text-primary mb-6 animate-pulse">🏆 Decoding Trophies...</h3>
                <div className="flex flex-wrap gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="w-28 h-32 bg-background/50 border border-border/50 rounded-2xl animate-pulse"></div>
                    ))}
                </div>
            </SpotlightCard>
        );
    }

    return (
        <SpotlightCard
            className="p-10 border-t-8 border-yellow-400 mb-8 shadow-xl bg-gradient-to-br from-yellow-500/5 to-transparent relative z-10"
            glowColor="rgba(250, 204, 21, 0.15)"
        >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8">
                <h3 className="m-0 text-primary flex items-center gap-3 text-3xl font-black tracking-tight mb-2 sm:mb-0">
                    <span className="text-4xl drop-shadow-md">🏆</span> Achievements
                </h3>
                <span className="bg-background border border-border/50 px-4 py-1.5 rounded-xl text-sm font-black text-muted uppercase tracking-widest shadow-sm">
                    {badges.filter(b => b.unlocked).length} / {badges.length} Unlocked
                </span>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-6"
            >
                {badges.map(badge => (
                    <motion.div
                        variants={item}
                        key={badge.id}
                        title={badge.description}
                        whileHover={badge.unlocked ? { y: -5, scale: 1.05 } : {}}
                        className={`flex flex-col items-center justify-center text-center py-8 px-4 rounded-3xl cursor-help transition-all duration-300 border-2 relative overflow-hidden ${
                            badge.unlocked
                                ? 'bg-card/80 backdrop-blur-sm border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:border-yellow-500'
                                : 'bg-background/40 border-dashed border-border/50 opacity-60 grayscale'
                        }`}
                    >
                        <div className="text-5xl mb-4 drop-shadow-md relative z-10">
                            {badge.icon}
                        </div>
                        <span className="text-sm font-black text-primary mb-1 uppercase tracking-wider leading-tight relative z-10">
                            {badge.title}
                        </span>

                        {!badge.unlocked && (
                            <span className="text-[10px] font-black text-muted mt-2 tracking-widest relative z-10">LOCKED 🔒</span>
                        )}

                        {badge.unlocked && (
                            <div className="absolute inset-0 bg-yellow-400/5 blur-xl pointer-events-none" />
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </SpotlightCard>
    );
};