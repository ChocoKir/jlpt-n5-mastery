import { KanaQuizRunner } from '@/features/quizzes/presentation/components/KanaQuizRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kana Rapid Fire | Sensei AI N5',
    description: 'A rapid decryption trial for Hiragana and Katakana recognition.',
};

export default function KanaQuizPage() {
    return (
        <div className="min-h-screen bg-background">
            <KanaQuizRunner />
        </div>
    );
}