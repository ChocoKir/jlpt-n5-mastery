import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db, auth } from '@/shared/lib/firebase/config';
import { subDays, format } from 'date-fns';
import { getActivityHistory } from '@/features/heatmap/application/services/activity.service';
import { N5_VOCAB } from '@/shared/data/vocab';
import { N5_KANJI } from '@/shared/data/kanji';
import { N5_GRAMMAR } from '@/shared/data/grammar';

export interface ActivityData {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

export class AnalyticsService {
    // 1. Now reads real mastery from your Firebase SRS instead of old local storage
    static async getMasteryProgress() {
        const user = auth?.currentUser;
        if (!user) return this.getZeroProgress();

        let vocabLearned = 0;
        let kanjiLearned = 0;
        let grammarLearned = 0;

        try {
            const srsRef = collection(db, `users/${user.uid}/srs_items`);
            const snapshot = await getDocs(srsRef);

            snapshot.docs.forEach(doc => {
                const data = doc.data();
                // Items with an ease factor > 2.0 are considered "learned/mastered"
                if (data.easeFactor > 2.0) {
                    const id = data.id || doc.id;
                    if (id.startsWith('vocab_')) vocabLearned++;
                    if (id.startsWith('kanji_')) kanjiLearned++;
                    if (id.startsWith('grammar_')) grammarLearned++;
                }
            });
        } catch (error) {
            console.error("Failed to fetch SRS for mastery:", error);
        }

        return {
            vocab: { learned: vocabLearned, total: N5_VOCAB.length, percent: Math.round((vocabLearned / N5_VOCAB.length) * 100) || 0 },
            kanji: { learned: kanjiLearned, total: N5_KANJI.length, percent: Math.round((kanjiLearned / N5_KANJI.length) * 100) || 0 },
            grammar: { learned: grammarLearned, total: N5_GRAMMAR.length, percent: Math.round((grammarLearned / N5_GRAMMAR.length) * 100) || 0 },
        };
    }

    private static getZeroProgress() {
        return {
            vocab: { learned: 0, total: N5_VOCAB.length, percent: 0 },
            kanji: { learned: 0, total: N5_KANJI.length, percent: 0 },
            grammar: { learned: 0, total: N5_GRAMMAR.length, percent: 0 },
        };
    }

    // 2. Actually reads from the users/{uid}/mock_exams collection
    static async getMockExamHistory() {
        const user = auth?.currentUser;
        if (!user) return [];

        try {
            const historyRef = collection(db, `users/${user.uid}/mock_exams`);
            const q = query(historyRef, orderBy('date', 'asc'), limit(5));
            const snapshot = await getDocs(q);

            if (snapshot.empty) return [];

            return snapshot.docs.map((doc, index) => ({
                label: `Test ${index + 1}`,
                score: doc.data().score as number
            }));
        } catch (error) {
            console.error("Failed to fetch mock history:", error);
            return [];
        }
    }

    // 3. Replaced Random Fake Data with REAL LocalStorage Heatmap Data
    static async getActivityData(): Promise<ActivityData[]> {
        const realHistory = getActivityHistory(); // Grab actual user XP history
        const data: ActivityData[] = [];
        const today = new Date();

        for (let i = 180; i >= 0; i--) {
            const date = subDays(today, i);
            const formattedDate = format(date, 'yyyy-MM-dd');
            const xp = realHistory[formattedDate] || 0;

            let level: 0 | 1 | 2 | 3 | 4 = 0;
            if (xp > 0) {
                if (xp >= 250) level = 4;
                else if (xp >= 100) level = 3;
                else if (xp >= 50) level = 2;
                else level = 1;
            }

            data.push({ date: formattedDate, count: xp, level });
        }
        return data;
    }

    static calculateCurrentStreak(activityData: ActivityData[]): number {
        let streak = 0;
        const today = new Date();
        const formattedToday = format(today, 'yyyy-MM-dd');

        for (let i = activityData.length - 1; i >= 0; i--) {
            const day = activityData[i];
            if (day.count > 0) {
                streak++;
            } else {
                if (day.date !== formattedToday) break;
            }
        }
        return streak;
    }
}