"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react'; // 👈 Icon for the loading spinner

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'danger';
    isLoading?: boolean; // 👈 New AAA Prop
    className?: string;
    children: React.ReactNode;
}

export const Button = ({ variant = 'primary', isLoading = false, className = '', children, disabled, ...rest }: ButtonProps) => {
    const baseClass = "px-6 py-3 rounded-xl font-black text-base transition-colors duration-300 outline-none flex items-center justify-center relative overflow-hidden";

    // Combine standard disabled state with our new loading state
    const isDisabled = disabled || isLoading;
    const disabledClass = isDisabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "";

    let variantClass = "";
    if (variant === 'primary') {
        variantClass = "bg-accent text-white border-2 border-accent shadow-[0_0_15px_rgba(255,42,84,0.2)] hover:shadow-[0_0_25px_rgba(255,42,84,0.5)]";
    } else if (variant === 'secondary') {
        variantClass = "bg-card text-primary border-2 border-border hover:border-accent hover:text-accent hover:bg-accent/5";
    } else if (variant === 'danger') {
        variantClass = "bg-red-600 text-white border-2 border-red-600 hover:bg-red-700 shadow-md";
    }

    return (
        <motion.button
            whileHover={isDisabled ? {} : { scale: 1.02, y: -2 }}
            whileTap={isDisabled ? {} : { scale: 0.95 }}
            disabled={isDisabled}
            className={`${baseClass} ${variantClass} ${disabledClass} ${className}`}
            {...rest}
        >
            {/* Smooth crossfade between the label and the loading spinner */}
            {isLoading ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2"
                >
                    <Loader2 className="animate-spin" size={20} />
                    <span>Processing...</span>
                </motion.div>
            ) : (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {children}
                </motion.span>
            )}
        </motion.button>
    );
};