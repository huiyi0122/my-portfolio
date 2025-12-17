/*C:\Users\user\my-portfolio\app\components\project\ProjectCTA.tsx*/
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCTAProps {
  darkMode: boolean;
}

export default function ProjectCTA({ darkMode }: ProjectCTAProps) {
  return (
    <section
      className={`h-screen w-full flex items-center px-6 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-950" : "bg-[#215245]"
      }`}
    >
      <motion.div
        className="max-w-4xl mx-auto w-full text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Title */}
        <motion.h2
          className={`text-4xl md:text-5xl font-light mb-12 tracking-tight transition-colors duration-700 ${
            darkMode ? "text-white" : "text-[#e8f5f2]"
          }`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          style={{
            fontFamily:
              "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
            fontWeight: 300,
            letterSpacing: "-0.02em",
          }}
        >
          Want to know more?
        </motion.h2>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <motion.a
            href="https://github.com/huiyi0122"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-4 rounded-full text-base font-medium transition-all duration-300 ${
              darkMode
                ? "bg-white text-zinc-900 hover:bg-zinc-100"
                : "bg-[#e8f5f2] text-[#1a3f38] hover:bg-white"
            }`}
            whileHover={{ y: -2, scale: 1.02 }}
            style={{
              fontFamily:
                "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            View on GitHub
          </motion.a>

          <motion.div whileHover={{ y: -2, scale: 1.02 }}>
            <Link
              href="/#contact"
              className={`inline-block px-8 py-4 rounded-full text-base font-medium transition-all duration-300 ${
                darkMode
                  ? "bg-transparent text-white ring-1 ring-white/20 hover:bg-white/5"
                  : "bg-transparent text-[#e8f5f2] ring-1 ring-[#e8f5f2]/30 hover:bg-white/10"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.01em",
              }}
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
