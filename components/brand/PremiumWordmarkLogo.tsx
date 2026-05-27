"use client";

import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/brand";

const WORDMARK_W = 1024;
const WORDMARK_H = 344;

type PremiumWordmarkLogoProps = {
  /** Navbar: kompakt; footer: biraz daha büyük, aynı PNG ve oran */
  variant: "navbar" | "footer";
  /** Verilirse logo `Link` ile sarılır (ör. ana sayfa / hero) */
  href?: string;
  /** LCP için üst barda `true` */
  priority?: boolean;
  className?: string;
};

const variantImgClass: Record<PremiumWordmarkLogoProps["variant"], string> = {
  navbar:
    "h-auto w-[clamp(104px,38vw,168px)] max-h-[52px] object-contain object-left md:w-[200px] md:max-h-none",
  footer:
    "h-auto w-[clamp(116px,48vw,200px)] max-h-[56px] object-contain object-left md:max-h-none md:w-[236px]",
};

const variantSizes: Record<PremiumWordmarkLogoProps["variant"], string> = {
  navbar: "(max-width: 767px) 140px, 200px",
  footer: "(max-width: 767px) 180px, 236px",
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
      sizes={variantSizes[variant]}
      className={`shrink-0 ${variantImgClass[variant]} ${className}`.trim()}
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
