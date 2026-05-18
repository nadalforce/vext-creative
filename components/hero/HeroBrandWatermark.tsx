"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";

const HERO_WATERMARK = "/logo/vext-hero-watermark.png";

type HeroBrandWatermarkProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

/** Large cinematic symbol watermark — atmosphere only, not foreground */
export function HeroBrandWatermark({ sectionRef }: HeroBrandWatermarkProps) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center mix-blend-screen"
      style={{ y, scale }}
      aria-hidden
    >
      <motion.div
        className="absolute left-1/2 top-[42%] h-[min(85vw,680px)] w-[min(85vw,680px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/20 blur-[100px]"
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="brand-atmosphere-mask relative flex items-center justify-center"
        style={{ width: "min(72vw, 540px)" }}
        animate={{ opacity: [0.08, 0.11, 0.08] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_WATERMARK}
          alt=""
          className="h-auto w-full object-contain"
          style={{
            filter: "blur(8px) brightness(1.2)",
          }}
          draggable={false}
        />
      </motion.div>
    </motion.div>
  );
}
