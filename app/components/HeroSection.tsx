"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import * as THREE from "three";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

interface HeroSectionProps {
  startNameAnimation: boolean;
  initialTransform: {
    position: THREE.Vector3;
    rotation: THREE.Euler;
    scale: THREE.Vector3;
  };
  darkMode: boolean;
}

export default function HeroSection({
  startNameAnimation,
  initialTransform,
  darkMode,
}: HeroSectionProps) {
  const nameRef = useRef<HTMLSpanElement>(null!);
  const { t } = useLanguage();

  useEffect(() => {
    if (startNameAnimation && nameRef.current) {
      const nameEl = nameRef.current;
      const targetRect = nameEl.getBoundingClientRect();

      const dummy = document.createElement("div");
      dummy.innerText = "ANGEL";
      dummy.className = "gradient-text";
      dummy.style.position = "fixed";
      dummy.style.fontWeight = "bold";
      dummy.style.pointerEvents = "none";
      dummy.style.zIndex = "100";
      dummy.style.fontSize = "12rem"; // Approximate size from 3D
      document.body.appendChild(dummy);

      gsap.set(dummy, {
        x:
          window.innerWidth / 2 +
          initialTransform.position.x * 50 -
          dummy.offsetWidth / 2,
        y:
          window.innerHeight / 2 -
          initialTransform.position.y * 50 -
          dummy.offsetHeight / 2,
        scale: initialTransform.scale.x,
      });

      gsap.set(nameEl, { opacity: 0 });

      gsap.to(dummy, {
        x: targetRect.left,
        y: targetRect.top,
        fontSize: "8rem", // Match hero font size
        duration: 1.5,
        ease: "power3.inOut",
        onComplete: () => {
          gsap.to(nameEl, { opacity: 1, duration: 0.3 });
          document.body.removeChild(dummy);
        },
      });
    }
  }, [startNameAnimation, initialTransform]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-transparent text-white"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          {t.hero.greeting}{" "}
          <span
            ref={nameRef}
            className="gradient-text text-6xl md:text-8xl"
            style={{ opacity: startNameAnimation ? 0 : 1 }}
          >
            {t.hero.name}
          </span>
        </h1>
        <p className="mt-4 text-xl text-gray-300">{t.hero.description}</p>
        <div className="mt-8 flex justify-center gap-10">
          <a
            href="#project"
            className="px-8 py-3 rounded-lg font-medium shadow-md transition-all duration-300 hover-glow hover:scale-105"
            style={{
              backgroundColor: darkMode ? "#F7C9C8" : "rgba(99,127,156,0.43)",
              border: `2px solid ${darkMode ? "#F7C9C8" : "#637F9C"}`,
              color: darkMode ? "#000000" : "#2C4C72",
            }}
          >
            {t.hero.viewProject}
          </a>
          <a
            href="#about"
            className="px-8 py-3 rounded-lg font-medium shadow-md transition-all duration-300 hover-glow hover:scale-105"
            style={{
              backgroundColor: darkMode ? "#00C8B3" : "rgba(172,127,94,0.43)",
              border: `2px solid ${darkMode ? "#00C8B3" : "#AC7F5E"}`,
              color: darkMode ? "#000000" : "#823E20",
            }}
          >
            {t.hero.aboutMe}
          </a>
        </div>
      </div>
    </section>
  );
}
