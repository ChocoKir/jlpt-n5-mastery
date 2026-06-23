"use server";

import { GoogleGenerativeAI } from '@google/generative-ai';

// 🛡️ THE FIX: Only read the private server-side key.
const getGenAI = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.warn("Gemini API key is not configured. AI features will gracefully degrade.");
        return null;
    }
    return new GoogleGenerativeAI(apiKey);
};

export async function askSensei(question: string, wrongAnswer: string, correctAnswer: string): Promise<string> {
    try {
        const genAI = getGenAI();
        if (!genAI) return "Sensei's connection to the matrix is offline. (Missing API Key) 🧘‍♂️";

        // gemini-2.5-flash is extremely fast and perfect for quick tutoring responses
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        const prompt = `
        You are "Sensei AI", a supportive but precise Japanese language tutor for the JLPT N5 exam.
        Your student just answered a practice question incorrectly.
        
        Context:
        - Question: "${question}"
        - Student's Answer: "${wrongAnswer}"
        - Correct Answer: "${correctAnswer}"
        
        Task:
        Explain EXACTLY why their answer is wrong and why the correct answer is right. 
        Focus on the specific N5 grammar rule, particle, or vocabulary nuance involved.
        Keep it strictly to 2-3 short, highly readable sentences.
        Be encouraging. Do not use complex markdown headers, but you can use conversational Japanese (like "Konnichiwa!").
        `;

        const result = await model.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Sensei AI Error:", error);
        return "Sensei is currently meditating. Please check your internet connection and try asking again later. 🧘‍♂️";
    }
}