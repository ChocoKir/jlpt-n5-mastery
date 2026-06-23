"use client";

import React, { useState } from 'react';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { FuriganaText } from '@/shared/ui/FuriganaText';
import { N5_GRAMMAR } from '@/shared/data/grammar';

const CATEGORIES = ['All', ...Array.from(new Set(N5_GRAMMAR.map(g => g.category)))];

export const GrammarGuide = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredGrammar = N5_GRAMMAR.filter(g => {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
            g.grammar.toLowerCase().includes(searchLower) ||
            g.meaning.toLowerCase().includes(searchLower) ||
            g.formation.toLowerCase().includes(searchLower);

        const matchesCategory =
            activeCategory === 'All' ||
            g.category === activeCategory;

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
            <div className="text-center mb-12">
                <h1 className="text-4xl font-black text-blue-500 mb-3 tracking-tight">Grammar Guide 📐</h1>
                <p className="text-lg text-muted font-bold mb-8 uppercase tracking-widest">Master the {N5_GRAMMAR.length} structural rules of the JLPT N5</p>

                <div className="max-w-2xl mx-auto space-y-6">
                    <input
                        type="text"
                        placeholder="Search a grammar point, meaning, or formula..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-5 rounded-2xl border-2 border-border/50 bg-card/60 backdrop-blur-xl text-primary focus:border-blue-500 outline-none transition-colors shadow-lg text-lg font-bold"
                    />

                    <div className="flex flex-wrap justify-center gap-2">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-xl font-black text-sm transition-all outline-none border-2 ${
                                    activeCategory === cat
                                        ? 'bg-blue-500/10 text-blue-500 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.2)]'
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
                Showing {filteredGrammar.length} Rules
            </p>

            {filteredGrammar.length === 0 ? (
                <SpotlightCard className="text-center p-20 text-muted bg-card/40 border-2 border-dashed border-border/50">
                    <div className="text-6xl mb-4 drop-shadow-md">🔍</div>
                    <h2 className="text-2xl font-black text-primary">No grammar rules found</h2>
                    <p className="font-bold mt-2">Try adjusting your search or filters.</p>
                </SpotlightCard>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredGrammar.map((g) => (
                        <SpotlightCard key={g.id} glowColor="rgba(59, 130, 246, 0.15)" className="flex flex-col p-8 border-t-8 border-t-blue-500 shadow-xl bg-card/60">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-xs font-black text-blue-500 bg-blue-500/10 px-3 py-1.5 rounded-lg uppercase tracking-widest border border-blue-500/20">
                                    {g.category}
                                </span>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-4xl font-black text-primary mb-3 font-japanese">{g.grammar}</h2>
                                <h3 className="text-xl font-bold text-muted">{g.meaning}</h3>
                            </div>

                            <div className="bg-background/80 p-5 rounded-xl border border-border/50 mb-8 shadow-inner">
                                <span className="text-[10px] font-black text-muted uppercase tracking-widest block mb-3">📐 Formation Formula</span>
                                <p className="font-mono text-blue-500 font-bold text-lg">{g.formation}</p>
                            </div>

                            <div className="mt-auto space-y-5 border-t border-border/50 pt-6">
                                <span className="text-[10px] font-black text-muted uppercase tracking-widest block">🗣️ Examples</span>
                                {g.examples.map((ex, idx) => (
                                    <div key={idx} className="group relative pr-12 bg-background/40 p-4 rounded-xl border border-border/30 hover:border-blue-500/30 transition-colors">
                                        <p className="text-xl font-black text-primary mb-2 font-japanese">
                                            <FuriganaText>{ex.japanese}</FuriganaText>
                                        </p>
                                        <p className="text-sm font-bold text-blue-500 mb-1">{ex.reading}</p>
                                        <p className="text-sm font-bold text-muted">{ex.english}</p>

                                        <button
                                            onClick={() => playAudio(ex.japanese)}
                                            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 text-muted hover:text-blue-500 transition-all p-2.5 bg-background rounded-xl shadow-sm border border-border/50 outline-none"
                                            title="Listen to sentence"
                                        >
                                            🔊
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            )}
        </div>
    );
};