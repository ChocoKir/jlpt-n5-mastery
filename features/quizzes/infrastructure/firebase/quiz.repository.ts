import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { IQuizRepository } from '@/features/quizzes/domain/repositories/quiz.repository.interface';

export class QuizRepository implements IQuizRepository {
    async fetchFirebaseDocs<T>(collectionName: string): Promise<T[]> {
        try {
            const snap = await getDocs(collection(db, collectionName));
            return snap.docs.map(doc => ({ id: doc.id, ...doc.data() })) as T[];
        } catch (error) {
            console.error(`Failed to fetch ${collectionName} from Firebase:`, error);
            throw error;
        }
    }

    // Safely reads current SRS state for quiz generation without crashing Next.js SSR
    getSRSDataSync(): Record<string, any> {
        if (typeof window === 'undefined') return {};
        try {
            const stored = localStorage.getItem('srs_data');
            return stored ? JSON.parse(stored) : {};
        } catch {
            return {};
        }
    }
}