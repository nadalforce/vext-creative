import { BRAND } from "@/lib/brand";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vextmedya.com";

export const JOURNAL_BASE = "/journal";

export const SITE_NAME = BRAND.name;

export const JOURNAL_OG_DEFAULT = `${SITE_URL}/logo/vext-logo.png`;
