export type JournalCategory =
  | "Video Prodüksiyon"
  | "Post Prodüksiyon"
  | "Marka Kimliği"
  | "Grafik Tasarım"
  | "Web Tasarım"
  | "Sosyal Medya";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; id: string; text: string }
  | { type: "ul"; items: string[] };

export type JournalFAQ = {
  question: string;
  answer: string;
};

export type JournalArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  category: JournalCategory;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  author: string;
  authorRole: string;
  coverImage: string;
  coverImageAlt: string;
  featured?: boolean;
  relatedServiceHref: string;
  relatedServiceLabel: string;
  relatedSlugs: string[];
  faq: JournalFAQ[];
  content: ContentBlock[];
};
