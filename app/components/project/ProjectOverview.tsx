/*C:\Users\user\my-portfolio\app\components\project\ProjectOverview.tsx*/
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";

interface ProjectOverviewProps {
  darkMode: boolean;
  projectId: string;
}

export default function ProjectOverview({
  darkMode,
  projectId,
}: ProjectOverviewProps) {
  const { t } = useLanguage();
  const project =
    t.project.ProjectList[projectId as keyof typeof t.project.ProjectList]
      .details;

  if (!project || !project.overview) return null;

  return (
    <section
      className={`min-h-screen w-full flex md:items-center px-6 py-24 md:py-0 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <motion.div
        className="max-w-4xl mx-auto w-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Section Label */}
        <motion.p
          className={`text-xs font-semibold tracking-[0.2em] uppercase text-center mb-8 md:mb-12 transition-colors duration-700 ${
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
          {project.overview.title}
        </motion.p>

        {/* Description */}
        <motion.p
          className={`text-lg sm:text-xl text-center mb-6 md:mb-8 leading-relaxed transition-colors duration-700 ${
            darkMode ? "text-white" : "text-zinc-900"
          }`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
          style={{
            fontFamily:
              "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          {project.overview.description}
        </motion.p>

        {/* Details */}
        <motion.p
          className={`text-sm sm:text-base text-center leading-relaxed max-w-3xl mx-auto transition-colors duration-700 ${
            darkMode ? "text-zinc-400" : "text-zinc-600"
          }`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          style={{
            fontFamily:
              "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          {project.overview.details}
        </motion.p>
      </motion.div>
    </section>
  );
}
