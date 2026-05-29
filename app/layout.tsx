import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { AmbientParticles } from "@/components/ui/AmbientParticles";
import { PremiumSiteBackground } from "@/components/ui/PremiumSiteBackground";
import { FloatingSocial } from "@/components/ui/FloatingSocial";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { rootMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

const displayFont = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${inter.variable} ${displayFont.variable} h-full scroll-smooth`}
    >
      <body className="relative min-h-full bg-transparent text-foreground antialiased">
        <OrganizationSchema />
        <PremiumSiteBackground />
        <AmbientParticles />
        <div className="relative z-[1]">{children}</div>
        <FloatingSocial />
      </body>
    </html>
  );
}
