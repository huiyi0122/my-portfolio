"use client";

import { useEffect, useState } from "react";
import TextType from "@/app/components/TextType";
import { motion } from "framer-motion"; // 引入 motion

interface TypewriterIntroProps {
  darkMode: boolean;
  onComplete: () => void;
}

// --- 动画配置 ---

// 整个容器的动画
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 子元素交错出场
      delayChildren: 0.2,
    },
  },
};

// 文字容器的出场动画 (从左侧快速淡入/弹出)
const textContainerVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring" as const, // 使用 spring 营造激情感
      stiffness: 100,
      damping: 10,
    },
  },
};

// 人物头像的出场动画 (从右侧滑入，带有轻微旋转)
const avatarVariants = {
  hidden: { opacity: 0, x: 500, rotate: 10 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring" as const, // 使用 spring 营造激情感
      stiffness: 80,
      damping: 12,
      duration: 1.0,
    },
  },
};

// --- 组件定义 ---
export default function TypewriterIntro({
  darkMode,
  onComplete,
}: TypewriterIntroProps) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [selectedGif, setSelectedGif] = useState("");

  // 在组件加载时随机选择一个 GIF
  useEffect(() => {
    const gifCount = 10; // 您有7个GIF
    const randomIndex = Math.floor(Math.random() * gifCount) + 1;
    setSelectedGif(`/images/gif/${randomIndex}.gif`);
  }, []); // 空依赖数组确保只在加载时运行一次

  const handleTypingComplete = () => {
    // 打字结束后，等待 500ms
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
      // 1000ms 淡出动画结束后，调用 onComplete
      setTimeout(onComplete, 1000);
    }, 500);

    return () => clearTimeout(fadeTimer);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center font-mono transition-opacity duration-1000 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
      style={
        darkMode
          ? {
              // 暗色模式：深邃的放射状背景，营造聚光灯效果
              background:
                "radial-gradient(circle at center, rgba(3, 169, 244, 0.15) 0%, #010409 70%)",
            }
          : {
              // 亮色模式：纯白背景
              background: "#ffffff",
            }
      }
    >
      <motion.div
        className="flex flex-col items-center justify-center max-w-5xl mx-auto p-4 w-full gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 文字容器 */}
        <motion.div variants={textContainerVariants} className="text-center">
          <TextType
            as="h1"
            className={`
              text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight
              ${
                darkMode
                  ? "bg-gradient-to-r from-sky-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(3,169,244,0.6)]"
                  : "bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
              }
            `}
            style={{ fontFamily: "'Indie Flower', cursive" }}
            text="Welcome to Chai Hui Yi Portfolio!"
            typingSpeed={120}
            loop={false} // 确保循环设置为 false，否则光标会一直闪烁
            cursorCharacter="|"
            onTypingComplete={handleTypingComplete}
          />
        </motion.div>

        {/* GIF 容器 */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0.5, duration: 0.5 },
            },
          }}
        >
          {selectedGif && (
            <img src={selectedGif} alt="loading..." className="w-64 h-64" />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}
