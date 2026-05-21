import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vextmedya.com";

export const SITE_NAME = "VEXT Medya";

export const SITE_TITLE =
  "VEXT Medya — Web Tasarım & Video Prodüksiyon Ajansı";

export const SITE_DESCRIPTION =
  "VEXT Medya, web tasarımı, reklam filmi, sosyal medya yönetimi, drone çekimi ve grafik tasarım alanlarında markalara modern dijital çözümler sunan kreatif medya ajansıdır.";

export const SITE_KEYWORDS = [
  "medya ajansı",
  "web tasarım",
  "video prodüksiyon",
  "reklam filmi",
  "sosyal medya yönetimi",
  "drone çekimi",
  "grafik tasarım",
  "VEXT Medya",
  "İstanbul medya ajansı",
] as const;

export const OG_IMAGE = "/og-image.png";

const ogImageAbsolute = () => `${SITE_URL}${OG_IMAGE}`;

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
    title: path === "/" && !options.title ? SITE_TITLE : title,
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
          alt: title,
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
  keywords: [...SITE_KEYWORDS],
  alternates: { canonical: SITE_URL },
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    type: "website",
    locale: "tr_TR",
    siteName: SITE_NAME,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  other: {
    "msapplication-TileImage": "/android-chrome-512x512.png",
  },
};
