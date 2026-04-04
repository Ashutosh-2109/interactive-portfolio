import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Box, Sphere, RoundedBox, Environment, Plane } from '@react-three/drei';
import * as THREE from 'three';
import { useAppStore } from '../store';

const Robot = () => {
  const phase = useAppStore((state) => state.phase);
  const setPhase = useAppStore((state) => state.setPhase);
  const robotRef = useRef<THREE.Group>(null!);
  const armRef = useRef<THREE.Group>(null!);
  
  const [hovered, setHovered] = useState(false);

  // Interaction Flow
  useEffect(() => {
    if (phase === 'waving') {
      // After waving for 2 seconds, trigger drop
      const timer = setTimeout(() => {
        setPhase('dropping');
      }, 2000);
      return () => clearTimeout(timer);
    }
    if (phase === 'dropping') {
      // After dropping for 1.5 seconds, trigger zoom
      const timer = setTimeout(() => {
        setPhase('zooming');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [phase, setPhase]);

  useFrame((state) => {
    // Floating effect
    if (robotRef.current && phase === 'landing') {
      const t = state.clock.getElapsedTime();
      robotRef.current.position.y = Math.sin(t * 2) * 0.2;
    }

    // Waving animation
    if (armRef.current) {
      if (phase === 'waving' || phase === 'dropping' || phase === 'zooming') {
        const t = state.clock.getElapsedTime();
        // Wave more naturally
        armRef.current.rotation.z = THREE.MathUtils.lerp(
          armRef.current.rotation.z,
          Math.PI * 0.4 + Math.sin(t * 8) * 0.3,
          0.1
        );
      } else {
        // Arm rests
        armRef.current.rotation.z = THREE.MathUtils.lerp(armRef.current.rotation.z, 0, 0.1);
      }
    }
  });

  return (
    <group 
      ref={robotRef} 
      position={[0, 0, 0]}
      onPointerOver={() => {
        if (phase === 'landing') {
          setHovered(true);
          setPhase('waving');
          document.documentElement.style.cursor = 'none'; // Ensure custom cursor applies
        }
      }}
      onPointerOut={() => setHovered(false)}
    >
      {/* Body */}
      <RoundedBox args={[1.2, 1.5, 1]} radius={0.2} smoothness={4} position={[0, -0.2, 0]}>
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.8} />
      </RoundedBox>

      {/* Head */}
      <RoundedBox args={[1, 0.8, 1]} radius={0.2} smoothness={4} position={[0, 1.2, 0]}>
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.8} />
      </RoundedBox>

      {/* Screen/Face */}
      <Box args={[0.8, 0.5, 0.1]} position={[0, 1.2, 0.51]}>
        <meshBasicMaterial color="#050510" />
      </Box>

      {/* Eye (Changes color on hover) */}
      <Sphere args={[0.1, 32, 32]} position={[0, 1.2, 0.57]}>
        <meshBasicMaterial color={phase !== 'landing' ? "#00ffcc" : "#0055ff"} />
      </Sphere>

      {/* Left Arm (Waving Arm) */}
      <group position={[-0.8, 0.3, 0]}>
        <group ref={armRef}>
          <RoundedBox args={[0.3, 1, 0.3]} radius={0.1} smoothness={4} position={[-0.2, -0.4, 0]}>
            <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.8} />
          </RoundedBox>
        </group>
      </group>

      {/* Right Arm */}
      <RoundedBox args={[0.3, 1, 0.3]} radius={0.1} smoothness={4} position={[0.8, -0.1, 0]} rotation={[0, 0, 0.2]}>
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.8} />
      </RoundedBox>
    </group>
  );
};

const WhiteboardPresentation = () => {
  const whiteboardRef = useRef<THREE.Mesh>(null!);
  const phase = useAppStore((state) => state.phase);

  useFrame(() => {
    if (whiteboardRef.current) {
      if (phase === 'dropping' || phase === 'zooming' || phase === 'portfolio') {
        // Slide down perfectly into view
        whiteboardRef.current.position.y = THREE.MathUtils.lerp(
          whiteboardRef.current.position.y,
          0,
          0.05
        );
      }
    }
  });

  return (
    // Starts exactly directly in front of the camera, but way high up
    <Plane ref={whiteboardRef} args={[30, 20]} position={[0, 25, 2]}>
      {/* Dark background material for the main content */}
      <meshBasicMaterial color="#050510" />
    </Plane>
  );
};

const CameraController = () => {
  const { camera } = useThree();
  const phase = useAppStore((state) => state.phase);
  const setPhase = useAppStore((state) => state.setPhase);

  useFrame(() => {
    if (phase === 'zooming') {
      // Interploate camera Z position towards the whiteboard (Z=2)
      // The whiteboard is at Z=2. When camera hits Z=2.1, it's basically flush via FOV.
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, 2.05, 0.04);
      
      // If we are incredibly close to the board surface, trigger full portfolio render
      if (camera.position.z <= 2.2) {
        setPhase('portfolio');
      }
    }
  });

  return null;
}

export default function Scene() {
  const phase = useAppStore((state) => state.phase);

  return (
    <>
      <color attach="background" args={['#020205']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
      
      {/* Hide Robot entirely once we are locked into the portfolio view to save rendering */}
      {phase !== 'portfolio' && <Robot />}
      
      <WhiteboardPresentation />
      <CameraController />
      
      <Environment preset="city" />
    </>
  );
}
