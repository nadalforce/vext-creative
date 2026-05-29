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
      className="relative flex min-h-[100dvh] items-center justify-center overflow-x-hidden bg-transparent"
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
          <span className="group inline-flex max-w-[calc(100vw-2rem)] items-center justify-center gap-2.5 rounded-full border border-foreground/[0.09] bg-surface/92 px-3.5 py-2.5 shadow-[0_1px_2px_rgba(17,17,17,0.04),0_10px_28px_rgba(17,17,17,0.07)] ring-1 ring-foreground/[0.04] backdrop-blur-xl transition-all duration-300 hover:-translate-y-px hover:border-[#e30613]/22 hover:shadow-[0_2px_4px_rgba(17,17,17,0.05),0_14px_36px_rgba(227,6,19,0.1)] sm:max-w-none sm:gap-3 sm:px-5 sm:py-2.5 md:px-6 md:py-3">
            <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e30613]/30 opacity-70" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e30613] shadow-[0_0_0_3px_rgba(227,6,19,0.18)]" />
            </span>
            <span className="flex flex-col items-center gap-0.5 text-center sm:flex-row sm:gap-2 sm:gap-x-2.5">
              <span className="text-[7px] font-bold uppercase leading-snug tracking-[0.14em] text-foreground min-[360px]:text-[8px] min-[400px]:text-[9px] sm:text-[10px] sm:leading-none sm:tracking-[0.17em] md:text-[10.5px] md:tracking-[0.19em]">
                Türkiye Geneli Hizmet
              </span>
              <span
                className="hidden shrink-0 text-[9px] text-[#e30613] sm:inline"
                aria-hidden
              >
                •
              </span>
              <span className="text-[7px] font-semibold uppercase leading-snug tracking-[0.12em] text-foreground/80 min-[360px]:text-[8px] min-[400px]:text-[9px] sm:text-[10px] sm:leading-none sm:tracking-[0.15em] md:text-[10.5px] md:tracking-[0.17em]">
                Reklam, Prodüksiyon ve Tasarım
              </span>
            </span>
          </span>
        </div>

        <h1 className="font-display mx-auto w-full max-w-[min(100%,20rem)] hyphens-none text-balance text-[clamp(1.75rem,5.2vw+0.6rem,4.25rem)] font-extrabold leading-[1.1] text-foreground sm:max-w-xl sm:leading-[1.08] md:max-w-2xl md:leading-[1.06] lg:max-w-3xl lg:leading-[1.05]">
          <span className="block text-foreground">İşletmenizi</span>
          <span className="block text-accent">Bizimle Büyütün</span>
        </h1>

        <p className="text-body mx-auto mt-6 max-w-[min(100%,24rem)] text-pretty text-balance text-[13px] sm:mt-10 sm:max-w-2xl sm:text-sm md:max-w-3xl md:text-lg lg:max-w-4xl">
          Video prodüksiyon, reklam filmleri, drone çekimleri, web sitesi
          tasarımı, grafik tasarım, sosyal medya ve dijital reklam yönetimiyle
          markanızı büyütüyor, profesyonel bir dijital kimlik oluşturarak
          tanınırlığınızı artırıyoruz. İstanbul merkezli hizmet verirken, reklam
          filmi, kurumsal tanıtım ve prodüksiyon projelerinde Türkiye&apos;nin
          her şehrine yerinde çekim desteği sağlayarak, uzaktan ve sahada
          kapsamlı medya çözümleri sunuyoruz.
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
            className="flex w-full max-w-xs items-center justify-center gap-3 rounded-full border border-foreground/12 bg-surface px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-foreground shadow-sm backdrop-blur-xl transition-all hover:border-violet-400/25 hover:shadow-[0_0_24px_rgba(227,6,19,0.08)] sm:w-auto sm:max-w-none sm:px-10 sm:py-4 sm:text-[13px]"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-foreground/12">
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
        <div className="flex h-11 w-6 items-start justify-center rounded-full border border-foreground/12 p-2">
          <div className="h-2 w-px rounded-full bg-gradient-to-b from-foreground/50 to-foreground/20" />
        </div>
      </div>
    </section>
  );
}
