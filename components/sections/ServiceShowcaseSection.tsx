"use client";

import { motion } from "framer-motion";
import { ServiceVisualComposition } from "@/components/sections/ServiceVisualComposition";
import { SocialMediaPlaceholder } from "@/components/ui/SocialMediaPlaceholder";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { fadeUp } from "@/lib/animations";

type ServiceShowcaseSectionProps = {
  sectionId: string;
  title: string;
  description: string;
  tagline: string;
  icon: (typeof import("@/lib/constants").SERVICES)[number]["icon"];
  images: string[];
  reverse?: boolean;
};

const LAYOUT_BY_ID: Record<
  string,
  "production" | "edit" | "design" | "web" | "brandIdentity" | "direction"
> = {
  "hizmet-video-prod": "production",
  "hizmet-post-prod": "edit",
  "hizmet-grafik": "design",
  "hizmet-marka": "brandIdentity",
  "hizmet-web": "web",
  "hizmet-sosyal-medya": "direction",
};

export function ServiceShowcaseSection({
  sectionId,
  title,
  description,
  tagline,
  icon,
  images,
}: ServiceShowcaseSectionProps) {
  const layout = LAYOUT_BY_ID[sectionId] ?? "production";
  const hasVisuals = images.length > 0;

  return (
    <section
      id={sectionId}
      className="relative overflow-visible border-t border-white/[0.06] bg-black py-20 md:py-28"
    >
      <GlowOrb className="right-0 top-0 opacity-40" color="violet" delay={0.3} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          className="mb-10 flex flex-wrap items-end justify-between gap-6 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300 ring-1 ring-violet-500/30">
                <ServiceIcon name={icon} className="h-5 w-5" />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-400">
                {tagline}
              </p>
            </div>
            <h3 className="font-display max-w-3xl text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {title}
            </h3>
          </div>
          <motion.a
            href="#contact"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-violet-500/40 bg-violet-600/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300 transition-colors hover:bg-violet-600/25 md:inline-flex"
          >
            Proje başlat
          </motion.a>
        </motion.div>

        {hasVisuals ? (
          <motion.div
            className="mb-10 md:mb-12"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <ServiceVisualComposition images={images} layout={layout} />
          </motion.div>
        ) : (
          sectionId === "hizmet-sosyal-medya" && (
            <motion.div
              className="mb-10 md:mb-12"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <SocialMediaPlaceholder />
            </motion.div>
          )
        )}

        <motion.p
          className={`max-w-2xl text-base leading-relaxed text-white/55 md:text-lg ${hasVisuals ? "" : "mt-2"}`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        <motion.a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-violet-400 md:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Proje başlat →
        </motion.a>
      </div>
    </section>
  );
}
