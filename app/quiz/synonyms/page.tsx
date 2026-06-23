import { SynonymMatchRunner } from '@/features/quizzes/presentation/components/SynonymMatchRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Synonym Match | Sensei AI N5',
    description: 'Identify sentences with the same meaning (Paraphrasing questions).',
};

export default function SynonymMatchPage() {
    return (
        <div className="min-h-screen bg-background">
            <SynonymMatchRunner />
        </div>
    );
}