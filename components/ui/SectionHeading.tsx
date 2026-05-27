"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <motion.div
      className={`mb-16 md:mb-24 max-w-3xl ${alignClass}`}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <span className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
        <span className="h-px w-8 bg-gradient-to-r from-white/50 to-transparent" />
        {label}
      </span>
      <h2
        className={`font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl ${alignClass}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-relaxed text-white/50 md:text-xl ${alignClass}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
