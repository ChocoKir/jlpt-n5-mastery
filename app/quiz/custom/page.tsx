"use client";

import React, { useState } from 'react';
// 🛠️ FIX: Upgraded to View Transitions Router
import { useTransitionRouter } from 'next-view-transitions';
import { motion, Variants } from 'framer-motion';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';

type QuizCategory = 'vocab' | 'kanji' | 'grammar' | 'listening' | 'speaking' | 'reading' | 'kanji-context' | 'star';

export default function CustomPracticeHub() {
    // 🛠️ FIX: Use the transition router
    const router = useTransitionRouter();

    const [category, setCategory] = useState<QuizCategory>('vocab');
    const [count, setCount] = useState<number>(10);
    const [focus, setFocus] = useState<'all' | 'weak' | 'new'>('all');

    const handleLaunch = () => {
        const queryParams = new URLSearchParams({
            count: count.toString(),
            focus: focus
        }).toString();

        router.push(`/quiz/${category}?${queryParams}`);
    };

    const containerVars: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVars: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } }
    };

    return (
        <div className="max-w-5xl mx-auto py-10 px-5">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-10"
            >
                <h1 className="text-4xl md:text-5xl font-black text-primary mb-3 drop-shadow-sm flex items-center justify-center gap-3">
                    <span className="text-5xl">⚙️</span> Custom Training
                </h1>
                <p className="text-muted font-bold tracking-widest uppercase text-sm">Configure your own N5 Gauntlet</p>
            </motion.div>

            <motion.div variants={containerVars} initial="hidden" animate="visible" className="space-y-8">

                {/* 1. SELECT CATEGORY */}
                <motion.div variants={itemVars}>
                    <Card className="p-8 shadow-xl bg-card/40 backdrop-blur-xl border-border/50">
                        <h3 className="text-lg font-black text-primary uppercase tracking-wider mb-5 border-b-2 border-border/50 pb-2">1. Select Target Module</h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <SelectionCard active={category === 'vocab'} onClick={() => setCategory('vocab')} icon="📓" label="Vocabulary" color="border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.2)] text-orange-500" />
                            <SelectionCard active={category === 'kanji'} onClick={() => setCategory('kanji')} icon="🏯" label="Kanji" color="border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.2)] text-rose-500" />
                            <SelectionCard active={category === 'grammar'} onClick={() => setCategory('grammar')} icon="📐" label="Grammar" color="border-green-500 shadow-[0_0_20px_rgba(16,185,129,0.2)] text-green-500" />
                            <SelectionCard active={category === 'listening'} onClick={() => setCategory('listening')} icon="🎧" label="Listening" color="border-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.2)] text-sky-500" />

                            <SelectionCard active={category === 'speaking'} onClick={() => setCategory('speaking')} icon="🎙️" label="Speaking" color="border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.2)] text-indigo-500" />
                            <SelectionCard active={category === 'reading'} onClick={() => setCategory('reading')} icon="📖" label="Reading" color="border-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.2)] text-violet-500" />
                            <SelectionCard active={category === 'kanji-context'} onClick={() => setCategory('kanji-context')} icon="🌿" label="Context" color="border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)] text-emerald-500" />
                            <SelectionCard active={category === 'star'} onClick={() => setCategory('star')} icon="🌟" label="Star Form" color="border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.2)] text-yellow-500" />
                        </div>
                    </Card>
                </motion.div>

                {/* 2. SELECT DURATION */}
                <motion.div variants={itemVars}>
                    <Card className="p-8 shadow-xl bg-card/40 backdrop-blur-xl border-border/50">
                        <h3 className="text-lg font-black text-primary uppercase tracking-wider mb-5 border-b-2 border-border/50 pb-2">2. Session Length</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[5, 10, 20, 50].map((num) => (
                                <motion.button
                                    key={num}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setCount(num)}
                                    className={`py-4 rounded-xl font-black text-xl transition-all border-2 outline-none ${
                                        count === num
                                            ? 'bg-accent text-white border-accent shadow-[0_0_20px_rgba(255,42,84,0.3)]'
                                            : 'bg-background/50 text-muted border-border/50 hover:border-accent/50'
                                    }`}
                                >
                                    {num} <span className="text-xs uppercase block tracking-wider mt-1 opacity-80">Questions</span>
                                </motion.button>
                            ))}
                        </div>
                    </Card>
                </motion.div>

                {/* 3. SELECT FOCUS */}
                <motion.div variants={itemVars}>
                    <Card className="p-8 shadow-xl bg-card/40 backdrop-blur-xl border-border/50">
                        <h3 className="text-lg font-black text-primary uppercase tracking-wider mb-5 border-b-2 border-border/50 pb-2">3. Data Focus</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <FocusButton active={focus === 'all'} onClick={() => setFocus('all')} icon="🌐" title="Standard Shuffle" desc="A random mix of everything." activeClass="border-indigo-500 bg-indigo-500/10 shadow-[0_0_20px_rgba(99,102,241,0.2)]" />
                            <FocusButton active={focus === 'weak'} onClick={() => setFocus('weak')} icon="🎯" title="Target Weaknesses" desc="Only items you frequently fail." activeClass="border-rose-500 bg-rose-500/10 shadow-[0_0_20px_rgba(244,63,94,0.2)]" />
                            <FocusButton active={focus === 'new'} onClick={() => setFocus('new')} icon="✨" title="Unseen Material" desc="Items you've never studied yet." activeClass="border-emerald-500 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.2)]" />
                        </div>
                    </Card>
                </motion.div>

                {/* LAUNCH BUTTON */}
                <motion.div variants={itemVars} className="pt-4">
                    <Button onClick={handleLaunch} className="w-full py-8 text-2xl shadow-[0_0_40px_rgba(255,42,84,0.3)] hover:shadow-[0_0_60px_rgba(255,42,84,0.5)]">
                        Launch Session 🚀
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    );
}

const SelectionCard = ({ active, onClick, icon, label, color }: { active: boolean, onClick: () => void, icon: string, label: string, color: string }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all outline-none bg-background/50 backdrop-blur-sm ${
            active ? `border-t-8 ${color} bg-card/80` : 'border-border/50 hover:border-accent/50 grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
        }`}
    >
        <span className="text-4xl mb-3 drop-shadow-sm">{icon}</span>
        <span className={`font-black uppercase tracking-wider text-sm ${active ? '' : 'text-muted'}`}>{label}</span>
    </motion.button>
);

const FocusButton = ({ active, onClick, icon, title, desc, activeClass }: { active: boolean, onClick: () => void, icon: string, title: string, desc: string, activeClass: string }) => (
    <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`p-5 rounded-xl border-2 text-left transition-all outline-none bg-background/50 backdrop-blur-sm ${
            active ? activeClass : 'border-border/50 hover:border-primary/30 text-muted'
        }`}
    >
        <span className="block text-2xl mb-2 drop-shadow-sm">{icon}</span>
        <span className={`font-black block mb-1 ${active ? 'text-primary' : ''}`}>{title}</span>
        <span className="text-xs font-bold opacity-80">{desc}</span>
    </motion.button>
);