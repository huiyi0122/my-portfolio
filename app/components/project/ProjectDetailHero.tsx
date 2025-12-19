/*C:\Users\user\my-portfolio\app\components\project\ProjectDetailHero.tsx*/
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projectsData } from "@/app/data/projectsData";
import Image from "next/image";

export default function ProjectDetailHero({
  darkMode,
  projectId,
}: {
  darkMode: boolean;
  projectId: string;
}) {
  const project = projectsData[projectId as keyof typeof projectsData];
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) {
    return (
      <div className="flex h-screen items-center justify-center">
        Project Not Found
      </div>
    );
  }

  const { slides, techStack, title, subtitle, type, year } = project;

  const techLogos: { [key: string]: string } = {
    "Next.js": "/images/logos/nextjs.png",
    TypeScript: "/images/logos/typescript.png",
    PostgreSQL: "/images/logos/postgresql.svg",
    NextAuth: "/images/logos/nextauth.png",
    Docker: "/images/logos/docker.png",
    "Node.js": "/images/logos/nodejs.png",
    PHP: "/images/logos/php.png",
    MySQL: "/images/logos/mysql.png",
    HTML: "/images/logos/html.png",
    CSS: "/images/logos/css.png",
    "Tailwind CSS": "/images/logos/tailwindcss.png",
    Cloudflare: "/images/logos/cloudflare.png",
  };

  return (
    <section
      className={`min-h-screen w-full transition-all duration-700 ${
        darkMode ? "bg-zinc-950" : "bg-[#215245]"
      }`}
    >
      {/* Image Slider */}
      <div className="relative w-full h-[85vh] overflow-hidden">
        {slides.map(
          (slide: { url: string; caption: string }, index: number) => (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center justify-center px-4 sm:px-12 pt-16 sm:pt-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src={slide.url}
                alt={slide.caption}
                width={1400}
                height={900}
                className="w-full h-full object-contain opacity-90"
              />
            </motion.div>
          )
        )}
      </div>

      {/* Controls Bar */}
      <div
        className={`h-[15vh] pb-32 sm:pb-0 flex items-center justify-center transition-colors duration-700 ${
          darkMode ? "bg-zinc-950" : "bg-[#215245]"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Caption */}
          <div className="flex flex-col">
            <h1
              className={`text-sm sm:text-xl font-medium tracking-tight transition-colors duration-700 ${
                darkMode ? "text-white" : "text-[#e8f5f2]"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              {title}
            </h1>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`text-xs sm:text-sm font-medium tracking-wider uppercase mt-1 ${
                darkMode ? "text-zinc-400" : "text-[#a8d5c9]"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "0.1em",
              }}
            >
              {slides[currentSlide].caption}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-5">
            <span
              className={`text-sm font-mono transition-colors duration-700 ${
                darkMode ? "text-zinc-400" : "text-[#a8d5c9]"
              }`}
            >
              {String(currentSlide + 1).padStart(2, "0")} /{" "}
              {String(slides.length).padStart(2, "0")}
            </span>
            <button
              onClick={() =>
                setCurrentSlide(
                  (currentSlide - 1 + slides.length) % slides.length
                )
              }
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                darkMode
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              <ArrowLeft size={18} strokeWidth={2} />
            </button>
            <button
              onClick={() =>
                setCurrentSlide((currentSlide + 1) % slides.length)
              }
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                darkMode
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              <ArrowRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
