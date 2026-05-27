"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { MEDIA } from "@/lib/media-manifest";
import { fadeUp } from "@/lib/animations";

type ShowreelProps = {
  backgroundImages?: string[];
};

export function Showreel({ backgroundImages = [] }: ShowreelProps) {
  const [playing, setPlaying] = useState(false);
  const imgs =
    backgroundImages.length > 0 ? backgroundImages : MEDIA.postProd;
  const [main, s2, s3] = imgs;

  return (
    <section
      id="showreel"
      className="relative overflow-hidden border-t border-white/[0.04] bg-zinc-950 py-20 md:py-28"
    >
      <GlowOrb className="left-0 top-0" color="soft" delay={1} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          label="Sinematik Derleme"
          title="Kadrajlarımız Konuşsun"
          description="Kurgu, renk ve ritim — post prodüksiyon atölyemizden."
          align="center"
        />

        <motion.div
          className="relative mt-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {main && (
            <div className="relative">
              <PhotoFrame
                src={main}
                heightClass="h-[min(52vh,520px)] md:h-[560px]"
                objectPosition="center"
              />
              <AnimatePresence>
                {!playing && (
                  <motion.button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="absolute left-1/2 top-1/2 z-20 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/50 backdrop-blur-md transition-transform hover:scale-105"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    aria-label="Oynat"
                  >
                    <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          )}

          {(s2 || s3) && (
            <div className="mt-4 grid grid-cols-2 gap-4">
              {s2 && <PhotoFrame src={s2} heightClass="h-[220px] md:h-[260px]" />}
              {s3 && <PhotoFrame src={s3} heightClass="h-[220px] md:h-[260px]" />}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
