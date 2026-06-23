import { VocabStudyRunner } from '@/features/study/presentation/components/VocabStudyRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vocab Flashcards | Sensei AI N5',
    description: 'Master N5 vocabulary using interactive flashcards and spaced repetition.',
};

export default function VocabFlashcardsPage() {
    return (
        <div className="min-h-screen bg-background">
            <VocabStudyRunner />
        </div>
    );
}