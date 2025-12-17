/*C:\Users\user\my-portfolio\app\components\about\SkillsTech.tsx*/
"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";
import React, { useMemo } from "react";

// --- 1. 数据定义 ---
interface Technology {
  name: string;
  icon: string;
  level: 1 | 2 | 3 | 4;
}

const SKILLS_DATA: Technology[] = [
  // Languages & Frameworks
  {
    name: "JavaScript",
    icon: "/images/icons/javascript.png",
    level: 4,
  },
  {
    name: "NextJS",
    icon: "/images/icons/nextjs.png",
    level: 3,
  },
  {
    name: "TypeScript",
    icon: "/images/icons/typescript.png",
    level: 2,
  },
  {
    name: "Python",
    icon: "/images/icons/python.png",
    level: 1,
  },

  // Frontend
  {
    name: "React",
    icon: "/images/icons/react.png",
    level: 4,
  },
  {
    name: "Tailwind CSS",
    icon: "/images/icons/tailwindcss.png",
    level: 2,
  },
  {
    name: "HTML/CSS",
    icon: "/images/icons/html.png",
    level: 1,
  },

  // Databases
  {
    name: "MySQL",
    icon: "/images/icons/mysql.png",
    level: 4,
  },
  {
    name: "MAMP",
    icon: "/images/icons/MAMP.png",
    level: 1,
  },

  // DevOps & Tools
  {
    name: "Git/GitHub",
    icon: "/images/icons/github2.png",
    level: 4,
  },
  {
    name: "VS Code",
    icon: "/images/icons/vscode.png",
    level: 2,
  },
  {
    name: "Postman",
    icon: "/images/icons/postman.svg",
    level: 1,
  },
  {
    name: "Docker",
    icon: "/images/icons/docker.svg",
    level: 3,
  },
];

// --- 2. SVG 尺寸和计算常量 ---
const SIZE = 1200;
const CENTER = SIZE / 2;
const NUM_LEVELS = 4;
const MAX_RADIUS = CENTER * 0.6;
const LEVEL_DISTANCE = MAX_RADIUS / NUM_LEVELS;
const FLATTEN_SCALE = 0.6;

// 使用一个简单的伪随机数生成器，确保位置固定
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// 改进的位置生成算法 - 避免重叠并使用确定性随机
const getDistributedPointOnCircle = (
  level: number,
  indexInLevel: number,
  totalInLevel: number,
  seed: number
) => {
  const baseAngle = ((Math.PI * 2) / totalInLevel) * indexInLevel;
  const angleJitter =
    (seededRandom(seed) - 0.5) * ((Math.PI * 2) / totalInLevel) * 0.6;
  const angle = baseAngle + angleJitter;

  const radiusJitter = (seededRandom(seed + 100) - 0.5) * LEVEL_DISTANCE * 0.4;
  const radius = level * LEVEL_DISTANCE + radiusJitter;
  const finalRadius = Math.max(radius, LEVEL_DISTANCE * 0.8);

  const x = CENTER + finalRadius * Math.cos(angle);
  const y = CENTER + finalRadius * Math.sin(angle);

  return { x, y };
};

