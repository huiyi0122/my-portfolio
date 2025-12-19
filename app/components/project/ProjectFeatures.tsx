"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { projectsData } from "@/app/data/projectsData";
import Image from "next/image";

interface ProjectFeaturesProps {
  darkMode: boolean;
  projectId: string;
}

export default function ProjectFeatures({
  darkMode,
  projectId,
}: ProjectFeaturesProps) {
  const { elementRef, isVisible } = useScrollReveal();
  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) return null;

  return (
    <section
      className={`py-16 sm:py-20 md:py-32 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 relative transition-colors duration-700 ${
        darkMode ? "bg-zinc-950" : "bg-[#f5f3f0]"
      }`}
    >
      <div
        ref={elementRef}
        className={`max-w-6xl mx-auto ${isVisible ? "scroll-reveal" : ""}`}
      >
        {/* Section Title */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 transition-colors duration-700 ${
            darkMode ? "text-white" : "text-zinc-900"
          }`}
          style={{
            fontFamily:
              "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          KEY FEATURES
        </h2>

        {/* Features List */}
        <div>
          {project.features.map((feature, index) => {
            return (
              <div key={index}>
                <div className="group relative flex items-center transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  {/* Sticker Image (hover visible) */}
                  {feature.sticker && (
                    <img
                      src={feature.sticker}
                      alt={`${feature.title} sticker`}
                      className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-36 md:w-48 h-36 md:h-48 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out pointer-events-none"
                    />
                  )}

                  {/* Feature Content */}
                  <div className="flex items-center justify-between w-full gap-4">
                    {/* Feature Number */}
                    <div
                      className={`font-bold flex-shrink-0 text-sm sm:text-base transition-colors duration-700 ${
                        darkMode ? "text-zinc-400" : "text-zinc-600"
                      }`}
                      style={{
                        fontFamily:
                          "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      {feature.number}
                    </div>

                    {/* Feature Title */}
                    <p
                      className={`flex-1 leading-relaxed text-center text-xs sm:text-lg md:text-xl transition-colors duration-700 ${
                        darkMode ? "text-zinc-300" : "text-zinc-700"
                      }`}
                      style={{
                        fontFamily:
                          "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                      }}
                    >
                      {feature.title}
                    </p>
                  </div>
                </div>

                {/* Horizontal Line */}
                {index < project.features.length - 1 && (
                  <hr className="mt-4 mb-8 sm:mb-12 md:mb-16 border-t-2 border-gray-300/50 dark:border-gray-700/50" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
