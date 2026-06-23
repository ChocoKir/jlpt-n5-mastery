import { LeaderboardUI } from '@/features/leaderboard/presentation/LeaderboardUI';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Leaderboard | Sensei AI N5' };

export default function LeaderboardPage() {
    return (
        // 🛠️ FIX: Added standard screen wrapper for layout stability
        <div className="min-h-screen bg-background">
            <LeaderboardUI />
        </div>
    );
}