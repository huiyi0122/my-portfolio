"use client";

import React from "react";
import { motion } from "framer-motion";
import DraggableSticker from "./DraggableSticker";
import { useLanguage } from "../LanguageProvider";

interface TraitsProps {
  darkMode: boolean;
}

export default function Traits({ darkMode }: TraitsProps) {
  const constraintsRef = React.useRef<HTMLElement>(null);
  const { t } = useLanguage();

  // 👉 从 translations 拿 traits
  const traits = t.traits.list;

  return (
    <section
      ref={constraintsRef}
      className={`h-screen w-full flex items-center px-6 sm:px-8 relative transition-all duration-700 ${
        darkMode ? "bg-zinc-900" : "bg-[#f0f4f3]"
      }`}
    >
      {/* ================= Stickers ================= */}
      <DraggableSticker
        src="/images/sticker/sticker-1.png"
        alt="Sticker 1"
        size={120}
        initial={{ top: 40, right: 40 }}
        darkMode={darkMode}
        constraintsRef={constraintsRef}
      />

      <div className="max-w-5xl mx-auto w-full">
        {/* ================= Traits Grid ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-16 sm:gap-y-20">
          {traits.map((trait: any, index: number) => (
            <motion.div
              key={trait.key}
              className="group relative"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: false, amount: 0.4 }}
            >
              {/* ================= Title ================= */}
              <h3
                className={`text-sm font-semibold tracking-[0.15em] mb-3 transition-colors duration-300 ${
                  darkMode
                    ? "text-zinc-400 group-hover:text-white"
                    : "text-zinc-600 group-hover:text-zinc-900"
                }`}
                style={{
                  fontFamily:
                    "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.15em",
                }}
              >
                {trait.title}
              </h3>

              {/* ================= Underline ================= */}
              <div className="relative mb-4">
                <div
                  className={`h-px transition-all duration-300 ${
                    darkMode ? "bg-zinc-700" : "bg-zinc-300"
                  }`}
                />
                <motion.div
                  className={`absolute top-0 left-0 h-px ${
                    darkMode ? "bg-white" : "bg-zinc-900"
                  }`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                />
              </div>

              {/* ================= Subtitle ================= */}
              <motion.p
                className={`text-base leading-relaxed transition-all duration-400 ${
                  darkMode ? "text-zinc-500" : "text-zinc-600"
                }`}
                style={{
                  fontFamily:
                    "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "-0.01em",
                  fontWeight: 400,
                }}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08 + 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                viewport={{ once: false }}
              >
                “{trait.subtitle}”
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      <DraggableSticker
        src="/images/sticker/sticker-2.png"
        alt="Sticker 2"
        size={100}
        initial={{ bottom: 40, left: 40 }}
        darkMode={darkMode}
        constraintsRef={constraintsRef}
      />
    </section>
  );
}
