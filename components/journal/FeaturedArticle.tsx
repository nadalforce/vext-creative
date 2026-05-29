"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { JournalArticle } from "@/lib/journal/types";
import { JOURNAL_BASE } from "@/lib/journal/site";

type FeaturedArticleProps = {
  article: JournalArticle;
};

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <motion.section
      className="relative overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/[0.02] ring-1 ring-foreground/10"
      initial={{ opacity: 1, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      aria-labelledby="featured-article-title"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[280px] lg:min-h-[420px]">
          <Image
            src={article.coverImage}
            alt={article.coverImageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/60 lg:bg-gradient-to-r lg:from-transparent lg:to-background" />
        </div>
        <div className="relative flex flex-col justify-center p-8 md:p-12 lg:p-14">
          <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-violet-600/15 blur-[100px]" aria-hidden />
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-400">
            Öne Çıkan · {article.category}
          </p>
          <h2
            id="featured-article-title"
            className="font-display mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-[2.75rem]"
          >
            {article.title}
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-foreground/55">
            {article.excerpt}
          </p>
          <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground/35">
            {article.readingTimeMinutes} dk okuma
          </p>
          <Link
            href={`${JOURNAL_BASE}/${article.slug}`}
            className="btn-primary-premium mt-8 inline-flex w-fit items-center rounded-full px-10 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] transition-transform hover:scale-[1.02]"
          >
            Makaleyi Oku
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
