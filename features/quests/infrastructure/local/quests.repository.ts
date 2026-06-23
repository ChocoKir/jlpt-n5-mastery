import { IQuestsRepository } from '../../domain/repositories/quests.repository.interface';
import { DailyQuestBoard } from '../../domain/entities/daily-quest-board.entity';

export class LocalQuestsRepository implements IQuestsRepository {
    private readonly STORAGE_KEY = 'daily_quests_data';

    getDailyBoard(): DailyQuestBoard | null {
        if (typeof window === 'undefined') return null;

        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                // REHYDRATE the class so methods work!
                return new DailyQuestBoard(parsed.date, parsed.quests);
            } catch {
                return null;
            }
        }
        return null;
    }

    saveDailyBoard(board: DailyQuestBoard): void {
        if (typeof window === 'undefined') return;
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(board.toJSON()));
    }
}