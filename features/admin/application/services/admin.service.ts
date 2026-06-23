import { collection, addDoc, getDocs, deleteDoc, doc, query, limit } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';

export class AdminService {
    static async saveQuestionToDatabase(collectionName: string, data: any): Promise<boolean> {
        try {
            await addDoc(collection(db, collectionName), data);
            return true;
        } catch (error) {
            console.error(`Error saving to ${collectionName}:`, error);
            return false;
        }
    }

    static async fetchQuestionsFromDatabase(collectionName: string, maxItems = 50): Promise<any[]> {
        try {
            const q = query(collection(db, collectionName), limit(maxItems));
            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (error) {
            console.error(`Error fetching from ${collectionName}:`, error);
            return [];
        }
    }

    static async deleteQuestionFromDatabase(collectionName: string, docId: string): Promise<boolean> {
        try {
            await deleteDoc(doc(db, collectionName, docId));
            return true;
        } catch (error) {
            console.error(`Error deleting doc ${docId}:`, error);
            return false;
        }
    }
}