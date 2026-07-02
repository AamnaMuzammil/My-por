import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, MeshDistortMaterial } from '@react-three/drei';

// Particles that respond to scroll
const ParticleField = ({ scrollY }) => {
  const ref = useRef();

  const positions = useMemo(() => {
    const sphere = new Float32Array(4500);
    for (let i = 0; i < 4500; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 1.5;
      sphere[i]     = r * Math.sin(phi) * Math.cos(theta);
      sphere[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      sphere[i + 2] = r * Math.cos(phi);
    }
    return sphere;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
      // Slowly drift based on scroll — cinematic parallax
      ref.current.rotation.x += scrollY.current * 0.00005;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ff7eb3"
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </group>
  );
};

// Floating 3D shapes with scroll-driven tilt
const FloatingShapes = ({ scrollY }) => {
  const sphereRef = useRef();
  const torusRef  = useRef();
  const octRef    = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const scroll = scrollY.current * 0.001;

    if (sphereRef.current) {
      sphereRef.current.position.y = 1.2 + Math.sin(time) * 0.15;
      sphereRef.current.rotation.y = time * 0.2;
      sphereRef.current.position.x = -1.8 + scroll * 0.3;
    }
    if (torusRef.current) {
      torusRef.current.position.y = -1.2 + Math.cos(time) * 0.15;
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.y = time * 0.3;
      torusRef.current.position.x = 1.8 - scroll * 0.2;
    }
    if (octRef.current) {
      octRef.current.rotation.x = time * 0.15 + scroll * 0.1;
      octRef.current.rotation.y = time * 0.25;
      octRef.current.position.y = 0.4 + Math.sin(time * 0.8) * 0.12 - scroll * 0.15;
    }
  });

  return (
    <>
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={sphereRef} position={[-1.8, 1.2, -1.5]}>
          <sphereGeometry args={[0.4, 64, 64]} />
          <MeshDistortMaterial
            color="#8833ff"
            attach="material"
            distort={0.45}
            speed={2.5}
            roughness={0.1}
            metalness={0.9}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh ref={torusRef} position={[1.8, -1.2, -1.5]}>
          <torusGeometry args={[0.3, 0.12, 32, 64]} />
          <MeshDistortMaterial
            color="#00ffd5"
            attach="material"
            distort={0.35}
            speed={2}
            roughness={0.05}
            metalness={0.95}
            clearcoat={1.0}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={2} floatIntensity={1.2}>
        <mesh ref={octRef} position={[0, 0.4, -2]}>
          <octahedronGeometry args={[0.3, 0]} />
          <MeshDistortMaterial
            color="#ff7eb3"
            attach="material"
            distort={0.25}
            speed={3}
            roughness={0.0}
            metalness={1.0}
            clearcoat={1.0}
          />
        </mesh>
      </Float>
    </>
  );
};

// Camera that smoothly drifts on scroll
const CinematicCamera = ({ scrollY }) => {
  useFrame((state) => {
    const scroll = scrollY.current;
    // Subtle camera drift — feels like a movie camera pull
    state.camera.position.y = -scroll * 0.0004;
    state.camera.position.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

const ThreeCanvas = () => {
  const scrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => { scrollY.current = window.scrollY; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      background: 'radial-gradient(ellipse at 30% 20%, #12082a 0%, #030206 60%, #030206 100%)'
    }}>
      <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#ff7eb3" />
        <directionalLight position={[0, 5, 5]} intensity={1.5} color="#00ffd5" />
        <CinematicCamera scrollY={scrollY} />
        <ParticleField scrollY={scrollY} />
        <FloatingShapes scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
