import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { AmbientParticles } from "@/components/ui/AmbientParticles";
import { FloatingSocial } from "@/components/ui/FloatingSocial";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import "./globals.css";

const OG_IMAGE = "/og-image.png";
const SYMBOL_ICON = "/android-chrome-512x512.png";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vextmedya.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VEXT Creative | Sinematik Yaratıcı Ajans",
  description:
    "Video prodüksiyon, reklam filmi, grafik tasarım, web tasarım ve marka kimliği. Geleceği görselleştiren premium yaratıcı ajans.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "VEXT Creative",
    description: "Geleceği görselleştiren sinematik yaratıcı ajans",
    type: "website",
    locale: "tr_TR",
    siteName: "VEXT Creative",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "VEXT Creative — sinematik yaratıcı ajans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VEXT Creative",
    description: "Geleceği görselleştiren sinematik yaratıcı ajans",
    images: [OG_IMAGE],
  },
  other: {
    "msapplication-TileImage": SYMBOL_ICON,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${syne.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-black text-white antialiased">
        <OrganizationSchema />
        <AmbientParticles />
        {children}
        <FloatingSocial />
      </body>
    </html>
  );
}
