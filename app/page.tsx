"use client";

import { useEffect, useState } from "react";
import Navbar from "@/app/components/home/Navbar";
import Hero from "@/app/components/home/Hero";
import Traits from "@/app/components/home/Traits";
import Contact from "@/app/components/home/Contact";

export default function Home() {
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
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: darkMode
            ? "url(/images/dark_mode/home/bg_dark.jpg)"
            : "url(/images/background.png)",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Main Content */}
      <main className="relative z-0">
        <Navbar darkMode={darkMode} />
        <Hero darkMode={darkMode} />
        <Traits darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
    </div>
  );
}
