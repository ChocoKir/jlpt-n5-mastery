"use client";

import React, { useState, useEffect } from 'react';
// 🛠️ FIX: Upgraded to View Transitions Router
import { useTransitionRouter } from 'next-view-transitions';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { useAuth } from '@/features/auth/presentation/hooks/useAuth';

import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';

export default function SettingsHub() {
    const { user } = useAuth();
    // 🛠️ FIX: Use the transition router
    const router = useTransitionRouter();

    // State
    const [soundEnabled, setSoundEnabled] = useState(true);
    const [isConfirmingReset, setIsConfirmingReset] = useState(false);
    const [isResetting, setIsResetting] = useState(false);

    // Load initial preferences
    useEffect(() => {
        const savedSound = localStorage.getItem('n5_sound_enabled');
        if (savedSound !== null) {
            setSoundEnabled(savedSound === 'true');
        }
    }, []);

    const handleToggleSound = () => {
        const newState = !soundEnabled;
        setSoundEnabled(newState);
        localStorage.setItem('n5_sound_enabled', String(newState));
    };

    const handleClearCache = () => {
        const soundPref = localStorage.getItem('n5_sound_enabled');
        localStorage.clear();
        if (soundPref) localStorage.setItem('n5_sound_enabled', soundPref);
        alert('Local cache cleared successfully! 🧹');
    };

    const handleResetSRS = async () => {
        if (!user?.uid) return;
        setIsResetting(true);

        try {
            const srsRef = collection(db, `user_stats/${user.uid}/srs_items`);
            const snapshot = await getDocs(srsRef);

            const deletePromises = snapshot.docs.map(document =>
                deleteDoc(doc(db, `user_stats/${user.uid}/srs_items`, document.id))
            );
            await Promise.all(deletePromises);

            alert('Your SRS progress has been completely wiped. A fresh start! 🌸');
            setIsConfirmingReset(false);
        } catch (error) {
            console.error("Failed to reset SRS data", error);
            alert("Failed to reset data. Please try again.");
        } finally {
            setIsResetting(false);
        }
    };

    const containerVars = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 25 } }
    };

    return (
        // 🛠️ FIX: Wrapped in the standard min-h-screen container
        <div className="min-h-screen bg-background">
            <div className="max-w-3xl mx-auto py-10 px-5">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10"
                >
                    <button onClick={() => router.back()} className="text-muted font-bold text-sm mb-4 hover:text-accent transition-colors outline-none">
                        ← Back
                    </button>
                    <h1 className="text-4xl md:text-5xl font-black text-primary drop-shadow-sm flex items-center gap-3">
                        <span className="text-5xl">⚙️</span> Settings
                    </h1>
                </motion.div>

                <motion.div variants={containerVars} initial="hidden" animate="visible" className="space-y-6">
                    {/* PREFERENCES */}
                    <motion.div variants={itemVars}>
                        <Card className="p-8 shadow-xl bg-card/40 backdrop-blur-xl border-border/50">
                            <h3 className="text-xl font-black text-primary uppercase tracking-wider mb-6 flex items-center gap-2">
                                <span>🎮</span> App Preferences
                            </h3>

                            <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-border/50">
                                <div>
                                    <h4 className="font-bold text-primary text-lg">Sound Effects</h4>
                                    <p className="text-sm font-bold text-muted">Play audio on correct/incorrect answers</p>
                                </div>

                                <motion.button
                                    onClick={handleToggleSound}
                                    className={`w-16 h-8 rounded-full p-1 transition-colors flex outline-none ${soundEnabled ? 'bg-accent justify-end shadow-[0_0_15px_rgba(255,42,84,0.3)]' : 'bg-border/50 justify-start'}`}
                                >
                                    <motion.div
                                        layout
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        className="w-6 h-6 bg-white rounded-full shadow-md"
                                    />
                                </motion.button>
                            </div>
                        </Card>
                    </motion.div>

                    {/* DATA MANAGEMENT */}
                    <motion.div variants={itemVars}>
                        <Card className="p-8 shadow-xl bg-card/40 backdrop-blur-xl border-border/50">
                            <h3 className="text-xl font-black text-primary uppercase tracking-wider mb-6 flex items-center gap-2">
                                <span>💾</span> Data Management
                            </h3>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-background/50 rounded-xl border border-border/50 gap-4">
                                <div>
                                    <h4 className="font-bold text-primary text-lg">Clear Local Cache</h4>
                                    <p className="text-sm font-bold text-muted">Frees up memory. Does not affect your cloud save.</p>
                                </div>
                                <Button variant="secondary" onClick={handleClearCache} className="whitespace-nowrap">
                                    Clear Cache
                                </Button>
                            </div>
                        </Card>
                    </motion.div>

                    {/* DANGER ZONE */}
                    <motion.div variants={itemVars}>
                        <Card className="p-8 shadow-[0_0_30px_rgba(239,68,68,0.1)] bg-red-500/5 border-red-500/20 backdrop-blur-xl">
                            <h3 className="text-xl font-black text-red-500 uppercase tracking-wider mb-6 flex items-center gap-2">
                                <span>⚠️</span> Danger Zone
                            </h3>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-background/50 rounded-xl border border-red-500/30 gap-4">
                                <div>
                                    <h4 className="font-bold text-primary text-lg">Reset Spaced Repetition Data</h4>
                                    <p className="text-sm font-bold text-muted">Permanently deletes your mastery progress for all modules.</p>
                                </div>

                                <AnimatePresence mode="wait">
                                    {!isConfirmingReset ? (
                                        <motion.div key="init" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            <Button variant="danger" onClick={() => setIsConfirmingReset(true)} className="whitespace-nowrap">
                                                Reset Progress
                                            </Button>
                                        </motion.div>
                                    ) : (
                                        <motion.div key="confirm" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex gap-2">
                                            <Button variant="secondary" onClick={() => setIsConfirmingReset(false)}>Cancel</Button>
                                            <Button variant="danger" onClick={handleResetSRS} disabled={isResetting}>
                                                {isResetting ? 'Deleting...' : 'Yes, Delete It'}
                                            </Button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}