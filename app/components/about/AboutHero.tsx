"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageProvider";
import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";

interface AboutHeroProps {
  darkMode: boolean;
}

export default function AboutHero({ darkMode }: AboutHeroProps) {
  const { t } = useLanguage();

  const images = [
    {
      src: "/images/profile2.jpg",
      alt: "Image 2",
      rotation: -2,
    },
    {
      src: "/images/profile1.jpg",
      alt: "Image 1",
      rotation: 3,
    },
    {
      src: "/images/profile3.jpg",
      alt: "Image 3",
      rotation: 2,
    },
  ];

  return (
    <section
      className={`h-screen w-full flex items-center px-4 sm:px-6 md:px-6 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-950" : "bg-[#faf9f7]"
      }`}
    >
      <div className="max-w-6xl mx-auto w-full pt-20 md:pt-0">
        <motion.div
          className="grid md:grid-cols-[1fr_1fr] gap-8 sm:gap-16 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Left: Text Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Subtitle */}
            <motion.p
              className={`text-xs sm:text-xs font-semibold tracking-[0.2em] uppercase transition-colors duration-700 ${
                darkMode ? "text-zinc-500" : "text-zinc-500"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              {t.about?.subtitle || "FULL-STACK DEVELOPER"}
            </motion.p>

            {/* Name */}
            <motion.h1
              className={`text-3xl sm:text-5xl md:text-7xl font-light tracking-tight transition-colors duration-700 ${
                darkMode ? "text-white" : "text-zinc-900"
              }`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 300,
                letterSpacing: "-0.03em",
              }}
            >
              {t.about?.title || "Chai Hui Yi"}
            </motion.h1>

            {/* Social Links */}
            <motion.div
              className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.a
                href="mailto:huiyicai27@gmail.com"
                aria-label="Email"
                className={`flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-white ring-1 ring-white/10"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
                }`}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Mail size={16} className="sm:!w-5 sm:!h-5" strokeWidth={1.5} />
              </motion.a>

              <motion.a
                href="https://github.com/huiyi0122"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-full transition-all duration-300 ${
                  darkMode
                    ? "bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 hover:text-white ring-1 ring-white/10"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900"
                }`}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Github
                  size={16}
                  className="sm:!w-5 sm:!h-5"
                  strokeWidth={1.5}
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Profile Images */}
          <div className="flex items-center justify-center min-h-[180px] sm:min-h-[250px] md:min-h-0">
            <div className="relative w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  drag
                  dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                  dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
                  dragElastic={0.8}
                  whileTap={{ cursor: "grabbing" }}
                  whileHover={{
                    scale: 1.05,
                    rotate: image.rotation + (image.rotation > 0 ? 2 : -2),
                    zIndex: 50,
                  }}
                  whileDrag={{ zIndex: 100 }}
                  className={`absolute rounded-2xl cursor-grab w-28 h-28 sm:w-44 sm:h-44`}
                  style={{
                    rotate: image.rotation,
                    left: index === 0 ? "-5rem" : index === 2 ? "5rem" : "0",
                    zIndex: index === 1 ? 30 : 20, // 中间照片 z-index 更高
                  }}
                  initial={{ opacity: 0, y: 20, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: image.rotation }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className={`w-full h-full object-cover rounded-2xl pointer-events-none ring-1 transition-all duration-300 ${
                      darkMode
                        ? "ring-white/10 shadow-2xl"
                        : "ring-zinc-900/5 shadow-xl"
                    }`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
