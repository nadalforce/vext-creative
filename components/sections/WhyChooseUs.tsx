"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { WHY_CHOOSE_US_ITEMS } from "@/lib/why-choose-us";
import { fadeUp, staggerContainer } from "@/lib/animations";

const TRUST_POINTS = [
  "Kurumsal süreç ve şeffaf iletişim",
  "Türkiye geneli prodüksiyon desteği",
  "Tek ekip, uçtan uca medya çözümleri",
] as const;

export function WhyChooseUs() {
  return (
    <section
      id="neden-biz"
      className="relative overflow-hidden border-t border-foreground/[0.06] bg-transparent py-24 md:py-32 lg:py-40"
    >
      <GlowOrb className="right-0 top-0 opacity-35" color="ambient" delay={0.3} />

      <div
        className="pointer-events-none absolute inset-x-6 top-24 bottom-24 rounded-[2rem] border border-foreground/[0.04] bg-gradient-to-br from-surface/40 via-transparent to-transparent md:inset-x-10 lg:inset-x-16"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 xl:grid-cols-[minmax(0,26rem)_1fr] xl:gap-20">
          <motion.aside
            className="lg:sticky lg:top-28 lg:self-start"
            initial={{ opacity: 1, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-label mb-5 flex items-center gap-3 text-xs uppercase">
              <span className="h-px w-10 bg-gradient-to-r from-violet-400 to-transparent" />
              Avantajlar
            </p>

            <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.06] tracking-tight text-foreground">
              Neden Bizi{" "}
              <span className="text-accent">Tercih</span> Etmelisiniz?
            </h2>

            <p className="text-body mt-6 max-w-md text-base leading-relaxed md:text-lg">
              Markanızı büyüten ekipler; sadece teslim eden değil, süreci birlikte
              yöneten ortaklar arar. VEXT Medya olarak hız, şeffaflık ve ölçülebilir
              sonuçları tek çatı altında sunuyoruz.
            </p>

            <ul className="mt-8 space-y-3.5 border-l-2 border-violet-400/40 pl-5">
              {TRUST_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm font-medium leading-snug text-foreground/85 md:text-[0.9375rem]"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-violet-400"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10 hidden h-px w-full max-w-xs bg-gradient-to-r from-violet-400/50 via-foreground/10 to-transparent lg:block" />
          </motion.aside>

          <motion.div
            className="relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div
              className="pointer-events-none absolute -left-3 top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-foreground/10 to-transparent lg:block"
              aria-hidden
            />

            <ul className="divide-y divide-foreground/[0.07] rounded-2xl border border-foreground/[0.06] bg-surface/50 shadow-[0_12px_48px_rgba(17,17,17,0.04)] backdrop-blur-sm md:rounded-3xl">
              {WHY_CHOOSE_US_ITEMS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.title}
                    variants={fadeUp}
                    className="group relative"
                  >
                    <div className="flex gap-4 px-5 py-6 transition-colors duration-300 hover:bg-foreground/[0.02] sm:gap-5 sm:px-7 sm:py-7 md:gap-6">
                      <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row sm:items-start">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.03] ring-1 ring-foreground/[0.08] transition-all duration-300 group-hover:bg-violet-600/[0.06] group-hover:ring-violet-400/25 sm:h-14 sm:w-14">
                          <Icon
                            className="h-6 w-6 text-foreground/90 transition-colors duration-300 group-hover:text-violet-400 sm:h-7 sm:w-7"
                            strokeWidth={2}
                            aria-hidden
                          />
                        </div>
                        <span className="hidden text-[11px] font-semibold tabular-nums text-foreground/25 sm:block sm:pt-4">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start gap-3">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-400/10 ring-1 ring-violet-400/25 transition-colors duration-300 group-hover:bg-violet-400/15 group-hover:ring-violet-400/40">
                            <Check
                              className="h-3 w-3 text-violet-400"
                              strokeWidth={3}
                              aria-hidden
                            />
                          </span>
                          <div className="min-w-0 flex-1">
                            <h3 className="font-display text-base font-bold leading-snug text-foreground sm:text-lg">
                              {item.title}
                            </h3>
                            <p className="text-body mt-2 text-sm leading-relaxed sm:text-[0.9375rem]">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
