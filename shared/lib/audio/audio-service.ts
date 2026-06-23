"use client";

let audioCtx: AudioContext | null = null;

const getAudioContext = () => {
    if (typeof window === 'undefined') return null;

    if (!audioCtx) {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx?.state === 'suspended') {
        audioCtx.resume().catch(console.warn);
    }
    return audioCtx;
};

// 🛑 THE FIX: A helper to check the Settings Hub preference
const isSoundEnabled = () => {
    if (typeof window === 'undefined') return false;
    const isEnabled = localStorage.getItem('n5_sound_enabled');
    return isEnabled !== 'false'; // Defaults to true if null
};

const playTone = (frequency: number, type: OscillatorType, duration: number, vol = 0.1) => {
    // 🛑 THE FIX: Intercept and block execution if user disabled sounds
    if (!isSoundEnabled()) return;

    try {
        const ctx = getAudioContext();
        if (!ctx) return;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(frequency, ctx.currentTime);

        gain.gain.setValueAtTime(vol, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + duration);
    } catch (e) {
        console.warn("Audio playback blocked", e);
    }
};

export const playCorrectSound = () => {
    playTone(880, 'sine', 0.1, 0.1);
    setTimeout(() => playTone(1108.73, 'sine', 0.3, 0.1), 100);
};

export const playWrongSound = () => {
    playTone(150, 'square', 0.2, 0.05);
    setTimeout(() => playTone(100, 'square', 0.2, 0.05), 100);
};

export const playLevelUpFanfare = () => {
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
        setTimeout(() => playTone(freq, 'sine', 0.4, 0.15), i * 150);
    });
};

export const playJapaneseAudio = (text: string) => {
    // We intentionally DO NOT block this with isSoundEnabled()
    // because TTS is educational content, not an SFX.
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = 0.85;

    const setVoiceAndSpeak = () => {
        const voices = window.speechSynthesis.getVoices();
        const japaneseVoice = voices.find(v => v.lang === 'ja-JP' || v.lang === 'ja_JP');
        if (japaneseVoice) utterance.voice = japaneseVoice;
        window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
        setVoiceAndSpeak();
    } else {
        window.speechSynthesis.onvoiceschanged = setVoiceAndSpeak;
    }
};