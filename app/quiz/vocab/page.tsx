import { VocabQuizRunner } from '@/features/quizzes/presentation/components/VocabQuizRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vocabulary Quiz | Sensei AI N5',
    description: 'Test your N5 vocabulary retention.',
};

export default function VocabQuizPage() {
    return (
        <div className="min-h-screen bg-background">
            <VocabQuizRunner />
        </div>
    );
}