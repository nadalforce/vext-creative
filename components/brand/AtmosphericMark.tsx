"use client";

import { motion, type MotionStyle } from "framer-motion";

type AtmosphericMarkProps = {
  src: string;
  size: number;
  opacity?: number;
  blur?: number;
  className?: string;
  style?: MotionStyle;
  animate?: boolean;
  blend?: "screen" | "soft-light" | "plus-lighter" | "color-dodge";
};

function clampOpacity(value: number) {
  return Math.min(0.06, Math.max(0.03, value));
}

/**
 * Dissolved symbol light — radial mask removes PNG bounds.
 * Atmosphere only; never use in navbar.
 */
export function AtmosphericMark({
  src,
  size,
  opacity = 0.045,
  blur = 120,
  className = "",
  style,
  animate = false,
  blend = "screen",
}: AtmosphericMarkProps) {
  const o = clampOpacity(opacity);
  const blendClass =
    blend === "soft-light"
      ? "mix-blend-soft-light"
      : blend === "plus-lighter"
        ? "mix-blend-plus-lighter"
        : blend === "color-dodge"
          ? "mix-blend-color-dodge"
          : "mix-blend-screen";

  return (
    <motion.div
      className={`pointer-events-none absolute flex items-center justify-center overflow-visible ${className}`}
      style={style}
      animate={
        animate
          ? {
              scale: [1, 1.04, 1],
              opacity: [o * 0.88, o, o * 0.88],
            }
          : undefined
      }
      transition={
        animate
          ? { duration: 16, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
      aria-hidden
    >
      <div
        className="absolute rounded-full bg-[#1a0c0c]/35 blur-[120px]"
        style={{ width: size * 0.65, height: size * 0.65 }}
      />
      <motion.div
        className={`brand-atmosphere-mask relative ${blendClass}`}
        style={{ width: size, height: size, opacity: o }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className="h-full w-full scale-[1.2] object-contain"
          style={{
            filter: `blur(${blur}px) brightness(1.5) contrast(0.85) saturate(0.65)`,
          }}
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}
