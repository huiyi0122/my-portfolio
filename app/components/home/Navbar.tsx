"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Moon, Sun, Home, User, Folder, Mail } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import { useDarkMode } from "../DarkModeProvider";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "/", label: t.nav.home, icon: Home },
    { href: "/about", label: t.nav.about, icon: User },
    { href: "/project", label: t.nav.project, icon: Folder },
    { href: "/contact", label: t.nav.contact, icon: Mail },
  ];

  if (!mounted) return null;

  const linkClasses = (href: string, isIcon = false) => {
    const isActive = pathname === href;
    const baseClasses = `transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center`;

    const textClasses = "px-3 py-2 rounded-full text-sm font-medium";
    const iconClasses = "p-2.5 rounded-full";

    const activeDark = "bg-slate-800 text-cyan-300";
    const inactiveDark = "text-slate-300 hover:bg-slate-800 hover:text-white";
    const activeLight = "bg-slate-200 text-blue-800";
    const inactiveLight =
      "text-slate-700 hover:bg-slate-200 hover:text-slate-900";

    const layoutClasses = isIcon ? iconClasses : textClasses;

    if (darkMode) {
      return `${baseClasses} ${layoutClasses} ${
        isActive ? activeDark : inactiveDark
      }`;
    }
    return `${baseClasses} ${layoutClasses} ${
      isActive ? activeLight : inactiveLight
    }`;
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
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 md:bottom-auto md:top-6 w-auto rounded-full border z-50 transition-all duration-300 ${
          darkMode
            ? "bg-black/30 border-cyan-300/20 shadow-[0_8px_30px_rgb(0,0,0,0.12),_0_0_12px_rgba(100,210,255,0.3)]"
            : "bg-white/80 border-slate-200 shadow-sm"
        }`}
        style={{ backdropFilter: "saturate(180%) blur(24px)" }}
      >
        <div className="flex items-center px-4 h-14">
          {/* Desktop Links & Controls */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClasses(item.href)}
                >
                  {item.label}
                </Link>
              ))}
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

          {/* Mobile Icons & Controls */}
          <div className="flex md:hidden items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClasses(item.href, true)}
                  aria-label={item.label}
                >
                  <Icon size={20} />
                </Link>
              );
            })}
            {/* Mobile Controls */}
            <div className="flex items-center gap-1 border-l border-slate-300/30 ml-2 pl-2">
              <button
                onClick={() => setLanguage(language === "en" ? "zh" : "en")}
                className={linkClasses("", true)}
                aria-label="Toggle language"
              >
                <Globe size={20} />
              </button>
              <button
                onClick={toggleDarkMode}
                className={linkClasses("", true)}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
