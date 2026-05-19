"use client";

import { motion } from "framer-motion";

type GlowOrbProps = {
  color?: "violet" | "soft" | "ambient";
  size?: string;
  className?: string;
  delay?: number;
};

const colors = {
  violet: "bg-violet-950/50",
  soft: "bg-violet-900/25",
  ambient: "bg-[radial-gradient(circle,rgba(35,28,42,0.35)_0%,transparent_70%)]",
};

export function GlowOrb({
  color = "ambient",
  size = "w-[500px] h-[500px]",
  className = "",
  delay = 0,
}: GlowOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[140px] ${colors[color]} ${size} ${className}`}
      animate={{
        scale: [1, 1.12, 1],
        opacity: [0.25, 0.45, 0.25],
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
