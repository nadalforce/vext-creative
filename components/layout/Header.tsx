"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PremiumWordmarkLogo } from "@/components/brand/PremiumWordmarkLogo";
import { NAV_LINKS } from "@/lib/constants";
import { isRouteLink, resolveNavHref } from "@/lib/nav";

/** Mobile-first; md: = desktop (unchanged) */
const navLinkClass =
  "group relative shrink-0 whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.06em] text-foreground/60 transition-colors duration-300 hover:text-foreground min-[360px]:text-[8.5px] min-[400px]:text-[9px] min-[420px]:text-[9.5px] md:text-[13px] md:tracking-[0.11em]";

const ctaClass =
  "relative z-10 hidden shrink-0 items-center justify-center rounded-full border border-foreground/12 bg-surface px-7 py-2.5 text-[13px] font-bold uppercase tracking-[0.12em] text-foreground shadow-sm transition-all duration-300 hover:border-violet-400/30 hover:shadow-[0_0_32px_rgba(227,6,19,0.1)] md:col-start-3 md:row-start-1 md:inline-flex";

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
    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-violet-500/70 to-violet-400/30 transition-all duration-500 group-hover:w-full" />
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
  const [menuOpen, setMenuOpen] = useState(false);
  const contactHref = resolveNavHref("#contact", pathname);
  const homeHref = resolveNavHref("#hero", pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const originalOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 overflow-x-hidden transition-all duration-700 ${
        scrolled
          ? "border-b border-foreground/[0.08] bg-background/88 backdrop-blur-2xl shadow-[0_8px_32px_rgba(17,17,17,0.06)]"
          : "bg-gradient-to-b from-background/80 via-background/20 to-transparent"
      }`}
      initial={false}
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-[auto_minmax(0,1fr)] items-center gap-x-1.5 px-2.5 py-2.5 min-[360px]:gap-x-2 min-[360px]:px-3 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-x-8 md:px-10 md:py-5 lg:gap-x-10 lg:px-12 xl:px-14">
        <PremiumWordmarkLogo variant="navbar" href={homeHref} priority />

        <nav
          className="relative z-[1] hidden min-w-0 items-center overflow-hidden pl-1 min-[360px]:pl-1.5 md:col-start-2 md:row-start-1 md:flex md:justify-center md:overflow-visible md:pl-0"
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

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
          className="relative z-10 ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/12 bg-surface text-foreground shadow-sm transition-colors hover:border-violet-400/25 hover:bg-background-muted md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <a href={contactHref} className={ctaClass}>
          Proje Başlat
        </a>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Menüyü kapat"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[55] bg-foreground/25 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.aside
              className="fixed right-0 top-0 z-[60] h-dvh w-[min(86vw,360px)] border-l border-foreground/10 bg-surface/98 px-6 pb-8 pt-24 backdrop-blur-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Mobil menü"
            >
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => {
                  const href = resolveNavHref(link.href, pathname);
                  const itemClass =
                    "rounded-xl border border-foreground/10 bg-foreground/[0.02] px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/85 transition-colors hover:border-foreground/14 hover:bg-foreground/[0.06]";

                  if (isRouteLink(href)) {
                    return (
                      <Link
                        key={link.href}
                        href={href}
                        className={itemClass}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={link.href}
                      href={href}
                      className={itemClass}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <a
                  href={contactHref}
                  className="mt-2 inline-flex items-center justify-center rounded-full border border-foreground/14 bg-foreground/[0.04] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground/20 hover:bg-foreground/[0.1]"
                  onClick={() => setMenuOpen(false)}
                >
                  Proje Başlat
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
