"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTransitionRouter } from 'next-view-transitions';
import { toast } from 'sonner';

import { useAuth } from '@/features/auth/presentation/hooks/useAuth';
import { AuthService } from '@/features/auth/application/services/auth.service';
import { SpotlightCard } from '@/shared/ui/SpotlightCard';
import { Button } from '@/shared/ui/Button';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';

export const AuthForm = () => {
    const router = useTransitionRouter();
    const { loginWithGoogle } = useAuth();

    // UI State
    const [isLoginView, setIsLoginView] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // Form State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleGoogleAuth = async () => {
        setIsLoading(true);
        setErrorMsg(null);
        try {
            await loginWithGoogle();
            toast.success("Successfully logged in!");
            await router.push('/dashboard'); // 🛠️ FIX: Added await
        } catch (error) {
            setErrorMsg("Google Sign-In was cancelled or failed.");
            setIsLoading(false);
        }
    };

    // 🛠️ FIX: Explicitly typed as HTMLFormElement
    const handleEmailAuth = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMsg("Please fill in all fields.");
            return;
        }

        setIsLoading(true);
        setErrorMsg(null);

        const authAction = isLoginView
            ? AuthService.loginWithEmail(email, password)
            : AuthService.registerWithEmail(email, password);

        const { user, error } = await authAction;

        if (error) {
            setErrorMsg(error);
            setIsLoading(false);
        } else if (user) {
            toast.success(isLoginView ? "Welcome back!" : "Account created successfully!");
            await router.push('/dashboard'); // 🛠️ FIX: Added await
        }
    };

    const toggleView = () => {
        setIsLoginView(!isLoginView);
        setErrorMsg(null);
        setEmail('');
        setPassword('');
    };

    return (
        <SpotlightCard glowColor="rgba(99, 102, 241, 0.2)" className="w-full max-w-md p-8 sm:p-10 border-t-8 border-indigo-500 bg-card/80 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="text-center mb-8">
                <span className="text-5xl block mb-4 drop-shadow-sm">⛩️</span>
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={isLoginView ? 'login' : 'register'}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-3xl font-black text-primary tracking-tight"
                    >
                        {isLoginView ? 'Welcome Back' : 'Begin Your Journey'}
                    </motion.h1>
                </AnimatePresence>
                <p className="text-muted font-bold text-sm uppercase tracking-widest mt-2">
                    Sensei AI • JLPT N5 Master
                </p>
            </div>

            <Button
                onClick={handleGoogleAuth}
                disabled={isLoading}
                variant="secondary"
                className="w-full py-6 mb-6 font-black text-lg border-2 flex items-center justify-center gap-3 bg-background hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
                {isLoading ? (
                    <Loader2 className="animate-spin" />
                ) : (
                    <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                            <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                            <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                            <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                            <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
                        </g>
                    </svg>
                )}
                Continue with Google
            </Button>

            <div className="flex items-center gap-4 mb-6 opacity-50">
                <div className="h-px bg-border flex-1"></div>
                <span className="text-xs font-black uppercase tracking-widest text-muted">Or Email</span>
                <div className="h-px bg-border flex-1"></div>
            </div>

            <form onSubmit={handleEmailAuth} className="space-y-4">
                <div className="space-y-1">
                    <label className="text-xs font-black text-muted uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-background border-2 border-border/50 text-primary font-bold outline-none focus:border-indigo-500 transition-colors placeholder:text-muted/50"
                            placeholder="ninja@sensei.ai"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-xs font-black text-muted uppercase tracking-widest ml-1">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-background border-2 border-border/50 text-primary font-bold outline-none focus:border-indigo-500 transition-colors placeholder:text-muted/50"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <AnimatePresence>
                    {errorMsg && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-3 mt-2 bg-red-500/10 border border-red-500/30 text-red-500 text-sm font-bold rounded-lg text-center">
                                {errorMsg}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-6 mt-4 font-black text-lg bg-indigo-500 hover:bg-indigo-600 text-white border-none shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                >
                    {isLoading ? (
                        <Loader2 className="animate-spin" />
                    ) : (
                        <span className="flex items-center justify-center gap-2">
                            {isLoginView ? 'Authenticate' : 'Create Account'} <ArrowRight size={18} />
                        </span>
                    )}
                </Button>
            </form>

            <div className="mt-8 text-center border-t border-border/50 pt-6">
                <p className="text-muted font-bold text-sm">
                    {isLoginView ? "Don't have an account?" : "Already have an account?"}
                </p>
                <button
                    type="button"
                    onClick={toggleView}
                    disabled={isLoading}
                    className="text-indigo-500 hover:text-indigo-600 font-black tracking-wide mt-1 outline-none"
                >
                    {isLoginView ? "Create a new profile" : "Sign in to existing profile"}
                </button>
            </div>
        </SpotlightCard>
    );
};