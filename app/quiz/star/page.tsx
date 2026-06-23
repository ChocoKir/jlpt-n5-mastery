import { StarQuizRunner } from '@/features/quizzes/presentation/components/StarQuizRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Star Scramble | Sensei AI N5',
    description: 'The infamous JLPT N5 sentence construction questions.',
};

export default function StarQuizPage() {
    return (
        <div className="min-h-screen bg-background">
            <StarQuizRunner />
        </div>
    );
}