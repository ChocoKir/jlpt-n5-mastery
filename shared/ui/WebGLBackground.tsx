"use client";

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

// ==========================================
// 1. DARK MODE MODEL: Cyberpunk Torii Gate
// ==========================================
const ToriiGateDark = () => {
    const groupRef = useRef<THREE.Group>(null);
    useFrame(({ clock }) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.15) * 0.15;
        }
    });

    const cyberRed = useMemo(() => new THREE.MeshStandardMaterial({ color: "#FF2A54", roughness: 0.6, metalness: 0.2 }), []);
    const darkWood = useMemo(() => new THREE.MeshStandardMaterial({ color: "#1a0b0e", roughness: 0.9 }), []);

    return (
        <group ref={groupRef} position={[0, -2, 0]} scale={1.2}>
            <mesh position={[-2.2, 2.5, 0]} material={cyberRed}><cylinderGeometry args={[0.3, 0.35, 7, 32]} /></mesh>
            <mesh position={[2.2, 2.5, 0]} material={cyberRed}><cylinderGeometry args={[0.3, 0.35, 7, 32]} /></mesh>
            <mesh position={[0, 5.8, 0]} material={cyberRed}><boxGeometry args={[7, 0.5, 0.6]} /></mesh>
            <mesh position={[0, 4.5, 0]} material={cyberRed}><boxGeometry args={[6, 0.4, 0.4]} /></mesh>
            <mesh position={[0, 5.15, 0]} material={darkWood}><boxGeometry args={[0.6, 1.2, 0.45]} /></mesh>
        </group>
    );
};

// ==========================================
// 2. LIGHT MODE MODEL: Low-Poly Origami Crane (Pink Sakura Edition)
// ==========================================
const OrigamiCraneLight = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            // Smooth horizontal orbit
            meshRef.current.rotation.y = clock.elapsedTime * 0.15;
            // Gentle rhythmic banking/tilt
            meshRef.current.rotation.z = Math.sin(clock.elapsedTime * 0.4) * 0.08;
        }
    });

    // Premium Matte Washi Paper Styling with Pink Pigments
    const craneMaterial = useMemo(() => new THREE.MeshStandardMaterial({
        color: "#FFA1B5",             // 🌸 Beautiful Traditional Sakura Cherry Blossom Pink
        roughness: 0.5,               // Balanced dispersion for distinctive facet highlights
        metalness: 0.05,
        side: THREE.DoubleSide,
        flatShading: true,            // Forces crisp geometric paper facets
    }), []);

    // Explicit structural coordinates for a 3D Low-Poly Origami Crane
    const craneGeometry = useMemo(() => {
        const geom = new THREE.BufferGeometry();
        const vertices = new Float32Array([
            // Left Wing Top Front
            0, 0, 1.5,     3.5, 2.5, 0,    0, 1.2, 0,
            // Right Wing Top Front
            0, 0, 1.5,     0, 1.2, 0,     -3.5, 2.5, 0,
            // Left Wing Back Loop
            0, 0, -1.5,    3.5, 2.5, 0,    0, 1.2, 0,
            // Right Wing Back Loop
            0, 0, -1.5,    0, 1.2, 0,     -3.5, 2.5, 0,
            // Geometric Tail Assembly
            0, 0, -1.5,    0, 1.2, 0,      0, 1.8, -3.8,
            // Geometric Elegant Neck Structure
            0, 0, 1.5,     0, 1.2, 0,      0, 1.6, 3.4,
            // Folded Beak Details
            0, 1.6, 3.4,   0, 1.1, 3.2,   -0.5, 0.9, 3.8,
            // Underbelly Core Shell (Left)
            0, 0, 1.5,     0, -1.2, 0,     3.5, 2.5, 0,
            // Underbelly Core Shell (Right)
            0, 0, 1.5,     0, -1.2, 0,    -3.5, 2.5, 0,
            // Underbelly Under-Tail Shield
            0, 0, -1.5,    0, -1.2, 0,     0, 1.8, -3.8,
        ]);
        geom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        geom.computeVertexNormals();
        return geom;
    }, []);

    return (
        <mesh
            ref={meshRef}
            geometry={craneGeometry}
            material={craneMaterial}
            position={[0, -0.2, 0]}
            scale={1.6}
        />
    );
};

// ==========================================
// 3. Dynamic Environment Particles
// ==========================================
const DynamicParticles = ({ isDark }: { isDark: boolean }) => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001;
            groupRef.current.rotation.x += 0.0005;
        }
    });

    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map(() => ({
            position: [
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10 - 5
            ] as [number, number, number],
            color: isDark
                ? (Math.random() > 0.5 ? "#FF2A54" : "#6366F1")
                // Soft elegant sakura petal pink and ivory for the cream theme
                : (Math.random() > 0.5 ? "#FDFBF7" : "#FFB7C5")
        }));
    }, [isDark]);

    return (
        <group ref={groupRef}>
            {particles.map((p, i) => (
                <mesh key={i} position={p.position}>
                    <octahedronGeometry args={[0.08]} />
                    <meshBasicMaterial color={p.color} transparent opacity={isDark ? 0.4 : 0.7} />
                </mesh>
            ))}
        </group>
    );
};

// ==========================================
// 4. Main Canvas Swapper
// ==========================================
export const WebGLBackground = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains('dark'));
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={`fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden transition-all duration-1000 ${
                isDark
                    ? 'opacity-40 mix-blend-screen'
                    : 'opacity-75 mix-blend-normal'
            }`}
        >
            <Canvas
                gl={{ alpha: true, antialias: true }}
                onCreated={({ gl }) => {
                    gl.setClearColor(0x000000, 0);
                }}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 14]} fov={45} />

                <ambientLight intensity={isDark ? 0.4 : 1.1} />

                {isDark ? (
                    <>
                        <directionalLight position={[10, 10, 5]} intensity={2} color="#FF2A54" />
                        <directionalLight position={[-10, -10, 5]} intensity={1.5} color="#6366F1" />
                        <Environment preset="city" />
                        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1.5}>
                            <ToriiGateDark />
                        </Float>
                    </>
                ) : (
                    <>
                        {/* Shifting to warm pristine lighting vectors to define the origami folds over the cream layout */}
                        <directionalLight position={[12, 15, 10]} intensity={1.8} color="#FFFDF9" />
                        <directionalLight position={[-8, 6, -4]} intensity={0.8} color="#FFEAEF" />
                        <Environment preset="studio" />
                        <Float speed={1.0} rotationIntensity={0.15} floatIntensity={0.6}>
                            <OrigamiCraneLight />
                        </Float>
                    </>
                )}

                <DynamicParticles isDark={isDark} />
            </Canvas>
        </div>
    );
};