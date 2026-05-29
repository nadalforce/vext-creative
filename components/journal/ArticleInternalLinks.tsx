import Link from "next/link";
import type { JournalArticle } from "@/lib/journal/types";
import { getArticleBySlug } from "@/lib/journal";
import { JOURNAL_BASE } from "@/lib/journal/site";

type ArticleInternalLinksProps = {
  article: JournalArticle;
};

export function ArticleInternalLinks({ article }: ArticleInternalLinksProps) {
  const relatedPosts = article.relatedSlugs
    .slice(0, 2)
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is JournalArticle => Boolean(a));

  return (
    <aside className="mt-12 rounded-2xl border border-violet-400/20 bg-violet-100/30 p-6 md:p-8">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-violet-400">
        İlgili Bağlantılar
      </h2>
      <ul className="mt-4 space-y-3 text-sm md:text-base">
        <li>
          <Link
            href={article.relatedServiceHref}
            className="text-foreground/70 underline-offset-4 transition-colors hover:text-violet-300 hover:underline"
          >
            → {article.relatedServiceLabel} hizmetimiz
          </Link>
        </li>
        {relatedPosts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`${JOURNAL_BASE}/${post.slug}`}
              className="text-foreground/70 underline-offset-4 transition-colors hover:text-violet-300 hover:underline"
            >
              → {post.title}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/#contact"
            className="text-foreground/70 underline-offset-4 transition-colors hover:text-violet-300 hover:underline"
          >
            → İletişim ve proje teklifi
          </Link>
        </li>
      </ul>
    </aside>
  );
}
