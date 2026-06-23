import { LocalActivityRepository } from '../../infrastructure/local/activity.repository';
import { ActivityHistory, getTodayString } from '../../domain/entities/activity.entity';

const repository = new LocalActivityRepository();

export const logDailyActivity = (xp: number): void => {
    const date = getTodayString();
    const history = repository.getHistory();

    // Add the new XP to today's existing total
    history[date] = (history[date] || 0) + xp;

    repository.saveHistory(history);
};

export const getActivityHistory = (): ActivityHistory => {
    return repository.getHistory();
};