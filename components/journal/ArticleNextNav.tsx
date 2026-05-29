import Link from "next/link";
import type { JournalArticle } from "@/lib/journal/types";
import { JOURNAL_BASE } from "@/lib/journal/site";

type ArticleNextNavProps = {
  next: JournalArticle | null;
  previous: JournalArticle | null;
};

export function ArticleNextNav({ next, previous }: ArticleNextNavProps) {
  if (!next && !previous) return null;

  return (
    <nav
      className="mt-12 grid gap-4 border-t border-foreground/[0.06] pt-10 sm:grid-cols-2"
      aria-label="Sıradaki yazılar"
    >
      {previous ? (
        <Link
          href={`${JOURNAL_BASE}/${previous.slug}`}
          className="group rounded-2xl border border-foreground/[0.08] bg-foreground/[0.02] p-5 ring-1 ring-foreground/10 transition-colors hover:border-violet-500/30"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/35">
            ← Önceki yazı
          </span>
          <p className="mt-2 font-display text-base font-semibold text-foreground transition-colors group-hover:text-violet-200 md:text-lg">
            {previous.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`${JOURNAL_BASE}/${next.slug}`}
          className="group rounded-2xl border border-foreground/[0.08] bg-foreground/[0.02] p-5 text-right ring-1 ring-foreground/10 transition-colors hover:border-violet-500/30 sm:col-start-2"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/35">
            Sonraki yazı →
          </span>
          <p className="mt-2 font-display text-base font-semibold text-foreground transition-colors group-hover:text-violet-200 md:text-lg">
            {next.title}
          </p>
        </Link>
      ) : null}
    </nav>
  );
}
