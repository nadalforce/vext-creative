import { JOURNAL_HASHTAGS } from "@/lib/journal/utils";

export function ArticleHashtags() {
  return (
    <section
      className="mt-12 border-t border-foreground/[0.06] pt-10"
      aria-label="Makale etiketleri"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground/35">
        Etiketler
      </p>
      <p className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm text-violet-300/80 md:text-base">
        {JOURNAL_HASHTAGS.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </p>
    </section>
  );
}
