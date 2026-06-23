import { VocabSwipeRunner } from '@/features/quizzes/presentation/components/VocabSwipeRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vocab Swipe | Sensei AI N5',
    description: 'Tinder-style rapid recall for N5 vocabulary.',
};

export default function VocabSwipePage() {
    return (
        <div className="min-h-screen bg-background overflow-hidden">
            <VocabSwipeRunner />
        </div>
    );
}