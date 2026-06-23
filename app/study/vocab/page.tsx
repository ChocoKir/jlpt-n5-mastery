import { VocabBuilder } from '@/features/study/presentation/components/VocabBuilder';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vocabulary Library | Nihongo N5',
    description: 'Master the core 800 vocabulary words required for JLPT N5 fluency.'
};

export default function VocabStudyPage() {
    return (
        <div className="min-h-screen bg-background">
            <VocabBuilder />
        </div>
    );
}