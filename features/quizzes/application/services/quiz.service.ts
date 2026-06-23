import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { QuizRepository } from '@/features/quizzes/infrastructure/firebase/quiz.repository';
import {
    QuizQuestion, MockExamQuestion, shuffleArray
} from '@/features/quizzes/domain/entities/quiz.entity';

// Static Data Imports (Only the core dictionaries needed for standard quizzes)
import { N5_KANJI } from '@/shared/data/kanji';
import { N5_VOCAB } from '@/shared/data/vocab';
import { N5_GRAMMAR } from '@/shared/data/grammar';

const repository = new QuizRepository();

export class QuizService {
    // ---------------------------------------------------------
    // PRIVATE HELPERS
    // ---------------------------------------------------------

    private static getSRSItems<T extends { id: string }>(items: T[], prefix: string, count: number): T[] {
        const srsData = repository.getSRSDataSync();
        const now = Date.now();

        const due = items.filter(item => {
            const srsItem = srsData[`${prefix}${item.id}`];
            return srsItem && new Date(srsItem.nextReview).getTime() <= now;
        });
        const newItems = items.filter(item => !srsData[`${prefix}${item.id}`]);

        const shuffledDue = shuffleArray(due);
        const shuffledNew = shuffleArray(newItems);

        const selected = shuffledDue.length >= count
            ? shuffledDue.slice(0, count)
            : [...shuffledDue, ...shuffledNew.slice(0, count - shuffledDue.length)];

        return shuffleArray(selected);
    }

    private static getDistractors<T extends { id: string }>(items: T[], targetId: string, mapFn: (val: T) => string, count: number = 3): string[] {
        return shuffleArray(items.filter(i => i.id !== targetId)).slice(0, count).map(mapFn);
    }

    // ---------------------------------------------------------
    // STANDARD QUIZ GENERATORS (Used by Vocab, Kanji, and Grammar Runners)
    // ---------------------------------------------------------

    static generateCustomVocabQuiz(count: number, focus: string, userId?: string): any[] {
        let filteredItems = [...N5_VOCAB];
        const prefix = 'vocab_';

        if (focus !== 'all' && userId) {
            const srsRecord = repository.getSRSDataSync();
            if (focus === 'new') {
                filteredItems = N5_VOCAB.filter(item => !srsRecord[`${prefix}${item.id}`]);
            } else if (focus === 'weak') {
                filteredItems = N5_VOCAB.filter(item => {
                    const stats = srsRecord[`${prefix}${item.id}`];
                    return stats && (stats.streak === 0 || stats.easeFactor < 2.0);
                });
            }
            if (filteredItems.length === 0) filteredItems = [...N5_VOCAB];
        }

        return shuffleArray(filteredItems).slice(0, count).map(target => ({
            id: `vocab_${target.id}`,
            question: `What is the meaning of: ${target.word}?`,
            word: target.word,
            reading: target.reading,
            options: shuffleArray([target.meaning, ...this.getDistractors(N5_VOCAB, target.id, v => v.meaning)]),
            correctAnswer: target.meaning,
            explanation: `Reading: ${target.reading}\nType: ${target.type}`
        }));
    }

    static generateKanjiQuiz(count: number = 10): QuizQuestion[] {
        return this.getSRSItems(N5_KANJI, 'kanji_', count).map(target => ({
            id: `kanji_${target.id}`,
            question: `What is the meaning of the Kanji: ${target.kanji}?`,
            options: shuffleArray([target.meaning, ...this.getDistractors(N5_KANJI, target.id, k => k.meaning)]),
            correctAnswer: target.meaning,
            explanation: `Onyomi: ${(target.onyomi || []).join(', ')}\nKunyomi: ${(target.kunyomi || []).join(', ')}`
        }));
    }

    static generateGrammarQuiz(count: number = 10): QuizQuestion[] {
        return this.getSRSItems(N5_GRAMMAR, 'grammar_', count).map(target => {
            const correctText = target.grammar.split(' ')[0] || target.grammar;
            const distractors = this.getDistractors(N5_GRAMMAR, target.id, g => g.grammar.split(' ')[0] || g.grammar);
            const exampleJa = target.examples?.[0]?.japanese || 'Example unavailable';
            const exampleEn = target.examples?.[0]?.english || '';

            return {
                id: `grammar_${target.id}`,
                question: `Which grammar point matches this meaning:\n"${target.meaning}"?`,
                options: shuffleArray([correctText, ...distractors]),
                correctAnswer: correctText,
                explanation: `Formula: ${target.formation}\nExample: ${exampleJa} ${exampleEn ? `(${exampleEn})` : ''}`
            };
        });
    }

