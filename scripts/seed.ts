import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import * as fs from 'fs';
import * as path from 'path';

// IMPORTANT: Adjust this path based on EXACTLY where this script is saved!
import { SEED_DATA } from '../shared/data/seed-data';

async function runSeeder() {
    console.log('🔥 1. Script started! Initiating JLPT N5 Database Seed...');

    try {
        console.log('📂 2. Locating serviceAccountKey.json...');
        const serviceAccountPath = path.resolve(__dirname, '../serviceAccountKey.json');

        // If the file isn't found, this will now correctly throw a loud error
        const serviceAccountFile = fs.readFileSync(serviceAccountPath, 'utf8');
        const serviceAccount = JSON.parse(serviceAccountFile);

        console.log('🔌 3. Connecting to Firebase Admin...');
        initializeApp({
            credential: cert(serviceAccount)
        });

        const db = getFirestore();
        console.log('✅ 4. Connected to Firestore. Starting batch uploads...\n');

        const BATCH_SIZE = 500; // Firestore limit per batch

        // Dynamically iterate over every key in your SEED_DATA object
        for (const [moduleName, dataArray] of Object.entries(SEED_DATA)) {
            if (Array.isArray(dataArray) && dataArray.length > 0) {
                console.log(`⏳ Uploading [${moduleName}] -> ${dataArray.length} items...`);

                const batches = [];
                for (let i = 0; i < dataArray.length; i += BATCH_SIZE) {
                    const batch = db.batch();
                    const chunk = dataArray.slice(i, i + BATCH_SIZE);

                    chunk.forEach((item) => {
                        const docRef = db.collection(moduleName).doc(); // Auto-generates ID
                        batch.set(docRef, item);
                    });

                    batches.push(batch.commit());
                }

                await Promise.all(batches);
                console.log(`  ✅ Successfully pushed ${dataArray.length} items to '${moduleName}'.`);
            }
        }

        console.log('\n🎉 MISSION ACCOMPLISHED! All 3,600 items successfully pushed to Firestore.');
    } catch (error) {
        console.error('\n❌ FATAL ERROR during seeding:');
        console.error(error);
    }
}

// Execute and handle the Promise properly
runSeeder().catch((error) => {
    console.error('Unhandled Rejection:', error);
});