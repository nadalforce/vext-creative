"use client";

import { motion } from "framer-motion";
import { AboutCapabilityIcon } from "@/components/ui/AboutCapabilityIcon";
import { GlowOrb } from "@/components/ui/GlowOrb";

const CAPABILITIES = [
  { label: "Reklam Filmleri & Prodüksiyon", icon: "film" },
  { label: "Drone & Marka Çekimleri", icon: "product" },
  { label: "Sosyal Medya & Reklam Yönetimi", icon: "social" },
  { label: "SEO Uyumlu Web Tasarımı & UI/UX Deneyimi", icon: "brand" },
  { label: "Grafik Tasarım & Marka Kimliği Oluşturma", icon: "brand" },
  { label: "Kreatif İçerik & Dijital Medya Tasarımları", icon: "social" },
] as const;

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/[0.04] bg-black py-24 md:py-36"
    >
      <GlowOrb className="-left-40 top-1/4" color="violet" delay={0.5} />
      <GlowOrb className="right-0 bottom-1/4" color="soft" delay={2} />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_0%,rgba(25,18,32,0.15)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
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
            <span className="text-gradient-brand">VEXT Medya</span> Ekibi
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
          <div className="space-y-5 text-base leading-[1.75] text-white/55 md:space-y-6 md:text-lg md:leading-relaxed">
            <p className="font-medium leading-[1.65] text-white/85 md:leading-relaxed">
              Video kurgu ve grafik tasarım alanında başladığımız bu yolculukta,
              üniversite yıllarımızdan itibaren medya alanında aktif olarak eğitim
              alırken kendimizi gerçek projelerle geliştirmeye devam ettik.
              Yıllarca freelance olarak farklı markalara hizmet verdikten sonra,
              edindiğimiz deneyimi daha profesyonel ve kapsamlı bir yapıya
              taşıyarak VEXT Medya&apos;yı kurduk.
            </p>
            <p>
              Bugün; reklam filmi çekimlerinden video prodüksiyona, drone
              çekimlerinden web sitesi tasarımına, grafik tasarımdan marka
              kimliği oluşturmaya, sosyal medya ve dijital reklam yönetimine kadar
              markaların büyümesine katkı sağlayan yaratıcı çözümler üretiyoruz.
            </p>
            <p>
              Ekibimiz; yeniliklere açık, güncel trendleri takip eden, büyüme
              odaklı ve yaptığı işin her zaman arkasında duran yaratıcı bir
              ekipten oluşuyor.
            </p>
          </div>

          <div className="mt-10 border-l border-violet-500/30 pl-6 md:mt-12 md:pl-8">
            <ul className="space-y-4 md:space-y-[1.125rem]">
              {CAPABILITIES.map((item, i) => (
                <motion.li
                  key={item.label}
                  className="group flex min-w-0 items-start gap-3.5 md:gap-4"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.02] text-white/40 transition-colors duration-300 group-hover:border-white/15 group-hover:text-white/65 md:h-9 md:w-9">
                    <AboutCapabilityIcon name={item.icon} className="h-[15px] w-[15px] md:h-4 md:w-4" />
                  </span>
                  <span className="min-w-0 flex-1 pt-0.5 text-base font-medium leading-snug text-white/70 md:text-[1.05rem] md:leading-[1.5]">
                    {item.label}
                  </span>
                </motion.li>
              ))}
            </ul>
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
            Stüdyo ortamımızda; beyaz perde, yeşil perde, ürün tanıtım
            çekimleri, e-ticaret ürün çekimleri ve yaratıcı reklam
            prodüksiyonlarıyla markanıza özel premium içerikler üretiyoruz.
            Sosyal medya, dijital reklam ve marka kimliği süreçlerine uygun
            profesyonel içerik çözümleri sunuyoruz.
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
            <div className="mt-8 h-px w-16 bg-gradient-to-r from-white/50 to-transparent" />
          </motion.div>
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
