import type { JournalArticle } from "@/lib/journal/types";

type ArticleFAQProps = {
  faq: JournalArticle["faq"];
};

export function ArticleFAQ({ faq }: ArticleFAQProps) {
  if (faq.length === 0) return null;

  return (
    <section className="mt-16 border-t border-foreground/[0.08] pt-16" aria-labelledby="faq-heading">
      <h2
        id="faq-heading"
        className="font-display text-2xl font-bold text-foreground md:text-3xl"
      >
        Sık Sorulan Sorular
      </h2>
      <div className="mt-8 space-y-4">
        {faq.map((item, i) => (
          <details
            key={i}
            className="group rounded-2xl border border-foreground/[0.08] bg-foreground/[0.02] ring-1 ring-foreground/10 open:border-violet-500/25"
          >
            <summary className="cursor-pointer list-none px-6 py-5 font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {item.question}
                <span className="text-violet-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <div className="border-t border-foreground/[0.06] px-6 pb-5 pt-2 text-sm leading-relaxed text-foreground/55 md:text-base">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
