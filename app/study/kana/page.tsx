import { KanaBoard } from '@/features/study/presentation/components/KanaBoard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kana Mastery | Nihongo N5',
    description: 'Master reading and writing Japanese Hiragana and Katakana with interactive drawing pads.'
};

export default function KanaStudyPage() {
    return (
        <div className="min-h-screen bg-background">
            <KanaBoard />
        </div>
    );
}