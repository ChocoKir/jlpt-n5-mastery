export interface UserStatsProps {
    uid: string;
    displayName: string;
    xp: number;
    level: number;
    currentStreak: number;
    lastStudyDate: string | null;
}

export class UserStats {
    constructor(public props: UserStatsProps) {}

    public addXP(amount: number): void {
        this.props.xp += amount;
        this.recalculateLevel();
        this.updateStreak();
    }

    private recalculateLevel(): void {
        // Optional AAA Polish: RPG-style progressive leveling curve instead of flat 500
        // Level 1: 0-500, Level 2: 500-1500, etc. (Keeping it flat for now to match your UI)
        this.props.level = Math.floor(this.props.xp / 500) + 1;
    }

    private updateStreak(): void {
        // 🛡️ THE FIX: Safely get the local timezone date string, NOT UTC.
        const now = new Date();
        const offset = now.getTimezoneOffset() * 60000;
        const localDate = new Date(now.getTime() - offset);
        const todayStr = localDate.toISOString().split('T')[0];

        if (!this.props.lastStudyDate) {
            this.props.currentStreak = 1;
        } else {
            const lastDate = new Date(this.props.lastStudyDate);
            const today = new Date(todayStr);

            // Calculate difference in days safely
            const diffTime = Math.abs(today.getTime() - lastDate.getTime());
            // Math.round() prevents daylight savings time drift issues (23 hours vs 24 hours)
            const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
                this.props.currentStreak += 1; // Studied yesterday, increment streak!
            } else if (diffDays > 1) {
                this.props.currentStreak = 1; // Streak broken, reset to 1
            }
            // If diffDays === 0, they already studied today. Streak remains the same.
        }

        this.props.lastStudyDate = todayStr;
    }

    public toJSON(): UserStatsProps {
        return { ...this.props };
    }
}