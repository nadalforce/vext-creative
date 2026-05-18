import Link from "next/link";

export function ArticleCTA() {
  return (
    <section
      className="relative mt-20 overflow-hidden rounded-3xl border border-violet-500/25 bg-gradient-to-br from-violet-950/50 via-black to-black px-8 py-14 text-center md:px-16"
      aria-labelledby="article-cta-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(124,58,237,0.25)_0%,transparent_70%)]"
        aria-hidden
      />
      <h2
        id="article-cta-heading"
        className="font-display relative text-2xl font-bold text-white md:text-4xl"
      >
        Markanızı Profesyonel Görsel Dile Taşıyalım
      </h2>
      <p className="relative mx-auto mt-4 max-w-xl text-sm text-white/50 md:text-base">
        Projenizi birlikte planlayalım. Video prodüksiyon, sosyal medya yönetimi,
        grafik tasarım ve web deneyimleri için VEXT Creative ekibi yanınızda.
      </p>
      <Link
        href="/#contact"
        className="relative mt-8 inline-flex rounded-full bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-12 py-4 text-[13px] font-bold uppercase tracking-[0.14em] text-white glow-violet transition-transform hover:scale-[1.02]"
      >
        Proje Başlat
      </Link>
    </section>
  );
}
