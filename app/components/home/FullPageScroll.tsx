/*C:\Users\user\my-portfolio\app\components\home\FullPageScroll.tsx*/
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface FullPageScrollProps {
  children: React.ReactNode;
  darkMode?: boolean;
}

export default function FullPageScroll({
  children,
  darkMode = false,
}: FullPageScrollProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const sections = React.Children.toArray(children);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Check if we're inside a scrollable section
      const target = e.target as HTMLElement;
      const scrollableSection = target.closest('[data-scrollable="true"]');

      if (scrollableSection) {
        const isAtTop = scrollableSection.scrollTop === 0;
        const isAtBottom =
          scrollableSection.scrollTop + scrollableSection.clientHeight >=
          scrollableSection.scrollHeight - 1;

        // Allow scrolling within the section
        if ((e.deltaY < 0 && !isAtTop) || (e.deltaY > 0 && !isAtBottom)) {
          return; // Don't prevent default, allow internal scroll
        }

        // Only change sections when at top/bottom of scrollable content
        if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
          e.preventDefault();
        } else {
          return;
        }
      } else {
        e.preventDefault();
      }

      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection + direction;

      if (nextSection >= 0 && nextSection < sections.length) {
        setIsScrolling(true);
        setCurrentSection(nextSection);
        setTimeout(() => setIsScrolling(false), 1200);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isScrolling) return;

      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY.current - touchEndY;

      if (Math.abs(diff) > 50) {
        const direction = diff > 0 ? 1 : -1;
        const nextSection = currentSection + direction;

        if (nextSection >= 0 && nextSection < sections.length) {
          setIsScrolling(true);
          setCurrentSection(nextSection);
          setTimeout(() => setIsScrolling(false), 1200);
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === "ArrowDown" && currentSection < sections.length - 1) {
        setIsScrolling(true);
        setCurrentSection((prev) => prev + 1);
        setTimeout(() => setIsScrolling(false), 1200);
      } else if (e.key === "ArrowUp" && currentSection > 0) {
        setIsScrolling(true);
        setCurrentSection((prev) => prev - 1);
        setTimeout(() => setIsScrolling(false), 1200);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSection, isScrolling, sections.length]);

  return (
    <div
      className="fixed inset-0 overflow-hidden"
      style={{ touchAction: "none" }}
    >
      {/* Navigation dots with avatar for current section */}
      <div className="fixed right-1 sm:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isScrolling) {
                setIsScrolling(true);
                setCurrentSection(index);
                setTimeout(() => setIsScrolling(false), 1200);
              }
            }}
            className="group relative flex h-10 w-10 items-center justify-center"
            aria-label={`Go to section ${index + 1}`}
          >
            {currentSection === index ? (
              // Current section: Show avatar
              <div
                className={`w-5 h-5 sm:w-8 sm:h-8 rounded-full overflow-hidden transition-all duration-500 ease-out ring-2 scale-110 ${
                  darkMode ? "ring-white shadow-lg" : "ring-zinc-900 shadow-lg"
                }`}
              >
                <Image
                  src="/images/LOGO-3.png"
                  alt="Current section avatar"
                  width={20}
                  height={20}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              // Other sections: Show small dot
              <div
                className={`w-2 h-2 rounded-full transition-all duration-500 ease-out ${
                  darkMode
                    ? "bg-white/30 group-hover:bg-white/50 group-hover:scale-125"
                    : "bg-zinc-900/30 group-hover:bg-zinc-900/50 group-hover:scale-125"
                }`}
              />
            )}
          </button>
        ))}
      </div>
      {/* Sections container with refined easing */}{" "}
      <motion.div
        animate={{ y: `-${currentSection * 100}vh` }}
        transition={{
          duration: 1.2,
          ease: [0.85, 0, 0.15, 1], // A smoother, more refined ease-in-out curve
        }}
        className="h-screen"
      >
        {sections.map((section, index) => (
          <div key={index} className="h-screen w-full">
            {section}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
