'use client';
import React, { useEffect, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { OrbitControls} from '@react-three/drei';
import { useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion-3d';

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })
    const progress = useTransform(scrollYProgress, [0, 1], [0, 5])
    const smoothProgress = useSpring(progress, {damping: 20});

    return (
        <div ref={container} className="w-full h-screen">
            <div className="w-full h-full">
                <Canvas>
                    <OrbitControls enableZoom={false} enablePan={false}/>
                    <ambientLight intensity={2}/>
                    <directionalLight position={[2, 1, 1]}/>
                    <Cube progress={smoothProgress}/>
                </Canvas>
            </div>
        </div>
    )
}

function Cube({progress}) {

    const mesh = useRef(null);
    
    // Animación armónica continua
    useFrame((state) => {
        if (mesh.current) {
            const time = state.clock.getElapsedTime();
            
            // Movimiento armónico en Y (oscilación vertical)
            mesh.current.position.y = Math.sin(time * 0.8) * 0.5;
            
            // Movimiento armónico en X (oscilación horizontal)
            mesh.current.position.x = Math.cos(time * 0.6) * 0.3;
            
            // Rotación armónica adicional
            mesh.current.rotation.z = Math.sin(time * 0.5) * 0.2;
        }
    });

    const texture_1 = useLoader(TextureLoader, "/assets/8.jpg")
    const texture_2 = useLoader(TextureLoader, "/assets/2.jpg")
    const texture_3 = useLoader(TextureLoader, "/assets/3.jpg")
    const texture_4 = useLoader(TextureLoader, "/assets/4.jpg")
    const texture_5 = useLoader(TextureLoader, "/assets/5.jpg")
    const texture_6 = useLoader(TextureLoader, "/assets/1.jpg")

    return (
        <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
            <boxGeometry args={[2.5, 2.5, 2.5]}/>
            <meshStandardMaterial map={texture_1} attach="material-0"/>
            <meshStandardMaterial map={texture_2} attach="material-1"/>
            <meshStandardMaterial map={texture_3} attach="material-2"/>
            <meshStandardMaterial map={texture_4} attach="material-3"/>
            <meshStandardMaterial map={texture_5} attach="material-4"/>
            <meshStandardMaterial map={texture_6} attach="material-5"/>
        </motion.mesh>
    )
}