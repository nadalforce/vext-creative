import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/journal";
import { JOURNAL_BASE, SITE_URL } from "@/lib/journal/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const journalPosts = getAllSlugs().map((slug) => ({
    url: `${SITE_URL}${JOURNAL_BASE}/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}${JOURNAL_BASE}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...journalPosts,
  ];
}
