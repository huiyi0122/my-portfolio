"use client";

import React from "react";
import DraggableSticker from "../home/DraggableSticker";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";

interface CurrentFocusProps {
  darkMode: boolean;
}

export default function CurrentFocus({ darkMode }: CurrentFocusProps) {
  const { t } = useLanguage();
  const constraintsRef = React.useRef<HTMLElement>(null);

  return (
    <section
      ref={constraintsRef}
      className={`h-screen w-full flex items-center px-4 sm:px-6 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-900" : "bg-[#f5f3f0]"
      }`}
    >
      {/* Sticker */}
      <DraggableSticker
        src="/images/sticker/sticker-6.png"
        alt="Sticker"
        size={120}
        sizeMobile={80}
        initial={{ bottom: 50, right: 200 }}
        darkMode={darkMode}
        constraintsRef={constraintsRef}
      />

      <motion.div
        className="max-w-5xl mx-auto w-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Section Label */}
        <motion.p
          className={`text-xs sm:text-xs font-semibold tracking-[0.2em] uppercase text-center mb-12 transition-colors duration-700 ${
            darkMode ? "text-zinc-500" : "text-zinc-500"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          style={{
            fontFamily:
              "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          {t.about.focus.header}
        </motion.p>

        {/* Title */}
        <motion.h2
          className={`text-3xl sm:text-4xl md:text-5xl font-light text-center mb-12 md:mb-16 tracking-tight transition-colors duration-700 ${
            darkMode ? "text-white" : "text-zinc-900"
          }`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
          style={{
            fontFamily:
              "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 300,
            letterSpacing: "-0.02em",
          }}
        >
          {t.about.focus.title}
        </motion.h2>

        {/* Focus Tags */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        >
          {t.about.focus.principles.map((focus: string, index: number) => (
            <motion.div
              key={focus}
              className={`px-3 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                darkMode
                  ? "bg-zinc-800/50 text-zinc-300 ring-1 ring-white/10 hover:bg-zinc-800"
                  : "bg-white/60 text-zinc-700 ring-1 ring-zinc-900/5 hover:bg-white"
              }`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + index * 0.05,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: false }}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              {focus}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
