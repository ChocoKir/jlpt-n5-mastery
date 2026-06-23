import { ReadingQuizRunner } from '@/features/quizzes/presentation/components/ReadingQuizRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Reading Comprehension | Sensei AI N5',
    description: 'Practice reading N5 level passages and answering questions.',
};

export default function ReadingQuizPage() {
    return (
        <div className="min-h-screen bg-background">
            <ReadingQuizRunner />
        </div>
    );
}