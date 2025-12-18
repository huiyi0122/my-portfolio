"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageProvider";

interface Skill {
  id: string;
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools";
  level: number;
  color: string;
  description: string;
}

const SKILLS_DATA: Skill[] = [
  {
    id: "js",
    name: "JavaScript",
    icon: "/images/icons/javascript.png",
    category: "frontend",
    level: 4.5,
    color: "#F7DF1E",
    description:
      "A versatile, high-level programming language that is one of the core technologies of the World Wide Web.",
  },
  {
    id: "ts",
    name: "TypeScript",
    icon: "/images/icons/typescript.png",
    category: "frontend",
    level: 4.2,
    color: "#3178C6",
    description:
      "Typed superset of JavaScript that provides static type checking and enhanced IDE support.",
  },
  {
    id: "react",
    name: "React",
    icon: "/images/icons/react.png",
    category: "frontend",
    level: 4.8,
    color: "#61DAFB",
    description:
      "A library for building user interfaces with a component-based architecture and virtual DOM.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: "/images/icons/nextjs.png",
    category: "frontend",
    level: 4.3,
    color: "#000000",
    description:
      "A React framework for production with server-side rendering and static site generation.",
  },
  {
    id: "tailwind",
    name: "Tailwind",
    icon: "/images/icons/tailwindcss.png",
    category: "frontend",
    level: 4.7,
    color: "#06B6D4",
    description:
      "A utility-first CSS framework for rapidly building custom user interfaces.",
  },
  {
    id: "html",
    name: "HTML/CSS",
    icon: "/images/icons/html.png",
    category: "frontend",
    level: 4.6,
    color: "#E34F26",
    description:
      "The standard markup and style sheet languages for creating web pages and applications.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    icon: "/images/icons/nodejs.svg",
    category: "backend",
    level: 4.0,
    color: "#339933",
    description:
      "A JavaScript runtime built on Chrome's V8 engine for scalable server-side applications.",
  },
  {
    id: "python",
    name: "Python",
    icon: "/images/icons/python.png",
    category: "backend",
    level: 3.8,
    color: "#3776AB",
    description:
      "A high-level, general-purpose programming language known for its simple, readable syntax.",
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: "/images/icons/mysql.png",
    category: "backend",
    level: 4.1,
    color: "#4479A1",
    description:
      "An open-source relational database management system widely used for storing structured data.",
  },

  {
    id: "git",
    name: "Git",
    icon: "/images/icons/github2.png",
    category: "tools",
    level: 4.6,
    color: "#181717",
    description:
      "A distributed version control system for tracking changes in source code during software development.",
  },
  {
    id: "docker",
    name: "Docker",
    icon: "/images/icons/docker.svg",
    category: "tools",
    level: 3.5,
    color: "#2496ED",
    description:
      "A platform for developing, shipping, and running applications in isolated containers.",
  },
  {
    id: "vscode",
    name: "VS Code",
    icon: "/images/icons/vscode.png",
    category: "tools",
    level: 4.9,
    color: "#007ACC",
    description:
      "A powerful, lightweight code editor with built-in support for debugging, Git control, and extensions.",
  },
  {
    id: "postman",
    name: "Postman",
    icon: "/images/icons/postman.svg",
    category: "tools",
    level: 4.0,
    color: "#FF6C37",
    description:
      "An API platform for developers to design, build, test and iterate on their APIs.",
  },
];

const SkillCard: React.FC<{
  skill: Skill;
  darkMode: boolean;
  isSelected: boolean;
  onClick: () => void;
}> = ({ skill, darkMode, isSelected, onClick }) => {
  return (
    <motion.div
      variants={itemVariants}
      className={`flex items-center gap-4 p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
        isSelected
          ? darkMode
            ? "bg-slate-700 border-cyan-400"
            : "bg-slate-100 border-indigo-500"
          : darkMode
          ? "bg-slate-800/50 border-slate-700 hover:border-slate-600"
          : "bg-white border-slate-200 hover:border-slate-300"
      }`}
      onClick={onClick}
    >
      <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
      <h3
        className={`font-medium text-base ${
          darkMode ? "text-white" : "text-zinc-900"
        }`}
      >
        {skill.name}
      </h3>
    </motion.div>
  );
};

