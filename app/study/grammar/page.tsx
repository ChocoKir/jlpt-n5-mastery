import { GrammarGuide } from '@/features/study/presentation/components/GrammarGuide';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Grammar Guide | Sensei AI N5',
    description: 'Master the core grammar points, particles, and conjugations for the JLPT N5.'
};

export default function GrammarStudyPage() {
    // 🛠️ Updated to return our new searchable Grammar Guide!
    return (
        <div className="min-h-screen bg-background">
            <GrammarGuide />
        </div>
    );
}