// --- 3. 雷达图内容组件 ---
const SkillsRadarContent: React.FC<{ darkMode: boolean; trigger: number }> = ({
  darkMode,
  trigger,
}) => {
  const radarColor = darkMode ? "stroke-cyan-400/60" : "stroke-indigo-400/60";
  const radarGlow = darkMode ? "#22d3ee" : "#818cf8";
  const textColor = darkMode ? "fill-slate-200" : "fill-slate-700";
  const bgGradient = darkMode
    ? "from-slate-800/40 to-slate-900/60"
    : "from-white/60 to-slate-50/80";

  const skillPositions = useMemo(() => {
    const skillsByLevel: Record<string, Technology[]> = {};
    SKILLS_DATA.forEach((skill) => {
      if (!skillsByLevel[skill.level]) {
        skillsByLevel[skill.level] = [];
      }
      skillsByLevel[skill.level].push(skill);
    });

    return SKILLS_DATA.map((skill, index) => {
      const skillsInLevel = skillsByLevel[skill.level];
      const indexInLevel = skillsInLevel.findIndex(
        (s) => s.name === skill.name
      );

      return getDistributedPointOnCircle(
        skill.level,
        indexInLevel,
        skillsInLevel.length,
        index
      );
    });
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-full relative">
      {/* 雷达图层 */}
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="w-full h-auto absolute"
        style={{
          overflow: "visible",
          transform: `scaleY(${FLATTEN_SCALE})`,
        }}
      >
        <defs>
          <radialGradient id="centerGlow">
            <stop offset="0%" stopColor={radarGlow} stopOpacity="0.2" />
            <stop offset="50%" stopColor={radarGlow} stopOpacity="0.1" />
            <stop offset="100%" stopColor={radarGlow} stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          cx={CENTER}
          cy={CENTER}
          r={MAX_RADIUS}
          fill="url(#centerGlow)"
        />

        {[...Array(NUM_LEVELS)].map((_, i) => {
          const radius = (i + 1) * LEVEL_DISTANCE;
          return (
            <circle
              key={i}
              cx={CENTER}
              cy={CENTER}
              r={radius}
              className={radarColor}
              strokeWidth="2"
              fill="none"
            />
          );
        })}
      </svg>

      {/* 图标层 */}
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="w-full h-auto absolute"
        style={{ overflow: "visible" }}
      >
        <defs>
          <filter id="iconShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.3" />
          </filter>

          <linearGradient id="iconBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              className={bgGradient.split(" ")[0].replace("from-", "")}
            />
            <stop
              offset="100%"
              className={bgGradient.split(" ")[1].replace("to-", "")}
            />
          </linearGradient>
        </defs>

        {SKILLS_DATA.map((skill, index) => {
          const { x, y } = skillPositions[index];
          const adjustedY = CENTER + (y - CENTER) * FLATTEN_SCALE;
          const imageSize = 25;
          const bgSize = imageSize + 14;

          const [isHovered, setIsHovered] = React.useState(false);

          return (
            <motion.g
              key={`${skill.name}-${index}-${trigger}`}
              initial={{
                x: CENTER - x,
                y: CENTER - adjustedY,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: 0,
                y: 0,
                scale: 1,
                opacity: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.6 + index * 0.05,
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ cursor: "pointer" }}
            >
              <circle
                cx={x}
                cy={adjustedY}
                r={bgSize / 2}
                className={`${
                  darkMode ? "fill-slate-800/90" : "fill-white/90"
                }`}
                filter="url(#iconShadow)"
              />

              <circle
                cx={x}
                cy={adjustedY}
                r={bgSize / 2}
                className={
                  darkMode ? "stroke-cyan-400/40" : "stroke-indigo-400/40"
                }
                strokeWidth="2"
                fill="none"
              />

              <image
                href={skill.icon}
                x={x - imageSize / 2}
                y={adjustedY - imageSize / 2}
                width={imageSize}
                height={imageSize}
                style={{ clipPath: `circle(${imageSize / 2}px at center)` }}
              />

              <motion.text
                x={x}
                y={adjustedY + bgSize / 2 + 22}
                className={`text-[13px] font-semibold ${textColor}`}
                textAnchor="middle"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  textShadow: darkMode
                    ? "0 2px 4px rgba(0,0,0,0.6)"
                    : "0 2px 4px rgba(255,255,255,0.8)",
                  pointerEvents: "none",
                }}
              >
                {skill.name}
              </motion.text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
};

// --- 4. 导出主组件 ---
interface SkillsTechProps {
  darkMode: boolean;
}

export default function SkillsTech({ darkMode }: SkillsTechProps) {
  const [animationTrigger, setAnimationTrigger] = React.useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);
  const { t } = useLanguage();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 每次进入视口时增加 trigger，强制重新渲染并播放动画
            setAnimationTrigger((prev) => prev + 1);
          }
        });
      },
      { threshold: 0.3 } // 当 30% 可见时触发
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden transition-colors duration-700 ${
        darkMode ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      <motion.div
        className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1fr_3fr] gap-8 lg:gap-16 items-center"
        style={{ height: "calc(100% - 160px)" }} // 减去 section 的 py-20 (80px*2)
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Left Column: Title */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <motion.p
            className={`text-sm font-semibold tracking-[0.25em] uppercase transition-colors duration-700 ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
            style={{
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
            }}
          >
            {t.about.skill.header}
          </motion.p>
          <motion.h2
            className={`text-4xl md:text-5xl font-light mt-4 tracking-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
            style={{
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            {t.about.skill.title}
          </motion.h2>
        </div>

        {/* 雷达图 */}
        <motion.div
          className="relative order-1 lg:order-2"
          style={{ height: "min(100%, 1000px)" }} // 响应式高度，最大 1000px
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <SkillsRadarContent darkMode={darkMode} trigger={animationTrigger} />
        </motion.div>
      </motion.div>
    </section>
  );
}
