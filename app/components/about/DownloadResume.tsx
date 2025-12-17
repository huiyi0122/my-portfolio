/*C:\Users\user\my-portfolio\app\components\about\DownloadResume.tsx*/
"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../LanguageProvider";
import {
  RippleButton,
  RippleButtonRipples,
} from "@/components/animate-ui/components/buttons/ripple";

interface DownloadResumeProps {
  darkMode: boolean;
}

export default function DownloadResume({ darkMode }: DownloadResumeProps) {
  const { t } = useLanguage();
  return (
    <section
      className={`h-screen w-full flex items-center px-6 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-900" : "bg-[#f5f3f0]"
      }`}
    >
      <motion.div
        className="max-w-4xl mx-auto w-full text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Section Label */}
        <motion.p
          className={`text-xs font-semibold tracking-[0.2em] uppercase mb-12 transition-colors duration-700 ${
            darkMode ? "text-zinc-500" : "text-zinc-500"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          style={{
            fontFamily:
              "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          {t.about.resume.header}
        </motion.p>

        {/* Title */}
        <motion.h2
          className={`text-4xl md:text-5xl font-light mb-16 tracking-tight transition-colors duration-700 ${
            darkMode ? "text-white" : "text-zinc-900"
          }`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
          style={{
            fontFamily:
              "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 300,
            letterSpacing: "-0.02em",
          }}
        >
          {t.about.resume.title}
        </motion.h2>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: false }}
        >
          <a href="/images/resume.pdf" download>
            <RippleButton
              className={`inline-flex items-center gap-3 px-20 py-6 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-white text-zinc-900 hover:bg-zinc-200"
                  : "bg-zinc-900 text-white hover:bg-zinc-700"
              }`}
              style={
                {
                  "--ripple-button-ripple-color": darkMode
                    ? "rgba(0,0,0,0.1)"
                    : "rgba(255,255,255,0.2)",
                  fontFamily:
                    "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                  letterSpacing: "-0.01em",
                } as React.CSSProperties
              }
            >
              <Download size={20} strokeWidth={1.5} />
              {t.about.resume.button}
              <RippleButtonRipples />
            </RippleButton>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
