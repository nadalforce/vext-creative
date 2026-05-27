"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PremiumWordmarkLogo } from "@/components/brand/PremiumWordmarkLogo";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { isRouteLink, resolveNavHref } from "@/lib/nav";

export function Footer() {
  const pathname = usePathname();
  const homeHref = resolveNavHref("#hero", pathname);

  return (
    <footer className="relative border-t border-white/[0.06] bg-black">
      <motion.div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <motion.div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <motion.div className="min-w-0 shrink-0">
            <PremiumWordmarkLogo variant="footer" href={homeHref} />
          </motion.div>

          <nav
            className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3"
            aria-label="Alt bilgi navigasyonu"
          >
            {NAV_LINKS.map((link) => {
              const href = resolveNavHref(link.href, pathname);
              const className =
                "text-sm text-white/40 transition-colors hover:text-white";
              if (isRouteLink(href)) {
                return (
                  <Link key={link.href} href={href} className={className}>
                    {link.label}
                  </Link>
                );
              }
              return (
                <a key={link.href} href={href} className={className}>
                  {link.label}
                </a>
              );
            })}
          </nav>

          <motion.div className="flex flex-col gap-4">
            <a
              href={CONTACT.emailHref}
              className="text-sm text-white/60 transition-colors hover:text-violet-400"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="text-sm text-white/50 transition-colors hover:text-violet-400"
            >
              {CONTACT.phone}
            </a>
            <motion.div className="flex gap-4">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-white/30 transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-white/30 transition-colors hover:text-white"
              >
                WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="mt-16 border-t border-white/[0.06] pt-8">
          <p className="text-xs text-white/30">
            © 2026 VEXT Medya. Tüm hakları saklıdır.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
