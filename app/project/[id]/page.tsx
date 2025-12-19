/*C:\Users\user\my-portfolio\app\project\[id]\page.tsx*/
"use client";

import { useParams } from "next/navigation";
import Navbar from "@/app/components/home/Navbar";
import ProjectDetailHero from "@/app/components/project/ProjectDetailHero";
import ProjectGoal from "@/app/components/project/ProjectGoal";
import ProjectAudience from "@/app/components/project/ProjectAudience";
import ProjectResponsive from "@/app/components/project/ProjectResponsive";
import ProjectOverview from "@/app/components/project/ProjectOverview";
import ProjectFeatures from "@/app/components/project/ProjectFeatures";
import ProjectTimeline from "@/app/components/project/ProjectTimeline";
import ProjectCTA from "@/app/components/project/ProjectCTA";
import FullPageScroll from "@/app/components/home/FullPageScroll";
import { useDarkMode } from "@/app/components/DarkModeProvider";
import ProjectContent from "@/app/components/project/ProjectContent";

export default function ProjectDetailPage() {
  const { darkMode } = useDarkMode();
  const params = useParams();
  const projectId = params.id;

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

      {/* Main Content */}
      <FullPageScroll>
        <ProjectDetailHero
          darkMode={darkMode}
          projectId={projectId as string}
        />
        <ProjectContent darkMode={darkMode} projectId={projectId as string} />
        <ProjectOverview darkMode={darkMode} projectId={projectId as string} />
        <ProjectGoal darkMode={darkMode} projectId={projectId as string} />
        <ProjectAudience darkMode={darkMode} projectId={projectId as string} />
        <ProjectTimeline darkMode={darkMode} projectId={projectId as string} />
        <ProjectResponsive
          darkMode={darkMode}
          projectId={projectId as string}
        />
        <ProjectFeatures darkMode={darkMode} projectId={projectId as string} />
        <ProjectCTA darkMode={darkMode} />
      </FullPageScroll>
    </div>
  );
}
