import { GrammarScramble } from '@/features/study/presentation/components/GrammarScramble';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Syntax Scramble | Sensei AI N5',
    description: 'Rebuild Japanese sentences block by block.',
};

export default function GrammarScramblePage() {
    return (
        <div className="min-h-screen bg-background">
            <GrammarScramble />
        </div>
    );
}