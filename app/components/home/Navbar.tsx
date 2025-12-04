"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Globe, Moon, Sun } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { usePathname } from "next/navigation";

interface NavbarProps {
  darkMode: boolean;
}

export default function Navbar({ darkMode }: NavbarProps) {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const htmlClass = document.documentElement.classList;
    setIsDark(htmlClass.contains("dark"));
  }, [darkMode]);

  const toggleDarkMode = () => {
    const htmlClass = document.documentElement.classList;
    if (htmlClass.contains("dark")) {
      htmlClass.remove("dark");
      setIsDark(false);
    } else {
      htmlClass.add("dark");
      setIsDark(true);
    }
  };

  const linkColor = (href: string) => {
    if (isDark) {
      return pathname === href ? "#FCF0B6" : "#777474";
    } else {
      return pathname === href ? "#8B4513" : "#171717";
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-3 backdrop-blur-md transition-colors duration-300 ${
        isDark ? "bg-gray-900/80" : "bg-white/80"
      }`}
    >
      {" "}
      <div className="max-w-7xl mx-auto flex justify-between items-center font-instrument font-semibold">
        {/* Logo */}
        <Image
          src={
            isDark
              ? "/images/logo_dark.png"
              : "/images/light_mode/home/logo.png"
          }
          alt="CHY"
          width={60}
          height={60}
          className="h-10 w-auto"
        />

        {/* Nav Links */}
        <div className="flex items-center gap-[12px]">
          <div className="hidden md:flex gap-[12px]">
            <a href="/" style={{ color: linkColor("/") }} className="px-2 py-2">
              {t.nav.home}
            </a>
            <a
              href="/about"
              style={{ color: linkColor("/about") }}
              className="px-2 py-2"
            >
              {t.nav.about}
            </a>
            <a
              href="/project"
              style={{ color: linkColor("/project") }}
              className="px-2 py-2"
            >
              {t.nav.project}
            </a>
            <a
              href="/contact"
              style={{ color: linkColor("/contact") }}
              className="px-2 py-2"
            >
              {t.nav.contact}
            </a>
          </div>

          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "zh" : "en")}
            className="p-2 rounded-lg hover:opacity-70 transition"
            aria-label="Toggle language"
          >
            <Globe
              className="w-5 h-5"
              style={{ color: isDark ? "#FCF0B6" : "#171717" }}
            />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:opacity-70 transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <Sun className="w-5 h-5" style={{ color: "#FCF0B6" }} />
            ) : (
              <Moon className="w-5 h-5" style={{ color: "#171717" }} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
