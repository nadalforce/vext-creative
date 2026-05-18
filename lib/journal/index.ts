import { JOURNAL_ARTICLES } from "@/lib/journal/articles";
import type { JournalArticle } from "@/lib/journal/types";

export function getAllArticles(): JournalArticle[] {
  return [...JOURNAL_ARTICLES].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getArticleBySlug(slug: string): JournalArticle | undefined {
  return JOURNAL_ARTICLES.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return JOURNAL_ARTICLES.map((a) => a.slug);
}

export function getFeaturedArticle(): JournalArticle {
  return (
    JOURNAL_ARTICLES.find((a) => a.featured) ?? getAllArticles()[0]!
  );
}

export function getRelatedArticles(
  article: JournalArticle,
  limit = 3,
): JournalArticle[] {
  const related = article.relatedSlugs
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is JournalArticle => Boolean(a));

  if (related.length >= limit) return related.slice(0, limit);

  const rest = getAllArticles().filter(
    (a) =>
      a.slug !== article.slug &&
      !related.some((r) => r.slug === a.slug),
  );

  return [...related, ...rest].slice(0, limit);
}

export function getHeadingsFromContent(article: JournalArticle) {
  return article.content.filter(
    (b): b is Extract<typeof b, { type: "h2" } | { type: "h3" }> =>
      b.type === "h2" || b.type === "h3",
  );
}

export function getAdjacentArticles(slug: string): {
  previous: JournalArticle | null;
  next: JournalArticle | null;
} {
  const sorted = getAllArticles();
  const index = sorted.findIndex((a) => a.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index < sorted.length - 1 ? sorted[index + 1]! : null,
    next: index > 0 ? sorted[index - 1]! : null,
  };
}

export * from "@/lib/journal/articles";
export * from "@/lib/journal/types";
export * from "@/lib/journal/site";
export * from "@/lib/journal/seo";
