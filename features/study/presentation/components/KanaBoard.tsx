"use client";

import React, { useState, useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { KanjiCanvas } from './KanjiCanvas';

// 🛠️ FIX: Import the actual data arrays, not the type interface!
import { HIRAGANA, KATAKANA } from '@/shared/data/kana';

// The visual map of a 5x10 Gojūon grid. This enforces the gaps.
const GRID_ROMAJI = [
    'a', 'i', 'u', 'e', 'o',
    'ka', 'ki', 'ku', 'ke', 'ko',
    'sa', 'shi', 'su', 'se', 'so',
    'ta', 'chi', 'tsu', 'te', 'to',
    'na', 'ni', 'nu', 'ne', 'no',
    'ha', 'hi', 'fu', 'he', 'ho',
    'ma', 'mi', 'mu', 'me', 'mo',
    'ya', '', 'yu', '', 'yo',
    'ra', 'ri', 'ru', 're', 'ro',
    'wa', '', '', '', 'wo',
    'n', '', '', '', ''
];

const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.02 } }
};

const itemAnim: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
};

export const KanaBoard = () => {
    const [mode, setMode] = useState<'hiragana' | 'katakana'>('hiragana');
    const [selectedKana, setSelectedKana] = useState<any>(null);

    // 🛠️ FIX: Search both arrays and map the '.character' property
    const dynamicBoardData = useMemo(() => {
        return GRID_ROMAJI.map(romaji => {
            if (!romaji) return { romaji: '', h: '', k: '' };

            const foundH = HIRAGANA.find((item) => item.romaji === romaji);
            const foundK = KATAKANA.find((item) => item.romaji === romaji);

            return {
                romaji,
                h: foundH?.character || '',
                k: foundK?.character || ''
            };
        });
    }, []);

    const playAudio = (romaji: string) => {
        if (!romaji || typeof window === 'undefined') return;
        const utterance = new SpeechSynthesisUtterance(romaji);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    };

    const handleSelect = (kana: any) => {
        if (!kana.romaji) return;
        setSelectedKana(kana);
        playAudio(mode === 'hiragana' ? kana.h : kana.k);
    };

    const themeColor = mode === 'hiragana' ? 'blue' : 'orange';

    return (
        <div className="max-w-7xl mx-auto py-10 px-5 relative z-10">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-black text-primary mb-3 tracking-tight">Kana Dojo 🔤</h1>
                <p className="text-lg text-muted font-bold mb-8 uppercase tracking-widest text-xs">Master the foundation of the Japanese writing system.</p>

                <div className="inline-flex bg-card/60 backdrop-blur-md p-1.5 rounded-2xl border-2 border-border/50 shadow-sm">
                    <button
                        onClick={() => { setMode('hiragana'); setSelectedKana(null); }}
                        className={`px-8 py-3 rounded-xl font-black text-lg transition-all outline-none ${mode === 'hiragana' ? 'bg-blue-500 text-white shadow-lg' : 'text-muted hover:text-primary hover:bg-background/50'}`}
                    >
                        Hiragana
                    </button>
                    <button
                        onClick={() => { setMode('katakana'); setSelectedKana(null); }}
                        className={`px-8 py-3 rounded-xl font-black text-lg transition-all outline-none ${mode === 'katakana' ? 'bg-orange-500 text-white shadow-lg' : 'text-muted hover:text-primary hover:bg-background/50'}`}
                    >
                        Katakana
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                    <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-5 gap-3">
                        {dynamicBoardData.map((item, idx) => (
                            <div key={idx}>
                                {item.romaji ? (
                                    <motion.div variants={itemAnim}>
                                        <SpotlightCard
                                            onClick={() => handleSelect(item)}
                                            glowColor={mode === 'hiragana' ? "rgba(59, 130, 246, 0.2)" : "rgba(249, 115, 22, 0.2)"}
                                            className={`aspect-square flex flex-col items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 border-b-4 ${
                                                selectedKana?.romaji === item.romaji
                                                    ? `border-${themeColor}-500 bg-${themeColor}-500/10 scale-105 shadow-[0_0_20px_rgba(var(--${themeColor}-500),0.3)]`
                                                    : 'border-border/50 bg-card/60 hover:border-primary/30'
                                            }`}
                                        >
                                            <span className={`text-3xl sm:text-4xl font-black text-primary mb-1 font-japanese ${selectedKana?.romaji === item.romaji ? `text-${themeColor}-500` : ''}`}>
                                                {mode === 'hiragana' ? item.h : item.k}
                                            </span>
                                            <span className="text-[10px] font-black text-muted uppercase tracking-widest">{item.romaji}</span>
                                        </SpotlightCard>
                                    </motion.div>
                                ) : (
                                    <div className="aspect-square"></div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="lg:col-span-1">
                    <div className="sticky top-24">
                        {selectedKana ? (
                            <SpotlightCard glowColor={mode === 'hiragana' ? "rgba(59, 130, 246, 0.15)" : "rgba(249, 115, 22, 0.15)"} className={`p-8 border-t-8 border-${themeColor}-500 shadow-2xl bg-card/80 backdrop-blur-xl`}>
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl font-black text-primary mb-1 uppercase tracking-widest">Draw "{selectedKana.romaji}"</h2>
                                    <Button onClick={() => playAudio(selectedKana.romaji)} variant="secondary" className="text-xs py-2 h-auto mt-3 border-2">
                                        🔊 Pronounce
                                    </Button>
                                </div>
                                <KanjiCanvas targetKanji={mode === 'hiragana' ? selectedKana.h : selectedKana.k} />
                            </SpotlightCard>
                        ) : (
                            <SpotlightCard className="p-8 border-2 border-dashed border-border/50 bg-background/30 flex flex-col items-center justify-center h-full min-h-[400px] text-center opacity-70">
                                <span className="text-6xl mb-4 grayscale drop-shadow-md">🔤</span>
                                <p className="font-bold text-muted">Select a character from the board to practice drawing it.</p>
                            </SpotlightCard>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};