"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface DraggableStickerProps {
  src: string;
  alt: string;
  size: number;
  sizeMobile?: number;
  sizeTablet?: number;
  initial?: { top?: number; bottom?: number; left?: number; right?: number };
  className?: string;
  darkMode: boolean;
  constraintsRef?: React.RefObject<HTMLElement | null>;
}

const DraggableSticker: React.FC<DraggableStickerProps> = ({
  src,
  alt,
  size,
  sizeMobile,
  sizeTablet,
  initial,
  className = "",
  darkMode,
  constraintsRef,
}) => {
  const [currentSize, setCurrentSize] = React.useState(size);

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640 && sizeMobile) {
        setCurrentSize(sizeMobile);
      } else if (width < 1024 && sizeTablet) {
        setCurrentSize(sizeTablet);
      } else {
        setCurrentSize(size);
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size, sizeMobile, sizeTablet]);

  return (
    <motion.div
      className={`absolute cursor-grab ${className}`}
      style={{ width: currentSize, height: currentSize, ...initial, zIndex: 5 }}
      drag
      dragConstraints={constraintsRef}
      whileHover={{ scale: 1.1, zIndex: 6 }}
      whileTap={{ scale: 1.2, cursor: "grabbing", zIndex: 7 }}
      whileDrag={{
        scale: 1.2,
        rotate: -5,
        zIndex: 7,
      }}
      dragTransition={{ power: 0.1, timeConstant: 200 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="pointer-events-none drop-shadow-md"
      />
    </motion.div>
  );
};
export default DraggableSticker;
