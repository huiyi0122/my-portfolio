"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Sphere, Line, Plane } from "@react-three/drei";
import * as THREE from "three";

interface NodeProps {
  position: THREE.Vector3;
  iconSrc: string;
  href: string;
}

function Node({ position, iconSrc, href }: NodeProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const texture = useTexture(iconSrc);
  const [isHovered, setIsHovered] = React.useState(false);

  useFrame((state) => {
    if (ref.current) {
      // Animate scale and emissive intensity on hover
      ref.current.scale.lerp(
        new THREE.Vector3(1, 1, 1).multiplyScalar(isHovered ? 1.5 : 1),
        0.1
      );
      (ref.current.material as THREE.MeshStandardMaterial).emissiveIntensity =
        THREE.MathUtils.lerp(
          (ref.current.material as THREE.MeshStandardMaterial)
            .emissiveIntensity,
          isHovered ? 2 : 0.5,
          0.1
        );
    }
  });

  return (
    <Sphere
      ref={ref}
      position={position}
      args={[0.3, 32, 32]}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
      onClick={() => window.open(href, "_blank")}
    >
      <meshStandardMaterial
        color="#05a2ff"
        emissive="#05a2ff"
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
        roughness={0.2}
        metalness={0.8}
      />
      <Plane args={[0.3, 0.3]} position={[0, 0, 0.31]} visible={isHovered}>
        <meshBasicMaterial map={texture} transparent depthWrite={false} />
      </Plane>
    </Sphere>
  );
}

interface ContactNetworkProps {
  contacts: {
    src: string;
    alt: string;
    href: string;
  }[];
}

function Scene({ contacts }: ContactNetworkProps) {
  const groupRef = useRef<THREE.Group>(null!);

  const nodes = useMemo(() => {
    const temp = [];
    const sphere = new THREE.Sphere(new THREE.Vector3(), 4);
    for (let i = 0; i < contacts.length; i++) {
      const pos = new THREE.Vector3()
        .randomDirection()
        .multiplyScalar(sphere.radius);
      temp.push({ ...contacts[i], position: pos });
    }
    return temp;
  }, [contacts]);

  const lines = useMemo(() => {
    const temp = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        temp.push({
          start: nodes[i].position,
          end: nodes[j].position,
        });
      }
    }
    return temp;
  }, [nodes]);

  useFrame((state) => {
    // Rotate the whole group based on mouse position
    const { pointer } = state;
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.3,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.3,
        0.05
      );
      // Slow constant rotation
      groupRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight color="cyan" position={[0, 0, 0]} intensity={1} />
      <group ref={groupRef}>
        {nodes.map((node) => (
          <Node
            key={node.alt}
            position={node.position}
            iconSrc={node.src}
            href={node.href}
          />
        ))}
        {lines.map((line, i) => {
          const dist = line.start.distanceTo(line.end);
          const opacity = Math.max(0, 1 - dist / 6); // Lines fade with distance
          return (
            <Line
              key={i}
              points={[line.start, line.end]}
              color="white"
              lineWidth={0.5}
              transparent
              opacity={opacity * 0.3}
            />
          );
        })}
      </group>
    </>
  );
}

export default function ContactNetwork({ contacts }: ContactNetworkProps) {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <Scene contacts={contacts} />
    </Canvas>
  );
}
