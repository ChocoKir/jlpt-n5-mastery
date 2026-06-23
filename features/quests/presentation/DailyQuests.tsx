"use client";

import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { toast } from 'sonner';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { ProgressBar } from '@/shared/ui/ProgressBar';
import { QuestsService } from '../application/services/quests.service';
import { QuestItem } from '../domain/entities/daily-quest-board.entity';
import { playLevelUpFanfare } from '@/shared/lib/audio/audio-service';
import { fireLevelUpConfetti } from '@/shared/lib/effects/particles';

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemAnim: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }
};

export const DailyQuests = () => {
    const [quests, setQuests] = useState<QuestItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Quests are now blazing fast because they load from LocalStorage!
        const loadQuests = () => {
            const todayQuests = QuestsService.getTodayQuests();
            setQuests(todayQuests);
            setIsLoading(false);
        };

        loadQuests();

        // If a quest updates in the background, reflect it in the UI
        window.addEventListener('focus', loadQuests);
        return () => window.removeEventListener('focus', loadQuests);
    }, []);

    const handleClaim = async (questId: string, title: string, xp: number) => {
        // Optimistic UI update
        const updated = await QuestsService.claimReward(questId);
        setQuests(updated);

        // AAA Polish: Sounds, Particles, and Premium Toasts
        playLevelUpFanfare();
        fireLevelUpConfetti();
        toast.success(`Quest Complete: ${title}`, {
            description: `+${xp} XP Awarded to your profile.`,
            icon: '🎁'
        });
    };

    if (isLoading) {
        return (
            <section className="mb-12 animate-pulse">
                <h2 className="text-2xl font-bold text-accent mb-5 flex items-center gap-2">📜 Daily Quests</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[1, 2, 3].map(i => <div key={i} className="h-40 bg-card/60 rounded-3xl border border-border/50"></div>)}
                </div>
            </section>
        );
    }

    if (quests.length === 0) return null;

    return (
        <section className="mb-12 relative z-10">
            <div className="flex justify-between items-end mb-5 px-1">
                <h2 className="text-2xl font-black text-primary flex items-center gap-3 tracking-tight">
                    <span className="text-3xl drop-shadow-md">📜</span> Daily Bounties
                </h2>
                <span className="text-xs font-black text-muted uppercase tracking-widest bg-background px-4 py-1.5 rounded-xl border border-border/50 shadow-sm">
                    Resets in {24 - new Date().getHours()}h
                </span>
            </div>

            <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {quests.map((quest) => {
                    const isComplete = quest.completed;

                    let cardStyle = "border-border/50 bg-card/40 hover:border-primary/30";
                    let glowColor = "rgba(255, 255, 255, 0.05)";

                    if (quest.claimed) {
                        cardStyle = "border-border/20 bg-background/30 opacity-60 grayscale";
                    } else if (isComplete) {
                        cardStyle = "border-yellow-400 bg-yellow-400/5 shadow-[0_0_15px_rgba(250,204,21,0.15)] hover:border-yellow-500 scale-[1.02]";
                        glowColor = "rgba(250, 204, 21, 0.2)";
                    }

                    return (
                        <motion.div variants={itemAnim} key={quest.id}>
                            <SpotlightCard glowColor={glowColor} className={`p-6 flex flex-col justify-between h-full border-2 transition-all duration-300 ${cardStyle}`}>
                                <div className="mb-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="font-bold text-primary leading-tight pr-2">{quest.title}</h3>
                                        <span className="text-xs font-black text-yellow-600 bg-yellow-500/10 px-2.5 py-1 rounded-md shrink-0 border border-yellow-500/20">
                                            +{quest.rewardXP} XP
                                        </span>
                                    </div>

                                    <div className="flex justify-between text-xs font-black text-muted uppercase tracking-widest mb-2">
                                        <span>Progress</span>
                                        <span>{quest.progress} / {quest.target}</span>
                                    </div>

                                    <ProgressBar
                                        current={quest.progress}
                                        total={quest.target}
                                        className="my-0 bg-background border border-border/50"
                                        indicatorClassName={isComplete ? "bg-yellow-400" : "bg-accent"}
                                    />
                                </div>

                                {quest.claimed ? (
                                    <Button disabled variant="secondary" className="w-full bg-transparent border-border/50 text-muted font-bold">
                                        Claimed ✓
                                    </Button>
                                ) : isComplete ? (
                                    <Button onClick={() => handleClaim(quest.id, quest.title, quest.rewardXP)} className="w-full bg-yellow-400 hover:bg-yellow-500 text-yellow-950 font-black border-yellow-500 shadow-lg shadow-yellow-400/20 animate-pulse">
                                        Claim Reward 🎁
                                    </Button>
                                ) : (
                                    <Button disabled variant="secondary" className="w-full opacity-50 font-bold border-2">
                                        In Progress...
                                    </Button>
                                )}
                            </SpotlightCard>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};