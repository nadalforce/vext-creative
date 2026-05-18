import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArticleBody } from "@/components/journal/ArticleBody";
import { ArticleBreadcrumbs } from "@/components/journal/ArticleBreadcrumbs";
import { ArticleCTA } from "@/components/journal/ArticleCTA";
import { ArticleHashtags } from "@/components/journal/ArticleHashtags";
import { ArticleNextNav } from "@/components/journal/ArticleNextNav";
import { ArticleDetailHero } from "@/components/journal/ArticleDetailHero";
import { ArticleFAQ } from "@/components/journal/ArticleFAQ";
import { ArticleInternalLinks } from "@/components/journal/ArticleInternalLinks";
import { JournalAtmosphere } from "@/components/journal/JournalAtmosphere";
import { JsonLd } from "@/components/journal/JsonLd";
import { RelatedArticles } from "@/components/journal/RelatedArticles";
import { TableOfContents } from "@/components/journal/TableOfContents";
import {
  getAllSlugs,
  getArticleBySlug,
  getAdjacentArticles,
  getRelatedArticles,
} from "@/lib/journal";
import {
  articleJsonLd,
  articleMetadata,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/journal/seo";
import { JOURNAL_BASE, SITE_URL } from "@/lib/journal/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return articleMetadata(article);
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const { previous, next } = getAdjacentArticles(slug);
  const articleUrl = `${SITE_URL}${JOURNAL_BASE}/${article.slug}`;

  return (
    <article className="relative">
      <JsonLd
        data={[
          articleJsonLd(article),
          breadcrumbJsonLd([
            { name: "Ana Sayfa", url: SITE_URL },
            { name: "VEXT Journal", url: `${SITE_URL}${JOURNAL_BASE}` },
            { name: article.title, url: articleUrl },
          ]),
          faqJsonLd(article.faq),
        ]}
      />
      <JournalAtmosphere />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-28 md:px-10 md:pb-32 md:pt-32">
        <ArticleBreadcrumbs title={article.title} />
        <ArticleDetailHero article={article} />
        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          <div>
            <ArticleBody article={article} />
            <ArticleInternalLinks article={article} />
            <ArticleFAQ faq={article.faq} />
            <ArticleCTA />
            <ArticleHashtags />
            <ArticleNextNav previous={previous} next={next} />
          </div>
          <TableOfContents article={article} />
        </div>
        <RelatedArticles articles={related} />
      </div>
    </article>
  );
}
