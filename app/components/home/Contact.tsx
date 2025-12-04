"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const { t } = useLanguage();
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-32 px-6 relative"
    >
      <div
        ref={elementRef}
        className={`max-w-5xl mx-auto w-full ${
          isVisible ? "scroll-reveal" : ""
        }`}
      >
        {/* Title */}
        <h2
          className="text-5xl font-bold text-center mb-48"
          style={{ color: darkMode ? "#FCF0B6" : "#3E2414" }}
        >
          {t.contact.title}
        </h2>

        {/* ⬇ Wrapper：用于猫咪贴着卡片 */}
        <div className="relative w-full max-w-3xl mx-auto">
          {/* 🐱 Cat — 绝对定位贴在卡片上 */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2">
            <Image
              src={darkMode ? "/images/cat.png" : "/images/cat.png"}
              alt="Cat"
              width={506}
              height={265}
              className="object-contain"
            />
          </div>

          {/* 🧧 Contact Card */}
          <div
            className="rounded-[32px] p-12 shadow-md "
            style={{
              backgroundColor: darkMode ? "#1A1A1A" : "#ffffff",
              border: darkMode ? "1px solid #444" : "1px solid #ddd",
            }}
          >
            {/* Two Columns */}
            <div className="grid grid-cols-[320px_1fr] gap-12 items-center justify-center">
              {/* LEFT — Avatar + Name + Role */}
              <div className="flex flex-col items-center">
                {/* Avatar */}
                <Image
                  src={darkMode ? "/images/avatar.png" : "/images/avatar.png"}
                  alt="Avatar"
                  width={169}
                  height={169}
                  className="rounded-full object-cover mb-6 hover:scale-110 transition-transform duration-300"
                />

                {/* Name */}
                <h3
                  className="text-3xl font-bold text-center"
                  style={{ color: darkMode ? "#F7C9C8" : "#171717" }}
                >
                  {t.contact.name}
                </h3>

                {/* Role */}
                <p
                  className="text-center mt-2"
                  style={{ color: darkMode ? "#F7C9C8" : "#666666" }}
                >
                  {t.contact.role}
                </p>
              </div>

              {/* RIGHT — Contact Info */}
              <div className="flex flex-col gap-6">
                {/* Email */}

                <a
                  href="mailto:huiyicai27@gmail.com"
                  className="flex items-center gap-4 hover:opacity-70 hover:translate-x-2 transition-all duration-300"
                >
                  <Image
                    src={
                      darkMode
                        ? "/images/dark_mode/home/email_dark.png"
                        : "/images/light_mode/home/email.png"
                    }
                    alt="Email"
                    width={24}
                    height={24}
                  />
                  <span style={{ color: darkMode ? "#CEFECE" : "#171717" }}>
                    huiyicai27@gmail.com
                  </span>
                </a>

                {/* Phone */}

                <a
                  href="tel:+60125590416"
                  className="flex items-center gap-4 hover:opacity-70 hover:translate-x-2 transition-all duration-300"
                >
                  <Image
                    src={
                      darkMode
                        ? "/images/dark_mode/home/phone_dark.png"
                        : "/images/light_mode/home/phone.png"
                    }
                    alt="Phone"
                    width={24}
                    height={24}
                  />
                  <span style={{ color: darkMode ? "#CEFECE" : "#171717" }}>
                    +60 12-5590416
                  </span>
                </a>

                {/* GitHub */}

                <a
                  href="https://github.com/huiyi0122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:opacity-70 hover:translate-x-2 transition-all duration-300"
                >
                  <Image
                    src={
                      darkMode
                        ? "/images/dark_mode/home/github_dark.png"
                        : "/images/light_mode/home/GitHub.png"
                    }
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                  <span style={{ color: darkMode ? "#CEFECE" : "#171717" }}>
                    github.com/huiyi0122
                  </span>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <Image
                    src={
                      darkMode
                        ? "/images/dark_mode/home/location_dark.png"
                        : "/images/light_mode/home/location.png"
                    }
                    alt="Location"
                    width={24}
                    height={24}
                  />
                  <span style={{ color: darkMode ? "#CEFECE" : "#171717" }}>
                    {t.contact.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 🐔 Chickens — 竖着排列，贴紧右下角 */}

          {/* 🐔 Chickens — 固定在页面右下角，无动画，无文字 */}
        </div>
      </div>
    </section>
  );
}
