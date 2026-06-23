"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { N5_VOCAB } from '@/shared/data/vocab';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { playCorrectSound, playWrongSound, playLevelUpFanfare } from '@/shared/lib/audio/audio-service';
import { fireLevelUpConfetti } from '@/shared/lib/effects/particles';
import { GamificationService } from '@/features/gamification/application/services/gamification.service';
import { FuriganaText } from '@/shared/ui/FuriganaText';

interface MemoryCard {
    id: string; // Unique ID for the specific card instance
    vocabId: string; // The ID of the vocabulary word to check for matches
    content: string; // The text to display
    type: 'japanese' | 'english';
    isFlipped: boolean;
    isMatched: boolean;
}

export const VocabMemoryMatch = () => {
    const [cards, setCards] = useState<MemoryCard[]>([]);
    const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
    const [moves, setMoves] = useState(0);
    const [matches, setMatches] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const initializeGame = () => {
        // Pick 6 random vocab words
        const selectedVocab = [...N5_VOCAB].sort(() => 0.5 - Math.random()).slice(0, 6);

        let initialCards: MemoryCard[] = [];

        selectedVocab.forEach((vocab) => {
            // Create a Japanese card
            initialCards.push({
                id: `jp_${vocab.id}_${Math.random()}`,
                vocabId: vocab.id,
                content: vocab.word,
                type: 'japanese',
                isFlipped: false,
                isMatched: false
            });
            // Create the matching English card
            initialCards.push({
                id: `en_${vocab.id}_${Math.random()}`,
                vocabId: vocab.id,
                content: vocab.meaning,
                type: 'english',
                isFlipped: false,
                isMatched: false
            });
        });

        // Shuffle the deck!
        initialCards = initialCards.sort(() => 0.5 - Math.random());

        setCards(initialCards);
        setFlippedIndexes([]);
        setMoves(0);
        setMatches(0);
        setIsPlaying(true);
    };

    const handleCardClick = (index: number) => {
        // Prevent clicking if two cards are already flipping, or if the card is already revealed
        if (flippedIndexes.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;

        const newCards = [...cards];
        newCards[index].isFlipped = true;
        setCards(newCards);

        const newFlippedIndexes = [...flippedIndexes, index];
        setFlippedIndexes(newFlippedIndexes);

        // If two cards are flipped, check for a match
        if (newFlippedIndexes.length === 2) {
            setMoves(prev => prev + 1);
            const [firstIndex, secondIndex] = newFlippedIndexes;
            const firstCard = newCards[firstIndex];
            const secondCard = newCards[secondIndex];

            if (firstCard.vocabId === secondCard.vocabId) {
                // Match!
                playCorrectSound();
                setTimeout(() => {
                    const matchedCards = [...newCards];
                    matchedCards[firstIndex].isMatched = true;
                    matchedCards[secondIndex].isMatched = true;
                    setCards(matchedCards);
                    setFlippedIndexes([]);
                    setMatches(prev => {
                        const newMatches = prev + 1;
                        if (newMatches === 6) handleWin(); // 6 pairs total
                        return newMatches;
                    });
                }, 500);
            } else {
                // No Match!
                playWrongSound();
                setTimeout(() => {
                    const resetCards = [...newCards];
                    resetCards[firstIndex].isFlipped = false;
                    resetCards[secondIndex].isFlipped = false;
                    setCards(resetCards);
                    setFlippedIndexes([]);
                }, 1000); // Give them 1 second to memorize the mismatch
            }
        }
    };

    const handleWin = () => {
        playLevelUpFanfare();
        fireLevelUpConfetti();
        // Base XP of 20, minus penalty for taking too many moves
        const earnedXP = Math.max(5, 30 - (moves - 6) * 2);
        void GamificationService.awardXP(earnedXP, 1);
        setIsPlaying(false);
    };

    return (
        <div className="max-w-4xl mx-auto py-10 px-5 relative z-10 text-center">
            <div className="mb-10">
                <h1 className="text-4xl font-black text-orange-500 mb-3 tracking-tight">Vocab Memory Match 🧩</h1>
                <p className="text-lg text-muted font-bold uppercase tracking-widest text-xs">Find the matching pairs to clear the board!</p>
            </div>

            {!isPlaying && matches === 0 ? (
                <SpotlightCard className="p-12 border-t-8 border-orange-500 shadow-2xl bg-card/80 max-w-2xl mx-auto">
                    <div className="text-6xl mb-6 drop-shadow-md">🃏</div>
                    <h2 className="text-3xl font-black text-primary mb-4">Concentration Dojo</h2>
                    <p className="text-muted font-bold mb-8">Flip the cards to match the Japanese vocabulary to its English meaning. Fewer turns = More XP!</p>
                    <Button onClick={initializeGame} className="w-full py-6 text-xl font-black bg-orange-500 hover:bg-orange-600 border-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                        Deal Cards
                    </Button>
                </SpotlightCard>
            ) : !isPlaying && matches === 6 ? (
                <SpotlightCard className="p-12 border-t-8 border-accent shadow-2xl bg-card/80 max-w-2xl mx-auto">
                    <div className="text-6xl mb-6 drop-shadow-md">🏆</div>
                    <h2 className="text-3xl font-black text-primary mb-2">Board Cleared!</h2>
                    <h1 className="text-5xl font-black text-accent my-6">Completed in {moves} turns!</h1>
                    <p className="text-muted font-bold mb-8 uppercase tracking-widest text-sm">Bonus XP awarded to your profile.</p>
                    <Button onClick={initializeGame} className="w-full py-6 text-xl font-black">
                        Play Again 🔄
                    </Button>
                </SpotlightCard>
            ) : (
                <div className="space-y-6">
                    {/* HUD */}
                    <div className="flex justify-between items-center bg-card/60 backdrop-blur-md p-4 rounded-2xl border-2 border-border/50 shadow-sm max-w-sm mx-auto">
                        <div className="text-left">
                            <span className="text-[10px] font-black text-muted uppercase tracking-widest block">Moves</span>
                            <span className="text-3xl font-black text-orange-500 leading-none">{moves}</span>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-black text-muted uppercase tracking-widest block">Matches</span>
                            <span className="text-3xl font-black text-primary leading-none">{matches} / 6</span>
                        </div>
                    </div>

                    {/* The Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 perspective-1000">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.id}
                                className="relative w-full aspect-[3/4] cursor-pointer transform-style-3d"
                                animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
                                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                onClick={() => handleCardClick(index)}
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Front of Card (Face Down) */}
                                <div className={`absolute inset-0 bg-card border-2 border-border/50 rounded-2xl shadow-sm flex items-center justify-center backface-hidden transition-colors hover:border-orange-500/50 ${card.isMatched ? 'opacity-0' : 'opacity-100'}`} style={{ backfaceVisibility: 'hidden' }}>
                                    <span className="text-3xl text-orange-500/20 font-black">🎴</span>
                                </div>

                                {/* Back of Card (Face Up) */}
                                <div className={`absolute inset-0 border-2 rounded-2xl shadow-md flex items-center justify-center p-3 text-center backface-hidden rotate-y-180 ${card.isMatched ? 'bg-green-500/10 border-green-500 opacity-50' : card.type === 'japanese' ? 'bg-background border-orange-500' : 'bg-background border-blue-500'}`} style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                                    {card.type === 'japanese' ? (
                                        <span className="text-2xl sm:text-3xl font-black text-primary font-japanese leading-tight">
                                            <FuriganaText>{card.content}</FuriganaText>
                                        </span>
                                    ) : (
                                        <span className="text-sm sm:text-lg font-black text-primary uppercase tracking-widest leading-tight">
                                            {card.content}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};