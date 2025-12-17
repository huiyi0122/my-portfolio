"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface DraggableStickerProps {
  src: string;
  alt: string;
  size: number;
  initial?: { top?: number; bottom?: number; left?: number; right?: number };
  darkMode: boolean;
  constraintsRef?: React.RefObject<HTMLElement | null>;
}

const DraggableSticker: React.FC<DraggableStickerProps> = ({
  src,
  alt,
  size,
  initial,
  darkMode,
  constraintsRef,
}) => {
  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ width: size, height: size, ...initial, zIndex: 5 }}
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
