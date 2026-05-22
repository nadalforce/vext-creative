"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { NAV_LINKS } from "@/lib/constants";
import { isRouteLink, resolveNavHref } from "@/lib/nav";

/** Mobile-first; md: = desktop (unchanged) */
const navLinkClass =
  "group relative shrink-0 whitespace-nowrap text-[7.5px] font-medium uppercase tracking-[0.05em] text-white/55 transition-colors duration-300 hover:text-white min-[360px]:text-[8px] min-[420px]:text-[8.5px] md:text-[13px] md:tracking-[0.12em]";

const ctaClass =
  "relative z-10 hidden shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] md:ml-auto md:inline-flex";

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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-[2.5rem_1fr_2.5rem] items-center overflow-hidden px-2.5 py-2.5 min-[360px]:px-3 md:flex md:px-10 md:py-5 lg:px-12 xl:px-14">
        <Link
          href={homeHref}
          aria-label={BRAND.name}
          className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 md:h-[58px] md:w-[58px]"
        >
          <Image
            src={BRAND.symbol}
            alt=""
            width={58}
            height={58}
            priority
            className="h-full w-full object-contain md:h-[58px] md:w-[58px]"
            style={{ background: "transparent" }}
          />
        </Link>

        {/* Below md: flex row — md+: centered overlay (desktop unchanged) */}
        <nav
          className="relative z-[1] flex min-w-0 flex-1 items-center justify-center overflow-hidden px-0.5 md:pointer-events-none md:absolute md:inset-0 md:z-auto md:flex-none md:overflow-visible md:px-0"
          aria-label="Ana navigasyon"
        >
          <div className="pointer-events-auto mx-auto flex min-w-0 max-w-full items-center justify-center gap-1.5 min-[360px]:gap-2 min-[400px]:gap-2.5 md:max-w-none md:gap-8 lg:gap-10 xl:gap-12">
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

        {/* Mobilde logo ile simetrik boşluk — menü görsel olarak ortada */}
        <div className="h-10 w-10 shrink-0 md:hidden" aria-hidden />

        <a href={contactHref} className={ctaClass}>
          Proje Başlat
        </a>
      </div>
    </motion.header>
  );
}
