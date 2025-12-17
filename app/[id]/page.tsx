/*C:\Users\user\my-portfolio\app\components\project\[id]\page.tsx*/
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
import { useDarkMode } from "@/app/components/DarkModeProvider";

export default function ProjectDetailPage() {
  const { darkMode } = useDarkMode();
  const params = useParams();
  const projectId = params.id;

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: darkMode ? "none" : "url(/images/about_bg.png)",
          backgroundColor: darkMode ? "#000000" : "transparent",
          backgroundAttachment: "fixed",
        }}
      />

      <main className="relative z-0">
        <Navbar />
        <ProjectDetailHero
          darkMode={darkMode}
          projectId={projectId as string}
        />
        <ProjectGoal darkMode={darkMode} projectId={projectId as string} />
        <ProjectAudience darkMode={darkMode} projectId={projectId as string} />
        <ProjectResponsive
          darkMode={darkMode}
          projectId={projectId as string}
        />
        <ProjectOverview darkMode={darkMode} projectId={projectId as string} />
        <ProjectFeatures darkMode={darkMode} projectId={projectId as string} />
        <ProjectTimeline darkMode={darkMode} projectId={projectId as string} />
        <ProjectCTA darkMode={darkMode} />
      </main>
    </div>
  );
}
