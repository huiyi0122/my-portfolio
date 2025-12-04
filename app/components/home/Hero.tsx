"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { useEffect, useState } from "react";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating circles */}
        <div
          className="absolute w-64 h-64 rounded-full opacity-20 animate-float"
          style={{
            background: darkMode
              ? "radial-gradient(circle, #CEFECE 0%, transparent 70%)"
              : "radial-gradient(circle, #585bb7ff 0%, transparent 70%)",
            top: "10%",
            left: "5%",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 animate-float-delayed"
          style={{
            background: darkMode
              ? "radial-gradient(circle, #FCF0B6 0%, transparent 70%)"
              : "radial-gradient(circle, #AC7F5E 0%, transparent 70%)",
            bottom: "10%",
            right: "5%",
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="slide-in-left" style={{ animationDelay: "0.2s" }}>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ color: darkMode ? "#CEFECE" : "#171717" }}
            >
              {t.hero.greeting}{" "}
              <span className="gradient-text inline-block">{t.hero.name}</span>
            </h1>

            <p
              className="text-lg mb-8 leading-relaxed"
              style={{
                color: darkMode ? "#F7C9C8" : "#171717",
                animationDelay: "0.4s",
              }}
            >
              {t.hero.description}
            </p>

            <div className="flex gap-4">
              {/* Button 1 */}

              <a
                href="#project"
                className="px-8 py-3 rounded-lg font-medium shadow-md transition-all duration-300 hover-glow"
                style={{
                  backgroundColor: darkMode
                    ? "#F7C9C8"
                    : "rgba(99,127,156,0.43)",
                  border: `2px solid ${darkMode ? "#F7C9C8" : "#637F9C"}`,
                  color: darkMode ? "#000000" : "#2C4C72",
                  animationDelay: "0.6s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode
                    ? "#FFD8D7"
                    : "#7799BB";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode
                    ? "#F7C9C8"
                    : "rgba(99,127,156,0.43)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {t.hero.viewProject}
              </a>

              {/* Button 2 */}

              <a
                href="#about"
                className="px-8 py-3 rounded-lg font-medium shadow-md transition-all duration-300 hover-glow"
                style={{
                  backgroundColor: darkMode
                    ? "#00C8B3"
                    : "rgba(172,127,94,0.43)",
                  border: `2px solid ${darkMode ? "#00C8B3" : "#AC7F5E"}`,
                  color: darkMode ? "#000000" : "#823E20",
                  animationDelay: "0.7s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode
                    ? "#2AF3DE"
                    : "rgba(172,127,94,0.8)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = darkMode
                    ? "#00C8B3"
                    : "rgba(172,127,94,0.43)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                {t.hero.aboutMe}
              </a>
            </div>
          </div>

          {/* Right: Profile with Rotating PNG Border */}
          <div
            className="flex justify-center relative scale-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className="relative w-80 h-80 parallax"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${
                  mousePosition.y * 0.5
                }px)`,
              }}
            >
              {/* Rotating PNG Border (dash = 22) */}
              <div className="absolute inset-0 rotating-border">
                <Image
                  src={
                    darkMode
                      ? "/images/dark_mode/home/dash_dark.png"
                      : "/images/light_mode/home/dash.png"
                  }
                  alt=""
                  width={320}
                  height={320}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Glow effect behind profile */}
              <div
                className="absolute inset-0 rounded-full opacity-30 blur-3xl"
                style={{
                  background: darkMode
                    ? "radial-gradient(circle, #FCF0B6 0%, transparent 70%)"
                    : "radial-gradient(circle, #637F9C 0%, transparent 70%)",
                  animation: "pulse 3s ease-in-out infinite",
                }}
              />

              {/* Profile Image (Not rotating) - Centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src={
                      darkMode ? "/images/profile.png" : "/images/profile.png"
                    }
                    alt="Chai Hui Yi"
                    width={280}
                    height={280}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>

              {/* Bubble Stickers */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -right-4 top-80 w-24 h-24 animate-float">
                  <Image
                    src="/images/light_mode/home/Bubble1.svg"
                    alt=""
                    width={130}
                    height={96}
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute -right-1 top-105 w-16 h-16 animate-float-delayed">
                  <Image
                    src="/images/light_mode/home/Bubble3.svg"
                    alt=""
                    width={80}
                    height={80}
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute right-19 top-100 s w-20 h-20 animate-float">
                  <Image
                    src="/images/light_mode/home/Bubble2.svg"
                    alt=""
                    width={64}
                    height={64}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src={
            darkMode ? "/images/divider_dark.svg" : "/images/divider_light.svg"
          }
          alt="Hero Divider"
          width={1920}
          height={80}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
