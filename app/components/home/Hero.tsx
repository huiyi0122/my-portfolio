/* app/components/home/Hero.tsx */
"use client";

import Link from "next/link";
import { useLanguage } from "../LanguageProvider";
import { motion, Variants } from "framer-motion";
import {
  RippleButton,
  RippleButtonRipples,
} from "@/components/animate-ui/components/buttons/ripple";
import Portraits from "./Portraits";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 12, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      className={`h-screen w-full flex items-center justify-center px-6 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-950" : "bg-[#215245]"
      }`}
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-center h-full">
        {/* ================== TEXT CONTENT ================== */}
        <motion.div
          className="flex flex-col items-center text-center space-y-8 pt-10 md:pt-0 pb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div variants={itemVariants} className="space-y-3">
            <h1
              className={`text-3xl sm:text-7xl md:text-5xl font-light tracking-tight leading-[0.95] transition-colors duration-700 ${
                darkMode ? "text-white" : "text-[#e8f5f2]"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              {t.hero.greeting}
            </h1>

            <h2
              className={`text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight leading-[0.95] transition-colors duration-700 ${
                darkMode ? "text-zinc-400" : "text-[#a8d5c9]"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              {t.hero.name}
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-sm md:text-xl leading-relaxed max-w-xl transition-colors duration-700 ${
              darkMode ? "text-zinc-500" : "text-[#c5e4db]"
            }`}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-row gap-4 pt-4"
          >
            <Link href="/project" passHref>
              <RippleButton
                className={`relative overflow-hidden px-5 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-[1.02] ${
                  darkMode
                    ? "bg-[#262626] ring-1 ring-white/20 text-white hover:bg-white/5"
                    : "bg-white ring-1 ring-[#ffffff]/30 text-[#000000] hover:bg-white/10 hover:text-white"
                }`}
                style={
                  {
                    "--ripple-button-ripple-color": darkMode
                      ? "rgba(0,0,0,0.1)"
                      : "rgba(0,0,0,0.1)",
                  } as React.CSSProperties
                }
              >
                {t.hero.viewProject}
                <RippleButtonRipples />
              </RippleButton>
            </Link>

            <Link href="/about" passHref>
              <RippleButton
                className={`relative overflow-hidden px-5 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-[1.02] ${
                  darkMode
                    ? "bg-[#262626] ring-1 ring-white/20 text-white hover:bg-white/5"
                    : "ring-1 ring-[#e8f5f2]/30 text-[#e8f5f2] hover:bg-white/10"
                }`}
                style={
                  {
                    "--ripple-button-ripple-color": darkMode
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(255,255,255,0.2)",
                  } as React.CSSProperties
                }
              >
                {t.hero.aboutMe}
                <RippleButtonRipples />
              </RippleButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* ================== PORTRAITS ================== */}
        <Portraits />
      </div>
    </section>
  );
}
