import { KanjiContextQuizRunner } from '@/features/quizzes/presentation/components/KanjiContextQuizRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kanji in Context | Sensei AI N5',
    description: 'Identify Kanji readings within complete Japanese sentences.',
};

export default function KanjiContextPage() {
    return (
        <div className="min-h-screen bg-background">
            <KanjiContextQuizRunner />
        </div>
    );
}