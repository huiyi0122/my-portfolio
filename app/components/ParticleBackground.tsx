"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

interface ParticleBackgroundProps {
  particleCount?: number;
  darkMode: boolean;
}

export default function ParticleBackground({
  particleCount = 200,
  darkMode,
}: ParticleBackgroundProps) {
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => {
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 20 + 15; // 15 to 35 seconds
      const delay = Math.random() * -duration; // Start at a random point in the animation
      const x = Math.random() * 300;

      return (
        <motion.div
          key={i}
          className="absolute bottom-0"
          style={{
            left: `${x}vw`,
            width: `${size}px`,
            height: `${size}px`,
            background: darkMode
              ? "radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 80%)"
              : "radial-gradient(circle, rgba(0, 0, 0, 0.1) 0%, transparent 80%)",
            opacity: Math.random() * 0.5 + 0.1,
          }}
          initial={{ y: "0vh" }}
          animate={{ y: "-100vh" }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      );
    });
  }, [particleCount, darkMode]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {particles}
    </div>
  );
}
