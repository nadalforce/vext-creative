"use client";

import { motion, useScroll, useTransform, type MotionStyle } from "framer-motion";
import { useRef, useState } from "react";

type CinematicVisualProps = {
  src?: string;
  alt?: string;
  className?: string;
  style?: MotionStyle;
  parallax?: boolean;
  /** feature = dominant editorial imagery; ambient = softer secondary layer */
  visibility?: "feature" | "ambient";
  objectPosition?: string;
  mask?: "radial" | "linear" | "none";
};

export function CinematicVisual({
  src,
  alt = "",
  className = "",
  style,
  parallax = true,
  visibility = "feature",
  objectPosition = "center",
  mask = "none",
}: CinematicVisualProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(!src);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? [-16, 16] : [0, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

  const showPhoto = src && !failed;
  const isAmbient = visibility === "ambient";

  const maskClass =
    mask === "linear"
      ? "cinematic-mask-linear-soft"
      : mask === "radial"
        ? "cinematic-mask-radial-soft"
        : "";

  return (
    <motion.div
      ref={ref}
      className={`cinematic-visual cinematic-visual--${visibility} relative isolate overflow-hidden bg-background-muted ${className}`}
      style={style}
      aria-hidden={!alt}
    >
      {!showPhoto && (
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100/60 via-background-muted to-background" />
      )}

      {showPhoto && (
        <motion.div
          className={`absolute inset-[-4%] ${maskClass}`}
          style={{ y: parallax ? y : undefined, scale: parallax ? scale : undefined }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className={`cinematic-visual__photo absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              ready ? "opacity-100" : "opacity-90"
            }`}
            style={{ objectPosition }}
            onLoad={() => setReady(true)}
            onError={() => setFailed(true)}
            draggable={false}
          />
        </motion.div>
      )}

      {/* Subtle edge polish only — center stays clear */}
      <motion.div
        className={`pointer-events-none absolute inset-0 ${
          isAmbient
            ? "bg-gradient-to-t from-background/35 via-transparent to-background/10"
            : "bg-gradient-to-t from-background/30 via-transparent to-transparent"
        }`}
      />
      <motion.div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/15 via-transparent to-background/15" />
      <motion.div className="film-grain pointer-events-none absolute inset-0 opacity-[0.06]" />
    </motion.div>
  );
}
