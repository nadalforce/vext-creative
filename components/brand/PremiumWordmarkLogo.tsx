"use client";

import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand";

/** Trimmed transparent wordmark (see scripts/prepare-logo-transparent.mjs) */
const WORDMARK_W = 585;
const WORDMARK_H = 203;

type PremiumWordmarkLogoProps = {
  /** Navbar: kompakt; footer: biraz daha büyük, aynı PNG ve oran */
  variant: "navbar" | "footer";
  /** Verilirse logo `Link` ile sarılır (ör. ana sayfa / hero) */
  href?: string;
  /** LCP için üst barda `true` */
  priority?: boolean;
  className?: string;
};

const logoImgClass =
  "m-0 block h-[64px] w-auto max-h-[70px] border-0 bg-transparent object-contain object-left p-0 shadow-none md:h-[66px]";

const variantSizes: Record<PremiumWordmarkLogoProps["variant"], string> = {
  navbar: "(max-width: 767px) 160px, 220px",
  footer: "(max-width: 767px) 170px, 230px",
};

export function PremiumWordmarkLogo({
  variant,
  href,
  priority = false,
  className = "",
}: PremiumWordmarkLogoProps) {
  const img = (
    <Image
      src={BRAND.navbarWordmark}
      alt=""
      width={WORDMARK_W}
      height={WORDMARK_H}
      priority={priority}
      unoptimized
      sizes={variantSizes[variant]}
      className={`brand-wordmark shrink-0 ${logoImgClass} ${className}`.trim()}
    />
  );

  if (href) {
    return (
      <Link
        href={href}
        className="relative z-10 inline-flex shrink-0 items-center self-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
        aria-label={BRAND.name}
      >
        {img}
      </Link>
    );
  }

  return <span className="inline-flex shrink-0 items-center">{img}</span>;
}
