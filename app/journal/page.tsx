import { ArticleCard } from "@/components/journal/ArticleCard";
import { FeaturedArticle } from "@/components/journal/FeaturedArticle";
import { JournalAtmosphere } from "@/components/journal/JournalAtmosphere";
import { JournalHero } from "@/components/journal/JournalHero";
import { JsonLd } from "@/components/journal/JsonLd";
import {
  getAllArticles,
  getFeaturedArticle,
} from "@/lib/journal";
import { journalListingJsonLd } from "@/lib/journal/seo";
import { JOURNAL_BASE, SITE_URL } from "@/lib/journal/site";

export default function JournalPage() {
  const featured = getFeaturedArticle();
  const articles = getAllArticles().filter((a) => a.slug !== featured.slug);

  return (
    <>
      <JsonLd
        data={[
          journalListingJsonLd(),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "VEXT Journal Makaleleri",
            itemListElement: getAllArticles().map((article, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `${SITE_URL}${JOURNAL_BASE}/${article.slug}`,
              name: article.title,
            })),
          },
        ]}
      />
      <JournalAtmosphere />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
        <JournalHero />
        <section className="mt-12 md:mt-16" aria-label="Öne çıkan makale">
          <FeaturedArticle article={featured} />
        </section>
        <section className="mt-20 md:mt-24" aria-labelledby="articles-grid-heading">
          <h2
            id="articles-grid-heading"
            className="font-display text-2xl font-bold text-foreground md:text-3xl"
          >
            Tüm Yazılar
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-foreground/45 md:text-base">
            Video prodüksiyon, marka kimliği ve dijital içerik üzerine SEO odaklı
            rehberler.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {articles.map((article, i) => (
              <ArticleCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
