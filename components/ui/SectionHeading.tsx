"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

type SectionHeadingProps = {
  label: string;
  title: string;
  /** Kelime veya ifade kırmızı vurgu ile gösterilir */
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
};

function renderTitleWithAccent(title: string, highlight?: string) {
  if (!highlight || !title.includes(highlight)) {
    return title;
  }

  const parts = title.split(highlight);
  return parts.map((part, index) => (
    <Fragment key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 ? (
        <span className="text-accent">{highlight}</span>
      ) : null}
    </Fragment>
  ));
}

export function SectionHeading({
  label,
  title,
  titleHighlight,
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
      <span
        className={`text-label mb-4 inline-flex items-center gap-3 text-xs uppercase ${alignClass}`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-foreground/35 to-transparent" />
        {label}
      </span>
      <h2
        className={`font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl ${alignClass}`}
      >
        {renderTitleWithAccent(title, titleHighlight)}
      </h2>
      {description && (
        <p
          className={`text-body mt-6 text-lg md:text-xl ${alignClass}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
