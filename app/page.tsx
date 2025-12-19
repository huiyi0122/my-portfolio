/*C:\Users\user\my-portfolio\app\page.tsx*/
"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "@/app/components/home/Navbar";
import Hero from "@/app/components/home/Hero";
import Traits from "@/app/components/home/Traits";
import Contact from "@/app/components/home/Contact";
import FullPageScroll from "@/app/components/home/FullPageScroll";
import { useDarkMode } from "@/app/components/DarkModeProvider";
import TypewriterIntro from "@/app/components/TypewriterIntro";

export default function Home() {
  const { darkMode } = useDarkMode();
  const [showIntro, setShowIntro] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Opening Animation */}
      {showIntro && (
        <TypewriterIntro
          darkMode={darkMode}
          onComplete={() => setShowIntro(false)}
        />
      )}

      {/* Background */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: "none", // 始终不使用背景图片
          backgroundColor: darkMode ? "#000000" : "#f9fafb", // 为亮色模式设置一个柔和的背景色
          backgroundAttachment: "fixed",
        }}
      />

      {/* Navbar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Navbar />
      </div>

      {/* Main Content with Fullpage Scroll */}
      {!showIntro && (
        <FullPageScroll>
          <Hero darkMode={darkMode} />
          <Traits darkMode={darkMode} />
          <Contact darkMode={darkMode} />
        </FullPageScroll>
      )}
    </div>
  );
}
