/*C:\Users\user\my-portfolio\app\components\project\ProjectStats.tsx*/
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";

interface ProjectStatsProps {
  darkMode: boolean;
}

export default function ProjectStats({ darkMode }: ProjectStatsProps) {
  const { t } = useLanguage();

  return (
    <section
      className={`h-screen w-full flex items-center px-6 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-900" : "bg-[#f5f3f0]"
      }`}
    >
      <motion.div
        className="max-w-6xl mx-auto w-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Section Label */}
        <motion.p
          className={`text-xs font-semibold tracking-[0.2em] uppercase text-center mb-16 transition-colors duration-700 ${
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
          {t.project.ProjectStats.title}
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {t.project.ProjectStats.Label.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: false }}
            >
              <motion.div
                className={`text-5xl md:text-6xl font-light tracking-tight transition-colors duration-700 ${
                  darkMode ? "text-white" : "text-zinc-900"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily:
                    "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </motion.div>

              <div
                className={`text-sm font-medium tracking-wide transition-colors duration-700 ${
                  darkMode ? "text-zinc-500" : "text-zinc-600"
                }`}
                style={{
                  fontFamily:
                    "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
