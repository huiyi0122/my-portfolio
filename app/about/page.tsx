/*C:\Users\user\my-portfolio\app\about\page.tsx*/
"use client";

import Navbar from "@/app/components/home/Navbar";
import AboutHero from "@/app/components/about/AboutHero";
import Introduction from "@/app/components/about/Introduction";
import Experience from "@/app/components/about/Experience";
import Focus from "@/app/components/about/Focus";
import SkillsTech from "@/app/components/about/SkillsTech";
import DownloadResume from "@/app/components/about/DownloadResume";
import FullPageScroll from "@/app/components/home/FullPageScroll";
import { useDarkMode } from "@/app/components/DarkModeProvider";

export default function AboutPage() {
  const { darkMode } = useDarkMode();

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 transition-colors duration-700"
        style={{
          backgroundColor: darkMode ? "#000000" : "#ffffff",
        }}
      />

      {/* Navbar - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-40">
        <Navbar />
      </div>

      {/* Main Content with Fullpage Scroll */}
      <FullPageScroll darkMode={darkMode}>
        <AboutHero darkMode={darkMode} />
        <Introduction darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Focus darkMode={darkMode} />
        <SkillsTech darkMode={darkMode} />
        <DownloadResume darkMode={darkMode} />
      </FullPageScroll>
    </div>
  );
}
