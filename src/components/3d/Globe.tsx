"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  
  // Rotating the earth slowly
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2, 64, 64]} />
      {/* A simple placeholder material, in a real app we would use textures */}
      <meshStandardMaterial 
        color="#0a1a3a" 
        roughness={0.7} 
        metalness={0.2}
        wireframe={true}
        transparent
        opacity={0.3}
      />
      {/* Inner solid core */}
      <mesh>
        <sphereGeometry args={[1.98, 64, 64]} />
        <meshStandardMaterial color="#05142d" />
      </mesh>
      
      {/* India Highlight Marker (Approximate Coordinates) */}
      <mesh position={[1.4, 0.7, 1.2]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color="#C79A42" />
        <pointLight color="#C79A42" intensity={2} distance={3} />
      </mesh>
    </mesh>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-full absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#C79A42" />
        
        <Earth />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
