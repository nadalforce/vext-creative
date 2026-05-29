import type { JournalArticle } from "@/lib/journal/types";
import { getHeadingsFromContent } from "@/lib/journal";

type TableOfContentsProps = {
  article: JournalArticle;
};

export function TableOfContents({ article }: TableOfContentsProps) {
  const headings = getHeadingsFromContent(article);
  if (headings.length === 0) return null;

  return (
    <aside
      className="rounded-2xl border border-foreground/[0.08] bg-foreground/[0.02] p-6 ring-1 ring-foreground/10 lg:sticky lg:top-28"
      aria-labelledby="toc-heading"
    >
      <h2
        id="toc-heading"
        className="text-[11px] font-semibold uppercase tracking-[0.24em] text-violet-400"
      >
        İçindekiler
      </h2>
      <ol className="mt-4 space-y-2 text-sm">
        {headings.map((h) => (
          <li key={h.id} className={h.type === "h3" ? "ml-4" : undefined}>
            <a
              href={`#${h.id}`}
              className="text-foreground/55 transition-colors hover:text-violet-300"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
