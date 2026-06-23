import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { SRSItem, SRSItemProps } from '@/features/spaced-repetition/domain/entities/srs-item.entity';

// Dynamically parses our 3,600 JSON items into standard Flashcards
export const normalizeMissedItem = (item: any) => {
    if (item.word && item.meaning) {
        return { typeLabel: 'VOCABULARY', frontPrimary: item.word, frontSecondary: item.reading, backPrimary: item.meaning };
    }
    if (item.prompt && item.expectedResponse) {
        return { typeLabel: 'PRAGMATICS', frontPrimary: item.prompt, backPrimary: item.expectedResponse, backSecondary: item.explanation };
    }
    if (item.kanji && item.onyomi) {
        return { typeLabel: 'KANJI', frontPrimary: item.kanji, backPrimary: item.meaning, backSecondary: `ON: ${item.onyomi.join(', ')}` };
    }
    return {
        typeLabel: 'REVIEW',
        frontPrimary: item.question || item.passage || item.transcript || 'Review Item',
        backPrimary: item.correctAnswer || item.expectedResponse || 'Correct Answer',
        backSecondary: item.explanation || ''
    };
};

export const updateSRSItem = async (uid: string, itemId: string, isCorrect: boolean, payload: any = null): Promise<void> => {
    try {
        const srsRef = doc(db, `users/${uid}/srs_items`, itemId);
        const snapshot = await getDoc(srsRef);

        let entity: SRSItem;
        if (snapshot.exists()) {
            entity = new SRSItem(snapshot.data() as SRSItemProps);
        } else {
            entity = new SRSItem({
                id: itemId,
                interval: 0,
                easeFactor: 2.5,
                nextReviewDate: new Date().toISOString(),
                lastReviewed: new Date().toISOString(),
                payload: payload
            });
        }

        const quality = isCorrect ? 5 : 2;
        entity.grade(quality);

        await setDoc(srsRef, entity.toJSON(), { merge: true });
    } catch (error) {
        console.error("Failed to update SRS item:", error);
    }
};

export const getDueReviews = async (uid: string): Promise<SRSItemProps[]> => {
    try {
        const now = new Date().toISOString();
        const srsRef = collection(db, `users/${uid}/srs_items`);
        const q = query(srsRef, where("nextReviewDate", "<=", now));
        const snapshot = await getDocs(q);

        return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id } as SRSItemProps));
    } catch (error) {
        console.error("Failed to fetch due reviews:", error);
        return [];
    }
};

export const processQuizResults = async (uid: string, missedItems: any[]): Promise<void> => {
    for (const item of missedItems) {
        const safeId = item.id ? String(item.id) : `review_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
        const payload = normalizeMissedItem(item);
        await updateSRSItem(uid, safeId, false, payload);
    }
};

// Export as a grouped object for backwards compatibility with files using `srsService.method()`
export const srsService = {
    processQuizResults,
    updateSRSItem,
    getDueReviews
};