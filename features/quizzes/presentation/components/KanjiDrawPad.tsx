"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Eraser, Check } from 'lucide-react';
import { motion } from 'framer-motion';

// 🛡️ THE FIX: Renamed 'onComplete' to 'onCompleteAction' to satisfy the strict Next.js compiler
export const KanjiDrawPad = ({ targetKanji, onCompleteAction, disabled = false }: { targetKanji: string, onCompleteAction: () => void, disabled?: boolean }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        const ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.scale(dpr, dpr);
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = '#FF2A54'; // Cyber Red ink
            ctx.lineWidth = 8;
            setContext(ctx);
        }
    }, []);

    const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
        if (disabled || !context || !canvasRef.current) return;
        setIsDrawing(true);
        const rect = canvasRef.current.getBoundingClientRect();

        context.beginPath();
        context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
        if (!isDrawing || disabled || !context || !canvasRef.current) return;
        e.preventDefault();

        const rect = canvasRef.current.getBoundingClientRect();
        context.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        context.stroke();
    };

    const handlePointerUp = () => {
        if (!context) return;
        context.closePath();
        setIsDrawing(false);
    };

    const clearCanvas = () => {
        if (disabled || !context || !canvasRef.current) return;
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    };

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex justify-between w-full max-w-sm mb-4 items-end">
                <div>
                    <h3 className="text-xs font-black text-muted uppercase tracking-widest mb-1">Dojo Canvas</h3>
                    <p className="text-sm font-bold text-primary">Recreate the Kanji below</p>
                </div>
                <button
                    onClick={clearCanvas}
                    disabled={disabled}
                    className="p-2.5 text-muted hover:text-red-500 transition-colors bg-card border border-border/50 rounded-xl shadow-sm outline-none disabled:opacity-50"
                >
                    <Eraser size={20} />
                </button>
            </div>

            <div className={`relative w-full max-w-sm aspect-square bg-card/80 backdrop-blur-xl border-2 border-border/50 rounded-3xl shadow-inner overflow-hidden transition-opacity duration-300 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}>
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="w-full h-[1px] bg-border/50 absolute top-1/2 -translate-y-1/2 dashed"></div>
                    <div className="w-[1px] h-full bg-border/50 absolute left-1/2 -translate-x-1/2 dashed"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
                        <span className="text-[180px] font-black text-primary font-japanese leading-none">{targetKanji}</span>
                    </div>
                </div>

                <canvas
                    ref={canvasRef}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerOut={handlePointerUp}
                    className="w-full h-full cursor-crosshair touch-none relative z-10"
                    style={{ touchAction: 'none' }}
                />
            </div>

            {!disabled && (
                <motion.button
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onCompleteAction}
                    className="mt-6 w-full max-w-sm py-4 rounded-xl bg-accent text-white font-black text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,42,84,0.3)] outline-none"
                >
                    <Check size={20} strokeWidth={3} /> Submit Strokes
                </motion.button>
            )}
        </div>
    );
};