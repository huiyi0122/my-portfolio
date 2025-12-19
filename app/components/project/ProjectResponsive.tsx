"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { projectsData } from "@/app/data/projectsData";
import { useLanguage } from "../LanguageProvider";
import { Monitor, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectResponsiveProps {
  darkMode: boolean;
  projectId: string;
}

export default function ProjectResponsive({
  darkMode,
  projectId,
}: ProjectResponsiveProps) {
  const { elementRef, isVisible } = useScrollReveal();
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const project = projectsData[projectId as keyof typeof projectsData];
  const { t } = useLanguage();

  if (!project || !("responsive" in project) || !project.responsive)
    return null;

  return (
    <section className="w-full px-4 sm:px-6 md:px-16 py-16 sm:py-20 md:py-24 relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      <div
        ref={elementRef}
        className={`max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 w-full ${
          isVisible ? "scroll-reveal" : ""
        }`}
      >
        {/* 左侧 */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left space-y-4 sm:space-y-6">
          <h2
            className={`text-lg sm:text-xl md:text-2xl font-bold tracking-[2px] ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {t.project.Responsive.title}
          </h2>
          <p
            className={`text-sm sm:text-base ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            {t.project.Responsive.description}
          </p>

          {/* View Toggle */}
          <div className="flex gap-3 justify-center lg:justify-start mt-4">
            <button
              onClick={() => setViewMode("desktop")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 border-2 ${
                viewMode === "desktop"
                  ? darkMode
                    ? "bg-yellow-300 border-yellow-300 text-black"
                    : "bg-blue-500 border-blue-500 text-white"
                  : darkMode
                  ? "border-yellow-300 text-yellow-300"
                  : "border-blue-500 text-blue-500"
              }`}
            >
              <Monitor size={18} />
              {t.project.Responsive.desktop}
            </button>

            <button
              onClick={() => setViewMode("mobile")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 border-2 ${
                viewMode === "mobile"
                  ? darkMode
                    ? "bg-teal-500 border-teal-500 text-black"
                    : "bg-orange-500 border-orange-500 text-white"
                  : darkMode
                  ? "border-teal-500 text-teal-500"
                  : "border-orange-500 text-orange-500"
              }`}
            >
              <Smartphone size={18} />
              {t.project.Responsive.mobile}
            </button>
          </div>
        </div>

        {/* 右侧 */}
        <div className="flex-1 flex justify-center items-center w-full relative min-h-[300px] sm:min-h-[400px] max-h-[80vh]">
          <AnimatePresence mode="wait">
            {viewMode === "desktop" ? (
              <motion.div
                key="desktop"
                className="w-full max-w-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Image
                  src={project.responsive.desktop}
                  alt="Desktop view"
                  width={550}
                  height={500}
                  className="rounded-xl object-contain w-full h-auto max-h-[70vh]"
                />
              </motion.div>
            ) : (
              <motion.div
                key="mobile"
                className="w-full max-w-[280px]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <Image
                  src={project.responsive.tablet}
                  alt="Mobile view"
                  width={280}
                  height={560}
                  className="rounded-xl object-contain w-full h-auto max-h-[70vh]"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
