"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { Points, Text3D, Center, Html } from "@react-three/drei";
import * as THREE from "three";
import { gsap } from "gsap";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";
import Plasma from "./home/Plasma";

interface SaturnProps {
  saturnRef: React.RefObject<THREE.Group>;
}

// Helper to generate random points in a sphere
const randomInSphere = (radius: number) => {
  const x = Math.random() * 2 - 1;
  const y = Math.random() * 2 - 1;
  const z = Math.random() * 2 - 1;
  const d = 1 / Math.sqrt(x * x + y * y + z * z);
  return new THREE.Vector3(x * d, y * d, z * d).multiplyScalar(
    Math.random() * radius
  );
};

interface AnimationParticlesProps {
  onAnimationComplete: () => void;
  targetPositions: Float32Array;
  saturnGroupRef: React.RefObject<THREE.Group>; // Pass the ref down
}

function AnimationParticles({
  onAnimationComplete,
  targetPositions,
  saturnGroupRef, // Destructure the ref from props
}: AnimationParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const textRef = useRef<THREE.Mesh>(null!);
  const particleCount = 5000;
  const nameToDisplay = "ANGEL";

  useEffect(() => {
    if (!pointsRef.current || !textRef.current || !saturnGroupRef.current)
      return;
    const points = pointsRef.current;
    const text = textRef.current;
    const positions = points.geometry.attributes.position.array as Float32Array;

    // Initialize particles to random positions
    for (let i = 0; i < particleCount; i++) {
      const p = randomInSphere(2);
      positions[i * 3] = p.x;
      positions[i * 3 + 1] = p.y;
      positions[i * 3 + 2] = p.z;
    }
    points.geometry.attributes.position.needsUpdate = true;

    // --- GSAP TIMELINE ---
    const tl = gsap.timeline({
      onComplete: onAnimationComplete,
    });

    // --- REFACTORED GSAP TIMELINE WITH LABELS ---

    // 1. Saturn appears and is visible for 2 seconds.
    tl.addLabel("start")
      .from(
        saturnGroupRef.current.scale,
        {
          x: 0,
          y: 0,
          z: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "start"
      )
      // Add a label 2 seconds after the start
      .addLabel("explode", "start+=2");

    // 2. At the 'explode' label, Saturn scales down and particles appear.
    tl.to(
      saturnGroupRef.current.scale,
      {
        duration: 0.4,
        x: 0,
        y: 0,
        z: 0,
        ease: "power3.in",
      },
      "explode"
    ).to(
      points.material,
      {
        opacity: 1,
        duration: 0.4,
      },
      "explode" // Particles appear at the same time Saturn starts disappearing
    );

    // 3. Particles scatter outwards.
    tl.to(
      positions,
      {
        duration: 1.5,
        ease: "power3.out",
        endArray: Array.from({ length: positions.length }, () =>
          THREE.MathUtils.randFloat(-15, 15)
        ) as any,
        onUpdate: () => {
          points.geometry.attributes.position.needsUpdate = true;
        },
      },
      "explode+=0.1" // Start scattering slightly after explosion begins
    ).addLabel("formText", "-=1"); // Add label for next phase, 1s before scatter ends

    // 4. At 'formText' label, particles regroup into the name and fade out.
    tl.to(
      positions,
      {
        duration: 2,
        ease: "power3.inOut",
        endArray: Array.from(targetPositions) as any,
        onUpdate: () => {
          points.geometry.attributes.position.needsUpdate = true;
        },
      },
      "formText"
    ).to(
      points.material,
      {
        opacity: 0,
        duration: 0.3,
      },
      "formText" // Fade out particles as they start regrouping
    );

    tl.add(() => {
      // Card-pop animation for 3D text
      gsap.set(text.scale, { x: 0.5, y: 0.5, z: 0.5 });
      gsap.set(text.rotation, { y: Math.PI / 2 });

      gsap.to(text.rotation, {
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      });

      gsap.to(text.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
      });
    });

    return () => {
      tl.kill();
    };
  }, [onAnimationComplete, targetPositions, particleCount, saturnGroupRef]);

  // Saturn component
  const Saturn = ({ saturnRef }: SaturnProps) => {
    useFrame(() => {
      if (saturnRef.current) {
        saturnRef.current.rotation.y += 0.005;
        saturnRef.current.rotation.x = 0.25; // Tilt
      }
    });

    const ringPositions = React.useMemo(() => {
      const positions = [];
      const ringGeometry = new THREE.TorusGeometry(1.5, 0.4, 2, 150);
      const posAttribute = ringGeometry.attributes.position;
      for (let i = 0; i < posAttribute.count; i++) {
        if (Math.random() > 0.3) {
          // Make ring less dense
          positions.push(
            posAttribute.getX(i),
            posAttribute.getY(i),
            posAttribute.getZ(i)
          );
        }
      }
      return new Float32Array(positions);
    }, []);

    return (
      <group ref={saturnRef}>
        {/* Planet with Plasma */}
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <Html transform>
            <div className="w-[202px] h-[202px] -translate-x-[101px] -translate-y-[101px] rounded-full overflow-hidden">
              <Plasma speed={0.4} scale={1.5} mouseInteractive={false} />
            </div>
          </Html>
        </mesh>

        {/* Rings */}
        <Points positions={ringPositions}>
          <pointsMaterial
            color="#E6BF83"
            size={0.025}
            transparent
            opacity={0.8}
          />
        </Points>
      </group>
    );
  };

  return (
    <>
      <Saturn saturnRef={saturnGroupRef} />
      <Points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(particleCount * 3), 3]}
            count={particleCount}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial color="white" size={0.05} transparent opacity={0} />
      </Points>
      <Center>
        <Text3D
          ref={textRef}
          font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
          size={2}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.03}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          {nameToDisplay}
          <meshStandardMaterial
            color="white"
            emissive="white"
            emissiveIntensity={0.5}
          />
        </Text3D>
      </Center>
    </>
  );
}

