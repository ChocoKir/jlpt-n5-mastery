import { UserStats } from '@/features/gamification/domain/entities/user-stats.entity';

export interface IGamificationRepository {
    getUserStats(uid: string): Promise<UserStats | null>;
    saveUserStats(stats: UserStats): Promise<void>;
}