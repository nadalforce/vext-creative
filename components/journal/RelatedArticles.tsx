import type { JournalArticle } from "@/lib/journal/types";
import { ArticleCard } from "@/components/journal/ArticleCard";

type RelatedArticlesProps = {
  articles: JournalArticle[];
};

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-20 border-t border-foreground/[0.08] pt-16" aria-labelledby="related-heading">
      <h2
        id="related-heading"
        className="font-display text-2xl font-bold text-foreground md:text-3xl"
      >
        İlgili Yazılar
      </h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <ArticleCard key={article.slug} article={article} index={i} />
        ))}
      </div>
    </section>
  );
}
