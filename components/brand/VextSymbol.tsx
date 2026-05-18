"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";

type VextSymbolProps = {
  size?: number;
  className?: string;
  glow?: boolean;
  animate?: boolean;
  opacity?: number;
};

export function VextSymbol({
  size = 120,
  className = "",
  glow = false,
  animate = false,
  opacity = 1,
}: VextSymbolProps) {
  return (
    <motion.div
      className={`relative inline-flex ${className}`}
      style={{ opacity }}
      animate={
        animate
          ? {
              scale: [1, 1.04, 1],
              opacity: [opacity * 0.7, opacity, opacity * 0.7],
            }
          : undefined
      }
      transition={
        animate
          ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
    >
      {glow && (
        <div
          className="absolute inset-0 scale-150 bg-violet-500/25 blur-3xl"
          aria-hidden
        />
      )}
      <Image
        src={BRAND.symbol}
        alt=""
        width={size}
        height={size}
        className="relative z-10 object-contain"
        aria-hidden
      />
    </motion.div>
  );
}
