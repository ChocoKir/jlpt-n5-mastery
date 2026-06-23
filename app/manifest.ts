import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Sensei AI | JLPT N5 Master',
        short_name: 'Sensei AI',
        description: 'Master the JLPT N5 with AI and Spaced Repetition.',
        start_url: '/',
        display: 'standalone', // This is the magic word that removes the browser URL bar!
        background_color: '#050505', // Your true OLED black
        theme_color: '#FF2A54', // Your Cyber Red accent
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable', // Ensures Android can apply custom shapes (teardrop, squircle, etc.)
            }
        ],
    };
}