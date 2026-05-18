"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AtmosphericMark } from "@/components/brand/AtmosphericMark";
import { BRAND, ATMOSPHERE_OPACITY } from "@/lib/brand";

type VextWatermarkProps = {
  className?: string;
  size?: "md" | "lg" | "xl";
  opacity?: number;
  /** Corner symbol fragments */
  fragments?: boolean;
};

const sizeMap = {
  md: 520,
  lg: 680,
  xl: 860,
};

export function VextWatermark({
  className = "",
  size = "xl",
  opacity = ATMOSPHERE_OPACITY.section,
  fragments = true,
}: VextWatermarkProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const dim = sizeMap[size];

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      aria-hidden
    >
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      >
        <AtmosphericMark
          src={BRAND.symbol}
          size={dim}
          opacity={opacity}
          blur={110}
          className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ y: parallaxY }}
          animate
          blend="plus-lighter"
        />

        {fragments && (
          <>
            <AtmosphericMark
              src={BRAND.symbol}
              size={dim * 0.45}
              opacity={ATMOSPHERE_OPACITY.fragment}
              blur={90}
              className="-right-[18%] top-[5%] rotate-[12deg]"
              style={{ y: parallaxY }}
              blend="soft-light"
            />
            <AtmosphericMark
              src={BRAND.symbol}
              size={dim * 0.35}
              opacity={ATMOSPHERE_OPACITY.fragment * 0.85}
              blur={80}
              className="-left-[16%] bottom-[8%] -rotate-[10deg]"
              blend="screen"
            />
          </>
        )}
      </motion.div>
    </div>
  );
}
