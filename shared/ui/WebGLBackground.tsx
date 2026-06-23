"use client";

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

// 1. The Procedural Torii Gate Model
const ToriiGate = () => {
    const groupRef = useRef<THREE.Group>(null);

    // Slowly rotate the gate based the animation loop
    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.15) * 0.15;
        }
    });

    // Materials
    const cyberRed = new THREE.MeshStandardMaterial({ color: "#FF2A54", roughness: 0.6, metalness: 0.2 });
    const darkWood = new THREE.MeshStandardMaterial({ color: "#1a0b0e", roughness: 0.9 });

    return (
        <group ref={groupRef} position={[0, -2, 0]} scale={1.2}>
            {/* Left Pillar */}
            <mesh position={[-2.2, 2.5, 0]} material={cyberRed}>
                <cylinderGeometry args={[0.3, 0.35, 7, 32]} />
            </mesh>

            {/* Right Pillar */}
            <mesh position={[2.2, 2.5, 0]} material={cyberRed}>
                <cylinderGeometry args={[0.3, 0.35, 7, 32]} />
            </mesh>

            {/* Top Curved Crossbar (Kasagi) */}
            <mesh position={[0, 5.8, 0]} material={cyberRed}>
                <boxGeometry args={[7, 0.5, 0.6]} />
            </mesh>

            {/* Second Crossbar (Nuki) */}
            <mesh position={[0, 4.5, 0]} material={cyberRed}>
                <boxGeometry args={[6, 0.4, 0.4]} />
            </mesh>

            {/* Center Support Sign (Gaku) */}
            <mesh position={[0, 5.15, 0]} material={darkWood}>
                <boxGeometry args={[0.6, 1.2, 0.45]} />
            </mesh>
        </group>
    );
};

// 2. Floating Data Particles
const FloatingParticles = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001;
            groupRef.current.rotation.x += 0.0005;
        }
    });

    return (
        <group ref={groupRef}>
            {Array.from({ length: 40 }).map((_, i) => (
                <mesh
                    key={i}
                    position={[
                        (Math.random() - 0.5) * 20,
                        (Math.random() - 0.5) * 20,
                        (Math.random() - 0.5) * 10 - 5
                    ]}
                >
                    <octahedronGeometry args={[0.1]} />
                    <meshBasicMaterial color={Math.random() > 0.5 ? "#FF2A54" : "#6366F1"} transparent opacity={0.4} />
                </mesh>
            ))}
        </group>
    );
};

// 3. The Main Canvas Wrapper
export const WebGLBackground = () => {
    return (
        // 🛠️ THE FIX: Dynamic Tailwind classes for Light/Dark mode compositing!
        // Light mode: 15% opacity, normal blend. Dark mode: 40% opacity, screen blend.
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-all duration-1000 opacity-15 dark:opacity-40 mix-blend-normal dark:mix-blend-screen">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 14]} fov={45} />
                <ambientLight intensity={0.4} />

                {/* Cinematic Lighting */}
                <directionalLight position={[10, 10, 5]} intensity={2} color="#FF2A54" />
                <directionalLight position={[-10, -10, 5]} intensity={1.5} color="#6366F1" />
                <pointLight position={[0, 5, 2]} intensity={1} color="#ffffff" />

                <Environment preset="city" />

                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1.5}>
                    <ToriiGate />
                </Float>

                <FloatingParticles />
            </Canvas>
        </div>
    );
};