// --- 技能详情面板组件 ---
interface SkillDetailPanelProps {
  skill: Skill | null;
  darkMode: boolean;
  onClose: () => void;
}

const SkillDetailPanel: React.FC<SkillDetailPanelProps> = ({
  skill,
  darkMode,
  onClose,
}) => {
  if (!skill) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`fixed inset-x-4 bottom-4 md:bottom-auto md:right-8 md:top-1/2 md:transform md:-translate-y-1/2 z-20 p-6 rounded-2xl backdrop-blur-xl border shadow-2xl max-w-md mx-auto md:mx-0 ${
        darkMode
          ? "bg-slate-900/90 border-slate-700"
          : "bg-white/90 border-slate-200"
      }`}
    >
      {/* 关闭按钮 */}
      <button
        onClick={onClose}
        className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          darkMode
            ? "bg-slate-800 hover:bg-slate-700"
            : "bg-slate-100 hover:bg-slate-200"
        }`}
      >
        ✕
      </button>

      {/* 图标和名称 */}
      <div className="flex items-center space-x-4 mb-6">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
          style={{ backgroundColor: skill.color + "20" }}
        >
          <img src={skill.icon} alt={skill.name} className="w-10 h-10" />
        </div>
        <div>
          <h3
            className={`text-2xl font-bold ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {skill.name}
          </h3>
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-1 ${
              darkMode
                ? "bg-slate-800 text-slate-300"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {skill.category}
          </span>
        </div>
      </div>

      {/* 描述 */}
      <p className={`mb-6 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
        {skill.description}
      </p>

      {/* 技能等级进度条 */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span
            className={`text-sm font-medium ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Proficiency Level
          </span>
          <span
            className={`text-sm font-bold ${
              darkMode ? "text-cyan-400" : "text-indigo-600"
            }`}
          >
            {skill.level}/5
          </span>
        </div>
        <div
          className={`h-2 rounded-full overflow-hidden ${
            darkMode ? "bg-slate-800" : "bg-slate-200"
          }`}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(skill.level / 5) * 100}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

interface SkillsTechProps {
  darkMode: boolean;
}

export default function SkillsTech({ darkMode }: SkillsTechProps) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<
    "all" | "frontend" | "backend" | "tools"
  >("all");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleCardClick = (skill: Skill) => {
    setSelectedSkill(selectedSkill?.id === skill.id ? null : skill);
  };

  const filtered =
    filter === "all"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === filter);

  return (
    <section
      data-scrollable="true"
      className={`relative w-full h-screen overflow-y-auto px-6 py-16 ${
        darkMode ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      <div className="max-w-5xl mx-auto md:pt-16 text-center">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm mb-2 text-zinc-500">{t.about.skill.header}</p>
          <h2
            className={`text-xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-zinc-900"
            }`}
          >
            {t.about.skill.title}
          </h2>

          {/* Filter */}
          <div className="flex gap-2">
            {(["all", "frontend", "backend", "tools"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFilter(cat);
                  setSelectedSkill(null); // Reset selection on filter change
                }}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  filter === cat
                    ? darkMode
                      ? "bg-cyan-500 text-white"
                      : "bg-indigo-500 text-white"
                    : darkMode
                    ? "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                    : "bg-white text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          key={filter} // Add this key to re-trigger animation on filter change
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filtered.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              darkMode={darkMode}
              isSelected={selectedSkill?.id === skill.id}
              onClick={() => handleCardClick(skill)}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <SkillDetailPanel
            skill={selectedSkill}
            darkMode={darkMode}
            onClose={() => setSelectedSkill(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
