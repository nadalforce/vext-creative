import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AmbientParticles } from "@/components/ui/AmbientParticles";
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

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-black text-white antialiased">
        <OrganizationSchema />
        <AmbientParticles />
        {children}
        <FloatingSocial />
      </body>
    </html>
  );
}
