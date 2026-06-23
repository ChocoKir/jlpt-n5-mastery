"use client";

import React, { useState } from 'react';
import { Link } from 'next-view-transitions';
import { N5_KANJI } from '@/shared/data/kanji';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { KanjiCanvas } from './KanjiCanvas';
import { Flashcard } from '@/shared/ui/Flashcard';
import { FuriganaText } from '@/shared/ui/FuriganaText';

interface KanjiDetailProps {
    kanjiId: string;
}

export const KanjiDetailView = ({ kanjiId }: KanjiDetailProps) => {
    const kanjiData = N5_KANJI.find(k => k.id === kanjiId);

    // State for the mini-flashcard game
    const [vocabIndex, setVocabIndex] = useState(0);

    if (!kanjiData) {
        return (
            <div className="text-center py-20 animate-in zoom-in">
                <h1 className="text-4xl font-black text-red-500 mb-4">Kanji Not Found</h1>
                <Link href="/study" className="text-primary font-bold hover:underline">
                    Return to Library
                </Link>
            </div>
        );
    }

    const currentVocab = kanjiData.examples[vocabIndex];

    const handleNextVocab = () => {
        // Loop back to the first word if they hit the end
        if (vocabIndex + 1 < kanjiData.examples.length) {
            setVocabIndex(prev => prev + 1);
        } else {
            setVocabIndex(0);
        }
    };

    const playAudio = (text: string) => {
        if (!text || typeof window === 'undefined') return;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-5 animate-in slide-in-from-bottom-8 duration-500 relative z-10">
            <Link href="/study" className="text-muted font-black hover:text-rose-500 transition-colors mb-8 inline-block uppercase tracking-widest text-xs bg-card border border-border/50 px-4 py-2 rounded-xl shadow-sm outline-none">
                ← Back to Library
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                {/* Left Column: Data */}
                <div className="space-y-6">
                    <div className="flex items-end gap-6 mb-8">
                        <div className="text-9xl font-black text-rose-500 bg-rose-500/10 p-6 rounded-3xl shadow-inner border-4 border-rose-500/30 leading-none font-japanese drop-shadow-md">
                            {kanjiData.kanji}
                        </div>
                        <div className="pb-4">
                            <h1 className="text-4xl font-black text-primary uppercase tracking-widest mb-2">{kanjiData.meaning}</h1>
                            <p className="text-muted font-bold text-lg tracking-wide uppercase bg-background border border-border/50 px-3 py-1 rounded-md inline-block">JLPT N5</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <SpotlightCard glowColor="rgba(244, 63, 94, 0.1)" className="p-6 border-l-4 border-l-rose-500 shadow-md">
                            <h3 className="text-[10px] font-black text-muted uppercase tracking-widest mb-3">Onyomi (Chinese)</h3>
                            <p className="text-2xl font-black text-primary font-japanese">{kanjiData.onyomi.length > 0 ? kanjiData.onyomi.join('、 ') : 'None'}</p>
                        </SpotlightCard>
                        <SpotlightCard glowColor="rgba(59, 130, 246, 0.1)" className="p-6 border-l-4 border-l-blue-500 shadow-md">
                            <h3 className="text-[10px] font-black text-muted uppercase tracking-widest mb-3">Kunyomi (Japanese)</h3>
                            <p className="text-2xl font-black text-primary font-japanese">{kanjiData.kunyomi.length > 0 ? kanjiData.kunyomi.join('、 ') : 'None'}</p>
                        </SpotlightCard>
                    </div>
                </div>

                {/* Right Column: The Practice Canvas */}
                <SpotlightCard className="p-8 rounded-3xl border-2 border-border/50 shadow-xl bg-card/60" glowColor="rgba(255, 255, 255, 0.05)">
                    <KanjiCanvas targetKanji={kanjiData.kanji} />
                </SpotlightCard>
            </div>

            {/* The Creative Addition: Contextual Mini-Flashcards */}
            {kanjiData.examples.length > 0 && (
                <div className="mt-16 border-t-2 border-border/50 pt-10">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black text-primary mb-2 tracking-tight">Vocabulary Context 🧠</h2>
                        <p className="text-muted font-bold">Test your knowledge of words using this Kanji.</p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <Flashcard
                            frontContent={
                                <div className="flex flex-col items-center justify-center h-full px-4 relative w-full">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); playAudio(currentVocab.word); }}
                                        className="absolute top-0 right-0 opacity-50 hover:opacity-100 text-muted hover:text-accent transition-all p-3 bg-background rounded-full shadow-sm border border-border outline-none z-10"
                                        title="Listen"
                                    >
                                        🔊
                                    </button>
                                    <h2 className="text-6xl font-black text-primary mb-4 font-japanese drop-shadow-sm">
                                        <FuriganaText>{currentVocab.word}</FuriganaText>
                                    </h2>
                                    <p className="text-sm font-black text-rose-500 uppercase tracking-widest bg-rose-500/10 px-4 py-2 rounded-xl border border-rose-500/20">
                                        Vocabulary Word {vocabIndex + 1} of {kanjiData.examples.length}
                                    </p>
                                </div>
                            }
                            backContent={
                                <div className="flex flex-col items-center justify-center h-full text-center w-full px-4">
                                    <p className="text-xs font-black text-muted uppercase tracking-wider mb-4 border-b-2 border-border/50 pb-2 w-full">Meaning & Reading</p>
                                    <h3 className="text-4xl font-black text-accent mb-4">{currentVocab.meaning}</h3>
                                    <p className="text-2xl font-bold text-primary font-japanese">{currentVocab.reading}</p>
                                </div>
                            }
                            onNext={handleNextVocab}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};