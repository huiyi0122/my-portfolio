/*C:\Users\user\my-portfolio\app\components\about\Introduction.tsx*/
"use client";

import React from "react";
import { useLanguage } from "../LanguageProvider";
import { motion } from "framer-motion";
import DraggableSticker from "../home/DraggableSticker";

interface IntroductionProps {
  darkMode: boolean;
}

export default function Introduction({ darkMode }: IntroductionProps) {
  const constraintsRef = React.useRef<HTMLElement>(null);
  const { t } = useLanguage();

  return (
    <section
      ref={constraintsRef}
      className={`h-screen w-full flex items-center px-6 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-900" : "bg-[#215245]"
      }`}
    >
      {/* Stickers */}
      <DraggableSticker
        src="/images/sticker/sticker-1.png"
        alt="Sticker 1"
        size={120}
        initial={{ top: 40, left: 40 }}
        darkMode={darkMode}
        constraintsRef={constraintsRef}
      />
      <DraggableSticker
        src="/images/sticker/sticker-2.png"
        alt="Sticker 2"
        size={100}
        initial={{ top: 40, right: 40 }}
        darkMode={darkMode}
        constraintsRef={constraintsRef}
      />
      <DraggableSticker
        src="/images/sticker/sticker-5.png"
        alt="Sticker 3"
        size={110}
        initial={{ bottom: 40, left: 40 }}
        darkMode={darkMode}
        constraintsRef={constraintsRef}
      />
      <DraggableSticker
        src="/images/sticker/sticker-4.png"
        alt="Sticker 4"
        size={90}
        initial={{ bottom: 40, right: 40 }}
        darkMode={darkMode}
        constraintsRef={constraintsRef}
      />
      <motion.div
        className="max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Section Label */}
        <motion.p
          className={`text-xs font-semibold tracking-[0.2em] uppercase text-center mb-12 transition-colors duration-700 ${
            darkMode ? "text-zinc-500" : "text-[#a8d5c9]"
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
          {t.about.introduction.header}
        </motion.p>

        {/* Title */}
        <motion.h2
          className={`text-4xl md:text-5xl font-light text-center mb-16 tracking-tight transition-colors duration-700 ${
            darkMode ? "text-white" : "text-[#e8f5f2]"
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
          {t.about.introduction.title}
        </motion.h2>

        {/* Text Content */}
        <div className="space-y-8 max-w-3xl mx-auto">
          <motion.p
            className={`text-lg leading-relaxed text-center transition-colors duration-700 ${
              darkMode ? "text-zinc-400" : "text-[#c5e4db]"
            }`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: false }}
            style={{
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              letterSpacing: "-0.01em",
              fontWeight: 400,
            }}
          >
            {t.about.introduction.paragraph1}
          </motion.p>
          <motion.p
            className={`text-lg leading-relaxed text-center transition-colors duration-700 ${
              darkMode ? "text-zinc-400" : "text-[#c5e4db]"
            }`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: false }}
            style={{
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              letterSpacing: "-0.01em",
              fontWeight: 400,
            }}
          >
            {t.about.introduction.paragraph2}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
