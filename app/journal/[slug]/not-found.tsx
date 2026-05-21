import type { Metadata } from "next";
import Link from "next/link";
import { JOURNAL_BASE } from "@/lib/journal/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  path: `${JOURNAL_BASE}/bulunamadi`,
  title: "Makale bulunamadı | VEXT Journal",
  description: "Aradığınız journal yazısı bulunamadı. VEXT Medya journal sayfasına dönün.",
  noIndex: true,
});

export default function JournalArticleNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-3xl font-bold text-white">Makale bulunamadı</h1>
      <p className="mt-4 text-white/50">Aradığınız journal yazısı mevcut değil.</p>
      <Link
        href={JOURNAL_BASE}
        className="mt-8 rounded-full border border-violet-500/40 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-violet-300"
      >
        Journal&apos;a dön
      </Link>
    </div>
  );
}
