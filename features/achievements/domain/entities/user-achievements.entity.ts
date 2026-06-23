export class UserAchievements {
    constructor(
        public uid: string,
        public unlockedIds: string[] = []
    ) {}

    // Helper method for Firebase saving
    toJSON() {
        return {
            uid: this.uid,
            unlockedIds: this.unlockedIds
        };
    }
}

// Keep your Badge definition here too for the UI
export interface Achievement {
    id: string;
    title: string;
    description: string;
    icon: string;
    unlocked: boolean;
}