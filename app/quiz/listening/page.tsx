import { ListeningQuizRunner } from '@/features/quizzes/presentation/components/ListeningQuizRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Listening Comprehension | Sensei AI N5',
    description: 'Audio-based questions simulating the JLPT N5 Choukai section.',
};

export default function ListeningQuizPage() {
    return (
        <div className="min-h-screen bg-background">
            <ListeningQuizRunner />
        </div>
    );
}