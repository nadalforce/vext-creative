import type { ContentBlock, JournalFAQ } from "@/lib/journal/types";

export function paragraph(text: string): ContentBlock {
  return { type: "p", text };
}

export function heading2(id: string, text: string): ContentBlock {
  return { type: "h2", id, text };
}

export function heading3(id: string, text: string): ContentBlock {
  return { type: "h3", id, text };
}

export function bulletList(items: string[]): ContentBlock {
  return { type: "ul", items };
}

export function joinContent(...parts: ContentBlock[][]): ContentBlock[] {
  return parts.flat();
}

export function contentWordCount(blocks: ContentBlock[]): number {
  return blocks.reduce((total, block) => {
    if (block.type === "p") return total + block.text.split(/\s+/).filter(Boolean).length;
    if (block.type === "h2" || block.type === "h3") {
      return total + block.text.split(/\s+/).filter(Boolean).length;
    }
    if (block.type === "ul") {
      return (
        total +
        block.items.join(" ").split(/\s+/).filter(Boolean).length
      );
    }
    return total;
  }, 0);
}

export function estimateReadingMinutes(blocks: ContentBlock[]): number {
  const words = contentWordCount(blocks);
  return Math.max(6, Math.ceil(words / 185));
}

export const JOURNAL_HASHTAGS = [
  "#videoprodüksiyon",
  "#reelsvideo",
  "#grafiktasarım",
  "#sosyalmedyayönetimi",
  "#markakimliği",
  "#webtasarımı",
  "#dijitalajans",
  "#vextcreative",
] as const;
