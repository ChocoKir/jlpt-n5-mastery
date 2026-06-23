import type { Metadata, Viewport } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

import { AuthProvider } from '@/features/auth/presentation/providers/AuthProvider';
import { GlobalHeader } from '@/shared/layout/GlobalHeader';
import { ModuleNav } from '@/shared/layout/ModuleNav'; // 👈 IMPORTED MODULE NAV
import { CommandPalette } from '@/shared/ui/CommandPalette';
import { PageTransition } from '@/shared/layout/PageTransition';
import { Toaster } from 'sonner';

import { SmoothScroller } from '@/shared/layout/SmoothScroller';
import { Provider as WrapBalancerProvider } from 'react-wrap-balancer';
import { ViewTransitions } from 'next-view-transitions';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-noto-jp' });

export const viewport: Viewport = {
    themeColor: '#050505',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export const metadata: Metadata = {
    title: 'Nihongo N5 | Sensei AI',
    description: 'Master the JLPT N5 with AI.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ViewTransitions>
            <html lang="en" className={`${inter.variable} ${notoSansJP.variable}`}>
            <body className="font-sans antialiased min-h-screen flex flex-col mesh-bg relative selection:bg-accent/30 selection:text-accent">
            <AuthProvider>
                <WrapBalancerProvider>
                    <SmoothScroller>
                        <GlobalHeader />
                        <ModuleNav /> {/* 👈 RENDERED MODULE NAV */}

                        <main className="flex-grow pt-8 pb-12 relative z-10 w-full overflow-hidden">
                            <PageTransition>
                                {children}
                            </PageTransition>
                        </main>

                        <CommandPalette />

                        <Toaster
                            theme="dark"
                            position="bottom-right"
                            toastOptions={{
                                className: 'bg-card/80 backdrop-blur-xl border border-border text-primary font-bold shadow-2xl rounded-2xl',
                            }}
                        />
                    </SmoothScroller>
                </WrapBalancerProvider>
            </AuthProvider>
            </body>
            </html>
        </ViewTransitions>
    );
}