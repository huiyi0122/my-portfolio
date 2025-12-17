/*C:\Users\user\my-portfolio\app\components\project\ProjectInfo.tsx*/
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projectsData } from "@/app/data/projectsData";
import React from "react";

interface ProjectInfoProps {
  darkMode: boolean;
  projectId: string;
}

export default function ProjectContent({
  darkMode,
  projectId,
}: ProjectInfoProps) {
  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) return null;

  const { techStack, title, subtitle, type, year } = project;

  const techLogos: { [key: string]: string } = {
    "Next.js": "/images/icons/nextjs.png",
    React: "/images/icons/react.png",
    TypeScript: "/images/icons/typescript.png",
    Docker: "/images/icons/docker.svg",
    "Node.js": "/images/icons/nodejs.svg",
    PHP: "/images/icons/php.png",
    MySQL: "/images/icons/MySQL.png",
    HTML: "/images/icons/html.png",
    CSS: "/images/icons/css.png",
    "Tailwind CSS": "/images/icons/tailwindcss.png",
    Cloudflare: "/images/icons/cloudflare.jpg",
  };

  return (
    <section
      className={`h-screen w-full flex items-center px-6 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-950" : "bg-white"
      }`}
    >
      <motion.div
        className="max-w-7xl mx-auto w-full"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-2 gap-20">
          {/* Left: Title & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <p
              className={`text-xs font-semibold tracking-[0.2em] uppercase mb-6 transition-colors duration-700 ${
                darkMode ? "text-zinc-500" : "text-zinc-500"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              {type.toUpperCase()} — {year}
            </p>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 transition-colors duration-700 ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: "1",
              }}
            >
              {title}
            </h1>

            <p
              className={`text-lg leading-relaxed transition-colors duration-700 ${
                darkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.01em",
                lineHeight: "1.7",
              }}
            >
              {subtitle}
            </p>
          </motion.div>

          {/* Right: Tech Stack */}
          <motion.div
            className="flex items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <div>
              <p
                className={`text-xs font-semibold tracking-[0.2em] uppercase mb-4 transition-colors duration-700 ${
                  darkMode ? "text-zinc-500" : "text-zinc-500"
                }`}
                style={{
                  fontFamily:
                    "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                }}
              >
                TECH STACK
              </p>

              <div className="flex flex-wrap gap-5 items-center">
                {techStack.map((tech) =>
                  techLogos[tech] ? (
                    <div key={tech} className="flex items-center gap-2">
                      <Image
                        src={techLogos[tech]}
                        alt={tech}
                        width={50}
                        height={50}
                        className="w-12 h-12 object-contain"
                      />
                      <span
                        className={`text-sm font-mono transition-colors duration-700 ${
                          darkMode ? "text-zinc-400" : "text-zinc-600"
                        }`}
                        style={{
                          fontFamily: "monospace",
                        }}
                      >
                        {tech}
                      </span>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
