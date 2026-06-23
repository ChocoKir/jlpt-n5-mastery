export interface IQuizRepository {
    fetchFirebaseDocs<T>(collectionName: string): Promise<T[]>;
    getSRSDataSync(): Record<string, any>;
}