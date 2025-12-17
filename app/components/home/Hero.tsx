/* app/components/home/Hero.tsx */
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../LanguageProvider";
import { useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import {
  RippleButton,
  RippleButtonRipples,
} from "@/components/animate-ui/components/buttons/ripple";

interface HeroProps {
  darkMode: boolean;
  startAnimation: boolean;
}

export default function Hero({ darkMode, startAnimation }: HeroProps) {
  const { t } = useLanguage();
  const controls = useAnimation();

  useEffect(() => {
    if (startAnimation) {
      controls.start("visible");
    }
  }, [startAnimation, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        duration: 0.6,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 12, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.9,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const portraits = [
    { src: "/images/portraits-1.png", rotate: -8, scale: 0.95, delay: 0 },
    { src: "/images/portraits-2.png", rotate: 4, scale: 1, delay: 0.1 },
    { src: "/images/portraits-3.png", rotate: -6, scale: 0.98, delay: 0.2 },
    { src: "/images/portraits-4.png", rotate: 2, scale: 1.02, delay: 0.3 },
    { src: "/images/portraits-5.png", rotate: 5, scale: 0.96, delay: 0.4 },
    { src: "/images/portraits-6.png", rotate: 5, scale: 0.96, delay: 0.4 },
  ];

  return (
    <section
      className={`h-screen w-full flex items-center justify-center px-6 relative overflow-hidden transition-all duration-700 ${
        darkMode ? "bg-zinc-950" : "bg-[#215245]"
      }`}
    >
      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-center h-full">
        {/* ================== TEXT CONTENT ================== */}
        <motion.div
          className="flex flex-col items-center text-center space-y-8 pb-32"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div variants={itemVariants} className="space-y-3">
            <h1
              className={`text-6xl sm:text-7xl md:text-5xl font-light tracking-tight leading-[0.95] transition-colors duration-700 ${
                darkMode ? "text-white" : "text-[#e8f5f2]"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              {t.hero.greeting}
            </h1>

            <h2
              className={`text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight leading-[0.95] transition-colors duration-700 ${
                darkMode ? "text-zinc-400" : "text-[#a8d5c9]"
              }`}
              style={{
                fontFamily:
                  "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",
                letterSpacing: "-0.03em",
              }}
            >
              {t.hero.name}
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl leading-relaxed max-w-xl transition-colors duration-700 ${
              darkMode ? "text-zinc-500" : "text-[#c5e4db]"
            }`}
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link href="/project" passHref>
              <RippleButton
                className={`relative overflow-hidden px-9 py-3.5 font-medium transition-all duration-300 hover:scale-[1.02] ${
                  darkMode
                    ? "bg-[#262626] ring-1 ring-white/20 text-white hover:bg-white/5"
                    : "bg-white ring-1 ring-[#ffffff]/30 text-[#000000] hover:bg-white/10 hover:text-white"
                }`}
                style={
                  {
                    "--ripple-button-ripple-color": darkMode
                      ? "rgba(0,0,0,0.1)"
                      : "rgba(0,0,0,0.1)",
                  } as React.CSSProperties
                }
              >
                {t.hero.viewProject}
                <RippleButtonRipples />
              </RippleButton>
            </Link>

            <Link href="/about" passHref>
              <RippleButton
                className={`relative overflow-hidden px-9 py-3.5 font-medium transition-all duration-300 hover:scale-[1.02] ${
                  darkMode
                    ? "bg-[#262626] ring-1 ring-white/20 text-white hover:bg-white/5"
                    : "ring-1 ring-[#e8f5f2]/30 text-[#e8f5f2] hover:bg-white/10"
                }`}
                style={
                  {
                    "--ripple-button-ripple-color": darkMode
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(255,255,255,0.2)",
                  } as React.CSSProperties
                }
              >
                {t.hero.aboutMe}
                <RippleButtonRipples />
              </RippleButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* ================== PORTRAITS ================== */}
        <motion.div
          className="
            absolute bottom-30 left-1/2 -translate-x-1/2
            flex items-center justify-center
            gap-3 sm:gap-6 md:gap-8
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          {portraits.map((portrait, index) => (
            <motion.div
              key={index}
              className={`
                relative flex-shrink-0
                w-[80px] h-[80px]
                sm:w-[130px] sm:h-[130px]
                md:w-[110px] md:h-[110px]
                lg:w-[150px] lg:h-[150px]

                ${index > 3 ? "hidden sm:block" : ""}
                ${index > 4 ? "hidden md:block" : ""}
              `}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: portrait.rotate }}
              transition={{
                duration: 0.8,
                delay: portrait.delay + 0.8,
              }}
              whileHover={{
                y: -8,
                rotate: portrait.rotate + (portrait.rotate > 0 ? 2 : -2),
              }}
              style={{ transform: `scale(${portrait.scale})` }}
            >
              <Image
                src={portrait.src}
                alt={`Portrait ${index + 1}`}
                fill
                sizes="(max-width: 640px) 110px,
                       (max-width: 768px) 130px,
                       150px"
                className="rounded-xl object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================== DIVIDER ================== */}
      <div className="absolute bottom-0 left-0 w-full opacity-30">
        <Image
          src={
            darkMode ? "/images/divider_dark.svg" : "/images/divider_light.svg"
          }
          alt="Divider"
          width={1920}
          height={80}
          className=" w-full h-auto"
        />
      </div>
    </section>
  );
}
