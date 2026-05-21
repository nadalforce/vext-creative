"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { NAV_LINKS } from "@/lib/constants";
import { isRouteLink, resolveNavHref } from "@/lib/nav";

const navLinkClass =
  "group relative shrink-0 whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.08em] text-white/55 transition-colors duration-300 hover:text-white min-[380px]:text-[9px] min-[400px]:text-[10px] sm:text-[11px] md:text-[13px] md:tracking-[0.12em]";

function NavItem({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className: string;
}) {
  const underline = (
    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-white/70 to-white/30 transition-all duration-500 group-hover:w-full" />
  );

  if (isRouteLink(href)) {
    return (
      <Link href={href} className={className}>
        {label}
        {underline}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {label}
      {underline}
    </a>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const contactHref = resolveNavHref("#contact", pathname);
  const homeHref = resolveNavHref("#hero", pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-white/[0.06] bg-black/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-black/80 via-black/20 to-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative mx-auto flex max-w-7xl items-center px-6 py-4 md:px-10 md:py-5 lg:px-12 xl:px-14">
        <Link
          href={homeHref}
          aria-label={BRAND.name}
          className="relative z-10 flex shrink-0 items-center bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50"
        >
          <Image
            src={BRAND.symbol}
            alt=""
            width={58}
            height={58}
            priority
            className="object-contain"
            style={{ background: "transparent" }}
          />
        </Link>

        <nav
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          aria-label="Ana navigasyon"
        >
          <div className="pointer-events-auto flex max-w-[calc(100%-7.5rem)] items-center justify-center gap-1.5 min-[380px]:max-w-[calc(100%-8.25rem)] min-[380px]:gap-2 min-[400px]:max-w-[calc(100%-9rem)] min-[400px]:gap-2.5 sm:max-w-[calc(100%-11rem)] sm:gap-4 md:max-w-none md:gap-8 lg:gap-10 xl:gap-12">
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.href}
                href={resolveNavHref(link.href, pathname)}
                label={link.label}
                className={navLinkClass}
              />
            ))}
          </div>
        </nav>

        <a
          href={contactHref}
          className="relative z-10 ml-auto inline-flex shrink-0 items-center self-center rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.06em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] min-[380px]:px-3.5 min-[380px]:text-[9px] min-[400px]:px-4 min-[400px]:py-2 min-[400px]:text-[10px] sm:px-6 sm:py-2.5 sm:text-[11px] md:px-7 md:text-[13px] md:tracking-[0.1em]"
        >
          Proje Başlat
        </a>
      </div>
    </motion.header>
  );
}
