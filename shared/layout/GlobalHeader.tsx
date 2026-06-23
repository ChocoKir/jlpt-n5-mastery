"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from 'next-view-transitions';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/config';
import { useAuth } from '@/features/auth/presentation/hooks/useAuth';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Flame, Library, Swords, LayoutDashboard,
    Search, ShieldAlert, Sun, Moon, Menu, X
} from 'lucide-react';

export const GlobalHeader = () => {
    const { user } = useAuth();
    const pathname = usePathname();
    const [isAdmin, setIsAdmin] = useState(false);
    const [navAvatar, setNavAvatar] = useState(user?.photoURL || '');
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 🛠️ Added state for Mobile Menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const isDark = document.documentElement.classList.contains('dark') ||
                window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDarkMode(isDark);
            if (isDark) document.documentElement.classList.add('dark');
        }
    }, []);

    // 🛠️ Close mobile menu automatically when the route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                try {
                    const userDoc = await getDoc(doc(db, 'users', user.uid));
                    if (userDoc.exists()) {
                        if (userDoc.data().isAdmin) setIsAdmin(true);
                        if (userDoc.data().avatar) setNavAvatar(userDoc.data().avatar);
                    }
                } catch (error) {
                    console.error("Failed to fetch user role:", error);
                }
            }
        };
        // 🛠️ FIX: Added void to handle the floating promise safely
        void fetchUserData();
    }, [user, pathname]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const handleSearchClick = () => {
        window.dispatchEvent(new CustomEvent('open-command-palette'));
    };

    if (pathname === '/' || pathname?.includes('/auth') || pathname?.includes('/login')) return null;

    return (
        <header className="sticky top-0 z-50 w-full bg-background/60 backdrop-blur-2xl border-b border-border/50 shadow-sm transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">

                {/* Logo & Branding */}
                <Link href="/dashboard" className="flex items-center gap-2 outline-none group">
                    <motion.div whileHover={{ rotate: -15, scale: 1.1 }} className="text-2xl drop-shadow-md">
                        🌸
                    </motion.div>
                    <span className="text-xl font-black text-primary tracking-tight group-hover:text-accent transition-colors">
                        Nihongo <span className="text-accent">N5</span>
                    </span>
                </Link>

                {/* Main Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    <NavLink href="/dashboard" current={pathname}>
                        <LayoutDashboard size={18} strokeWidth={2.5} /> Dashboard
                    </NavLink>
                    <NavLink href="/study" current={pathname}>
                        <Library size={18} strokeWidth={2.5} /> Study Center
                    </NavLink>
                    <NavLink href="/quiz" current={pathname}>
                        <Swords size={18} strokeWidth={2.5} /> Quiz Center
                    </NavLink>
                    <NavLink href="/dashboard/analytics" current={pathname}>
                        <Flame size={18} strokeWidth={2.5} /> Analytics
                    </NavLink>
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSearchClick}
                        className="flex items-center gap-2 bg-card/50 border border-border/50 px-3 sm:px-4 py-2 rounded-xl text-xs font-black text-muted hover:text-accent hover:border-accent/50 transition-all shadow-sm outline-none cursor-pointer"
                    >
                        <Search size={14} strokeWidth={2.5} />
                        <span className="hidden sm:inline">Search Database</span>
                        <span className="bg-background border border-border/50 px-1.5 py-0.5 rounded shadow-sm text-[10px] hidden lg:inline">
                            ⌘K
                        </span>
                    </motion.button>

                    {isAdmin && (
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/admin" className="hidden sm:flex items-center gap-1 text-xs font-black text-red-500 border-2 border-red-500/50 px-3 py-1.5 rounded-xl hover:bg-red-500 hover:text-white transition-colors shadow-[0_0_10px_rgba(239,68,68,0.2)] outline-none">
                                <ShieldAlert size={14} /> Admin
                            </Link>
                        </motion.div>
                    )}

                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleTheme}
                        className="hidden sm:flex w-10 h-10 rounded-2xl items-center justify-center bg-card/50 text-primary border border-border/50 hover:border-accent hover:text-accent transition-colors outline-none shadow-sm"
                        title="Toggle Theme"
                    >
                        {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
                    </motion.button>

                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hidden sm:block">
                        <Link href="/dashboard/profile" className="w-10 h-10 rounded-2xl border border-border/50 bg-card/50 flex items-center justify-center font-black text-sm overflow-hidden hover:border-accent shadow-sm transition-colors outline-none">
                            {navAvatar?.startsWith('http') ? (
                                <img src={navAvatar} alt="Profile" className="w-full h-full object-cover" />
                            ) : (
                                navAvatar || user?.displayName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || '🥷'
                            )}
                        </Link>
                    </motion.div>

                    {/* 🛠️ Mobile Hamburger Menu Button */}
                    <button
                        className="md:hidden p-2 text-primary hover:text-accent transition-colors outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* 🛠️ Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-card/95 backdrop-blur-3xl border-b border-border/50 shadow-2xl overflow-hidden"
                    >
                        <nav className="flex flex-col p-4 gap-2">
                            <MobileNavLink href="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" current={pathname} />
                            <MobileNavLink href="/study" icon={<Library size={18} />} label="Study Center" current={pathname} />
                            <MobileNavLink href="/quiz" icon={<Swords size={18} />} label="Quiz Center" current={pathname} />
                            <MobileNavLink href="/dashboard/analytics" icon={<Flame size={18} />} label="Analytics" current={pathname} />

                            <div className="h-px bg-border/50 my-2"></div>

                            <MobileNavLink href="/dashboard/profile" icon={<span className="text-xl leading-none">{navAvatar ? <img src={navAvatar} className="w-5 h-5 rounded-full" alt="avatar"/> : '🥷'}</span>} label="Profile Settings" current={pathname} />

                            <div className="flex justify-between items-center px-4 py-3 border border-border/50 rounded-xl mt-2">
                                <span className="font-bold text-sm text-primary">Theme Options</span>
                                <button onClick={toggleTheme} className="p-2 bg-background border border-border/50 rounded-lg text-primary">
                                    {isDarkMode ? <Moon size={16} /> : <Sun size={16} />}
                                </button>
                            </div>

                            {isAdmin && (
                                <Link href="/admin" className="mt-2 flex items-center justify-center gap-2 p-4 rounded-xl text-white font-black bg-red-500 hover:bg-red-600 shadow-md">
                                    <ShieldAlert size={18} /> Admin Console
                                </Link>
                            )}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

// Desktop Nav Link
const NavLink = ({ href, current, children }: { href: string, current: string | null, children: React.ReactNode }) => {
    const isActive = current === href || (href !== '/dashboard' && current?.startsWith(href));
    return (
        <Link
            href={href}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm transition-all outline-none ${
                isActive
                    ? 'bg-accent/10 text-accent shadow-[0_0_15px_rgba(255,42,84,0.1)] font-black'
                    : 'text-muted hover:bg-card/50 hover:text-primary'
            }`}
        >
            {children}
        </Link>
    );
};

// Mobile Nav Link
const MobileNavLink = ({ href, current, icon, label }: { href: string, current: string | null, icon: React.ReactNode, label: string }) => {
    const isActive = current === href || (href !== '/dashboard' && current?.startsWith(href));
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 p-4 rounded-xl font-bold transition-all border outline-none ${
                isActive
                    ? 'bg-accent/10 text-accent border-accent/20'
                    : 'text-primary bg-background/50 border-transparent hover:border-border/50'
            }`}
        >
            {icon} {label}
        </Link>
    );
};