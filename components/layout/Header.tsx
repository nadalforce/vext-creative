"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { PremiumWordmarkLogo } from "@/components/brand/PremiumWordmarkLogo";
import { NAV_LINKS } from "@/lib/constants";
import { isRouteLink, resolveNavHref } from "@/lib/nav";

/** Mobile-first; md: = desktop (unchanged) */
const navLinkClass =
  "group relative shrink-0 whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.04em] text-white/55 transition-colors duration-300 hover:text-white min-[360px]:text-[8.5px] min-[400px]:text-[9px] min-[420px]:text-[9.5px] md:text-[13px] md:tracking-[0.12em]";

const ctaClass =
  "relative z-10 hidden shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] md:col-start-3 md:row-start-1 md:inline-flex";

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
      className={`fixed top-0 left-0 right-0 z-50 overflow-x-hidden transition-all duration-700 ${
        scrolled
          ? "border-b border-white/[0.06] bg-black/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-gradient-to-b from-black/80 via-black/20 to-transparent"
      }`}
      initial={false}
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-[auto_minmax(0,1fr)] items-center gap-x-1.5 px-2.5 py-2.5 min-[360px]:gap-x-2 min-[360px]:px-3 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-x-8 md:px-10 md:py-5 lg:gap-x-10 lg:px-12 xl:px-14">
        <PremiumWordmarkLogo variant="navbar" href={homeHref} priority />

        <nav
          className="relative z-[1] flex min-w-0 items-center overflow-hidden pl-1 min-[360px]:pl-1.5 md:col-start-2 md:row-start-1 md:justify-center md:overflow-visible md:pl-0"
          aria-label="Ana navigasyon"
        >
          <div className="pointer-events-auto flex w-full min-w-0 max-w-full items-center justify-between gap-0.5 min-[360px]:gap-1 min-[400px]:gap-1.5 md:w-auto md:max-w-none md:justify-center md:gap-8 lg:gap-10 xl:gap-12">
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

        <a href={contactHref} className={ctaClass}>
          Proje Başlat
        </a>
      </div>
    </motion.header>
  );
}
