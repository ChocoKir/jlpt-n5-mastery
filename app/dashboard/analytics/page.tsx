import { AnalyticsDashboard } from '@/features/analytics/presentation/AnalyticsDashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Analytics | Sensei AI N5',
    description: 'Track your JLPT N5 mastery, vocabulary progress, and mock exam scores.'
};

export default function AnalyticsPage() {
    return (
        <div className="min-h-screen bg-background">
            <AnalyticsDashboard />
        </div>
    );
}