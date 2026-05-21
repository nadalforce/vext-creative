"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/brand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { CONTACT, SERVICES } from "@/lib/constants";
import { MEDIA } from "@/lib/media-manifest";
import { fadeUp, staggerContainer } from "@/lib/animations";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

const socialBtnBase =
  "group inline-flex h-12 items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 text-[13px] font-semibold tracking-[0.02em] backdrop-blur-xl transition-all duration-300";

const CONTACT_SHOWCASE = MEDIA.contactShowcase;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[0.04] bg-black py-24 md:py-36"
    >
      <GlowOrb className="bottom-0 left-1/4" color="ambient" delay={0} />
      <GlowOrb className="right-1/4 top-1/4" color="violet" delay={2} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <SectionHeading
          label="İletişim"
          title="Projenizi Konuşalım"
          description="İşletmenizi büyütmek için bizimle iletişime geçin. Size hızlıca dönüş sağlayalım."
        />

        <motion.ul
          className="mx-auto mt-14 flex w-full max-w-3xl flex-col gap-5 md:mt-16 md:max-w-4xl md:gap-7 lg:max-w-[52rem]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Stüdyo görselleri"
        >
          {CONTACT_SHOWCASE.map((src, i) => (
            <motion.li
              key={src}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: 0.08 * i,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <figure className="photo-frame relative w-full overflow-hidden rounded-2xl bg-black ring-1 ring-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:rounded-3xl">
                <Image
                  src={src}
                  alt={`${BRAND.name} stüdyo görseli ${i + 1}`}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="photo-frame__img block h-auto w-full max-w-full object-contain object-center"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  quality={82}
                />
              </figure>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-400">
                  {CONTACT.officeLabel}
                </p>
                <p className="font-display mt-3 text-2xl font-semibold text-white md:text-3xl">
                  {CONTACT.officeAddress}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  E-posta
                </p>
                <a
                  href={CONTACT.emailHref}
                  className="mt-1 block font-display text-xl text-white transition-colors hover:text-violet-400 md:text-2xl"
                >
                  {CONTACT.email}
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Telefon
                </p>
                <a
                  href={CONTACT.phoneHref}
                  className="mt-1 block font-display text-xl text-white transition-colors hover:text-violet-400 md:text-2xl"
                >
                  {CONTACT.phone}
                </a>
                <p className="mt-2 text-sm font-medium tracking-[0.03em] text-white/40 md:text-[0.9375rem]">
                  Emre Maltepe | Proje Yöneticisi
                </p>
              </div>
            </div>

            <motion.div className="mt-10 flex flex-wrap gap-3" variants={fadeUp}>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBtnBase} text-white/55 hover:border-white/25 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_32px_rgba(255,255,255,0.06)]`}
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4 shrink-0 text-violet-400/90 transition-colors group-hover:text-violet-300" />
                Instagram
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBtnBase} text-white/55 hover:border-emerald-500/35 hover:bg-emerald-500/10 hover:text-emerald-200 hover:shadow-[0_0_32px_rgba(16,185,129,0.18)]`}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0 text-emerald-400/90 transition-colors group-hover:text-emerald-300" />
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GlassCard className="!p-8 md:!p-10">
              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-16 text-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/20">
                    <svg className="h-8 w-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Mesajınız Alındı
                  </h3>
                  <p className="mt-2 text-white/40">
                    En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div variants={fadeUp} className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-white/40">
                        Ad Soyad
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-white/20 outline-none transition-all focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                        placeholder="Adınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-white/40">
                        E-posta
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-white/20 outline-none transition-all focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-widest text-white/40">
                      Hizmet
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full appearance-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white outline-none transition-all focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                    >
                      <option value="" className="bg-black">
                        Hizmet seçin
                      </option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id} className="bg-black">
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-white/40">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder-white/20 outline-none transition-all focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                      placeholder="Projeniz hakkında bize bilgi verin..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    variants={fadeUp}
                    className="btn-primary-premium group relative w-full overflow-hidden rounded-xl py-4 text-sm font-semibold uppercase tracking-widest transition-all"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    Gönder
                  </motion.button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
