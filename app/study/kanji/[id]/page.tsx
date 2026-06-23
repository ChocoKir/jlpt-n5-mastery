import { KanjiDetailView } from '@/features/study/presentation/components/KanjiDetailView';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kanji Detail | Sensei AI N5'
};

// Next.js 15+ asynchronous params pattern
export default async function KanjiPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;

    return (
        <div className="min-h-screen bg-background">
            <KanjiDetailView kanjiId={resolvedParams.id} />
        </div>
    );
}