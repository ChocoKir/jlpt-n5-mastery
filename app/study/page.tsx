"use client";

import React from 'react';
import { useTransitionRouter } from 'next-view-transitions';
import { motion, Variants } from 'framer-motion';
import {
    Library, Type, BookA, Hash, Speech,
    Layers, PlaySquare, GraduationCap, Map
} from 'lucide-react';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { WebGLBackground } from '@/shared/ui/WebGLBackground';

export default function StudyCenterPage() {
    // 🛠️ FIX: Upgraded to View Transitions Router
    const router = useTransitionRouter();

    const containerVars: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVars: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } }
    };

    return (
        <div className="relative min-h-[80vh] flex flex-col justify-center">
            {/* 3D Background Engine */}
            <WebGLBackground />

            <div className="max-w-7xl mx-auto py-10 px-5 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <div className="inline-flex items-center justify-center p-4 bg-indigo-500/10 rounded-3xl mb-4 text-indigo-500 border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.2)] backdrop-blur-md">
                        <Library size={48} strokeWidth={1.5} />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-primary drop-shadow-lg mb-3 tracking-tight font-japanese">
                        The Grand Library
                    </h1>
                    <p className="text-muted font-bold tracking-widest uppercase text-sm">Absorb the Knowledge</p>
                </motion.div>

                <motion.div variants={containerVars} initial="hidden" animate="visible" className="space-y-12">

                    {/* ACTIVE TRAINING MODULES */}
                    <div>
                        <h3 className="text-sm font-black text-muted uppercase tracking-widest mb-4 ml-2 flex items-center gap-2">
                            <PlaySquare size={16} /> Active Training
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <motion.div variants={itemVars}>
                                <ActionCard
                                    title="Kana Practice" desc="Guided stroke practice." icon={<Type />}
                                    onClick={() => router.push('/study/kana/practice')} color="text-sky-500 border-sky-500" glow="rgba(14, 165, 233, 0.2)"
                                />
                            </motion.div>
                            <motion.div variants={itemVars}>
                                <ActionCard
                                    title="Vocab Flashcards" desc="Spaced repetition learning." icon={<Layers />}
                                    onClick={() => router.push('/study/vocab/flashcards')} color="text-orange-500 border-orange-500" glow="rgba(249, 115, 22, 0.2)"
                                />
                            </motion.div>
                            <motion.div variants={itemVars}>
                                <ActionCard
                                    title="Kanji Guide" desc="Step-by-step Kanji mastery." icon={<Map />}
                                    onClick={() => router.push('/study/kanji/guide')} color="text-rose-500 border-rose-500" glow="rgba(244, 63, 94, 0.2)"
                                />
                            </motion.div>
                            <motion.div variants={itemVars}>
                                <ActionCard
                                    title="Grammar Flow" desc="Interactive sentence building." icon={<GraduationCap />}
                                    onClick={() => router.push('/study/grammar/practice')} color="text-green-500 border-green-500" glow="rgba(16, 185, 129, 0.2)"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* REFERENCE DICTIONARIES */}
                    <div>
                        <h3 className="text-sm font-black text-muted uppercase tracking-widest mb-4 ml-2 flex items-center gap-2">
                            <Library size={16} /> Reference Materials
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <motion.div variants={itemVars}>
                                <ReferenceCard
                                    title="Kana Chart" icon={<Type size={32} />}
                                    onClick={() => router.push('/study/kana')} color="text-sky-400" glow="rgba(56, 189, 248, 0.1)"
                                />
                            </motion.div>
                            <motion.div variants={itemVars}>
                                <ReferenceCard
                                    title="Vocab Dictionary" icon={<BookA size={32} />}
                                    onClick={() => router.push('/study/vocab')} color="text-orange-400" glow="rgba(251, 146, 60, 0.1)"
                                />
                            </motion.div>
                            <motion.div variants={itemVars}>
                                <ReferenceCard
                                    title="Kanji Library" icon={<Hash size={32} />}
                                    onClick={() => router.push('/study/kanji')} color="text-rose-400" glow="rgba(251, 113, 133, 0.1)"
                                />
                            </motion.div>
                            <motion.div variants={itemVars}>
                                <ReferenceCard
                                    title="Grammar Index" icon={<Speech size={32} />}
                                    onClick={() => router.push('/study/grammar')} color="text-green-400" glow="rgba(74, 222, 128, 0.1)"
                                />
                            </motion.div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}

// Sub-components utilizing our SpotlightCards
const ActionCard = ({ title, desc, icon, color, glow, onClick }: any) => (
    <SpotlightCard
        glowColor={glow}
        onClick={onClick}
        className={`p-6 cursor-pointer outline-none flex flex-col h-full group border-2 border-border/50 hover:border-current transition-colors bg-card/60 backdrop-blur-md ${color}`}
    >
        <div className="bg-background/80 w-14 h-14 rounded-2xl flex items-center justify-center border border-border/50 shadow-inner mb-4 group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h3 className="text-xl font-black mb-1 tracking-tight text-primary group-hover:text-current transition-colors">{title}</h3>
        <p className="font-bold opacity-80 text-xs text-muted flex-grow">{desc}</p>
        <div className="mt-4 text-[10px] font-black uppercase tracking-widest text-current opacity-0 group-hover:opacity-100 transition-opacity">
            Start Training ➡️
        </div>
    </SpotlightCard>
);

const ReferenceCard = ({ title, icon, color, glow, onClick }: any) => (
    <SpotlightCard
        glowColor={glow}
        onClick={onClick}
        className={`p-5 cursor-pointer outline-none flex items-center gap-4 group border border-border/50 hover:border-current transition-colors bg-card/40 backdrop-blur-md ${color}`}
    >
        <div className="text-muted group-hover:text-current transition-colors">{icon}</div>
        <h3 className="text-sm font-black tracking-wide text-primary group-hover:text-current transition-colors">{title}</h3>
    </SpotlightCard>
);