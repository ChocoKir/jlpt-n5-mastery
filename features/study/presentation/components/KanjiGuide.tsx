"use client";

import React, { useState } from 'react';
import { Card } from '@/shared/ui/Card';
import { N5_KANJI } from '@/shared/data/kanji';

export const KanjiGuide = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter logic checking the kanji, meanings, and readings
    const filteredKanji = N5_KANJI.filter(k => {
        const searchLower = searchTerm.toLowerCase();
        return (
            k.kanji.includes(searchLower) ||
            k.meaning.toLowerCase().includes(searchLower) ||
            k.onyomi.some(o => o.includes(searchLower)) ||
            k.kunyomi.some(ku => ku.includes(searchLower)) ||
            k.examples.some(ex => ex.reading.includes(searchLower) || ex.meaning.toLowerCase().includes(searchLower))
        );
    });

    const playAudio = (text: string) => {
        if (!text) return;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="max-w-7xl mx-auto py-10 px-5 animate-in fade-in duration-500">
            {/* Header & Search */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-black text-red-500 mb-3">Kanji Dojo 🏯</h1>
                <p className="text-lg text-muted font-medium mb-8">Master the {N5_KANJI.length} essential characters for the JLPT N5.</p>

                <div className="max-w-2xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search kanji, meaning, or reading (e.g., 'water', 'みず', '水')..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-4 rounded-xl border-2 border-border bg-background text-primary focus:border-red-500 outline-none transition-colors shadow-sm text-lg font-bold"
                    />
                </div>
            </div>

            <p className="text-muted font-bold text-center mb-8 uppercase tracking-wider text-sm">
                Showing {filteredKanji.length} Characters
            </p>

            {/* The Grid */}
            {filteredKanji.length === 0 ? (
                <div className="text-center p-20 text-muted bg-card rounded-2xl border border-dashed border-border">
                    <div className="text-6xl mb-4">🍂</div>
                    <h2 className="text-2xl font-bold">No Kanji found</h2>
                    <p className="font-medium mt-2">Try searching for a different meaning or reading.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredKanji.map((k) => (
                        <Card key={k.id} className="flex flex-col p-6 hover:border-red-400 transition-all duration-300 border-t-4 border-t-transparent hover:border-t-red-500 shadow-md">

                            {/* Kanji & Core Meaning */}
                            <div className="flex items-center gap-6 mb-6 border-b border-border pb-4">
                                <div className="text-6xl font-black text-primary bg-red-50 dark:bg-red-900/20 w-24 h-24 flex items-center justify-center rounded-xl shadow-inner">
                                    {k.kanji}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black text-primary uppercase tracking-wide">{k.meaning}</h2>
                                    <p className="text-sm font-bold text-muted mt-1">ID: {k.id.replace('k_', '')}</p>
                                </div>
                            </div>

                            {/* Readings */}
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-border">
                                    <span className="text-xs font-black text-red-600 uppercase tracking-widest block mb-1">Onyomi (Chinese)</span>
                                    <p className="font-bold text-primary">{k.onyomi.join('、 ') || 'None'}</p>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-900 p-3 rounded-lg border border-border">
                                    <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">Kunyomi (Japanese)</span>
                                    <p className="font-bold text-primary">{k.kunyomi.join('、 ') || 'None'}</p>
                                </div>
                            </div>

                            {/* Real-World Examples */}
                            <div className="mt-auto space-y-3">
                                <span className="text-xs font-black text-muted uppercase tracking-wider block">Vocab Examples</span>
                                {k.examples.map((ex, idx) => (
                                    <div key={idx} className="group relative flex justify-between items-center bg-background border border-border p-3 rounded-md hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                                        <div>
                                            <p className="text-lg font-bold text-primary">{ex.word}</p>
                                            <p className="text-xs font-bold text-muted">{ex.meaning}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="text-sm font-bold text-red-500">{ex.reading}</span>
                                            <button
                                                onClick={() => playAudio(ex.word)}
                                                className="opacity-0 group-hover:opacity-100 text-muted hover:text-red-500 transition-all p-1"
                                                title="Listen"
                                            >
                                                🔊
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
};