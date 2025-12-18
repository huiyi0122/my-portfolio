"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Heart,
  Send,
} from "lucide-react";
import React, { useState, useRef } from "react";

import Navbar from "@/app/components/home/Navbar";
import { useDarkMode } from "@/app/components/DarkModeProvider";
import DraggableSticker from "@/app/components/home/DraggableSticker";
import { useLanguage } from "@/app/components/LanguageProvider";
import {
  RippleButton,
  RippleButtonRipples,
} from "@/components/animate-ui/components/buttons/ripple";

const socialLinks = [
  { id: "like", icon: Heart, href: "#", label: "Like" },
  { id: "facebook", icon: Facebook, href: "#", label: "Facebook" },
  { id: "instagram", icon: Instagram, href: "#", label: "Instagram" },
  { id: "twitter", icon: Twitter, href: "#", label: "Twitter" },
  { id: "linkedin", icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function ContactPage() {
  const { t } = useLanguage();
  const { darkMode } = useDarkMode();
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          subject: "Contact Form Message",
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        setSubmissionStatus("error");
        setErrorMessage(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting:", error);
      setSubmissionStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      ref={constraintsRef}
      className={`relative min-h-screen font-sans ${
        darkMode ? "bg-slate-950" : "bg-[#215245]"
      }`}
    >
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {!darkMode && (
          <>
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)]" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />
          </>
        )}
        {darkMode && (
          <>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
          </>
        )}
      </div>

      {/* Stickers */}
      <DraggableSticker
        src="/images/sticker/sticker-5.png"
        alt="Sticker 1"
        size={80}
        initial={{ top: 200, left: 50 }}
        darkMode={darkMode}
        constraintsRef={constraintsRef}
      />
      <DraggableSticker
        src="/images/sticker/sticker-4.png"
        alt="Sticker 2"
        size={80}
        initial={{ bottom: 100, right: 50 }}
        darkMode={darkMode}
        constraintsRef={constraintsRef}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-transparent">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="relative flex items-center justify-center pt-20 pb-16 px-4 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`
            w-full max-w-6xl
            flex flex-col lg:flex-row items-start justify-between gap-12
          `}
        >
          {/* Left Column - Contact Info */}
          <div className="lg:w-5/12 w-full space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1
                className={`text-5xl lg:text-6xl font-serif font-bold mb-6 ${
                  darkMode ? "text-white" : "text-white"
                }`}
              >
                {t.Contact.title}
              </h1>

              <p
                className={`text-xl mb-4 font-medium ${
                  darkMode ? "text-gray-200" : "text-gray-200"
                }`}
              >
                {t.Contact.subtitle}
              </p>

              <p
                className={`text-base leading-relaxed max-w-md ${
                  darkMode ? "text-gray-400" : "text-gray-300"
                }`}
              >
                {t.Contact.paragraph}
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 group"
            >
              <div
                className={`
                p-3 rounded-full transition-all duration-300
                ${
                  darkMode
                    ? "bg-blue-500/10 group-hover:bg-blue-500/20"
                    : "bg-white/10 group-hover:bg-white/20"
                }
              `}
              >
                <Mail
                  size={22}
                  className={darkMode ? "text-blue-400" : "text-white"}
                />
              </div>
              <a
                href="mailto:huiyicai27@gmail.com"
                className={`
                  text-base font-medium hover:underline transition-colors
                  ${darkMode ? "text-gray-300" : "text-gray-200"}
                `}
              >
                huiyichai6@gmail.com
              </a>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p
                className={`text-sm uppercase tracking-wider mb-4 font-semibold ${
                  darkMode ? "text-gray-400" : "text-gray-300"
                }`}
              >
                {t.Contact.connect}
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`
                        p-3 rounded-full transition-all duration-300 group
                        ${
                          darkMode
                            ? "bg-slate-800 hover:bg-blue-500/20 border border-slate-700"
                            : "bg-white/5 hover:bg-white/10 border border-white/10"
                        }
                      `}
                    >
                      <Icon
                        size={20}
                        className={
                          darkMode
                            ? "text-gray-400 group-hover:text-blue-400"
                            : "text-white/70 group-hover:text-white"
                        }
                      />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-7/12 w-full"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label
                    htmlFor="firstName"
                    className={`block text-xs uppercase tracking-widest mb-2 font-semibold ${
                      darkMode ? "text-gray-300" : "text-[#EAF4F1]"
                    }`}
                  >
                    {t.Contact.firstName} *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="John"
                    className={`
            w-full px-4 py-3.5 text-sm rounded-lg transition-all duration-300
            focus:outline-none focus:ring-2
            ${
              darkMode
                ? "bg-slate-800 border border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500"
                : "bg-[#F6FBFA]/90 border border-[#D7E9E4] text-[#123C34] placeholder:text-[#7DA399] focus:ring-[#215245]/30 focus:border-[#215245]"
            }
          `}
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label
                    htmlFor="lastName"
                    className={`block text-xs uppercase tracking-widest mb-2 font-semibold ${
                      darkMode ? "text-gray-300" : "text-[#EAF4F1]"
                    }`}
                  >
                    {t.Contact.lastName} *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Doe"
                    className={`
            w-full px-4 py-3.5 text-sm rounded-lg transition-all duration-300
            focus:outline-none focus:ring-2
            ${
              darkMode
                ? "bg-slate-800 border border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500"
                : "bg-[#F6FBFA]/90 border border-[#D7E9E4] text-[#123C34] placeholder:text-[#7DA399] focus:ring-[#215245]/30 focus:border-[#215245]"
            }
          `}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`block text-xs uppercase tracking-widest mb-2 font-semibold ${
                    darkMode ? "text-gray-300" : "text-[#EAF4F1]"
                  }`}
                >
                  {t.Contact.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className={`
          w-full px-4 py-3.5 text-sm rounded-lg transition-all duration-300
          focus:outline-none focus:ring-2
          ${
            darkMode
              ? "bg-slate-800 border border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500"
              : "bg-[#F6FBFA]/90 border border-[#D7E9E4] text-[#123C34] placeholder:text-[#7DA399] focus:ring-[#215245]/30 focus:border-[#215245]"
          }
        `}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={`block text-xs uppercase tracking-widest mb-2 font-semibold ${
                    darkMode ? "text-gray-300" : "text-[#EAF4F1]"
                  }`}
                >
                  {t.Contact.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder={t.Contact.content}
                  className={`
          w-full px-4 py-3.5 text-sm rounded-lg resize-none transition-all duration-300
          focus:outline-none focus:ring-2
          ${
            darkMode
              ? "bg-slate-800 border border-slate-700 text-white focus:ring-blue-500 focus:border-blue-500"
              : "bg-[#F6FBFA]/90 border border-[#D7E9E4] text-[#123C34] placeholder:text-[#7DA399] focus:ring-[#215245]/30 focus:border-[#215245]"
          }
        `}
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <RippleButton
                  disabled={isSubmitting}
                  className={`
    relative overflow-hidden
    py-3.5 px-8 rounded-xl font-semibold
    flex items-center gap-2
    transition-colors duration-200
    ${
      darkMode
        ? "bg-gray-700 hover:bg-gray-600 text-white" // Dark Mode 灰色按钮
        : "bg-[#215245] hover:bg-[#1A4238] text-white" // Light Mode 绿色按钮
    }
    disabled:opacity-50 disabled:cursor-not-allowed
    /* Ripple 颜色，Dark Mode 用半透明白 */
    [--ripple-button-ripple-color:${
      darkMode ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.35)"
    }]
  `}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      {t.Contact.sendMessage}
                      <Send size={18} />
                    </>
                  )}

                  {/* 波纹 */}
                  <RippleButtonRipples />
                </RippleButton>
              </div>

              {/* Status Messages */}
              {submissionStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-sm text-center font-medium ${
                    darkMode
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-green-500/10 text-[#2F7D6C] border border-green-500/20"
                  }`}
                >
                  ✓ Your message has been sent successfully!
                </motion.div>
              )}

              {submissionStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-sm text-center font-medium ${
                    darkMode
                      ? "bg-red-500/10 text-red-400 border border-red-500/20"
                      : "bg-red-500/10 text-red-600 border border-red-500/20"
                  }`}
                >
                  ✕ {errorMessage || "Failed to send. Please try again."}
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
