"use client";

import React, { useRef, useState, useEffect } from 'react';
import { useWavesurfer } from '@wavesurfer/react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const AudioVisualizer = ({ audioUrl }: { audioUrl: string }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false);

    const { wavesurfer, isPlaying} = useWavesurfer({
        container: containerRef,
        url: audioUrl,
        waveColor: 'rgba(99, 102, 241, 0.4)', // Indigo faded
        progressColor: '#FF2A54', // Cyber Red
        cursorColor: 'transparent',
        barWidth: 4,
        barGap: 3,
        barRadius: 4,
        height: 60,
        normalize: true,
    });

    useEffect(() => {
        if (wavesurfer) {
            wavesurfer.on('ready', () => setIsReady(true));
            wavesurfer.on('finish', () => wavesurfer.seekTo(0));
        }
    }, [wavesurfer]);

    const togglePlay = () => {
        if (wavesurfer) void wavesurfer.playPause();
    };

    return (
        <div className="flex items-center gap-4 bg-card/60 backdrop-blur-xl border-2 border-border/50 p-4 rounded-3xl shadow-lg w-full max-w-md mx-auto">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                disabled={!isReady}
                className="w-14 h-14 shrink-0 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] disabled:opacity-50 disabled:cursor-not-allowed outline-none"
            >
                {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
            </motion.button>

            <div className="flex-grow w-full overflow-hidden relative">
                {!isReady && (
                    <div className="absolute inset-0 flex items-center px-2 text-xs font-black text-muted uppercase tracking-widest animate-pulse">
                        <Volume2 size={14} className="mr-2" /> Decoding Signal...
                    </div>
                )}
                <div ref={containerRef} className="w-full" />
            </div>
        </div>
    );
};