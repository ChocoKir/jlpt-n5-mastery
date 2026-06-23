import { GrammarStudyRunner } from '@/features/study/presentation/components/GrammarStudyRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Grammar Practice | Sensei AI N5',
    description: 'Guided practice for JLPT N5 grammar points and particles.',
};

export default function GrammarPracticePage() {
    return (
        <div className="min-h-screen bg-background">
            <GrammarStudyRunner />
        </div>
    );
}