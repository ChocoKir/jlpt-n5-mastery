import { GamificationService } from '@/features/gamification/application/services/gamification.service';
// 🛡️ THE FIX: Use absolute aliases!
import { LocalQuestsRepository } from '@/features/quests/infrastructure/local/quests.repository';
import { DailyQuestBoard, QuestItem } from '@/features/quests/domain/entities/daily-quest-board.entity';

const repository = new LocalQuestsRepository();

const getLocalTodayString = (): string => {
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60000;
    const localDate = new Date(now.getTime() - offset);
    return localDate.toISOString().split('T')[0];
};

export const QuestsService = {
    getTodayQuests(): QuestItem[] {
        const today = getLocalTodayString();
        let board = repository.getDailyBoard();

        if (!board || board.isExpired(today)) {
            board = DailyQuestBoard.generateNew(today);
            repository.saveDailyBoard(board);
        }

        return board.quests;
    },

    async updateProgress(type: 'quiz_perfect' | 'earn_xp' | 'review_cards' | 'study_kana', amount: number): Promise<void> {
        const today = getLocalTodayString();
        let board = repository.getDailyBoard();

        if (!board || board.isExpired(today)) return;

        const wasUpdated = board.updateProgress(type, amount);

        if (wasUpdated) {
            repository.saveDailyBoard(board);
        }
    },

    async claimReward(questId: string): Promise<QuestItem[]> {
        const today = getLocalTodayString();
        const board = repository.getDailyBoard();

        if (!board || board.isExpired(today)) return [];

        const claimedQuest = board.claimReward(questId);

        if (claimedQuest) {
            repository.saveDailyBoard(board);

            await GamificationService.awardXP(claimedQuest.rewardXP, 1);

            if (typeof window !== 'undefined') {
                window.dispatchEvent(new Event('gamificationUpdated'));
            }
        }

        return board.quests;
    }
};