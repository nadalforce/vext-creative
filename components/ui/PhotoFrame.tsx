"use client";

import { motion } from "framer-motion";

type PhotoFrameProps = {
  src: string;
  alt?: string;
  className?: string;
  heightClass?: string;
  objectPosition?: string;
  priority?: boolean;
  /** @deprecated Use fit="contain" */
  contain?: boolean;
  /** cover = editorial crop; contain = full image in frame (service showcases) */
  fit?: "cover" | "contain";
};

/** Full-opacity editorial photo — clearly visible, premium frame */
export function PhotoFrame({
  src,
  alt = "",
  className = "",
  heightClass = "h-[420px]",
  objectPosition = "center",
  contain = false,
  fit: fitProp,
}: PhotoFrameProps) {
  const fit = fitProp ?? (contain ? "contain" : "cover");
  const isContain = fit === "contain";

  return (
    <motion.div
      className={`photo-frame relative w-full overflow-hidden rounded-2xl ${isContain ? "bg-[#09090b]" : "bg-zinc-800/80"} ring-1 ring-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.45)] md:rounded-3xl ${heightClass} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className={`photo-frame__img h-full w-full ${isContain ? "object-contain object-center" : "object-cover"}`}
          style={{ objectPosition: isContain ? "center" : objectPosition }}
          loading="eager"
          decoding="async"
          draggable={false}
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[12%] bg-gradient-to-t from-black/25 to-transparent" />
    </motion.div>
  );
}
