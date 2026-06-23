import { DailyQuestBoard } from '../entities/daily-quest-board.entity';

export interface IQuestsRepository {
    getDailyBoard(): DailyQuestBoard | null;
    saveDailyBoard(board: DailyQuestBoard): void;
}