import { AdminDashboard } from '@/features/admin/presentation/components/AdminDashboard';
import { AdminGuard } from '@/features/auth/presentation/components/AdminGuard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Admin Console | Sensei AI N5',
};

export default function AdminPage() {
    return (
        <div className="min-h-screen bg-background">
            <AdminGuard>
                <AdminDashboard />
            </AdminGuard>
        </div>
    );
}