"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

const FOOTER_SYMBOL = "/logo/vext-footer-logo.png";
const FOOTER_WORDMARK = "/logo/vext-footer-wordmark.png";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-black">
      <motion.div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <motion.div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <motion.div>
            <div className="flex items-center gap-3 md:gap-3.5">
              <Image
                src={FOOTER_SYMBOL}
                alt=""
                width={112}
                height={112}
                className="h-[5.75rem] w-auto shrink-0 object-contain md:h-[6.75rem]"
                aria-hidden
              />
              <Image
                src={FOOTER_WORDMARK}
                alt={BRAND.name}
                width={280}
                height={56}
                className="h-[3.75rem] w-auto max-w-[min(52vw,13.5rem)] object-contain md:h-[4.25rem] md:max-w-[15.5rem]"
                sizes="(max-width: 768px) 200px, 248px"
              />
            </div>
          </motion.div>

          <nav
            className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3"
            aria-label="Alt bilgi navigasyonu"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/40 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
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
