"use client";

import type { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
}

export const Card = ({ children, className = '', ...props }: CardProps) => {
    return (
        <motion.div
            className={`bg-card text-primary rounded-2xl shadow-sm border border-border transition-shadow duration-300 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};