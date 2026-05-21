"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { VextWatermark } from "@/components/ui/VextWatermark";
import { NAV_LINKS } from "@/lib/constants";
import { isRouteLink, resolveNavHref } from "@/lib/nav";

const navLinkClass =
  "group relative text-[13px] font-medium uppercase tracking-[0.12em] text-white/55 transition-colors duration-300 hover:text-white";

function NavItem({
  href,
  label,
  onNavigate,
  className,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
  className: string;
}) {
  const underline = (
    <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-white/70 to-white/30 transition-all duration-500 group-hover:w-full" />
  );

  if (isRouteLink(href)) {
    return (
      <Link href={href} className={className} onClick={onNavigate}>
        {label}
        {underline}
      </Link>
    );
  }

  return (
    <a href={href} className={className} onClick={onNavigate}>
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
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
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
        <motion.div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 md:py-5 lg:px-12 xl:px-14">
          <Link
            href={homeHref}
            aria-label={BRAND.name}
            className="flex shrink-0 items-center bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/50 lg:mr-12 xl:mr-16 2xl:mr-20"
          >
            <div className="flex items-center gap-3">
              <Image
                src="/logo/vext-symbol.png"
                alt="VEXT"
                width={58}
                height={58}
                priority
                className="object-contain"
                style={{ background: "transparent" }}
              />
              <Image
                src="/logo/vext-creative-transparent.png"
                alt={BRAND.name}
                width={170}
                height={42}
                priority
                className="object-contain bg-transparent"
                style={{ background: "transparent" }}
              />
            </div>
          </Link>

          <nav
            className="hidden min-h-[58px] flex-1 items-center justify-center gap-10 lg:flex xl:gap-12 2xl:gap-14"
            aria-label="Ana navigasyon"
          >
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.href}
                href={resolveNavHref(link.href, pathname)}
                label={link.label}
                className={navLinkClass}
              />
            ))}
          </nav>

          <a
            href={contactHref}
            className="hidden shrink-0 items-center self-center rounded-full border border-white/15 bg-white/[0.06] px-7 py-2.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/35 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] lg:ml-10 lg:inline-flex xl:ml-12"
          >
            Proje Başlat
          </a>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                className="block h-px w-5 bg-white"
                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="block h-px w-5 bg-white"
                animate={menuOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: 20 }}
              />
              <motion.span
                className="block h-px w-5 bg-white"
                animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              />
            </div>
          </button>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/97 backdrop-blur-3xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <VextWatermark size="lg" opacity={0.05} fragments className="!absolute" />
            <nav className="relative z-10 flex flex-col items-center gap-10" aria-label="Mobil navigasyon">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={resolveNavHref(link.href, pathname)}
                  className="font-display text-4xl font-bold tracking-tight text-white"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={contactHref}
                className="btn-primary-premium mt-4 rounded-full px-10 py-4 text-sm font-semibold uppercase tracking-widest"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                onClick={() => setMenuOpen(false)}
              >
                Proje Başlat
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
