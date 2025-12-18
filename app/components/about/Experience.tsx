"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageProvider";
import { motion } from "framer-motion";

interface ExperienceProps {
  darkMode: boolean;
}

export default function ExperienceTimeline({ darkMode }: ExperienceProps) {
  const { t } = useLanguage();
  const experiences = [t.about.experience.job]; // Wrap the single job object in an array

  return (
    <section
      className={`h-screen w-full flex items-center px-4 sm:px-6 md:px-6 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-950" : "bg-white"
      }`}
    >
      <motion.div
        className="max-w-5xl mx-auto w-full pt-20 md:pt-0 pb-36 md:pb-0"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Section Label */}
        <motion.p
          className={`text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-8 sm:mb-12 md:mb-12 transition-colors duration-700 ${
            darkMode ? "text-zinc-500" : "text-zinc-500"
          }`}
          style={{
            fontFamily:
              "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          {t.about.experience.title}
        </motion.p>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 sm:gap-8 md:gap-10 items-start">
          {/* Company Logo */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <Image
              src={
                darkMode
                  ? "/images/dark_mode/about/company_dark.png"
                  : "/images/light_mode/about/company.png"
              }
              alt="Company"
              width={140}
              height={140}
              className="object-contain w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            {/* Header */}
            <div className="space-y-2 sm:space-y-3">
              <h3
                className={`text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight transition-colors duration-700 ${
                  darkMode ? "text-white" : "text-zinc-900"
                }`}
                style={{
                  fontFamily:
                    "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "-0.02em",
                  fontWeight: 500,
                }}
              >
                {t.about.experience.job.title}
              </h3>
              <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
                <p
                  className={`text-sm sm:text-base transition-colors duration-700 ${
                    darkMode ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {t.about.experience.job.company}
                </p>
                <span
                  className={`px-2 py-1 text-xs sm:text-sm rounded-full font-medium transition-colors duration-700 ${
                    darkMode
                      ? "bg-zinc-800 text-zinc-400"
                      : "bg-zinc-100 text-zinc-600"
                  }`}
                >
                  {t.about.experience.job.duration}
                </span>
              </div>
            </div>

            {/* Tasks */}
            <ul className="mt-4 space-y-2 sm:space-y-3">
              {t.about.experience.job.tasks.map((task, index) => (
                <motion.li
                  key={index}
                  className={`flex gap-2 sm:gap-3 text-sm sm:text-base leading-relaxed transition-colors duration-700 ${
                    darkMode ? "text-zinc-400" : "text-zinc-600"
                  }`}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.1,
                  }}
                >
                  <span
                    className={darkMode ? "text-zinc-600" : "text-zinc-400"}
                  >
                    •
                  </span>
                  {task}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
