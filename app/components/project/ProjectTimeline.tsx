/*C:\Users\user\my-portfolio\app\components\project\ProjectTimeline.tsx*/
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";

interface ProjectTimelineProps {
  darkMode: boolean;
  projectId: string;
}

export default function ProjectTimeline({
  darkMode,
  projectId,
}: ProjectTimelineProps) {
  const { t } = useLanguage();
  const project =
    t.project.ProjectList[projectId as keyof typeof t.project.ProjectList]
      .details;

  if (!project || !project.timeline) return null;

  return (
    <section
      className={`h-screen w-full flex items-center px-6 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-900" : "bg-white"
      }`}
    >
      <motion.div
        className="max-w-5xl mx-auto w-full"
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
          {project.timeline.title}
        </motion.p>

        {/* Project Details Grid */}
        <motion.div
          className={`grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden transition-all duration-700 ${
            darkMode
              ? "bg-zinc-800/50 ring-1 ring-white/10"
              : "bg-zinc-50 ring-1 ring-zinc-900/5"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
        >
          {/* TYPE */}
          <div
            className={`p-10 transition-colors duration-700 ${
              darkMode
                ? "border-r border-white/10"
                : "border-r border-zinc-900/10"
            }`}
          >
            <p
              className={`text-xs font-semibold tracking-wider uppercase mb-4 transition-colors duration-700 ${
                darkMode ? "text-zinc-500" : "text-zinc-500"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              {t.project.Type.professional.toUpperCase()}
            </p>
            <p
              className={`text-base transition-colors duration-700 ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 400,
              }}
            >
              {project.timeline.type}
            </p>
          </div>

          {/* YEAR */}
          <div
            className={`p-10 transition-colors duration-700 ${
              darkMode
                ? "border-r border-white/10"
                : "border-r border-zinc-900/10"
            }`}
          >
            <p
              className={`text-xs font-semibold tracking-wider uppercase mb-4 transition-colors duration-700 ${
                darkMode ? "text-zinc-500" : "text-zinc-500"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              {t.project.ProjectStats.Label[0].label.toUpperCase()}
            </p>
            <p
              className={`text-base transition-colors duration-700 ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 400,
              }}
            >
              {project.timeline.year}
            </p>
          </div>

          {/* ROLE */}
          <div className="p-10">
            <p
              className={`text-xs font-semibold tracking-wider uppercase mb-4 transition-colors duration-700 ${
                darkMode ? "text-zinc-500" : "text-zinc-500"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              ROLE
            </p>
            <p
              className={`text-base transition-colors duration-700 ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 400,
              }}
            >
              {project.timeline.role}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
