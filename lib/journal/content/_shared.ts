import type { JournalFAQ } from "@/lib/journal/types";
import {
  bulletList,
  heading2,
  heading3,
  joinContent,
  paragraph,
} from "@/lib/journal/utils";
import type { ContentBlock } from "@/lib/journal/types";

export function faq(
  items: { question: string; answer: string }[],
): JournalFAQ[] {
  return items;
}

export function section(
  id: string,
  title: string,
  paragraphs: string[],
  subsections?: { id: string; title: string; paragraphs: string[] }[],
): ContentBlock[] {
  const blocks: ContentBlock[] = [heading2(id, title), ...paragraphs.map(paragraph)];
  for (const sub of subsections ?? []) {
    blocks.push(heading3(sub.id, sub.title), ...sub.paragraphs.map(paragraph));
  }
  return blocks;
}

export { joinContent, bulletList, paragraph, heading2, heading3 };
