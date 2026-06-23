import { StudyKanaRunner } from '@/features/study/presentation/components/StudyKanaRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kana Practice | Sensei AI N5',
    description: 'Interactive drills to memorize Hiragana and Katakana.',
};

export default function KanaPracticePage() {
    return (
        <div className="min-h-screen bg-background">
            <StudyKanaRunner />
        </div>
    );
}