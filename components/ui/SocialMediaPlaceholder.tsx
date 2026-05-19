"use client";

import { motion } from "framer-motion";

/** Clean placeholder until social media visuals are uploaded */
export function SocialMediaPlaceholder() {
  return (
    <motion.div
      className="relative flex min-h-[min(40vh,380px)] flex-col items-center justify-center overflow-hidden rounded-3xl border border-dashed border-violet-500/25 bg-gradient-to-br from-violet-950/30 via-black to-zinc-950 ring-1 ring-white/10"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(35,28,42,0.15)_0%,transparent_70%)]" />
      <div className="relative z-10 px-8 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20 ring-1 ring-violet-500/30">
          <svg
            className="h-7 w-7 text-violet-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-400">
          Sosyal Medya
        </p>
        <p className="mt-3 max-w-sm text-sm text-white/45">
          Kanal görselleri yakında eklenecek. Strateji ve içerik yapımız hazır.
        </p>
      </div>
    </motion.div>
  );
}
