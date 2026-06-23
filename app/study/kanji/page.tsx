import { KanjiLibrary } from '@/features/study/presentation/components/KanjiLibrary';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kanji Library | Sensei AI N5',
    description: 'Browse the official JLPT N5 Kanji list.'
};

export default function KanjiLibraryPage() {
    return (
        <div className="min-h-screen bg-background">
            <KanjiLibrary />
        </div>
    );
}