import type { JournalArticle } from "@/lib/journal/types";

type ArticleBodyProps = {
  article: JournalArticle;
};

export function ArticleBody({ article }: ArticleBodyProps) {
  return (
    <div className="journal-prose max-w-none">
      {article.content.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p
                key={i}
                className="mb-6 text-base leading-[1.85] text-foreground/60 md:text-lg"
              >
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                id={block.id}
                className="font-display mb-5 mt-12 scroll-mt-28 text-2xl font-bold text-foreground md:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={block.id}
                className="font-display mb-4 mt-8 scroll-mt-28 text-xl font-semibold text-foreground/90"
              >
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="mb-8 list-disc space-y-2 pl-6 text-base leading-relaxed text-foreground/55 md:text-lg"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
