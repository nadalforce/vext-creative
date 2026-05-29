import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { journalListingMetadata } from "@/lib/journal/seo";

export const metadata: Metadata = journalListingMetadata();

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="relative min-h-screen bg-transparent">
        {children}
      </main>
      <Footer />
    </>
  );
}
