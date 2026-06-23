"use client";

import React, { useState, useEffect } from 'react';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';

// Updated interface to match your new Vocab structure
interface VocabWord {
    id: string;
    word: string;
    reading: string;
    meaning: string;
}

export const VocabFlashcards = () => {
    const [deck, setDeck] = useState<VocabWord[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchVocab = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'vocab_words'));
                const words = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as VocabWord[];

                setDeck(words.sort(() => 0.5 - Math.random()));
            } catch (error) {
                console.error("Failed to fetch vocab:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchVocab();
    }, []);

    const handleNext = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % deck.length);
        }, 150);
    };

    if (isLoading) {
        return <div className="text-center mt-20 font-bold text-accent animate-pulse">Loading Dojo... 🎴</div>;
    }

    if (deck.length === 0) {
        return <div className="text-center mt-20 font-bold text-muted">No vocab words found. Generate some in the Admin panel!</div>;
    }

    const currentCard = deck[currentIndex];

    return (
        <div className="max-w-md mx-auto my-10 px-5 text-center animate-in slide-in-from-bottom-8 duration-500">
            <h2 className="text-2xl font-black text-primary mb-6">Vocab Dojo 🎴</h2>

            <div
                className="relative w-full h-80 cursor-pointer perspective-1000"
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className={`w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>

                    {/* Front of Card */}
                    <Card className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden shadow-xl border-4 border-accent/20">
                        <span className="text-muted font-bold text-lg mb-2">Word {currentIndex + 1} / {deck.length}</span>
                        <h1 className="text-6xl font-black text-primary mb-2">{currentCard.word}</h1>
                        <p className="text-muted text-sm mt-4">(Click to flip)</p>
                    </Card>

                    {/* Back of Card */}
                    <Card className="absolute w-full h-full flex flex-col items-center justify-center backface-hidden shadow-xl border-4 border-green-500/50 rotate-y-180 bg-green-50/10 px-4">
                        <h2 className="text-3xl font-bold text-primary mb-2">{currentCard.reading}</h2>
                        <h3 className="text-2xl font-black text-accent mb-6">{currentCard.meaning}</h3>
                        <p className="text-muted text-sm">(Did you get it right?)</p>
                    </Card>

                </div>
            </div>

            <div className={`flex gap-4 mt-8 transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <Button onClick={handleNext} variant="secondary" className="flex-1 bg-red-100 text-red-600 hover:bg-red-200 border-red-200">
                    Need Practice ❌
                </Button>
                <Button onClick={handleNext} className="flex-1 bg-green-500 hover:bg-green-600 text-white border-green-600">
                    Got it! ✅
                </Button>
            </div>
        </div>
    );
};