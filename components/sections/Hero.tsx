"use client";

import { useRef } from "react";
import { HeroAtmosphere } from "@/components/hero/HeroAtmosphere";
import { ViewfinderMark } from "@/components/ui/ViewfinderMark";
import { GlowOrb } from "@/components/ui/GlowOrb";

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[100dvh] items-center justify-center overflow-x-hidden bg-black"
    >
      <HeroAtmosphere sectionRef={ref} />

      <GlowOrb className="-top-40 -left-40 z-[2]" color="ambient" delay={0} />
      <GlowOrb className="-right-40 top-1/4 z-[2]" color="soft" delay={2} />
      <GlowOrb
        className="bottom-0 left-1/2 z-[2] -translate-x-1/2"
        color="violet"
        size="w-[700px] h-[400px]"
        delay={3}
      />

      <div className="relative z-20 mx-auto w-full max-w-[95vw] px-4 py-24 text-center sm:px-6 sm:py-32 md:px-8 md:py-40 lg:max-w-7xl">
        <div className="mb-8 flex justify-center sm:mb-10">
          <span className="inline-flex max-w-[calc(100vw-2rem)] items-center justify-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-xl sm:max-w-none sm:gap-2.5 sm:px-5 sm:py-2.5 md:gap-3 md:px-6 md:py-2.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white/80" />
            </span>
            <span className="whitespace-nowrap text-center text-[7px] font-semibold uppercase leading-none tracking-[0.12em] text-white/80 min-[360px]:text-[8px] min-[400px]:text-[9px] sm:text-[10px] sm:tracking-[0.16em] md:text-[11px] md:tracking-[0.2em]">
              VEXT DİJİTAL MEDYA AJANSI
            </span>
          </span>
        </div>

        <h1 className="font-display mx-auto w-full max-w-[min(100%,20rem)] hyphens-none text-balance text-[clamp(1.75rem,5.2vw+0.6rem,4.25rem)] font-bold leading-[1.1] tracking-[-0.018em] text-white sm:max-w-xl sm:leading-[1.08] sm:tracking-[-0.022em] md:max-w-2xl md:leading-[1.06] md:tracking-[-0.026em] lg:max-w-3xl lg:leading-[1.05] lg:tracking-[-0.03em]">
          <span className="block">İşletmenizi</span>
          <span className="block text-gradient-brand">Bizimle Büyütün</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[min(100%,24rem)] text-pretty text-balance text-[13px] leading-relaxed text-white/55 sm:mt-10 sm:max-w-2xl sm:text-sm md:text-lg">
          Video prodüksiyon, reklam filmleri, drone çekimleri, web sitesi
          tasarımı, grafik tasarım, sosyal medya ve dijital reklam yönetimiyle
          markanızı büyütüyor, profesyonel bir dijital kimlik oluşturarak
          tanınırlığını artırıyoruz.
        </p>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:mt-14 sm:flex-row sm:gap-5">
          <a
            href="#services"
            className="btn-primary-premium w-full max-w-xs rounded-full px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] transition-transform hover:scale-[1.02] sm:w-auto sm:max-w-none sm:px-12 sm:py-4 sm:text-[13px]"
          >
            Hizmetlerimizi Keşfedin
          </a>
          <a
            href="#contact"
            className="flex w-full max-w-xs items-center justify-center gap-3 rounded-full border border-white/15 bg-black/50 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-xl transition-all hover:border-white/35 hover:bg-white/[0.06] sm:w-auto sm:max-w-none sm:px-10 sm:py-4 sm:text-[13px]"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
              <ViewfinderMark size={24} pulse={false} />
            </span>
            İletişime Geçin
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex h-11 w-6 items-start justify-center rounded-full border border-white/15 p-2">
          <div className="h-2 w-px rounded-full bg-gradient-to-b from-white/70 to-white/25" />
        </div>
      </div>
    </section>
  );
}
