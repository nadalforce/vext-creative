"use client";

import { motion } from "framer-motion";

type GlowOrbProps = {
  color?: "violet" | "blue" | "mixed";
  size?: string;
  className?: string;
  delay?: number;
};

const colors = {
  violet: "bg-violet-600/30",
  blue: "bg-blue-600/25",
  mixed: "bg-gradient-to-br from-violet-600/30 via-indigo-600/20 to-blue-600/30",
};

export function GlowOrb({
  color = "mixed",
  size = "w-[500px] h-[500px]",
  className = "",
  delay = 0,
}: GlowOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[120px] ${colors[color]} ${size} ${className}`}
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.4, 0.7, 0.4],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}
