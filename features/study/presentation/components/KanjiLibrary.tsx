"use client";

import React, { useState } from 'react';
import { Link } from 'next-view-transitions';
import { N5_KANJI } from '@/shared/data/kanji';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';

export const KanjiLibrary = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredKanji = N5_KANJI.filter(k =>
        k.kanji.includes(searchTerm) ||
        k.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
        k.onyomi.some(o => o.includes(searchTerm)) ||
        k.kunyomi.some(ku => ku.includes(searchTerm)) ||
        k.examples.some(ex => ex.reading.includes(searchTerm) || ex.word.includes(searchTerm))
    );

    return (
        <div className="max-w-6xl mx-auto py-10 px-5 animate-in fade-in duration-500 relative z-10">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-black text-rose-500 mb-3 tracking-tight">Kanji Library 🈴</h1>
                <p className="text-lg text-muted font-bold mb-8 uppercase tracking-widest">Browse all {N5_KANJI.length} official JLPT N5 Kanji</p>
                <div className="max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search kanji, meaning, or reading (e.g., 'water' or '水')..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-5 rounded-2xl border-2 border-border/50 bg-card/60 backdrop-blur-xl text-primary focus:border-rose-500 outline-none transition-colors shadow-lg text-lg font-bold"
                    />
                </div>
            </div>

            <p className="text-muted font-black text-center mb-8 uppercase tracking-widest text-xs">
                Showing {filteredKanji.length} / {N5_KANJI.length} Kanji
            </p>

            {filteredKanji.length === 0 ? (
                <SpotlightCard className="text-center p-20 text-muted bg-card/40 border-2 border-dashed border-border/50">
                    <div className="text-6xl mb-4 drop-shadow-md">👻</div>
                    <h2 className="text-2xl font-black text-primary">No Kanji found</h2>
                    <p className="font-bold mt-2">Try searching for a different meaning or reading.</p>
                </SpotlightCard>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredKanji.map((k) => (
                        <Link key={k.id} href={`/study/kanji/${k.id}`} className="block outline-none group">
                            <SpotlightCard glowColor="rgba(244, 63, 94, 0.15)" className="h-full p-6 flex flex-col border-2 border-border/50 bg-card/60 group-hover:border-rose-500/50 transition-colors duration-300">
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="text-6xl font-black text-rose-500 bg-rose-500/10 p-4 rounded-2xl flex-shrink-0 font-japanese border border-rose-500/20 drop-shadow-sm">
                                        {k.kanji}
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-black text-primary mb-2 uppercase tracking-wide leading-tight">{k.meaning}</h2>
                                        <div className="flex flex-col gap-1 text-[10px] font-black uppercase tracking-widest">
                                            {k.onyomi.length > 0 && <span className="text-muted">ON: <span className="text-rose-500 font-japanese text-sm">{k.onyomi.join('、 ')}</span></span>}
                                            {k.kunyomi.length > 0 && <span className="text-muted">KUN: <span className="text-blue-500 font-japanese text-sm">{k.kunyomi.join('、 ')}</span></span>}
                                        </div>
                                    </div>
                                </div>

                                {k.examples.length > 0 && (
                                    <div className="mt-auto border-t border-border/50 pt-4">
                                        <h4 className="text-[10px] font-black text-muted uppercase tracking-widest mb-3">Vocabulary Context</h4>
                                        <div className="flex flex-col gap-3">
                                            {k.examples.slice(0, 2).map((ex, i) => (
                                                <div key={i} className="flex justify-between items-center text-sm bg-background/40 p-2 rounded-lg border border-border/30">
                                                    <div>
                                                        <span className="font-black text-primary font-japanese">{ex.word}</span>
                                                        <span className="text-muted ml-2 text-xs font-bold">({ex.reading})</span>
                                                    </div>
                                                    <span className="font-bold text-muted truncate ml-2 text-xs">{ex.meaning}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </SpotlightCard>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};