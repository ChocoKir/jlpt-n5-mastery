import { SpeakingQuizRunner } from '@/features/quizzes/presentation/components/SpeakingQuizRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Speaking Drills | Sensei AI N5',
    description: 'Practice pronunciation and speech recognition.',
};

export default function SpeakingQuizPage() {
    return (
        <div className="min-h-screen bg-background">
            <SpeakingQuizRunner />
        </div>
    );
}