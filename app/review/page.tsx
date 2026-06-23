import { DailyReviewRunner } from '@/features/spaced-repetition/presentation/DailyReviewRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Daily Review | Sensei AI N5',
    description: 'Review your scheduled Japanese vocabulary and grammar using spaced repetition.'
};

export default function ReviewPage() {
    return (
        <div className="min-h-screen bg-background">
            <DailyReviewRunner />
        </div>
    );
}