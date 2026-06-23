"use client";

// 👈 UPGRADED: Use the View Transitions Link
import { Link } from 'next-view-transitions';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export const ModuleNav = () => {
    const pathname = usePathname();

    const navItems = [
        { path: '/dashboard', label: 'Dashboard', icon: '🌸' },
        { path: '/review', label: 'Daily Review', icon: '🧠' },
        { path: '/study', label: 'Study Center', icon: '📚' },
        { path: '/quiz', label: 'Quiz Center', icon: '⚔️' }, // 🚀 NEW: Quiz Center added
        { path: '/quiz/mock-exam', label: 'The Gauntlet', icon: '⛩️' },
        { path: '/dashboard/analytics', label: 'Analytics', icon: '📊' },
        { path: '/leaderboard', label: 'Leaderboard', icon: '🏆' }
    ];

    if (pathname === '/' || pathname?.includes('/auth') || pathname?.includes('/login')) return null;

    return (
        <div className="sticky top-16 z-40 w-full bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm overflow-x-auto hide-scrollbar">
            <div className="max-w-7xl mx-auto px-5 flex items-center gap-2 sm:gap-6 min-w-max">
                {navItems.map((item) => {
                    // 🛠️ FIX: Added '/quiz' to exact match so it doesn't conflict with '/quiz/mock-exam'
                    const isActive = (item.path === '/dashboard' || item.path === '/study' || item.path === '/quiz')
                        ? pathname === item.path
                        : pathname?.startsWith(item.path);

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`group relative flex items-center gap-2 py-4 px-3 text-sm font-black transition-all whitespace-nowrap outline-none ${
                                isActive ? 'text-accent' : 'text-muted hover:text-primary'
                            }`}
                        >
                            <motion.span
                                whileHover={{ y: -2 }}
                                className={`text-lg transition-all duration-300 ${
                                    isActive
                                        ? 'scale-110 drop-shadow-[0_0_8px_rgba(255,42,84,0.4)]'
                                        : 'grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100'
                                }`}
                            >
                                {item.icon}
                            </motion.span>

                            <span className="uppercase tracking-wider">{item.label}</span>

                            {isActive && (
                                <motion.div
                                    layoutId="activeTabGlow"
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-accent shadow-[0_-2px_10px_rgba(255,42,84,0.6)] rounded-t-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};