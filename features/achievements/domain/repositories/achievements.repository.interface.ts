import { UserAchievements } from '../entities/user-achievements.entity';

export interface IAchievementsRepository {
    getUserAchievements(uid: string): Promise<UserAchievements>;
    saveUserAchievements(achievements: UserAchievements): Promise<void>;
}