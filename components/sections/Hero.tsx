"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroAtmosphere } from "@/components/hero/HeroAtmosphere";
import { ViewfinderMark } from "@/components/ui/ViewfinderMark";
import { GlowOrb } from "@/components/ui/GlowOrb";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-x-hidden overflow-y-hidden bg-black"
    >
      <HeroAtmosphere sectionRef={ref} />

      <GlowOrb className="-top-40 -left-40 z-[1]" color="violet" delay={0} />
      <GlowOrb className="-right-40 top-1/4 z-[1]" color="blue" delay={2} />
      <GlowOrb
        className="bottom-0 left-1/2 z-[1] -translate-x-1/2"
        color="mixed"
        size="w-[700px] h-[400px]"
        delay={3}
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-[95vw] overflow-hidden px-4 py-24 text-center sm:px-6 sm:py-32 md:px-8 md:py-40 lg:max-w-7xl"
        style={{ opacity: textOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex justify-center sm:mb-10"
        >
          <span className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-xl sm:gap-3 sm:px-6 sm:py-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-500" />
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70 sm:text-[11px] sm:tracking-[0.28em]">
              VEXT Creative | Medya Ajansı
            </span>
          </span>
        </motion.div>

        <motion.h1
          className="font-display mx-auto max-w-full text-balance text-5xl font-extrabold leading-[0.9] tracking-[-0.03em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block">İşletmenizi</span>
          <span className="block text-gradient-brand">Bizimle Büyütün</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/55 sm:mt-10 sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
        >
          Video prodüksiyondan sosyal medya yönetimine, grafik tasarımdan web
          deneyimlerine kadar markanızı modern ve güçlü bir görsel dile
          taşıyoruz.
        </motion.p>

        <motion.div
          className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-14 sm:flex-row sm:gap-5"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
        >
          <a
            href="#galeri"
            className="w-full max-w-xs rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white glow-violet transition-transform hover:scale-[1.02] sm:w-auto sm:max-w-none sm:px-12 sm:py-4 sm:text-[13px]"
          >
            Atölye Karelerini Keşfedin
          </a>
          <a
            href="#contact"
            className="flex w-full max-w-xs items-center justify-center gap-3 rounded-full border border-white/12 bg-black/40 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition-all hover:border-violet-500/40 sm:w-auto sm:max-w-none sm:px-10 sm:py-4 sm:text-[13px]"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
              <ViewfinderMark size={24} pulse={false} />
            </span>
            İletişime Geçin
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex h-11 w-6 items-start justify-center rounded-full border border-white/15 p-2">
          <motion.div
            className="h-2 w-px rounded-full bg-gradient-to-b from-violet-400 to-blue-400"
            animate={{ y: [0, 14, 0], opacity: [1, 0.25, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
