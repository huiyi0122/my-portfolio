"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import { useDarkMode } from "../DarkModeProvider";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const linkClasses = (href: string) => {
    const isActive = pathname === href;
    const baseClasses =
      "px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg";
    const activeDark = "bg-slate-800 text-cyan-300";
    const inactiveDark = "text-slate-300 hover:bg-slate-800 hover:text-white";
    const activeLight = "bg-slate-200 text-blue-800";
    const inactiveLight =
      "text-slate-700 hover:bg-slate-200 hover:text-slate-900";

    if (darkMode) {
      return `${baseClasses} ${isActive ? activeDark : inactiveDark}`;
    }
    return `${baseClasses} ${isActive ? activeLight : inactiveLight}`;
  };

  return (
    <>
      {/* Logo - Top Left */}
      <Link href="/" className="fixed top-6 left-6 z-50">
        <Image
          src={darkMode ? "/images/LOGO-2.png" : "/images/LOGO-2.png"}
          alt="CHY"
          width={60}
          height={60}
          className="h-15 w-auto cursor-pointer transition-all duration-300 hover:opacity-80 hover:drop-shadow-[0_0_8px_rgba(100,210,255,0.5)]"
        />
      </Link>

      <nav
        className={`fixed top-6 right-6 md:left-1/2 md:-translate-x-1/2 md:right-auto w-auto rounded-full border z-50 transition-all duration-300 ${
          isMobileMenuOpen
            ? darkMode
              ? "bg-black border-cyan-300/20"
              : "bg-white"
            : darkMode
            ? "bg-black/30 border-cyan-300/20 shadow-[0_8px_30px_rgb(0,0,0,0.12),_0_0_12px_rgba(100,210,255,0.3)]"
            : "bg-white"
        }`}
        style={
          isMobileMenuOpen
            ? {}
            : { backdropFilter: "saturate(180%) blur(24px)" }
        }
      >
        <div className="flex items-center px-4 h-14">
          {/* Desktop Links & Controls */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Link href="/" className={linkClasses("/")}>
                {t.nav.home}
              </Link>
              <Link href="/about" className={linkClasses("/about")}>
                {t.nav.about}
              </Link>
              <Link href="/project" className={linkClasses("/project")}>
                {t.nav.project}
              </Link>
              <a href="/contact" className={linkClasses("/contact")}>
                {t.nav.contact}
              </a>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 border-l border-slate-300/30 pl-4">
              <button
                onClick={() => setLanguage(language === "en" ? "zh" : "en")}
                className={`p-2 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg ${
                  darkMode
                    ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                    : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
                aria-label="Toggle language"
              >
                <Globe className="w-5 h-5" />
              </button>

              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg ${
                  darkMode
                    ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                    : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                  : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden absolute top-16 right-0 w-[90vw] max-w-sm rounded-xl border p-4 transition-all duration-300 ${
              darkMode ? "bg-black border-cyan-300/20" : "bg-white"
            }`}
            style={
              isMobileMenuOpen
                ? {}
                : { backdropFilter: "saturate(180%) blur(24px)" }
            }
          >
            <div className="flex flex-col gap-2">
              <Link href="/" className={linkClasses("/")}>
                {t.nav.home}
              </Link>
              <Link href="/about" className={linkClasses("/about")}>
                {t.nav.about}
              </Link>
              <Link href="/project" className={linkClasses("/project")}>
                {t.nav.project}
              </Link>
              <a href="/contact" className={linkClasses("/contact")}>
                {t.nav.contact}
              </a>

              <hr className="border-slate-300/30 my-2" />

              <div className="flex  gap-2">
                <button
                  onClick={() => setLanguage(language === "en" ? "zh" : "en")}
                  className={`p-2 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg ${
                    darkMode
                      ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                      : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                  aria-label="Toggle language"
                >
                  <Globe className="w-5 h-5" />
                </button>

                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full transition-all transform hover:-translate-y-0.5 hover:shadow-lg ${
                    darkMode
                      ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                      : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
