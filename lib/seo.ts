import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";

/** Always canonical HTTPS — never http in metadata or sitemap */
function normalizeSiteUrl(raw: string): string {
  const trimmed = raw.trim().replace(/\/+$/, "");
  if (trimmed.startsWith("http://")) {
    return trimmed.replace("http://", "https://");
  }
  if (trimmed.startsWith("https://")) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

export const SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vextmedya.com"
);

export const SITE_NAME = "VEXT Medya";

export const SITE_TITLE = "VEXT Medya | Reklam Ajansı";

export const SITE_DESCRIPTION =
  "VEXT Medya reklam ajansı olarak video prodüksiyon, drone çekimi, web tasarım, grafik tasarım, sosyal medya ve dijital reklam yönetimiyle markanızı büyütür.";

export const SITE_KEYWORDS = [
  "VEXT Medya",
  "reklam ajansı",
  "medya ajansı",
  "video prodüksiyon",
  "web tasarım",
  "drone çekimi",
  "grafik tasarım",
  "sosyal medya yönetimi",
  "dijital reklam yönetimi",
  "reklam filmi",
  "İstanbul medya ajansı",
] as const;

export const OG_IMAGE = "/og-image.png";

export const ogImageAbsolute = () => `${SITE_URL}${OG_IMAGE}`;

export const faviconUrl = () => `${SITE_URL}${BRAND.favicon}`;

type PageMetadataOptions = {
  path?: string;
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
};

/** Shared Open Graph + Twitter + canonical for all pages */
export function buildPageMetadata(options: PageMetadataOptions = {}): Metadata {
  const path = options.path ?? "/";
  const canonical =
    path === "/" ? SITE_URL : `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const title = options.title ?? SITE_TITLE;
  const description = options.description ?? SITE_DESCRIPTION;
  const image = options.image ?? ogImageAbsolute();

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: [...SITE_KEYWORDS],
    alternates: { canonical },
    robots: options.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "tr_TR",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [...SITE_KEYWORDS],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: BRAND.favicon, type: "image/png", sizes: "any" },
      { url: BRAND.favicon, type: "image/png", sizes: "32x32" },
      { url: BRAND.favicon, type: "image/png", sizes: "192x192" },
      { url: BRAND.favicon, type: "image/png", sizes: "512x512" },
    ],
    shortcut: BRAND.favicon,
    apple: { url: BRAND.favicon, type: "image/png", sizes: "180x180" },
  },
  manifest: `${SITE_URL}/site.webmanifest`,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAFAF8" },
    { media: "(prefers-color-scheme: dark)", color: "#FAFAF8" },
  ],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    locale: "tr_TR",
    siteName: SITE_NAME,
    images: [
      {
        url: ogImageAbsolute(),
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [ogImageAbsolute()],
  },
  other: {
    "msapplication-TileImage": faviconUrl(),
  },
};
