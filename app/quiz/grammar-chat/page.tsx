import { GrammarChatRunner } from '@/features/quizzes/presentation/components/GrammarChatRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'LINE Pragmatics | Sensei AI N5',
    description: 'Practice conversational Japanese in a simulated chat environment.',
};

export default function GrammarChatPage() {
    return (
        <div className="min-h-screen bg-background">
            <GrammarChatRunner />
        </div>
    );
}