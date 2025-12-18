/*C:\Users\user\my-portfolio\app\components\project\ProjectList.tsx*/
"use client";

import { useState, memo, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Lock,
  Container,
  Server,
  FileCode,
  Palette,
} from "lucide-react";
import { useLanguage } from "../LanguageProvider";

interface ProjectListProps {
  darkMode: boolean;
}

const techIcons = {
  "Next.js": Code2,
  TypeScript: FileCode,
  PostgreSQL: Database,
  NextAuth: Lock,
  Docker: Container,
  "Node.js": Server,
  PHP: Code2,
  MySQL: Database,
  HTML: FileCode,
  CSS: Palette,
  "Tailwind CSS": Palette,
};

const projectsData = [
  {
    id: "hr-dashboard",
    number: "03",
    year: "2025",
    month: "NOV",
    title: "HR Dashboard",
    subtitle: "Interview & Candidate Management System",
    description:
      "Full-stack dashboard with MS Forms integration, real-time candidate tracking, and comprehensive admin controls.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "NextAuth"],
    images: [
      "/images/light_mode/project/hr-dashboard-main.png",
      "/images/light_mode/project/dashboard.png",
      "/images/light_mode/project/hr-dashboard-form.png",
    ],
    cat: "/images/light_mode/project/cat1.png",
    status: "Live",
    demo: "https://hr-interview-dashboard.huiyi-chai.workers.dev",
    type: "Professional",
    responsive: {
      desktop: "/images/light_mode/project/hr-dashboard-desktop.png",
      mobile: "/images/light_mode/project/hr-dashboard-mobile.png",
    },
  },
  {
    id: "company-wiki",
    number: "02",
    year: "2025",
    month: "SEP",
    title: "Company Wiki",
    subtitle: "Internal Knowledge Management System",
    description:
      "Centralized knowledge platform with role-based access control, collaborative editing and Dockerized deployment.",
    tech: ["Next.js", "TypeScript", "Docker", "Node.js"],
    images: [
      "/images/light_mode/project/wiki-main.png",
      "/images/light_mode/project/wiki-dashboard.png",
      "/images/light_mode/project/wiki-editor.png",
    ],
    cat: "/images/light_mode/project/cat2.png",
    status: "Private",
    demo: null,
    type: "Professional",
    responsive: {
      desktop: "/images/light_mode/project/company-wiki-desktop.png",
      mobile: "/images/light_mode/project/company-wiki-mobile.png",
    },
  },
  {
    id: "farmhub",
    number: "01",
    year: "2025",
    month: "JAN",
    title: "FarmHub",
    subtitle: "E-commerce & Booking Platform",
    description:
      "Web platform for farm tour ticket booking and fresh product purchases with integrated payment system.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    images: [
      "/images/light_mode/project/farmhub-main.png",
      "/images/light_mode/project/farmhub-product.png",
      "/images/light_mode/project/farmhub-booking.png",
    ],
    cat: "/images/light_mode/project/cat3.png",
    status: "Completed",
    demo: null,
    type: "Academic",
    responsive: {
      desktop: "/images/light_mode/project/farmhub-desktop.png",
      mobile: "/images/light_mode/project/farmhub-mobile.png",
    },
  },
];

type Project = (typeof projectsData)[0] & { [key: string]: any };

