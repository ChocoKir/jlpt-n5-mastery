import { InfoRetrievalRunner } from '@/features/quizzes/presentation/components/InfoRetrievalRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Information Retrieval | Sensei AI N5',
    description: 'Scan receipts, notices, and schedules to find the correct answer.',
};

export default function InfoRetrievalPage() {
    return (
        <div className="min-h-screen bg-background">
            <InfoRetrievalRunner />
        </div>
    );
}