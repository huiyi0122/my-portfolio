/*C:\Users\user\my-portfolio\app\components\project\ProjectHero.tsx*/
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";
interface ProjectHeroProps {
  darkMode: boolean;
}

export default function ProjectHero({ darkMode }: ProjectHeroProps) {
  const { t } = useLanguage();
  return (
    <section
      className={`h-screen w-full flex items-center px-6 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-950" : "bg-[#faf9f7]"
      }`}
    >
      <motion.div
        className="max-w-6xl mx-auto w-full"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-center">
          {/* Left: Label & Title */}
          <div className="space-y-8">
            <motion.p
              className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-700 ${
                darkMode ? "text-zinc-500" : "text-zinc-500"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              {t.project.Subtitle}
            </motion.p>

            <motion.h1
              className={`text-7xl md:text-8xl font-light tracking-tight transition-colors duration-700 ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 300,
                letterSpacing: "-0.03em",
              }}
            >
              {t.project.title}
            </motion.h1>
          </div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <p
              className={`text-lg md:text-xl leading-relaxed transition-colors duration-700 ${
                darkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.01em",
                fontWeight: 400,
              }}
            >
              {t.project.Paragraph}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
