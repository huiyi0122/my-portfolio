"use client";

import Image from "next/image";

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-32 px-6">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
        style={{
          backgroundImage: darkMode
            ? "url('/images/background_dark.png')"
            : "url('/images/about_bg.png')",
        }}
      />

      {/* Content */}
      <div className="max-w-4xl text-center space-y-6">
        <h1
          className="text-5xl font-bold"
          style={{ color: darkMode ? "#FCF0B6" : "#3E2414" }}
        >
          Hi, I'm Chai Hui Yi
        </h1>
        <p
          className="text-lg"
          style={{ color: darkMode ? "#F7C9C8" : "#3E2414" }}
        >
          Early-career Full-Stack Developer | I love crafting playful and clean
          UI.
        </p>

        <div className="mt-8 flex justify-center">
          <Image
            src={darkMode ? "/images/avatar_dark.png" : "/images/avatar.png"}
            alt="Avatar"
            width={180}
            height={180}
            className="rounded-full object-cover"
          />
        </div>

        <p
          className="mt-8 text-base leading-relaxed"
          style={{ color: darkMode ? "#ededed" : "#171717" }}
        >
          I enjoy building full-stack applications with React, Next.js, and
          Tailwind CSS. My past projects include an HR Dashboard, a Company
          Wiki, and FarmHub (FYP).
        </p>
      </div>
    </section>
  );
}
