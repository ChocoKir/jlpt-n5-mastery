export interface SRSItemProps {
    id: string;
    interval: number;
    easeFactor: number;
    nextReviewDate: string; // ISO Date
    lastReviewed: string;   // ISO Date
    payload?: any;          // Stores the dynamic question data from our 3600 items!
}

export class SRSItem {
    constructor(public props: SRSItemProps) {}

    public grade(quality: number): void {
        let ef = this.props.easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        if (ef < 1.3) ef = 1.3;

        let newInterval;
        if (quality < 3) {
            newInterval = 0; // 🛠️ DEV HACK: Set to 0 to review immediately
        } else if (this.props.interval === 0) {
            newInterval = 1;
        } else if (this.props.interval === 1) {
            newInterval = 6;
        } else {
            newInterval = Math.round(this.props.interval * ef);
        }

        this.props.easeFactor = ef;
        this.props.interval = newInterval;

        const now = new Date();
        this.props.lastReviewed = now.toISOString();

        const nextDate = new Date(now);
        nextDate.setDate(now.getDate() + newInterval);

        // 🛠️ DEV HACK: Subtract 5 minutes so it's instantly "overdue"
        if (newInterval === 0) {
            nextDate.setMinutes(now.getMinutes() - 5);
        }

        this.props.nextReviewDate = nextDate.toISOString();
    }

    public toJSON(): SRSItemProps {
        return { ...this.props };
    }
}