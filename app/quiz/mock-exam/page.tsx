import { MockExamRunner } from '@/features/quizzes/presentation/components/MockExamRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mock Exam | Sensei AI N5'
};

export default function MockExamPage() {
    return (
        // 🛠️ FIX: Added standard screen wrapper for layout stability
        <div className="min-h-screen bg-background">
            <MockExamRunner />
        </div>
    );
}