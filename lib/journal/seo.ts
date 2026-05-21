import type { Metadata } from "next";
import type { JournalArticle } from "@/lib/journal/types";
import { JOURNAL_BASE, JOURNAL_OG_DEFAULT, SITE_NAME, SITE_URL } from "@/lib/journal/site";
export function journalListingMetadata(): Metadata {
  const title = "VEXT Journal | Sektörden Makaleler";
  const description =
    "Video prodüksiyon, reels, marka kimliği, sosyal medya ve web tasarımına dair SEO odaklı profesyonel rehberler. VEXT Medya medya ajansı journal.";

  return {
    title,
    description,
    keywords: [
      "medya ajansı blog",
      "video prodüksiyon rehberi",
      "sinematik video çekimi",
      "reels video teknikleri",
      "marka kimliği",
      "VEXT Medya",
    ],
    alternates: { canonical: `${SITE_URL}${JOURNAL_BASE}` },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${JOURNAL_BASE}`,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
      images: [{ url: JOURNAL_OG_DEFAULT, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [JOURNAL_OG_DEFAULT],
    },
  };
}

export function articleMetadata(article: JournalArticle): Metadata {
  const url = `${SITE_URL}${JOURNAL_BASE}/${article.slug}`;
  const ogImage = article.coverImage.startsWith("http")
    ? article.coverImage
    : `${SITE_URL}${article.coverImage}`;

  return {
    title: `${article.title} | VEXT Journal`,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.author],
      section: article.category,
      tags: article.keywords,
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.coverImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [ogImage],
    },
  };
}

export function articleJsonLd(article: JournalArticle) {
  const url = `${SITE_URL}${JOURNAL_BASE}/${article.slug}`;
  const image = article.coverImage.startsWith("http")
    ? article.coverImage
    : `${SITE_URL}${article.coverImage}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: [image],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: JOURNAL_OG_DEFAULT,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: article.category,
    keywords: article.keywords.join(", "),
    inLanguage: "tr-TR",
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(faq: JournalArticle["faq"]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function journalListingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "VEXT Journal",
    description:
      "VEXT Medya medya ajansının video prodüksiyon, marka ve dijital içerik odaklı editorial journal platformu.",
    url: `${SITE_URL}${JOURNAL_BASE}`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "tr-TR",
  };
}
