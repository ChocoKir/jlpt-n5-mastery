"use client";

import React from 'react';
// 🛠️ FIX 1: Upgraded to View Transitions Link
import { Link } from 'next-view-transitions';
import { motion } from 'framer-motion';
import { Button } from '@/shared/ui/Button';
// 🛠️ FIX 2: Imported your 3D Background Engine
import { WebGLBackground } from '@/shared/ui/WebGLBackground';

export default function LandingPage() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring" as const, stiffness: 300, damping: 24 }
        }
    };

    return (
        <div className="min-h-screen bg-background relative overflow-hidden selection:bg-accent/20">

            {/* 🛠️ INTEGRATION: 3D Engine runs behind the Hero */}
            <WebGLBackground />

            {/* GLOWING BACKGROUND EFFECTS (Layered over WebGL for extra depth) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none z-0" />

            {/* HERO SECTION */}
            <main className="relative z-10 flex flex-col items-center justify-center text-center px-5 pt-32 pb-24 min-h-[90vh]">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto flex flex-col items-center"
                >
                    <motion.div variants={itemVariants} className="inline-block mb-8 px-5 py-2 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,42,84,0.2)]">
                        <span className="text-accent font-black text-xs sm:text-sm uppercase tracking-widest drop-shadow-sm flex items-center gap-2">
                            <span>✨</span> The Ultimate JLPT N5 Platform
                        </span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-primary tracking-tighter mb-8 drop-shadow-sm leading-tight">
                        Master Japanese with <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-indigo-500 filter drop-shadow-[0_0_20px_rgba(255,42,84,0.4)]">
                            Sensei AI
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted font-bold mb-12 max-w-2xl leading-relaxed bg-background/30 backdrop-blur-sm p-4 rounded-3xl border border-border/20">
                        Stop memorizing blindly. Learn the 800 core words, 103 Kanji, and 74 grammar rules through smart Spaced Repetition and a personalized AI Tutor.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 w-full max-w-md justify-center">
                        <Link href="/auth/login" className="w-full sm:w-auto outline-none">
                            <Button className="w-full px-12 py-6 text-xl shadow-[0_0_40px_rgba(255,42,84,0.3)] hover:shadow-[0_0_60px_rgba(255,42,84,0.5)] transition-shadow">
                                Enter the Dojo 🚀
                            </Button>
                        </Link>
                        <Link href="#features" className="w-full sm:w-auto outline-none">
                            <Button variant="secondary" className="w-full px-12 py-6 text-xl bg-card/60 backdrop-blur-xl border-border/60 hover:bg-card/80">
                                Explore Features
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </main>

            {/* FEATURES SHOWCASE */}
            <section id="features" className="relative z-10 py-32 border-y border-border/50 bg-background/80 backdrop-blur-3xl">
                <div className="max-w-7xl mx-auto px-5">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-primary mb-4 drop-shadow-sm">A Next-Generation Dojo ⛩️</h2>
                        <p className="text-lg text-muted font-black uppercase tracking-widest">Everything you need to pass the N5</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon="🧠"
                            title="Spaced Repetition"
                            desc="Our algorithm tracks your memory decay and tests you exactly when you are about to forget."
                            glowColor="hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-indigo-500/50"
                        />
                        <FeatureCard
                            icon="🦉"
                            title="AI Sensei Tutor"
                            desc="Got a question wrong? Our Gemini-powered AI explains exactly why, customized to your specific mistake."
                            glowColor="hover:shadow-[0_0_30px_rgba(255,42,84,0.15)] hover:border-accent/50"
                        />
                        <FeatureCard
                            icon="⏱️"
                            title="The Gauntlet"
                            desc="Take beautifully simulated 105-minute JLPT N5 Mock Exams graded instantly to predict your real score."
                            glowColor="hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] hover:border-yellow-500/50"
                        />
                        <FeatureCard
                            icon="🏆"
                            title="Gamified Progression"
                            desc="Earn XP, maintain daily study streaks, unlock badges, and climb the global Leaderboard."
                            glowColor="hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:border-orange-500/50"
                        />
                        <FeatureCard
                            icon="📊"
                            title="Deep Analytics"
                            desc="Visualize your mastery percentages across all 800 Vocab, Kanji, and Grammar rules."
                            glowColor="hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/50"
                        />
                        <FeatureCard
                            icon="🎧"
                            title="Native Audio TTS"
                            desc="Train your ears with dynamically generated Japanese audio for reading and listening comprehension."
                            glowColor="hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] hover:border-sky-500/50"
                        />
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="relative z-10 py-40 text-center px-5">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
                >
                    <h2 className="text-5xl md:text-6xl font-black text-primary mb-6 drop-shadow-md">Ready to conquer the JLPT?</h2>
                    <p className="text-xl text-muted font-bold mb-12 max-w-xl mx-auto leading-relaxed">
                        Join the ranks of dedicated scholars using AI to accelerate their fluency. Your ninja training begins now.
                    </p>
                    <Link href="/auth/login" className="outline-none">
                        <Button className="px-14 py-8 text-2xl shadow-[0_0_40px_rgba(255,42,84,0.3)] hover:shadow-[0_0_60px_rgba(255,42,84,0.5)] transition-all hover:scale-105">
                            Begin Training 🥷
                        </Button>
                    </Link>
                </motion.div>
            </section>

            {/* FOOTER */}
            <footer className="relative z-10 py-8 border-t border-border/50 text-center text-muted font-bold text-sm bg-background/80 backdrop-blur-md">
                <p>© {new Date().getFullYear()} Nihongo N5. Powered by Next.js, Firebase, and Gemini AI.</p>
            </footer>
        </div>
    );
}

const FeatureCard = ({ icon, title, desc, glowColor }: { icon: string, title: string, desc: string, glowColor: string }) => (
    <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        className={`p-8 rounded-3xl border-2 border-border/50 bg-card/60 backdrop-blur-xl transition-all duration-300 ${glowColor}`}
    >
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6 bg-background/80 border border-border/50 shadow-inner drop-shadow-sm">
            {icon}
        </div>
        <h3 className="text-2xl font-black text-primary mb-3 tracking-tight">{title}</h3>
        <p className="text-muted font-bold leading-relaxed">{desc}</p>
    </motion.div>
);