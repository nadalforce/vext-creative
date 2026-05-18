"use client";

import { motion } from "framer-motion";
import { GlowOrb } from "@/components/ui/GlowOrb";

const CAPABILITIES = [
  "sinematik iç & dış mekan reklam çekimlerinden",
  "ürün tanıtımlarından",
  "sosyal medya yönetimine",
  "web tasarımdan marka kimliği oluşturmaya kadar",
] as const;

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.04] bg-black py-24 md:py-36"
    >
      <GlowOrb className="-left-40 top-1/4" color="violet" delay={0.5} />
      <GlowOrb className="right-0 bottom-1/4" color="blue" delay={2} />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_0%,rgba(124,58,237,0.08)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent"
        aria-hidden
      />

      <motion.div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <motion.header
          className="max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-violet-400">
            <span className="h-px w-12 bg-gradient-to-r from-violet-500 to-transparent" />
            Hakkımızda
          </p>
          <h2 className="font-display text-[clamp(2rem,5.5vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white">
            Biz{" "}
            <span className="text-gradient-brand">VEXT Creative</span> Ailesi
            Olarak
          </h2>
        </motion.header>

        <motion.div
          className="mt-16 max-w-3xl lg:mt-20"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          <p className="text-lg font-medium leading-[1.65] text-white/85 md:text-xl md:leading-relaxed">
            Temeli video kurgu ve grafik tasarıma dayanan,{" "}
            <span className="text-white">8 yıla yakın deneyime</span> sahip
            yaratıcı bir ekibiz.
          </p>

          <div className="mt-10 border-l border-violet-500/30 pl-6 md:mt-12 md:pl-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/40">
              Bugün
            </p>
            <ul className="mt-5 space-y-3">
              {CAPABILITIES.map((line, i) => (
                <motion.li
                  key={line}
                  className="flex gap-3 text-base leading-snug text-white/60 md:text-[1.05rem]"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                >
                  <span className="mt-2 h-px w-6 shrink-0 bg-violet-500/50" />
                  <span>{line}</span>
                </motion.li>
              ))}
            </ul>
            <p className="mt-6 text-base leading-relaxed text-white/55 md:text-lg">
              markaların dijital dünyadaki tüm görsel dilini inşa ediyoruz.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 max-w-3xl border-t border-white/[0.06] pt-16 md:mt-20 md:pt-20 lg:mt-24"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-400/90">
            Stüdyo · Prodüksiyon
          </p>
          <p className="mt-5 text-base leading-[1.75] text-white/55 md:text-lg md:leading-relaxed">
            Profesyonel stüdyo ortamımızda; beyaz perde, yeşil perde, ürün
            çekimi ve yaratıcı prodüksiyon altyapısıyla premium içerikler
            üretiyoruz.
          </p>
        </motion.div>

        <motion.blockquote
          className="relative mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <motion.div className="relative rounded-3xl border border-white/[0.08] bg-black/60 px-8 py-12 backdrop-blur-sm md:rounded-[2rem] md:px-14 md:py-16">
            <p className="font-display text-2xl font-semibold leading-[1.35] tracking-tight text-white md:text-3xl lg:text-4xl">
              Her projede hedefimiz:{" "}
              <span className="text-white/50">sadece içerik üretmek değil,</span>
            </p>
            <p className="mt-4 font-display text-2xl font-bold leading-[1.3] text-gradient-brand md:text-3xl lg:text-4xl">
              markaya güçlü bir atmosfer kazandırmak.
            </p>
            <div className="mt-8 h-px w-16 bg-gradient-to-r from-violet-500 to-blue-500" />
          </motion.div>
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
