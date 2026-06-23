"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { LogOut } from 'lucide-react';

import { DndContext, closestCenter, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, horizontalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { cn } from '@/shared/lib/utils';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';

const SortableTile = ({ id, text, isStarSlot, disabled }: { id: string, text: string, isStarSlot: boolean, disabled: boolean }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id, disabled });

    const style = { transform: CSS.Transform.toString(transform), transition, zIndex: isDragging ? 50 : 1 };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="relative flex flex-col items-center">
            {isStarSlot && <span className="absolute -top-8 text-yellow-500 text-2xl font-black drop-shadow-sm">⭐</span>}
            {!isStarSlot && <span className="h-[32px] absolute -top-8"></span>}
            <div className={cn("flex items-center justify-center min-w-[80px] h-16 px-5 rounded-2xl border-b-4 font-bold text-xl cursor-grab active:cursor-grabbing transition-colors bg-card border-border shadow-sm", isDragging && "bg-accent/10 border-accent text-accent shadow-2xl scale-110", disabled && !isDragging && isStarSlot && "bg-yellow-500/10 border-yellow-500 text-yellow-600", disabled && "cursor-not-allowed")}>
                {text}
            </div>
        </div>
    );
};

export const StarQuizRunner = () => {
    const engine = useQuizEngine();
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const [activeItems, setActiveItems] = useState<{ id: string, text: string }[]>([]);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 5 } }));

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const snapshot = await getDocs(collection(db, 'star_questions'));
                const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setQuestions(docs.sort(() => 0.5 - Math.random()).slice(0, 5));
            } catch (error) {
                console.error("Failed to load Star Questions", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchQuestions();
    }, []);

    const currentQ = questions[currentIndex];

    useEffect(() => {
        if (currentQ) {
            const scrambled = [...currentQ.correctSequence].sort(() => Math.random() - 0.5);
            setActiveItems(scrambled.map((text, idx) => ({ id: `tile-${idx}-${text}`, text })));
        }
    }, [currentQ]);

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        if (hasAnswered || !over || active.id === over.id) return;
        setActiveItems((items) => {
            const oldIndex = items.findIndex((i) => i.id === active.id);
            const newIndex = items.findIndex((i) => i.id === over.id);
            return arrayMove(items, oldIndex, newIndex);
        });
    };

    const handleCheckAnswer = async () => {
        const starIndex = 2;
        const userStarAnswer = activeItems[starIndex].text;
        const correctStarAnswer = currentQ.correctSequence[starIndex];
        const correct = userStarAnswer === correctStarAnswer;

        setIsCorrect(correct);
        setHasAnswered(true);

        const fullId = String(currentQ.id || `star_${currentIndex}`);
        if (correct) {
            engine.recordCorrect();
        } else {
            engine.recordWrong({ question: currentQ.question, correctAnswer: currentQ.correctSequence.join(' ') });
        }
    };

    const handleNextQuestion = () => {
        if (currentIndex + 1 >= questions.length) engine.finishSession();
        else {
            setHasAnswered(false);
            setIsCorrect(false);
            setCurrentIndex(prev => prev + 1);
        }
    };

    if (isLoading) return <div className="text-center py-20 text-2xl font-black animate-pulse text-yellow-500">🌟 Assembling Scramble...</div>;

    if (engine.isFinished) {
        return <QuizSuccessScreen engine={engine} title="Star Quiz Complete!" />;
    }

    return (
        <div className="max-w-4xl mx-auto py-10 px-5 relative z-10">
            <div className="flex justify-end mb-4">
                <button onClick={engine.exitEarly} className="text-muted hover:text-red-500 transition-colors bg-card p-2 rounded-xl border border-border/50">
                    <LogOut size={20} />
                </button>
            </div>

            <Card className="p-8 shadow-xl border-t-8 border-yellow-500 mb-8 bg-card/60 backdrop-blur-xl text-center">
                <h2 className="text-2xl sm:text-3xl font-black text-primary drop-shadow-sm mb-12">"{currentQ.question}"</h2>

                <div className="flex justify-center items-end gap-2 sm:gap-4 mb-10 flex-wrap min-h-[120px]">
                    {currentQ.prefix && <span className="text-2xl font-black text-primary mb-4">{currentQ.prefix}</span>}

                    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                        <SortableContext items={activeItems.map(i => i.id)} strategy={horizontalListSortingStrategy}>
                            <div className="flex gap-3">
                                {activeItems.map((item, idx) => (
                                    <SortableTile key={item.id} id={item.id} text={item.text} isStarSlot={idx === 2} disabled={hasAnswered} />
                                ))}
                            </div>
                        </SortableContext>
                    </DndContext>

                    {currentQ.suffix && <span className="text-2xl font-black text-primary mb-4">{currentQ.suffix}</span>}
                </div>
            </Card>

            {!hasAnswered ? (
                <Button onClick={handleCheckAnswer} className="w-full py-6 text-xl bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg border-none font-black">
                    Lock In Answer 🎯
                </Button>
            ) : (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                    <div className={`p-6 rounded-2xl border-2 mb-6 ${isCorrect ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10'}`}>
                        <h3 className={`font-black text-xl mb-3 ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
                            {isCorrect ? '✅ Perfect Sequence!' : `❌ Incorrect. The ⭐ was: ${currentQ.correctSequence[2]}`}
                        </h3>
                    </div>
                    <Button onClick={handleNextQuestion} className="w-full py-6 text-xl shadow-lg font-black">Next Scramble ➡️</Button>
                </motion.div>
            )}
        </div>
    );
};