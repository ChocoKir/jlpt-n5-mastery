import { SRSItem } from '../entities/srs-item.entity';

export interface ISRSRepository {
    getItem(itemId: string): Promise<SRSItem | null>;
    saveItem(item: SRSItem): Promise<void>;
}