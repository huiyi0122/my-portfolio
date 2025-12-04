"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

interface TraitsProps {
  darkMode: boolean;
}

export default function Traits({ darkMode }: TraitsProps) {
  const { t } = useLanguage();

  const traits = [
    {
      icon: darkMode
        ? "/images/dark_mode/home/creative_dark.svg"
        : "/images/light_mode/home/creative.svg",
      textbox: darkMode
        ? "/images/dark_mode/home/textbox_dark.png"
        : "/images/light_mode/home/textbox.png",
      title: t.traits.creative.title,
      description: t.traits.creative.desc,
      animation: "slide-in-left",
    },
    {
      icon: darkMode
        ? "/images/dark_mode/home/Problem-Solver_dark.svg"
        : "/images/light_mode/home/Problem-Solver.svg",
      textbox: darkMode
        ? "/images/dark_mode/home/textbox_dark.png"
        : "/images/light_mode/home/textbox2.png",
      title: t.traits.problemSolver.title,
      description: t.traits.problemSolver.desc,
      animation: "slide-in-right",
    },
    {
      icon: darkMode
        ? "/images/dark_mode/home/Team-Player_dark.svg"
        : "/images/light_mode/home/Team-Player.svg",
      textbox: darkMode
        ? "/images/dark_mode/home/textbox_dark.png"
        : "/images/light_mode/home/textbox.png",
      title: t.traits.teamPlayer.title,
      description: t.traits.teamPlayer.desc,
      animation: "slide-in-left",
    },
    {
      icon: darkMode
        ? "/images/dark_mode/home/Adaptable_dark.svg"
        : "/images/light_mode/home/Adaptable.svg",
      textbox: darkMode
        ? "/images/dark_mode/home/textbox_dark.png"
        : "/images/light_mode/home/textbox2.png",
      title: t.traits.adaptable.title,
      description: t.traits.adaptable.desc,
      animation: "slide-in-right",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-6 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12">
          {traits.map((trait, index) => {
            const TraitItem = () => {
              const { elementRef, isVisible } = useScrollReveal();

              return (
                <div
                  ref={elementRef}
                  className={`flex gap-6 items-start ${
                    isVisible ? trait.animation : ""
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Icon / Sticker with rotate animation */}
                  <div className="w-[117px] h-[125px] flex-shrink-0 rotate-in hover-glow">
                    <Image
                      src={trait.icon}
                      alt={trait.title}
                      width={117}
                      height={125}
                      className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3
                      className="font-bold mb-3 hover:scale-105 transition-transform duration-300"
                      style={{
                        color: darkMode ? "#FCF0B6" : "#171717",
                        fontSize: "32px",
                      }}
                    >
                      {trait.title}
                    </h3>

                    {/* Textbox with Description */}
                    <div className="relative hover:scale-105 transition-transform duration-300">
                      {/* Textbox Background PNG */}
                      <Image
                        src={trait.textbox}
                        alt=""
                        width={400}
                        height={150}
                        className="w-full h-auto"
                      />

                      {/* Description Text Overlay */}
                      <p
                        className="absolute inset-0 flex items-center justify-center px-8 py-4 text-center"
                        style={{
                          color: darkMode ? "#F7C9C8" : "#171717",
                          fontFamily: "'Indie Flower', cursive",
                          fontSize: "24px",
                        }}
                      >
                        {trait.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            };

            return <TraitItem key={index} />;
          })}
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src={
            darkMode ? "/images/divider_dark.svg" : "/images/divider_light.svg"
          }
          alt="Section Divider"
          width={1920}
          height={80}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
