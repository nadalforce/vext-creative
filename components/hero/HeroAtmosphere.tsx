"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import type { RefObject } from "react";
type HeroAtmosphereProps = {
  sectionRef: RefObject<HTMLElement | null>;
};

export function HeroAtmosphere({ sectionRef }: HeroAtmosphereProps) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const layerFade = useTransform(scrollYProgress, [0, 0.75], [1, 0.6]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{ opacity: layerFade }}
      aria-hidden
    >
      {/* Base atmosphere — lighter so logo + content read clearly */}
      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_20%,rgba(12,8,16,0.55)_0%,rgba(4,2,8,0.75)_50%,rgba(0,0,0,0.92)_100%)]" />
      <motion.div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_55%,rgba(25,18,32,0.12)_0%,transparent_60%)]" />

      <motion.div
        className="absolute left-1/2 top-[38%] h-[min(90vw,800px)] w-[min(90vw,800px)] -translate-x-1/2 -translate-y-1/2"
        style={{ y: ySlow }}
      >
        <div className="h-full w-full rounded-full bg-[#1a1520]/40 blur-[140px]" />
      </motion.div>

      {/* Edge vignette only — center stays clear for logo + headline */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 50% 42%, transparent 30%, rgba(0,0,0,0.65) 100%)",
        }}
      />
      <motion.div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      <div className="film-grain absolute inset-0 opacity-[0.04]" />
    </motion.div>
  );
}
