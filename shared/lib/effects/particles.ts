import confetti from 'canvas-confetti';

export const fireLevelUpConfetti = () => {
    const duration = 2500;
    const end = Date.now() + duration;

    // Use our new Cyberpunk Red, Indigo, and White
    const colors = ['#FF2A54', '#6366F1', '#ffffff'];

    const frame = () => {
        // Left Cannon
        confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors,
            zIndex: 100 // Ensure it fires OVER the frosted glass headers
        });
        // Right Cannon
        confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors,
            zIndex: 100
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    };
    frame();
};