import Dexie, { Table } from 'dexie';

// 1. Caches Quiz Data so users can study without internet
export interface OfflineQuestion {
    id: string;
    module: 'vocab' | 'kanji' | 'grammar' | 'listening' | 'reading';
    data: any;
    downloadedAt: number;
}

// 2. Queues User Actions (XP Gains, SRS updates) while offline
export interface OfflineAction {
    id?: number; // Auto-incremented by Dexie
    actionType: 'XP_GAIN' | 'SRS_UPDATE' | 'QUIZ_COMPLETE';
    payload: any;
    timestamp: number;
    synced: boolean;
}

export class SenseiDatabase extends Dexie {
    questions!: Table<OfflineQuestion>;
    syncQueue!: Table<OfflineAction>;

    constructor() {
        super('SenseiOfflineDB');

        // Schema Definition (Keys defined here are indexed for fast searching)
        this.version(2).stores({
            questions: 'id, module, downloadedAt',
            syncQueue: '++id, actionType, synced, timestamp'
        });
    }
}

export const localDB = new SenseiDatabase();