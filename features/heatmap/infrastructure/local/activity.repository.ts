import { IActivityRepository } from '../../domain/repositories/activity.repository.interface';
import { ActivityHistory } from '../../domain/entities/activity.entity';

export class LocalActivityRepository implements IActivityRepository {
    private readonly STORAGE_KEY = 'study_activity_history';

    getHistory(): ActivityHistory {
        // SSR Guard for Next.js
        if (typeof window === 'undefined') return {};

        const historyString = localStorage.getItem(this.STORAGE_KEY);
        if (!historyString) return {};

        try {
            return JSON.parse(historyString);
        } catch {
            return {};
        }
    }

    saveHistory(history: ActivityHistory): void {
        if (typeof window === 'undefined') return;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
    }
}