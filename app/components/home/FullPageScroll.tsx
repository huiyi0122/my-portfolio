"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface FullPageScrollProps {
  children: React.ReactNode;
  darkMode?: boolean;
}

export default function FullPageScroll({
  children,
  darkMode = false,
}: FullPageScrollProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = React.Children.toArray(children);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 监听滚动，更新当前section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const { offsetTop, offsetHeight } = ref;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setCurrentSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始化当前section

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 点击导航点跳转到对应section - 更丝滑的动画
  const scrollToSection = (index: number) => {
    const element = sectionRefs.current[index];
    if (element) {
      const yOffset = 0;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          html {
            scroll-behavior: smooth;
          }
          
          * {
            scroll-behavior: smooth;
          }
          
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          
          ::-webkit-scrollbar-thumb {
            background: ${
              darkMode ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"
            };
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: ${
              darkMode ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
            };
          }
        `,
        }}
      />

      <div className="relative scroll-smooth">
        {/* Navigation dots with avatar for current section */}
        <div className="fixed right-1 sm:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(index)}
              className="group relative flex h-10 w-10 items-center justify-center"
              aria-label={`Go to section ${index + 1}`}
            >
              {currentSection === index ? (
                // Current section: Show avatar
                <div
                  className={`w-5 h-5 sm:w-8 sm:h-8 rounded-full overflow-hidden transition-all duration-500 ease-out ring-2 scale-110 ${
                    darkMode
                      ? "ring-white shadow-lg"
                      : "ring-zinc-900 shadow-lg"
                  }`}
                >
                  <Image
                    src="/images/LOGO-3.png"
                    alt="Current section avatar"
                    width={20}
                    height={20}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                // Other sections: Show small dot
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-500 ease-out ${
                    darkMode
                      ? "bg-white/30 group-hover:bg-white/50 group-hover:scale-125"
                      : "bg-zinc-900/30 group-hover:bg-zinc-900/50 group-hover:scale-125"
                  }`}
                />
              )}
            </button>
          ))}
        </div>

        {/* Sections container - 正常滚动 */}
        <div>
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="min-h-screen w-full"
            >
              {section}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
