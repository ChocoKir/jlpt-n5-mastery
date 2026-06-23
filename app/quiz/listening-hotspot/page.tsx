import { ListeningHotspotRunner } from '@/features/quizzes/presentation/components/ListeningHotspotRunner';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Spatial Listening | Sensei AI N5',
    description: 'Listen to spatial audio cues and click the correct object.',
};

export default function ListeningHotspotPage() {
    return (
        <div className="min-h-screen bg-background">
            <ListeningHotspotRunner />
        </div>
    );
}