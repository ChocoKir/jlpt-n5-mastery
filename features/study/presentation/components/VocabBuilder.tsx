"use client";

import React, { useState } from 'react';
import { N5_VOCAB } from '@/shared/data/vocab';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { FuriganaText } from '@/shared/ui/FuriganaText';

const CATEGORIES = ['All', ...Array.from(new Set(N5_VOCAB.map(v => v.type)))];

export const VocabBuilder = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredVocab = N5_VOCAB.filter(v => {
        const matchesSearch =
            v.word.includes(searchTerm) ||
            v.reading.includes(searchTerm) ||
            v.meaning.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = activeCategory === 'All' || v.type === activeCategory;

        return matchesSearch && matchesCategory;
    });

    const playAudio = (text: string) => {
        if (!text || typeof window === 'undefined') return;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="max-w-7xl mx-auto py-10 px-5 animate-in fade-in duration-500 relative z-10">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-black text-orange-500 mb-3 tracking-tight">Vocab Builder 📚</h1>
                <p className="text-lg text-muted font-bold mb-8 uppercase tracking-widest text-xs">Master the {N5_VOCAB.length} core vocabulary words for the JLPT N5</p>

                <div className="max-w-2xl mx-auto space-y-6">
                    <input
                        type="text"
                        placeholder="Search word, reading, or meaning..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-5 rounded-2xl border-2 border-border/50 bg-card/60 backdrop-blur-xl text-primary focus:border-orange-500 outline-none transition-colors shadow-lg text-lg font-bold"
                    />

                    <div className="flex flex-wrap justify-center gap-2">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-xl font-black text-sm transition-all outline-none border-2 ${
                                    activeCategory === cat
                                        ? 'bg-orange-500/10 text-orange-500 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]'
                                        : 'bg-card/40 text-muted border-transparent hover:border-border hover:text-primary'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <p className="text-muted font-black text-center mb-8 uppercase tracking-widest text-xs">
                Showing {filteredVocab.length} Words
            </p>

            {filteredVocab.length === 0 ? (
                <SpotlightCard className="text-center p-20 text-muted bg-card/40 border-2 border-dashed border-border/50">
                    <div className="text-6xl mb-4 drop-shadow-md">👻</div>
                    <h2 className="text-2xl font-black text-primary">No words found</h2>
                    <p className="font-bold mt-2">Try adjusting your search or filters.</p>
                </SpotlightCard>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredVocab.map((v) => (
                        <SpotlightCard key={v.id} glowColor="rgba(249, 115, 22, 0.15)" className="flex flex-col p-6 border-t-4 border-t-orange-500 shadow-lg bg-card/60">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-[10px] font-black text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-md uppercase tracking-widest border border-orange-500/20">
                                    {v.type}
                                </span>
                                <button
                                    onClick={() => playAudio(v.word)}
                                    className="text-muted hover:text-orange-500 transition-colors p-2 bg-background/50 rounded-full border border-border/50 shadow-sm outline-none"
                                    title="Listen to pronunciation"
                                >
                                    🔊
                                </button>
                            </div>

                            <div className="text-center flex-grow flex flex-col justify-center py-6">
                                <h2 className="text-4xl font-black text-primary mb-2 font-japanese drop-shadow-sm">
                                    <FuriganaText>{v.word}</FuriganaText>
                                </h2>
                                {v.reading !== v.word && (
                                    <h3 className="text-lg font-bold text-orange-500 mb-2 font-japanese">{v.reading}</h3>
                                )}
                            </div>

                            <div className="mt-auto pt-4 border-t border-border/50 text-center">
                                <p className="text-sm font-black text-muted uppercase tracking-wider">{v.meaning}</p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            )}
        </div>
    );
};