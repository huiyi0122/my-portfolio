"use client";

import Image from "next/image";
import { Mail, Phone, Github, MapPin } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import { motion } from "framer-motion";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="h-screen w-full flex items-center px-10 sm:px-6 md:px-6 relative overflow-hidden"
    >
      <motion.div
        className="max-w-5xl mx-auto w-full pt-20 md:pt-0 pb-36 md:pb-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-36 tracking-tight dark:text-white text-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          {t.contact.title}
        </motion.h2>

        {/* Wrapper for cat and card */}
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Cat Image */}
          <motion.div
            className="absolute -top-10 sm:-top-16 md:-top-32 left-1/2 -translate-x-1/2 w-[120px] sm:w-[200px] md:w-[400px] z-10"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            <Image
              src={darkMode ? "/images/cat.png" : "/images/cat.png"}
              alt="Cat"
              width={400}
              height={350}
              className="w-full h-auto object-contain"
            />
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="rounded-3xl p-6 sm:p-8 md:p-12 shadow-lg transition-colors duration-300 dark:bg-zinc-800/50 dark:border-zinc-700/80 border bg-white/70 border-white/80 backdrop-blur-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            {/* Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6 sm:gap-8 md:gap-12 items-center">
              {/* LEFT — Avatar + Name + Role */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: false }}
              >
                <Image
                  src={darkMode ? "/images/avatar.png" : "/images/avatar.png"}
                  alt="Avatar"
                  width={120}
                  height={120}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full object-cover mb-4 sm:mb-6 hover:scale-110 transition-transform duration-300"
                />

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center dark:text-white text-black">
                  {t.contact.name}
                </h3>

                <p className="text-sm sm:text-base text-center mt-1 sm:mt-2 dark:text-gray-400 text-gray-600">
                  {t.contact.role}
                </p>
              </motion.div>

              {/* RIGHT — Contact Info */}
              <motion.div
                className="flex flex-col items-start space-y-3 sm:space-y-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: false }}
              >
                {/* Email */}
                <a
                  href="mailto:huiyicai27@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-zinc-700 group-hover:bg-gray-200 dark:group-hover:bg-zinc-600 transition-colors">
                    <Mail
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-black dark:text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <a
                    href="mailto:huiyicai27@gmail.com"
                    className="text-xs sm:text-sm dark:text-gray-300 text-gray-700 group-hover:text-black dark:group-hover:text-white transition-colors"
                  >
                    huiyicai27@gmail.com
                  </a>
                </a>

                {/* Phone */}
                <a
                  href="tel:+60125590416"
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-zinc-700 group-hover:bg-gray-200 dark:group-hover:bg-zinc-600 transition-colors">
                    <Phone
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-black dark:text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <a
                    href="tel:+60125590416"
                    className="text-xs sm:text-sm dark:text-gray-300 text-gray-700 group-hover:text-black dark:group-hover:text-white transition-colors"
                  >
                    +60 12-5590416
                  </a>
                </a>

                {/* Github */}
                <a
                  href="https://github.com/huiyi0122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-zinc-700 group-hover:bg-gray-200 dark:group-hover:bg-zinc-600 transition-colors">
                    <Github
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-black dark:text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <a
                    href="https://github.com/huiyi0122"
                    className="text-xs sm:text-sm dark:text-gray-300 text-gray-700 group-hover:text-black dark:group-hover:text-white transition-colors"
                  >
                    github.com/huiyi0122
                  </a>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-zinc-700">
                    <MapPin
                      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 text-black dark:text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-xs sm:text-sm dark:text-gray-300 text-gray-700">
                    {t.contact.location}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
