"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Facebook,
  Instagram,
  Send,
  Github,
  CheckCircle,
  XCircle,
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
import Fireflies from "./Fireflies";

// Apple风格的成功/失败弹窗组件
const NotificationPopup: React.FC<{
  type: "success" | "error";
  darkMode: boolean;
  onClose: () => void;
  message: string;
}> = ({ type, darkMode, onClose, message }) => {
  const isSuccess = type === "success";

  // 根据类型选择不同的贴纸
  const stickerSrc = isSuccess
    ? "/images/sticker/sticker-success.png"
    : "/images/sticker/sticker-error.png";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        className={`
          relative flex flex-col md:flex-row 
          rounded-3xl overflow-hidden
          max-w-2xl w-full
          ${
            darkMode
              ? "bg-slate-900/90 border border-slate-700/50"
              : "bg-white/95 border border-slate-200/50"
          }
          backdrop-blur-xl
          shadow-2xl
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className={`
            absolute top-4 right-4 z-10
            w-8 h-8 rounded-full flex items-center justify-center
            transition-all duration-200
            ${
              darkMode
                ? "bg-slate-800/80 hover:bg-slate-700 text-slate-300"
                : "bg-slate-100/80 hover:bg-slate-200 text-slate-600"
            }
            backdrop-blur-sm
          `}
        >
          ✕
        </button>

        {/* 左侧贴纸区域 */}
        <div
          className={`
          md:w-2/5 p-8 md:p-12
          flex items-center justify-center
          ${
            isSuccess
              ? darkMode
                ? "bg-emerald-500/10"
                : "bg-emerald-50"
              : darkMode
              ? "bg-rose-500/10"
              : "bg-rose-50"
          }
        `}
        >
          <div className="relative">
            {/* 装饰性背景光环 */}
            <div
              className={`
              absolute inset-0 rounded-full blur-2xl opacity-50
              ${
                isSuccess
                  ? darkMode
                    ? "bg-emerald-500/20"
                    : "bg-emerald-400/20"
                  : darkMode
                  ? "bg-rose-500/20"
                  : "bg-rose-400/20"
              }
            `}
            />

            {/* 贴纸容器 */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.1,
              }}
              className={`
                relative w-32 h-32 md:w-40 md:h-40
                rounded-2xl flex items-center justify-center
                ${darkMode ? "bg-slate-800/50" : "bg-white/50"}
                backdrop-blur-sm
                border ${
                  darkMode ? "border-slate-700/30" : "border-slate-200/30"
                }
                shadow-lg
              `}
            >
              {/* 贴纸图片 */}
              <img
                src={stickerSrc}
                alt={isSuccess ? "Success" : "Error"}
                className="w-24 h-24 md:w-32 md:h-32 object-contain"
              />

              {/* 装饰性图标 */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className={`
                  absolute -top-2 -right-2
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${
                    isSuccess
                      ? darkMode
                        ? "bg-emerald-500"
                        : "bg-emerald-500"
                      : darkMode
                      ? "bg-rose-500"
                      : "bg-rose-500"
                  }
                  shadow-lg
                `}
              >
                {isSuccess ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <XCircle className="w-6 h-6 text-white" />
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* 右侧内容区域 */}
        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col h-full"
          >
            {/* 状态标题 */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`
                w-10 h-10 rounded-xl flex items-center justify-center
                ${
                  isSuccess
                    ? darkMode
                      ? "bg-emerald-500/20"
                      : "bg-emerald-100"
                    : darkMode
                    ? "bg-rose-500/20"
                    : "bg-rose-100"
                }
              `}
              >
                {isSuccess ? (
                  <CheckCircle
                    className={`
                    w-6 h-6 ${
                      darkMode ? "text-emerald-400" : "text-emerald-600"
                    }
                  `}
                  />
                ) : (
                  <XCircle
                    className={`
                    w-6 h-6 ${darkMode ? "text-rose-400" : "text-rose-600"}
                  `}
                  />
                )}
              </div>
              <h3
                className={`
                text-2xl font-bold
                ${darkMode ? "text-white" : "text-slate-900"}
              `}
              >
                {isSuccess ? "Message Sent!" : "Oops!"}
              </h3>
            </div>

            {/* 消息内容 */}
            <div className="flex-grow">
              <p
                className={`
                text-base mb-6 leading-relaxed
                ${darkMode ? "text-slate-300" : "text-slate-600"}
              `}
              >
                {message}
              </p>
            </div>

            {/* 单个OK按钮 */}
            <div className="mt-auto">
              <button
                onClick={onClose}
                className={`
                  w-full py-3.5 px-6 rounded-xl
                  font-semibold text-base
                  transition-all duration-200
                  active:scale-[0.98]
                  ${
                    darkMode
                      ? isSuccess
                        ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                        : "bg-rose-500 hover:bg-rose-600 text-white"
                      : isSuccess
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                      : "bg-rose-500 hover:bg-rose-600 text-white"
                  }
                `}
              >
                OK
              </button>
            </div>

            {/* 时间戳 */}
            <p
              className={`
              text-xs mt-4 pt-4 border-t
              ${
                darkMode
                  ? "text-slate-500 border-slate-700/50"
                  : "text-slate-400 border-slate-200/50"
              }
            `}
            >
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const socialLinks = [
  {
    id: "instagram",
    icon: Instagram,
    href: "https://instagram.com/yourusername",
    label: "Instagram",
  },
  {
    id: "facebook",
    icon: Facebook,
    href: "https://facebook.com/yourusername",
    label: "Facebook",
  },
  {
    id: "github",
    icon: Github,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
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
        setErrorMessage(
          data.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting:", error);
      setSubmissionStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
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
        darkMode ? "bg-black" : "bg-[#215245]"
      }`}
      style={{ backgroundColor: darkMode ? "#040505ff" : "" }}
    >
      {/* Decorative background elements - 移除了蓝色背景光 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {!darkMode && (
          <>
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)]" />
            {/* 绿色系背景元素 */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-400/3 rounded-full blur-3xl" />
          </>
        )}
        {darkMode && <Fireflies count={40} minSpeed={20} maxSpeed={40} />}
      </div>

      {/* Stickers */}
      <DraggableSticker
        src="/images/sticker/sticker-4.png"
        alt="Sticker 2"
        size={80}
        initial={{ bottom: 50, right: 200 }}
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
                className={`text-4xl lg:text-6xl font-serif font-bold mb-6 ${
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
                    ? "bg-slate-800/50 group-hover:bg-slate-700/50 border border-slate-700"
                    : "bg-white/10 group-hover:bg-white/20 border border-white/20"
                }
              `}
              >
                <Mail
                  size={22}
                  className={darkMode ? "text-gray-300" : "text-white"}
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
                            ? "bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700"
                            : "bg-white/5 hover:bg-white/10 border border-white/10"
                        }
                      `}
                    >
                      <Icon
                        size={20}
                        className={
                          darkMode
                            ? "text-gray-400 group-hover:text-white"
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
                ? "bg-slate-800/50 border border-slate-700 text-white focus:ring-emerald-500/30 focus:border-emerald-500"
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
                ? "bg-slate-800/50 border border-slate-700 text-white focus:ring-emerald-500/30 focus:border-emerald-500"
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
              ? "bg-slate-800/50 border border-slate-700 text-white focus:ring-emerald-500/30 focus:border-emerald-500"
              : "bg-[#F6FBFA]/90 border border-[#D7E9E4] text-[#123C34] placeholder:text-[#7DA399] focus:ring-[#215245]/30 focus:border-[#215245]"
          }
        `}
                />
              </div>

              {/* Message */}
              <div className="relative">
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
          w-full pl-4 pr-24 py-3.5 text-sm rounded-lg resize-none transition-all duration-300
          focus:outline-none focus:ring-2
          ${
            darkMode
              ? "bg-slate-800/50 border border-slate-700 text-white focus:ring-emerald-500/30 focus:border-emerald-500"
              : "bg-[#F6FBFA]/90 border border-[#D7E9E4] text-[#123C34] placeholder:text-[#7DA399] focus:ring-[#215245]/30 focus:border-[#215245]"
          }
        `}
                />
                <img
                  src="/images/sticker/sticker-5.png"
                  alt="Sticker 5"
                  className={`
                    absolute bottom-3 right-3 w-16 h-16
                    pointer-events-none transition-opacity duration-300
                    ${darkMode ? "opacity-80" : "opacity-100"}
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
        ? "bg-emerald-600 hover:bg-emerald-700 text-white" // Dark Mode 绿色按钮
        : "bg-[#215245] hover:bg-[#1A4238] text-white" // Light Mode 绿色按钮
    }
    disabled:opacity-50 disabled:cursor-not-allowed
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
            </form>
          </motion.div>
        </motion.div>
      </main>

      {/* Apple风格的通知弹窗 */}
      <AnimatePresence>
        {submissionStatus === "success" && (
          <NotificationPopup
            type="success"
            darkMode={darkMode}
            onClose={() => setSubmissionStatus("idle")}
            message="Your message has been sent successfully! I'll get back to you as soon as possible."
          />
        )}
        {submissionStatus === "error" && (
          <NotificationPopup
            type="error"
            darkMode={darkMode}
            onClose={() => setSubmissionStatus("idle")}
            message={errorMessage}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
