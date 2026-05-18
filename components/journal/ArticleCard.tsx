"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { JournalArticle } from "@/lib/journal/types";
import { JOURNAL_BASE } from "@/lib/journal/site";

type ArticleCardProps = {
  article: JournalArticle;
  index?: number;
};

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group h-full"
    >
      <Link
        href={`${JOURNAL_BASE}/${article.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] ring-1 ring-white/10 transition-all duration-500 hover:border-violet-500/30 hover:shadow-[0_0_48px_rgba(124,58,237,0.15)] md:rounded-3xl"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-300 backdrop-blur-md">
            {article.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h2 className="font-display text-lg font-bold leading-snug text-white transition-colors group-hover:text-violet-200 md:text-xl">
            {article.title}
          </h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-white/45 line-clamp-3">
            {article.excerpt}
          </p>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/35">
            {article.readingTimeMinutes} dk okuma
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
