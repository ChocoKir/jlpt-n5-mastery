import { KanjiQuizRunner } from '@/features/quizzes/presentation/components/KanjiQuizRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kanji Quiz | Sensei AI N5',
    description: 'Standard N5 Kanji reading and meaning tests.',
};

export default function KanjiQuizPage() {
    return (
        <div className="min-h-screen bg-background">
            <KanjiQuizRunner />
        </div>
    );
}