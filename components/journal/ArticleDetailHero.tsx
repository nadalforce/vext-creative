import Image from "next/image";
import type { JournalArticle } from "@/lib/journal/types";

type ArticleDetailHeroProps = {
  article: JournalArticle;
};

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function ArticleDetailHero({ article }: ArticleDetailHeroProps) {
  return (
    <header className="relative">
      <div className="relative aspect-[21/9] min-h-[240px] overflow-hidden rounded-3xl border border-white/[0.08] ring-1 ring-white/10 md:min-h-[360px]">
        <Image
          src={article.coverImage}
          alt={article.coverImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      </div>
      <div className="relative -mt-16 px-2 md:-mt-20 md:px-6">
        <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-600/20 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-300">
          {article.category}
        </span>
        <h1 className="font-display mt-6 max-w-4xl text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] text-white md:text-5xl lg:text-6xl">
          {article.title}
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/45">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600/25 text-xs font-bold text-violet-300 ring-1 ring-violet-500/30"
              aria-hidden
            >
              V
            </div>
            <div>
              <p className="font-medium text-white/80">{article.author}</p>
              <p className="text-xs text-white/40">{article.authorRole}</p>
            </div>
          </div>
          <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
          <span>{article.readingTimeMinutes} dk okuma</span>
        </div>
      </div>
    </header>
  );
}
