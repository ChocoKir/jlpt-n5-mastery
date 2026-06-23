import React from 'react';
import { cn } from "@/shared/lib/utils";

interface ProgressBarProps {
    current: number;
    total: number;
    className?: string;
    indicatorClassName?: string;
}

export const ProgressBar = ({ current, total, className, indicatorClassName }: ProgressBarProps) => {
    const percentage = Math.min(Math.max((current / total) * 100, 0), 100);

    return (
        <div className={cn("w-full h-2 bg-border rounded-full overflow-hidden my-3", className)}>
            <div
                className={cn("h-full bg-accent transition-all duration-500 ease-out", indicatorClassName)}
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
};