    // ---------------------------------------------------------
    // THE GAUNTLET: OFFICIAL 89-QUESTION JLPT N5 MOCK EXAM
    // ---------------------------------------------------------
    static async generateMockExam(): Promise<MockExamQuestion[]> {
        try {
            // Fetch everything from our AI-generated databases in parallel
            const [vocabSnap, kanjiSnap, readingSnap, listeningSnap, starSnap] = await Promise.all([
                getDocs(collection(db, 'vocab_words')),
                getDocs(collection(db, 'kanji_context')),
                getDocs(collection(db, 'reading_passages')),
                getDocs(collection(db, 'listening_questions')),
                getDocs(collection(db, 'star_questions'))
            ]);

            const vocabDocs = vocabSnap.docs.map(d => ({ id: d.id, ...d.data() as any }));
            const kanjiDocs = kanjiSnap.docs.map(d => ({ id: d.id, ...d.data() as any }));
            const readingDocs = readingSnap.docs.map(d => ({ id: d.id, ...d.data() as any }));
            const listenDocs = listeningSnap.docs.map(d => ({ id: d.id, ...d.data() as any }));
            const starDocs = starSnap.docs.map(d => ({ id: d.id, ...d.data() as any }));

            const exam: MockExamQuestion[] = [];
            let questionCounter = 1;

            // --- SECTION 1: Language Knowledge (Vocab/Kanji) ---
            const vShuffle = shuffleArray(vocabDocs).slice(0, 20);
            vShuffle.forEach((v) => {
                const distractors = this.generateRandomDistractors(v.meaning, vocabDocs, 'meaning');
                exam.push({
                    id: `mock_v_${questionCounter++}`,
                    section: 'Vocabulary (文字・語彙)',
                    question: `What is the meaning of: ${v.word}`,
                    options: shuffleArray([v.meaning, ...distractors]),
                    correctAnswer: v.meaning,
                    explanation: v.explanation || `Reading: ${v.reading}`
                });
            });

            const kShuffle = shuffleArray(kanjiDocs).slice(0, 10);
            kShuffle.forEach((k) => {
                exam.push({
                    id: `mock_k_${questionCounter++}`,
                    section: 'Vocabulary (文字・語彙)',
                    question: k.question.replace(/[{}]/g, ''),
                    options: shuffleArray([k.correctAnswer, ...(k.distractors || [])]),
                    correctAnswer: k.correctAnswer,
                    explanation: k.explanation || `Correct reading: ${k.correctAnswer}`
                });
            });

            // --- SECTION 2: Grammar & Reading ---
            const sShuffle = shuffleArray(starDocs).slice(0, 5);
            sShuffle.forEach((s) => {
                exam.push({
                    id: `mock_s_${questionCounter++}`,
                    section: 'Grammar & Reading (文法・読解)',
                    question: `Translate: "${s.question || s.english}"\n${s.prefix || ''} __ __ ⭐ __ ${s.suffix || ''}\nWhich part goes in the ⭐ slot?`,
                    options: shuffleArray([...s.correctSequence]),
                    correctAnswer: s.correctSequence[s.starIndex || 2],
                    explanation: s.explanation || `The correct sequence is: ${s.correctSequence.join(' ')}`
                });
            });

            const rShuffle = shuffleArray(readingDocs).slice(0, 3);
            rShuffle.forEach((r) => {
                exam.push({
                    id: `mock_r_${questionCounter++}`,
                    section: 'Grammar & Reading (文法・読解)',
                    passage: r.passage,
                    question: r.question,
                    options: shuffleArray([r.correctAnswer, ...(r.distractors || [])]),
                    correctAnswer: r.correctAnswer,
                    explanation: r.explanation || 'Refer to the passage context.'
                });
            });

            // --- SECTION 3: Listening ---
            const lShuffle = shuffleArray(listenDocs).slice(0, 5);
            lShuffle.forEach((l) => {
                exam.push({
                    id: `mock_l_${questionCounter++}`,
                    section: 'Listening (聴解)',
                    audioText: "Read the transcript below to simulate the audio track:",
                    question: l.transcript + "\n\n" + l.question,
                    options: shuffleArray([l.correctAnswer, ...(l.distractors || [])]),
                    correctAnswer: l.correctAnswer,
                    explanation: l.explanation || `Transcript: ${l.transcript}`
                });
            });

            return exam;

        } catch (error) {
            console.error("Failed to generate Mock Exam from Firebase:", error);
            return [];
        }
    }

    private static generateRandomDistractors(correctItem: string, pool: any[], field: string) {
        const distractors = new Set<string>();
        let attempts = 0;
        while (distractors.size < 3 && attempts < 50) {
            const randomDoc = pool[Math.floor(Math.random() * pool.length)];
            const wrongAnswer = randomDoc[field];
            if (wrongAnswer && wrongAnswer !== correctItem) {
                distractors.add(wrongAnswer);
            }
            attempts++;
        }
        return Array.from(distractors);
    }
}