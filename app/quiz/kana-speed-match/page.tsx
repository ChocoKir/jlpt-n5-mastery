import { KanaSpeedMatch } from '@/features/study/presentation/components/KanaSpeedMatch';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kana Speed Match | Sensei AI N5',
    description: 'Race against the clock to match Romaji to Kana.',
};

export default function KanaSpeedMatchPage() {
    return (
        <div className="min-h-screen bg-background">
            <KanaSpeedMatch />
        </div>
    );
}