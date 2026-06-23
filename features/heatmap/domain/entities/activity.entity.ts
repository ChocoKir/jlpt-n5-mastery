export type ActivityHistory = Record<string, number>;

// 🛡️ THE FIX: Ensure we use the local device timezone, not UTC!
export const getTodayString = (): string => {
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60000;
    const localDate = new Date(now.getTime() - offset);
    return localDate.toISOString().split('T')[0];
};