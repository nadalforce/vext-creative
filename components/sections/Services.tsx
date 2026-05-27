"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { VextWatermark } from "@/components/ui/VextWatermark";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black py-32 md:py-40"
    >
      <VextWatermark opacity={0.04} />
      <GlowOrb className="right-0 top-1/4" color="violet" delay={1} />

      <motion.div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          label="Hizmetler"
          title="Özenle Gerçekleştirdiğimiz Hizmetler"
          description="Tüm dijital medya hizmetlerimiz."
          align="center"
        />

        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map((service) => (
            <motion.div key={service.id} variants={fadeUp}>
              <a href={service.href} className="group block h-full">
                <GlassCard className="h-full transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.04)]">
                  <motion.div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.06] text-violet-300 ring-1 ring-white/15">
                    <ServiceIcon name={service.icon} className="h-6 w-6" />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold text-white md:text-xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/40">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-400/80 transition-colors group-hover:text-violet-300">
                    {"cta" in service ? service.cta : "Bölüme git"}
                    <svg className="h-3 w-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
