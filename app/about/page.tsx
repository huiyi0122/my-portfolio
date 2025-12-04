"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/home/Navbar";
import Hero from "@/app/components/about/hero";

export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains("dark");
    setDarkMode(isDark);

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setDarkMode(isDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen">
      {" "}
      <Navbar darkMode={darkMode} /> <Hero darkMode={darkMode} />{" "}
    </div>
  );
}
