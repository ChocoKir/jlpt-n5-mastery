import { VocabMemoryMatch } from '@/features/study/presentation/components/VocabMemoryMatch';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vocab Memory Match | Sensei AI N5',
    description: 'Test your N5 vocabulary retention with this memory matching game.',
};

export default function VocabMemoryMatchPage() {
    return (
        <div className="min-h-screen bg-background">
            <VocabMemoryMatch />
        </div>
    );
}