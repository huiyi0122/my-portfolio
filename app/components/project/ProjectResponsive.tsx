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
    <section className="w-full h-screen px-6 relative flex items-center">
      <div
        ref={elementRef}
        className={`max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 w-full h-full ${
          isVisible ? "scroll-reveal" : ""
        }`}
      >
        {/* 左侧 */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left space-y-6 h-full">
          <h2
            className={`text-xl font-bold tracking-[4px] ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {t.project.Responsive.title}
          </h2>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            {t.project.Responsive.description}
          </p>

          {/* View Toggle */}
          <div className="flex gap-3 justify-center lg:justify-start mt-4">
            {/* Desktop Button */}
            <button
              onClick={() => setViewMode("desktop")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 border-2 ${
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

            {/* Mobile Button */}
            <button
              onClick={() => setViewMode("mobile")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 border-2 ${
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
        <div className="flex-1 flex justify-center items-center h-full relative">
          <AnimatePresence mode="wait">
            {viewMode === "desktop" ? (
              <motion.img
                key="desktop"
                src={project.responsive.desktop}
                alt="Desktop view"
                className="rounded-xl object-contain"
                style={{ width: 550, height: 500 }} // 固定大小
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            ) : (
              <motion.img
                key="tablet"
                src={project.responsive.tablet}
                alt="Tablet view"
                className="rounded-xl object-contain"
                style={{ width: 280, height: 560 }} // 固定大小
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src={
            darkMode ? "/images/divider_dark.svg" : "/images/divider_light.svg"
          }
          alt="Divider"
          width={1920}
          height={80}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
