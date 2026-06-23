"use server";

import { GoogleGenerativeAI } from '@google/generative-ai';

const getGenAI = () => {
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) throw new Error("Gemini API key is not configured.");
    return new GoogleGenerativeAI(apiKey);
};

export type QuestionType = 'star' | 'context' | 'reading' | 'vocab' | 'listening' | 'speaking' | 'cloze' | 'info' | 'synonym' | 'chat' | 'hotspot' | 'grammar';

export async function generateQuestionAI(type: QuestionType) {
    const genAI = getGenAI();
    const model = genAI.getGenerativeModel({
        model: 'gemini-2.5-flash',
        generationConfig: { responseMimeType: "application/json" }
    });

    let prompt = "";

    switch (type) {
        case 'vocab':
            prompt = `Generate a common JLPT N5 vocabulary word. Format exactly as this JSON structure: {"word": "Kanji or Hiragana", "reading": "Hiragana", "meaning": "English", "type": "Noun/Verb/etc", "explanation": "Memory hint"}`;
            break;
        case 'grammar':
            prompt = `Generate a JLPT N5 Grammar rule. Format exactly as this JSON structure: {"grammar": "Target grammar point", "meaning": "English meaning", "formation": "How to form it (e.g., Noun + no)", "category": "Particle/Verb/etc", "examples": [{"japanese": "Example sentence", "reading": "Hiragana reading", "english": "English translation"}]}`;
            break;
        case 'star':
            prompt = `Generate a JLPT N5 "Star" Unscramble question (4 parts). Format exactly as this JSON structure: {"question": "English", "correctSequence": ["pt1","pt2","pt3","pt4"], "prefix": "Japanese before", "suffix": "Japanese after", "explanation": "Grammar hint"}`;
            break;
        case 'context':
            prompt = `Generate a JLPT N5 Kanji Context sentence. Wrap target Kanji in {braces}. Format exactly as this JSON structure: {"question": "Sentence with {Kanji}", "correctAnswer": "Hiragana reading", "distractors": ["wrong1","wrong2","wrong3"], "explanation": "Meaning"}`;
            break;
        case 'reading':
            prompt = `Generate a short JLPT N5 Reading passage (3 sentences). Format exactly as this JSON structure: {"passage": "Japanese text", "question": "Japanese question", "correctAnswer": "Correct answer", "distractors": ["w1","w2","w3"], "explanation": "English hint"}`;
            break;
        case 'listening':
            prompt = `Generate a JLPT N5 Listening dialogue. Format exactly as this JSON structure: {"transcript": "Japanese dialogue", "question": "English question", "correctAnswer": "English answer", "distractors": ["w1","w2","w3"], "explanation": "English translation"}`;
            break;
        case 'speaking':
            prompt = `Generate a JLPT N5 Speaking prompt. Format exactly as this JSON structure: {"englishPhrase": "English phrase", "acceptableAnswers": ["Japanese 1", "Japanese 2"], "romajiHint": "Romaji", "explanation": "Context hint"}`;
            break;
        case 'cloze':
            prompt = `Generate a JLPT N5 Cloze passage (diary/letter). Blanks MUST be formatted as ___1___, ___2___. Format exactly as this JSON structure: {"title": "Japanese title", "content": "Text with ___1___", "blanks": [{"id": "1", "correctAnswer": "particle", "options": ["wrong", "correct", "wrong", "wrong"]}]}`;
            break;
        case 'info':
            prompt = `Generate a JLPT N5 Information Retrieval question. Document type must be 'receipt', 'schedule', or 'notice'. Format exactly as this JSON structure: {"documentType": "receipt", "documentLines": ["Line 1", "Line 2"], "question": "English query", "options": ["w1", "correct", "w2", "w3"], "correctAnswer": "correct", "explanation": "Why"}`;
            break;
        case 'synonym':
            prompt = `Generate a JLPT N5 Paraphrase question. Wrap target phrase in {braces}. Format exactly as this JSON structure: {"originalSentence": "Sentence with {target}", "targetMeaning": "English meaning", "options": ["w1", "correct", "w2", "w3"], "correctAnswer": "correct", "explanation": "Why they are synonyms"}`;
            break;
        case 'chat':
            prompt = `Generate a JLPT N5 Pragmatics Chat scenario. Format exactly as this JSON structure: {"npcName": "Name", "avatar": "👨‍💼", "messages": ["Msg 1 (English)", "Msg 2 (English)"], "options": ["w1", "correct", "w2"], "correctAnswer": "correct", "explanation": "Why this reply is natural"}`;
            break;
        case 'hotspot':
            prompt = `Generate a JLPT N5 Spatial Listening prompt based on a virtual room with a tv, desk, apple, cat, and clock. Format exactly as this JSON structure: {"audioTranscript": "Japanese sentence describing location", "meaning": "English translation", "targetItemId": "tv" | "desk" | "apple" | "cat" | "clock"}`;
            break;
    }

    // 🛠️ UPGRADE: Increased retries to handle long Google penalty boxes
    const MAX_RETRIES = 5;

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
            const result = await model.generateContent(prompt);
            let text = result.response.text();

            text = text.replace(/```json/gi, '').replace(/```/g, '').trim();

            try {
                return JSON.parse(text);
            } catch (parseError) {
                console.warn(`[Attempt ${attempt}] JSON Parse failed. Sanitizing:`, text);
                const sanitizedText = text.replace(/,(\s*[}\]])/g, '$1');
                return JSON.parse(sanitizedText);
            }

        } catch (error: any) {
            const errorMessage = error?.message || String(error);
            console.error(`[Attempt ${attempt} of ${MAX_RETRIES}] AI Generation Error:`, errorMessage);

            if (attempt === MAX_RETRIES) {
                throw new Error(`AI Generation Failed: ${errorMessage}`);
            }

            // 🛑 429 AUTO-HEAL: If Google blocks us, force the server to sleep for 60 seconds before trying again.
            if (errorMessage.includes('429') || errorMessage.includes('Quota')) {
                console.warn(`⏳ Rate limit detected! Forcing a 60-second cooldown on attempt ${attempt}...`);
                await new Promise(res => setTimeout(res, 60000));
            } else {
                // Normal error (like a network blip), wait standard backoff
                await new Promise(res => setTimeout(res, attempt * 2500));
            }
        }
    }
    throw new Error("AI Generation Exhausted.");
}