import { GrammarQuizRunner } from '@/features/quizzes/presentation/components/GrammarQuizRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Grammar Drills | Sensei AI N5',
    description: 'Test your knowledge of N5 particles and conjugations.',
};

export default function GrammarQuizPage() {
    return (
        <div className="min-h-screen bg-background">
            <GrammarQuizRunner />
        </div>
    );
}