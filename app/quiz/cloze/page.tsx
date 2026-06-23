import { ClozePassageRunner } from '@/features/quizzes/presentation/components/ClozePassageRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cloze Passages | Sensei AI N5',
    description: 'Fill-in-the-blank grammar questions within a larger text.',
};

export default function ClozePassagePage() {
    return (
        <div className="min-h-screen bg-background">
            <ClozePassageRunner />
        </div>
    );
}