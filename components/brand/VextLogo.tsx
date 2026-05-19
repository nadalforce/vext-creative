"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";

type VextLogoProps = {
  variant?: "full" | "symbol";
  size?: "sm" | "md" | "lg" | "xl" | "footer";
  /** Footer / muted presentation */
  subdued?: boolean;
  className?: string;
  href?: string;
  priority?: boolean;
};

const sizes = {
  sm: { full: { w: 120, h: 32 }, symbol: { w: 54, h: 54 } },
  md: { full: { w: 160, h: 44 }, symbol: { w: 44, h: 44 } },
  lg: { full: { w: 200, h: 56 }, symbol: { w: 56, h: 56 } },
  xl: { full: { w: 280, h: 78 }, symbol: { w: 72, h: 72 } },
  footer: { full: { w: 232, h: 76 }, symbol: { w: 44, h: 44 } },
};

export function VextLogo({
  variant = "symbol",
  size = "md",
  className = "",
  href,
  priority = false,
  subdued = false,
}: VextLogoProps) {
  const dim = sizes[size][variant];
  const src = variant === "full" ? BRAND.logo : BRAND.symbol;

  const content = (
    <motion.div
      className={`relative inline-flex shrink-0 ${className}`}
      whileHover={subdued ? undefined : { scale: 1.04 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      <Image
        src={src}
        alt={BRAND.name}
        width={dim.w}
        height={dim.h}
        priority={priority}
        className={`relative z-10 h-auto w-auto object-contain ${
          subdued
            ? "opacity-[0.96] drop-shadow-[0_0_28px_rgba(255,255,255,0.06)]"
            : "drop-shadow-[0_0_12px_rgba(255,255,255,0.08)]"
        }`}
        style={{ width: dim.w, height: "auto", maxHeight: dim.h }}
      />
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
      >
        {content}
      </Link>
    );
  }

  return content;
}
