"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/shared/ui/Button';

interface KanjiCanvasProps {
    targetKanji?: string;
}

export const KanjiCanvas = ({ targetKanji }: KanjiCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        ctx.scale(dpr, dpr);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = '#e11d48'; // Cyber Rose
        ctx.lineWidth = 12;

        drawGuides(ctx, rect.width, rect.height);
    }, []);

    const drawGuides = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
        ctx.save();
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);

        ctx.beginPath();
        ctx.moveTo(width / 2, 0);
        ctx.lineTo(width / 2, height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();
        ctx.restore();
    };

    // 🛡️ THE FIX: Modern Pointer Events API handles both Mouse AND Touch flawlessly
    const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
        setIsDrawing(true);
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // CRITICAL: Severs the connection to the previous line!
        ctx.beginPath();
        ctx.moveTo(x, y);
    };

    const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
        if (!isDrawing) return;

        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.lineTo(x, y);
        ctx.stroke();
    };

    const handlePointerUp = () => {
        setIsDrawing(false);
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) ctx.closePath();
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const rect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawGuides(ctx, rect.width, rect.height);
    };

    return (
        <div className="flex flex-col items-center gap-4 w-full max-w-sm mx-auto relative z-10">
            <div className="text-center mb-2">
                <p className="text-primary font-black uppercase tracking-widest text-sm mb-1">Dojo Canvas</p>
                <p className="text-xs text-muted font-bold">Draw with your mouse or finger</p>
            </div>

            <div className="relative bg-card rounded-3xl shadow-inner border-4 border-border/50 overflow-hidden touch-none w-full aspect-square flex items-center justify-center">
                {targetKanji && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-[0.07] z-0">
                        <span className="text-[180px] font-black text-primary font-japanese leading-none">
                            {targetKanji}
                        </span>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                    onPointerOut={handlePointerUp}
                    className="absolute inset-0 w-full h-full cursor-crosshair z-10"
                    style={{ touchAction: 'none' }} // STOPS mobile scrolling while drawing
                />
            </div>

            <Button onClick={clearCanvas} variant="secondary" className="w-full mt-2 font-black py-5 text-lg border-2 shadow-sm">
                Clear Board 🗑️
            </Button>
        </div>
    );
};