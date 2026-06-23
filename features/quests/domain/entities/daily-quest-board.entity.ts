export interface QuestItem {
    id: string;
    title: string;
    type: 'quiz_perfect' | 'earn_xp' | 'review_cards' | 'study_kana';
    target: number;
    progress: number;
    rewardXP: number;
    completed: boolean;
    claimed: boolean;
}

const QUEST_POOL = [
    { title: 'Score a perfect 100% on any Quiz', type: 'quiz_perfect', target: 1, rewardXP: 100 },
    { title: 'Earn 100 XP total today', type: 'earn_xp', target: 100, rewardXP: 50 },
    { title: 'Clear 10 Spaced Repetition cards', type: 'review_cards', target: 10, rewardXP: 50 },
    { title: 'Do a Kana Study Session', type: 'study_kana', target: 1, rewardXP: 30 },
];

export class DailyQuestBoard {
    constructor(public date: string, public quests: QuestItem[]) {}

    public isExpired(todayString: string): boolean {
        return this.date !== todayString;
    }

    public updateProgress(type: string, amount: number): boolean {
        let changed = false;
        for (const q of this.quests) {
            if (q.type === type && !q.completed) {
                q.progress += amount;
                if (q.progress >= q.target) {
                    q.progress = q.target;
                    q.completed = true;
                }
                changed = true;
            }
        }
        return changed;
    }

    public claimReward(questId: string): QuestItem | null {
        const quest = this.quests.find(q => q.id === questId);
        if (quest && quest.completed && !quest.claimed) {
            quest.claimed = true;
            return quest;
        }
        return null;
    }

    public toJSON() {
        return { date: this.date, quests: this.quests };
    }

    static generateNew(todayString: string): DailyQuestBoard {
        const shuffled = [...QUEST_POOL].sort(() => 0.5 - Math.random()).slice(0, 3);
        const newQuests: QuestItem[] = shuffled.map((q, i) => ({
            id: `quest_${todayString}_${i}`,
            title: q.title,
            type: q.type as any,
            target: q.target,
            progress: 0,
            rewardXP: q.rewardXP,
            completed: false,
            claimed: false
        }));
        return new DailyQuestBoard(todayString, newQuests);
    }
}