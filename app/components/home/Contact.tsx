/*C:\Users\user\my-portfolio\app\components\home\Contact.tsx*/
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
      className="h-screen w-full flex items-center px-6 relative overflow-hidden"
    >
      <motion.div
        className="max-w-5xl mx-auto w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 md:mb-36 tracking-tight dark:text-white text-black"
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
            className="absolute -top-16 md:-top-32 left-1/2 -translate-x-1/2 w-[200px] md:w-[400px] z-10"
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
            className="rounded-3xl p-8 md:p-12 shadow-lg transition-colors duration-300 dark:bg-zinc-800/50 dark:border-zinc-700/80 border bg-white/70 border-white/80 backdrop-blur-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            {/* Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 md:gap-12 items-center">
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
                  width={140}
                  height={140}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mb-6 hover:scale-110 transition-transform duration-300"
                />

                <h3 className="text-2xl md:text-3xl font-bold text-center dark:text-white text-black">
                  {t.contact.name}
                </h3>

                <p className="text-center mt-2 dark:text-gray-400 text-gray-600">
                  {t.contact.role}
                </p>
              </motion.div>

              {/* RIGHT — Contact Info */}
              <motion.div
                className="flex flex-col items-start space-y-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: false }}
              >
                <div className="flex items-center gap-4">
                  <Mail
                    className="w-6 h-6 flex-shrink-0 dark:text-cyan-400 text-blue-600"
                    strokeWidth={1.5}
                  />
                  <a
                    href="mailto:huiyicai27@gmail.com"
                    className="text-base dark:text-gray-300 text-gray-700 hover:text-black dark:hover:text-white transition-colors"
                  >
                    huiyicai27@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Phone
                    className="w-6 h-6 flex-shrink-0 dark:text-cyan-400 text-blue-600"
                    strokeWidth={1.5}
                  />
                  <a
                    href="tel:+60125590416"
                    className="text-base dark:text-gray-300 text-gray-700 hover:text-black dark:hover:text-white transition-colors"
                  >
                    +60 12-5590416
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Github
                    className="w-6 h-6 flex-shrink-0 dark:text-cyan-400 text-blue-600"
                    strokeWidth={1.5}
                  />
                  <a
                    href="https://github.com/huiyi0122"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base dark:text-gray-300 text-gray-700 hover:text-black dark:hover:text-white transition-colors"
                  >
                    github.com/huiyi0122
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin
                    className="w-6 h-6 flex-shrink-0 dark:text-cyan-400 text-blue-600"
                    strokeWidth={1.5}
                  />
                  <span className="text-base dark:text-gray-300 text-gray-700">
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
