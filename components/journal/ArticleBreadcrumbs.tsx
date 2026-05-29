import Link from "next/link";
import { JOURNAL_BASE } from "@/lib/journal/site";

type ArticleBreadcrumbsProps = {
  title: string;
};

export function ArticleBreadcrumbs({ title }: ArticleBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-foreground/40">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-violet-400">
            Ana Sayfa
          </Link>
        </li>
        <li aria-hidden className="text-foreground/20">
          /
        </li>
        <li>
          <Link href={JOURNAL_BASE} className="transition-colors hover:text-violet-400">
            VEXT Journal
          </Link>
        </li>
        <li aria-hidden className="text-foreground/20">
          /
        </li>
        <li className="text-foreground/70" aria-current="page">
          <span className="line-clamp-1">{title}</span>
        </li>
      </ol>
    </nav>
  );
}
