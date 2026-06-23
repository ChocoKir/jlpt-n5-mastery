"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

// Strict typing for browser Web Speech API
interface WindowWithSpeech extends Window {
    SpeechRecognition?: any;
    webkitSpeechRecognition?: any;
}

export const useSpeechRecognition = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [isSupported, setIsSupported] = useState(true);

    const recognitionRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const win = window as unknown as WindowWithSpeech;
        const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;

        if (!SpeechRecognitionClass) {
            setIsSupported(false);
            return;
        }

        if (!recognitionRef.current) {
            const recognition = new SpeechRecognitionClass();
            recognition.continuous = false;
            recognition.interimResults = true; // 👈 Premium Polish: Lets the user see words as they speak them!
            recognition.lang = 'ja-JP';

            recognition.onresult = (event: any) => {
                let currentTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    currentTranscript += event.results[i][0].transcript;
                }
                setTranscript(currentTranscript);
            };

            recognition.onerror = (event: any) => {
                console.error("Speech recognition error:", event.error);
                setIsListening(false);
            };

            recognition.onend = () => {
                setIsListening(false);
            };

            recognitionRef.current = recognition;
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.abort();
            }
        };
    }, []);

    const startListening = useCallback(() => {
        if (!isSupported || isListening) return;
        setTranscript('');
        setIsListening(true);
        try {
            recognitionRef.current?.start();
        } catch (err) {
            console.error("Failed to start mic:", err);
            setIsListening(false);
        }
    }, [isListening, isSupported]);

    const stopListening = useCallback(() => {
        setIsListening(false);
        recognitionRef.current?.stop();
    }, []);

    return { isSupported, isListening, transcript, startListening, stopListening };
};