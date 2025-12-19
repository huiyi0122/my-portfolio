/*C:\Users\user\my-portfolio\app\project\page.tsx*/
"use client";

import Navbar from "@/app/components/home/Navbar";
import ProjectHero from "@/app/components/project/ProjectHero";
import ProjectStats from "@/app/components/project/ProjectStats";
import ProjectList from "@/app/components/project/ProjectList";
import FullPageScroll from "@/app/components/home/FullPageScroll";
import { useDarkMode } from "@/app/components/DarkModeProvider";
import ShootingStars from "../components/project/ShootingStars";

export default function ProjectPage() {
  const { darkMode } = useDarkMode();

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      {darkMode && <ShootingStars count={20} />}

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
        <ProjectHero darkMode={darkMode} />
        <ProjectStats darkMode={darkMode} />
        <ProjectList darkMode={darkMode} />
      </FullPageScroll>
    </div>
  );
}
