"use client";

import React, { useEffect, useState } from 'react';
import { ActivityCalendar, ThemeInput } from 'react-activity-calendar';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { getActivityHistory } from '../application/services/activity.service';
import { subDays, format } from 'date-fns';

export const StudyHeatmap = () => {
    const [heatmapData, setHeatmapData] = useState<any[]>([]);
    const [activeDaysCount, setActiveDaysCount] = useState(0);

    const fetchHistory = () => {
        const realHistory = getActivityHistory();
        const data = [];
        const today = new Date();

        setActiveDaysCount(Object.keys(realHistory).length);

        // Generate the exact format `react-activity-calendar` requires
        for (let i = 180; i >= 0; i--) {
            const date = subDays(today, i);
            const formattedDate = format(date, 'yyyy-MM-dd');
            const xp = realHistory[formattedDate] || 0;

            let level = 0;
            if (xp > 0) {
                if (xp >= 250) level = 4;
                else if (xp >= 100) level = 3;
                else if (xp >= 50) level = 2;
                else level = 1;
            }

            data.push({ date: formattedDate, count: xp, level });
        }
        setHeatmapData(data);
    };

    useEffect(() => {
        fetchHistory();
        window.addEventListener('gamificationUpdated', fetchHistory);
        return () => window.removeEventListener('gamificationUpdated', fetchHistory);
    }, []);

    // High-contrast gaming theme matching the platform
    const calendarTheme: ThemeInput = {
        light: ['hsl(var(--muted) / 0.2)', '#fed7aa', '#fb923c', '#ea580c', '#c2410c'],
        dark: ['hsl(var(--muted) / 0.1)', '#9a3412', '#c2410c', '#ea580c', '#f97316'],
    };

    return (
        <SpotlightCard className="p-8 sm:p-10 border-border/50 shadow-lg relative z-10 overflow-hidden" glowColor="rgba(255, 42, 84, 0.1)">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <h3 className="text-2xl font-black text-primary flex items-center gap-3 tracking-tight">
                    <span className="text-3xl drop-shadow-md">🔥</span> Consistency Matrix
                </h3>
                <span className="text-xs font-black text-muted uppercase tracking-widest bg-background border border-border/50 px-3 py-1.5 rounded-xl shadow-sm">
                    {activeDaysCount} Active Days
                </span>
            </div>

            <div className="flex justify-center overflow-x-auto pb-4 custom-scrollbar min-h-[150px]">
                <div className="min-w-fit pr-4 flex items-center justify-center">
                    {/* 🛡️ THE FIX: Only render if data is fully populated to prevent library crash */}
                    {heatmapData.length > 0 ? (
                        <ActivityCalendar
                            data={heatmapData}
                            theme={calendarTheme}
                            showWeekdayLabels={true}
                            colorScheme="dark"
                            labels={{
                                totalCount: '{{count}} XP earned in the last half year',
                            }}
                            blockSize={14}
                            blockMargin={6}
                            fontSize={12}
                        />
                    ) : (
                        <div className="text-sm font-bold text-muted animate-pulse">Initializing Matrix...</div>
                    )}
                </div>
            </div>
        </SpotlightCard>
    );
};