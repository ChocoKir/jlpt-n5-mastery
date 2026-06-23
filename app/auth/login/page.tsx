import { AuthForm } from '@/features/auth/presentation/components/AuthForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login | Sensei AI N5',
    description: 'Sign in to continue your Japanese learning journey.',
};

export default function LoginPage() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center p-5 bg-background">
            <AuthForm />
        </div>
    );
}