"use client";

import React, { useState, useEffect } from 'react';
import { LogOut } from 'lucide-react';
import { QuizService } from '@/features/quizzes/application/services/quiz.service';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';
import { SenseiHelp } from '@/features/ai-sensei/presentation/SenseiHelp';
import { useQuizEngine } from '../../application/hooks/useQuizEngine';
import { QuizSuccessScreen } from './QuizSuccessScreen';
// 🛠️ FIX: Removed unused 'updateSRSItem' import

export const GrammarQuizRunner = () => {
    const engine = useQuizEngine();
    const [questions, setQuestions] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasAnswered, setHasAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            // 🛠️ FIX: Removed redundant await on a function that didn't return a promise in some versions
            const generated = QuizService.generateGrammarQuiz(5);
            setQuestions(generated);
        };
        // 🛠️ FIX: Added void
        void fetchQuestions();
    }, []);

    const currentQ = questions[currentIndex];

    // 🛠️ FIX: Removed 'async' keyword since we aren't awaiting anything inside
    const handleSelectOption = (option: string) => {
        if (hasAnswered) return;

        setSelectedAnswer(option);
        const correct = option === currentQ.correctAnswer;
        setIsCorrect(correct);
        setHasAnswered(true);

        // 🛠️ FIX: Removed unused 'fullId' variable

        if (correct) {
            engine.recordCorrect();
        } else {
            engine.recordWrong(currentQ);
        }
    };

    const handleNextQuestion = () => {
        if (currentIndex + 1 >= questions.length) {
            // 🛠️ FIX: Added void
            void engine.finishSession();
        } else {
            setHasAnswered(false);
            setIsCorrect(false);
            setSelectedAnswer(null);
            setCurrentIndex(prev => prev + 1);
        }
    };

    if (questions.length === 0 && !engine.isFinished) {
        return (
            <div className="text-center mt-24 text-primary animate-pulse">
                <h2 className="text-2xl font-bold">Loading Grammar Quiz... 📝</h2>
            </div>
        );
    }

    if (engine.isFinished) {
        return <QuizSuccessScreen engine={engine} title="Grammar Mastery Complete!" />;
    }

    return (
        <div className="max-w-[600px] my-10 mx-auto px-5 animate-in slide-in-from-right-8 duration-300">
            <div className="flex justify-between items-start mb-5">
                <div className="text-muted font-bold text-sm uppercase tracking-wider">
                    <span>Question {currentIndex + 1} of {questions.length}</span>
                    <span className="text-accent ml-4">Score: {engine.score}</span>
                </div>
                <button onClick={engine.exitEarly} className="p-2 text-muted hover:text-red-500 transition-colors" title="End Session Early">
                    <LogOut size={20} />
                </button>
            </div>

            <Card className="p-8 shadow-lg border-t-4 border-accent mb-6">
                <h2 className="text-2xl font-bold text-primary mb-8 leading-relaxed">
                    {currentQ.question}
                </h2>

                <div className="space-y-3">
                    {currentQ.options.map((opt: string, idx: number) => {
                        let btnStyle = "border-border bg-card hover:border-accent hover:bg-accent/5";
                        if (hasAnswered) {
                            if (opt === currentQ.correctAnswer) btnStyle = "border-green-500 bg-green-50 text-green-700 font-bold shadow-md";
                            else if (opt === selectedAnswer) btnStyle = "border-red-500 bg-red-50 text-red-700 font-bold shadow-md";
                            else btnStyle = "border-border bg-card opacity-50";
                        }

                        return (
                            <button
                                key={idx}
                                onClick={() => handleSelectOption(opt)}
                                disabled={hasAnswered}
                                className={`w-full text-left p-4 rounded-xl border-2 text-lg transition-all duration-200 ${btnStyle}`}
                            >
                                {opt}
                            </button>
                        );
                    })}
                </div>
            </Card>

            {hasAnswered && (
                <div className="animate-in slide-in-from-bottom-4 duration-300">
                    <div className={`p-5 rounded-xl border-l-4 mb-4 font-bold text-lg ${isCorrect ? 'bg-green-50 text-green-700 border-green-500' : 'bg-red-50 text-red-700 border-red-500'}`}>
                        {isCorrect ? "✅ Correct!" : "❌ Incorrect."}
                    </div>

                    <Button onClick={handleNextQuestion} className="w-full py-4 text-lg mb-4 shadow-lg">
                        {currentIndex + 1 === questions.length ? 'Finish Quiz 🏆' : 'Next Question ➡️'}
                    </Button>

                    {!isCorrect && selectedAnswer && (
                        <SenseiHelp question={currentQ.question} wrongAnswer={selectedAnswer} correctAnswer={currentQ.correctAnswer} />
                    )}
                </div>
            )}
        </div>
    );
};