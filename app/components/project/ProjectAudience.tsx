/*C:\Users\user\my-portfolio\app\components\project\ProjectAudience.tsx*/
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";

interface ProjectAudienceProps {
  darkMode: boolean;
  projectId: string;
}

export default function ProjectAudience({
  darkMode,
  projectId,
}: ProjectAudienceProps) {
  const { t } = useLanguage();
  const project =
    t.project.ProjectList[projectId as keyof typeof t.project.ProjectList]
      .details;

  if (!project || !project.audience) return null;

  return (
    <section
      className={`min-h-screen w-full flex md:items-center px-6 py-24 md:py-0 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-950" : "bg-[#215245]"
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
          className={`text-xs font-semibold tracking-[0.2em] uppercase text-center mb-12 md:mb-16 transition-colors duration-700 ${
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
          {project.audience.title}
        </motion.p>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {project.audience.items.map((audience, index) => (
            <motion.div
              key={index}
              className={`p-6 md:p-8 rounded-3xl text-center transition-all duration-700 ${
                darkMode
                  ? "bg-zinc-900/50 ring-1 ring-white/10"
                  : "bg-[#2d6b5d]/40 ring-1 ring-white/20 backdrop-blur-sm"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: false }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="mb-4 md:mb-6 flex justify-center">
                <Image
                  src={audience.icon}
                  alt={audience.title}
                  width={80}
                  height={80}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>
              <h3
                className={`text-lg md:text-xl font-medium mb-3 md:mb-4 transition-colors duration-700 ${
                  darkMode ? "text-white" : "text-[#e8f5f2]"
                }`}
                style={{
                  fontFamily:
                    "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "-0.01em",
                  fontWeight: 500,
                }}
              >
                {audience.title}
              </h3>
              <p
                className={`text-sm leading-relaxed transition-colors duration-700 ${
                  darkMode ? "text-zinc-400" : "text-[#c5e4db]"
                }`}
                style={{
                  fontFamily:
                    "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
