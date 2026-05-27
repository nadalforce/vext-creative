"use client";

import { motion } from "framer-motion";

export function JournalHero() {
  return (
    <header className="relative pt-32 pb-16 text-center md:pt-40 md:pb-20">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-300 backdrop-blur-xl">
          VEXT Journal
        </span>
        <h1 className="font-display mx-auto mt-8 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl lg:text-7xl">
          Sektörden{" "}
          <span className="text-gradient-brand">Makaleler</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
          Video prodüksiyondan sosyal medya yönetimine kadar yaratıcı süreçlerimizi,
          deneyimlerimizi ve profesyonel üretim tekniklerini paylaşıyoruz.
        </p>
      </motion.div>
    </header>
  );
}
