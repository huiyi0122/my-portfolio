"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
    setMounted(true);
  }, []);

  const toggleDarkMode = useCallback(() => {
    const newMode = !darkMode;

    // 1. 开始过渡
    setIsTransitioning(true);

    // 2. 切换 class，让底下的内容准备好
    document.documentElement.classList.toggle("dark", newMode);

    // 3. 更新状态和 localStorage
    setDarkMode(newMode);
    localStorage.setItem("darkMode", String(newMode));

    // 4. 在一小段延迟后结束过渡，让覆盖层淡出
    // 这个延迟确保了浏览器有足够的时间应用新的 .dark class
    const transitionEndTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 700); // 持续时间应与 CSS transition duration 匹配

    return () => clearTimeout(transitionEndTimer);
  }, [darkMode]);

  if (!mounted) return null;

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {/* 过渡动画层 */}
      <div
        className={`fixed inset-0 z-[9999] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          darkMode ? "bg-zinc-900" : "bg-[#f5f3f0]"
        }`}
        style={
          {
            clipPath: `circle(var(--clip-size, 0%) at 50% 50%)`,
            setProperty: isTransitioning
              ? "--clip-size: 150%"
              : "--clip-size: 0%",
          } as any
        }
      />
      <div
        className={`transition-colors duration-700 ${
          darkMode ? "bg-zinc-900" : "bg-[#f5f3f0]"
        }`}
      >
        {children}
      </div>
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within DarkModeProvider");
  }
  return context;
}
