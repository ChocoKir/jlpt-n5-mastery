import { KanjiGuide } from '@/features/study/presentation/components/KanjiGuide';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Interactive Kanji Guide | Sensei AI N5',
    description: 'Step-by-step interactive guide for mastering N5 Kanji.',
};

export default function KanjiGuidePage() {
    return (
        <div className="min-h-screen bg-background">
            <KanjiGuide />
        </div>
    );
}