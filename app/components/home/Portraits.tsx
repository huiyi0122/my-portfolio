"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const portraits = [
  { src: "/images/portraits-1.png", rotate: -8, scale: 0.95, delay: 0 },
  { src: "/images/portraits-2.png", rotate: 4, scale: 1, delay: 0.1 },
  { src: "/images/portraits-3.png", rotate: -6, scale: 0.98, delay: 0.2 },
  { src: "/images/portraits-4.png", rotate: 4, scale: 1.02, delay: 0.3 },
  { src: "/images/portraits-5.png", rotate: -5, scale: 0.96, delay: 0.4 },
  { src: "/images/portraits-6.png", rotate: 8, scale: 0.96, delay: 0.4 },
];

export default function Portraits() {
  return (
    <motion.div
      className="
        absolute bottom-30 sm:bottom-20 left-1/2 -translate-x-1/2
        flex items-center justify-center
        gap-3 sm:gap-6 md:gap-8
      "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1.2, delay: 0.6 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {portraits.map((portrait, index) => (
        <motion.div
          key={index}
          className={`
            relative flex-shrink-0
            w-[70px] h-[70px]
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
  );
}
