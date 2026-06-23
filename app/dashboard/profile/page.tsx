import { ProfileDashboard } from '@/features/user/presentation/components/ProfileDashboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Profile | Sensei AI N5',
    description: 'View your JLPT N5 progress and stats.',
};

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-background">
            <ProfileDashboard />
        </div>
    );
}