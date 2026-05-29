"use client";

import { motion } from "framer-motion";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { fadeUp } from "@/lib/animations";
import { CONTACT } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const PARAGRAPHS = [
  "Alanında gelişime açık, ekip çalışmasına uyum sağlayabilecek, tasarım uygulamalarını aktif kullanan, çekim ve prodüksiyon süreçlerine ilgi duyan yaratıcı ekip arkadaşları arıyoruz.",
  "Video prodüksiyon, sosyal medya, grafik tasarım, içerik üretimi ve dijital medya alanlarında öğrenmeye, üretmeye ve birlikte gelişmeye açık kişilerle çalışmak istiyoruz. Proje bazlı freelance çalışabilecek, öğrenci veya öğrenci olmayan genç ve yaratıcı ekip üyelerini güçlü ekibimize dahil etmek istiyoruz.",
] as const;

export function CareersJoin() {
  return (
    <section
      id="ekip"
      className="relative overflow-hidden border-t border-foreground/[0.06] bg-transparent py-24 md:py-32 lg:py-40"
      aria-labelledby="careers-heading"
    >
      <GlowOrb className="left-1/4 top-0 opacity-50" color="violet" delay={0.2} />
      <GlowOrb className="right-0 bottom-0 opacity-35" color="ambient" delay={1.2} />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="relative overflow-hidden rounded-[1.75rem] border border-foreground/[0.08] bg-foreground/[0.02] px-8 py-14 ring-1 ring-foreground/[0.06] backdrop-blur-sm md:rounded-[2rem] md:px-14 md:py-20 lg:px-16 lg:py-24"
          initial={{ opacity: 1, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_20%_0%,rgba(120,0,0,0.1)_0%,transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/[0.06] blur-[80px]"
            aria-hidden
          />

          <div className="relative max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-400/90">
              Ekip · Kariyer
            </p>

            <h2
              id="careers-heading"
              className="font-display mt-5 text-[clamp(1.75rem,4.5vw,3.25rem)] font-extrabold leading-[1.1] text-foreground"
            >
              Ekibimize{" "}
              <span className="text-accent">Katılmak</span> İster Misiniz?
            </h2>

            <div className="text-body mt-8 space-y-5 text-base md:mt-10 md:space-y-6 md:text-lg">
              {PARAGRAPHS.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <a
                href="#contact"
                className="btn-primary-premium inline-flex w-full items-center justify-center rounded-full px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] transition-transform hover:scale-[1.02] sm:w-auto sm:px-12 sm:py-4 sm:text-[13px]"
              >
                Ekibe Katıl
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-foreground/12 bg-foreground/[0.04] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-foreground backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-emerald-500/30 hover:bg-emerald-500/[0.08] hover:shadow-[0_0_32px_rgba(16,185,129,0.12)] sm:w-auto sm:px-12 sm:py-4 sm:text-[13px]"
                aria-label="WhatsApp üzerinden yazın"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-emerald-400/80 transition-colors group-hover:text-emerald-300" />
                WhatsApp&apos;tan Yaz
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
