import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Icosahedron, Torus, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.x += dt * 0.15;
      ref.current.rotation.y += dt * 0.2;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.4}>
      <Sphere ref={ref} args={[1.4, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#22d3ee"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.15}
          metalness={0.85}
          emissive="#0891b2"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </Float>
  );
}

function FloatingShape({ position, color, shape = "icosa", scale = 0.5 }: { position: [number, number, number]; color: string; shape?: "icosa" | "torus"; scale?: number }) {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      {shape === "icosa" ? (
        <Icosahedron args={[scale, 0]} position={position}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} wireframe />
        </Icosahedron>
      ) : (
        <Torus args={[scale, scale * 0.25, 16, 64]} position={position}>
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} metalness={0.8} roughness={0.2} />
        </Torus>
      )}
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-5, -5, 3]} intensity={1} color="#a855f7" />
        <pointLight position={[0, 5, -5]} intensity={0.8} color="#ec4899" />

        <Knot />

        <FloatingShape position={[-3, 1.5, -1]} color="#a855f7" shape="icosa" scale={0.5} />
        <FloatingShape position={[3, -1.2, -1]} color="#ec4899" shape="torus" scale={0.45} />
        <FloatingShape position={[2.6, 1.8, -2]} color="#22d3ee" shape="icosa" scale={0.35} />
        <FloatingShape position={[-2.8, -1.6, -2]} color="#a855f7" shape="torus" scale={0.3} />

        <Stars radius={50} depth={50} count={1500} factor={4} fade speed={1} />
      </Suspense>
    </Canvas>
  );
}
