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
      className={`py-32 px-6 md:px-16 lg:px-24 xl:px-32 relative transition-colors duration-700 ${
        darkMode ? "bg-zinc-900" : "bg-[#f5f3f0]"
      }`}
    >
      <div
        ref={elementRef}
        className={`max-w-6xl mx-auto ${isVisible ? "scroll-reveal" : ""}`}
      >
        <h2 className="text-5xl font-bold text-center mb-20 font-['Nunito'] text-[#3E2414] dark:text-[#FCF0B6]">
          KEY FEATURES
        </h2>

        <div>
          {project.features.map((feature, index) => {
            // Assuming each feature object has a 'sticker' property with the image path
            // e.g., sticker: '/stickers/feature1.png'

            return (
              <div key={index}>
                <div className="group relative flex items-center transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  {/* 
                    Sticker Image (visible on hover) 
                  */}
                  {feature.sticker && (
                    <img
                      src={feature.sticker}
                      alt={`${feature.title} sticker`}
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-in-out pointer-events-none"
                    />
                  )}

                  {/* Content */}
                  <div className="flex items-center justify-between w-full">
                    <div className="font-bold flex-shrink-0 font-['Nunito'] text-base text-[#AC7F5E] dark:text-[#FCF0B6]">
                      {feature.number}
                    </div>
                    <p className="flex-1 leading-relaxed text-center font-['Quicksand'] text-base text-[#171717] dark:text-[#ededed]">
                      {feature.title}
                    </p>
                  </div>
                </div>
                {/* 
                  Horizontal Line 
                */}
                {index < project.features.length - 1 && (
                  <hr className="mt-4 mb-16 border-t-2 border-gray-300 dark:border-gray-700" />
                )}
              </div>
            );
          })}
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
