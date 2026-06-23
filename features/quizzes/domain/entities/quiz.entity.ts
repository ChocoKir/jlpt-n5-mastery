export interface QuizQuestion {
    id?: string | number;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
    audioText?: string;
}

export interface MockExamQuestion extends QuizQuestion {
    section: 'Vocabulary (文字・語彙)' | 'Grammar & Reading (文法・読解)' | 'Listening (聴解)';
    passage?: string;
    isPastExam?: boolean;
    pastYear?: string;
}

// Pure Domain utility for shuffling arrays
export const shuffleArray = <T>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};