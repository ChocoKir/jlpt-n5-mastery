import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db, auth } from '@/shared/lib/firebase/config';
import { ISRSRepository } from '@/features/spaced-repetition/domain/repositories/srs.repository.interface';
import { SRSItem, SRSItemProps } from '@/features/spaced-repetition/domain/entities/srs-item.entity';

export class FirebaseSRSRepository implements ISRSRepository {
    async getItem(itemId: string): Promise<SRSItem | null> {
        const user = auth?.currentUser;
        if (!user) return null;

        const srsRef = doc(db, 'users', user.uid, 'srs', itemId);
        const docSnap = await getDoc(srsRef);

        if (docSnap.exists()) {
            const data = { id: docSnap.id, ...docSnap.data() } as SRSItemProps;
            return new SRSItem(data);
        }
        return null;
    }

    async saveItem(item: SRSItem): Promise<void> {
        const user = auth?.currentUser;
        if (!user) return;

        const srsRef = doc(db, 'users', user.uid, 'srs', item.props.id);
        const { id, ...dataToSave } = item.toJSON();

        await setDoc(srsRef, dataToSave, { merge: true });
    }
}