interface IntroAnimationWrapperProps {
  onComplete: () => void;
}

export default function IntroAnimationWrapper({
  onComplete,
}: IntroAnimationWrapperProps) {
  const saturnGroupRef = useRef<THREE.Group>(null!); // Define saturnGroupRef here
  const [animationComplete, setAnimationComplete] = useState(false);
  const [targetPositions, setTargetPositions] = useState<Float32Array | null>(
    null
  );

  useEffect(() => {
    // Load font and generate target positions
    // Using a reliable public font URL
    const fontUrl =
      "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json";
    const loader = new FontLoader();

    loader.load(
      fontUrl,
      (font) => {
        const geometry = new TextGeometry("ANGEL", {
          font: font,
          size: 1.8, // Slightly smaller to fit better
          depth: 0.2,
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.03,
          bevelSize: 0.02,
          bevelOffset: 0,
          bevelSegments: 5,
        });
        geometry.center();

        const tempMesh = new THREE.Mesh(
          geometry,
          new THREE.MeshBasicMaterial()
        );
        const sampler = new MeshSurfaceSampler(tempMesh).build();

        const particleCount = 5000;
        const particles = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
          const position = new THREE.Vector3();
          sampler.sample(position);
          particles.set([position.x, position.y, position.z], i * 3);
        }

        setTargetPositions(particles);
      },
      undefined,
      (error) => {
        console.error("Font loading error:", error);
        // Fallback: skip intro animation if font fails to load
        setTimeout(() => onComplete(), 100);
      }
    );
  }, [onComplete]);

  if (!targetPositions) {
    // Show loading state while font loads
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  const handleAnimationEnd = () => {
    setAnimationComplete(true);
    setTimeout(onComplete, 100); // Call parent onComplete
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black transition-opacity duration-500"
      style={{ opacity: animationComplete ? 0 : 1 }}
    >
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimationParticles
          saturnGroupRef={saturnGroupRef} // Pass the ref to AnimationParticles
          onAnimationComplete={handleAnimationEnd}
          targetPositions={targetPositions}
        />
      </Canvas>
    </div>
  );
}