const ProjectImageSlider = memo(
  ({
    project,
    darkMode,
  }: {
    project: (typeof projectsData)[0];
    darkMode: boolean;
  }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // 检测是否为移动端
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleMouseEnter = () => {
      if (!isMobile) {
        setIsHovered(true);
        let slideIndex = 0;
        const interval = setInterval(() => {
          slideIndex = (slideIndex + 1) % project.images.length;
          setCurrentSlide(slideIndex);
        }, 1000);
        (window as any)[`slideInterval_${project.id}`] = interval;
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      clearInterval((window as any)[`slideInterval_${project.id}`]);
      setCurrentSlide(0);
    };

    const handleTouchStart = () => {
      if (isMobile) {
        const nextSlide = (currentSlide + 1) % project.images.length;
        setCurrentSlide(nextSlide);
      }
    };

    return (
      <div
        className="relative w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
      >
        <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
          {/* Cat overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <Image
              src={project.cat}
              alt="Cat"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Screenshot display */}
          <motion.div
            className={`absolute z-20 overflow-hidden ring-1 transition-all duration-500 ${
              darkMode ? "ring-white/10" : "ring-zinc-900/10"
            }`}
            animate={{ scale: isHovered ? 1.03 : 1 }}
            transition={{ duration: 0.4 }}
            style={{
              // 中心定位
              top: "35%",
              left: "5%",
              transform: "translate(-50%, -50%)",
              // 响应式大小
              width: "90%",
              height: "60%",
              borderRadius: "12px",
            }}
          >
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {project.images.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className="w-full h-full flex-shrink-0 relative"
                >
                  <Image
                    src={img}
                    alt={`${project.title} ${imgIndex + 1}`}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 60vw, 40vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Slide indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx
                      ? darkMode
                        ? "bg-white scale-125"
                        : "bg-zinc-900 scale-125"
                      : darkMode
                      ? "bg-white/30"
                      : "bg-zinc-900/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
);

ProjectImageSlider.displayName = "ProjectImageSlider";

const ProjectCard = ({
  project,
  index,
  darkMode,
}: {
  project: Project;
  index: number;
  darkMode: boolean;
}) => {
  const { t } = useLanguage();
  const projectI18n =
    t.project.ProjectList[project.id as keyof typeof t.project.ProjectList];

  return (
    <motion.div
      className={`flex flex-col lg:grid lg:grid-cols-2 lg:gap-10 items-center ${
        index % 2 === 1 ? "lg:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Project Info */}
      <div className={index % 2 === 1 ? "lg:order-2" : ""}>
        {/* Header badges */}
        <div className="flex pt-10 items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
          <span
            className={`text-xs sm:text-sm font-medium px-2.5 sm:px-3 py-1 rounded-full ${
              darkMode
                ? "bg-zinc-800 text-zinc-400"
                : "bg-zinc-100 text-zinc-600"
            }`}
            style={{ fontFamily: "'SF Pro Display', sans-serif" }}
          >
            {project.number}
          </span>
          <span
            className={`text-xs ${
              darkMode ? "text-zinc-600" : "text-zinc-400"
            }`}
          >
            •
          </span>
          <span
            className={`text-xs ${
              darkMode ? "text-zinc-500" : "text-zinc-500"
            }`}
          >
            {project.month} {project.year}
          </span>
          <span
            className={`px-2 sm:px-2.5 py-1 text-xs font-medium rounded-full ${
              darkMode
                ? "bg-zinc-800 text-zinc-400"
                : "bg-zinc-100 text-zinc-600"
            }`}
          >
            {projectI18n.type.toUpperCase()}
          </span>
          {projectI18n.status === t.project.Status.live && (
            <span className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-600">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              LIVE
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-2 sm:mb-3 transition-colors duration-700 ${
            darkMode ? "text-white" : "text-zinc-900"
          }`}
          style={{
            fontFamily: "'SF Pro Display', sans-serif",
            letterSpacing: "-0.02em",
            fontWeight: 500,
          }}
        >
          {projectI18n.title}
        </h3>

        {/* Subtitle */}
        <p
          className={`text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 transition-colors duration-700 ${
            darkMode ? "text-zinc-400" : "text-zinc-600"
          }`}
          style={{
            fontFamily: "'SF Pro Display', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          {projectI18n.subtitle}
        </p>

        {/* Description */}
        <p
          className={`text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 transition-colors duration-700 ${
            darkMode ? "text-zinc-500" : "text-zinc-600"
          }`}
          style={{
            fontFamily: "'SF Pro Display', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          {projectI18n.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-6 sm:mb-8">
          <p
            className={`text-xs font-semibold tracking-wider mb-2 sm:mb-3 ${
              darkMode ? "text-zinc-600" : "text-zinc-500"
            }`}
          >
            {t.project.Labels.techStack.toUpperCase()}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.tech.map((techName: string, i: number) => {
              const IconComponent =
                techIcons[techName as keyof typeof techIcons] || Code2;
              return (
                <div
                  key={i}
                  className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm transition-colors duration-700 ${
                    darkMode
                      ? "bg-zinc-800/50 text-zinc-400"
                      : "bg-zinc-100 text-zinc-700"
                  }`}
                  style={{ fontFamily: "'SF Pro Display', sans-serif" }}
                >
                  <IconComponent
                    size={14}
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                  />
                  {techName}
                </div>
              );
            })}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row flex-nowrap gap-3">
          <Link
            href={`/project/${project.id}`}
            className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-[1.02] text-center whitespace-nowrap ${
              darkMode
                ? "bg-white text-zinc-900 hover:bg-zinc-100"
                : "bg-zinc-900 text-white hover:bg-zinc-800"
            }`}
            style={{ fontFamily: "'SF Pro Display', sans-serif" }}
          >
            {t.project.Buttons.viewProject} →
          </Link>

          {project.demo && projectI18n.status === t.project.Status.live && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-[1.02] text-center whitespace-nowrap ${
                darkMode
                  ? "bg-transparent text-white ring-1 ring-white/20 hover:bg-white/5"
                  : "bg-transparent text-zinc-900 ring-1 ring-zinc-900/20 hover:bg-zinc-900/5"
              }`}
              style={{ fontFamily: "'SF Pro Display', sans-serif" }}
            >
              {t.project.Buttons.liveDemo} ↗
            </a>
          )}
        </div>
      </div>

      {/* Project Image */}
      <div className={`w-full ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <ProjectImageSlider project={project} darkMode={darkMode} />
      </div>
    </motion.div>
  );
};

export default function ProjectList({ darkMode }: ProjectListProps) {
  const { t } = useLanguage();

  const projects = useMemo(() => {
    return projectsData.map((p) => ({
      ...p,
      ...t.project.ProjectList[p.id as keyof typeof t.project.ProjectList],
    }));
  }, [t]);

  return (
    <section
      className={`h-screen w-full px-4 sm:px-6 relative transition-all duration-700 ${
        darkMode ? "bg-zinc-950" : "bg-white"
      } overflow-y-auto`}
      data-scrollable="true"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: darkMode
          ? "#3f3f46 transparent"
          : "#d4d4d8 transparent",
      }}
    >
      <div className="max-w-6xl mx-auto w-full py-10 sm:py-16 lg:py-20 space-y-20 sm:space-y-28 lg:space-y-32">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            darkMode={darkMode}
          />
        ))}
      </div>
    </section>
  );
}
