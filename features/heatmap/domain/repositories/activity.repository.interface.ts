import { ActivityHistory } from '../entities/activity.entity';

export interface IActivityRepository {
    getHistory(): ActivityHistory;
    saveHistory(history: ActivityHistory): void;
}