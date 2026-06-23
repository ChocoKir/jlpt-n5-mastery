"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/shared/lib/utils";

// 🛠️ FIX: Extended HTMLMotionProps<"div"> to satisfy TypeScript
interface SpotlightCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    glowColor?: string; // e.g., "rgba(255, 42, 84, 0.15)"
}

export const SpotlightCard = ({ children, className, glowColor = "rgba(255, 255, 255, 0.1)", ...props }: SpotlightCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => { setIsFocused(true); setOpacity(1); };
    const handleBlur = () => { setIsFocused(false); setOpacity(0); };
    const handleMouseEnter = () => { setOpacity(1); };
    const handleMouseLeave = () => { setOpacity(0); };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ y: -4 }}
            className={cn(
                "relative overflow-hidden rounded-3xl border-2 border-border/50 bg-card/40 backdrop-blur-xl shadow-lg transition-all duration-300",
                className
            )}
            {...props}
        >
            {/* The Mouse-Tracking Glow Layer */}
            <div
                className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
                }}
            />
            {/* The Content Layer */}
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </motion.div>
    );
};