"use client";

import { motion, useScroll, useTransform, type MotionStyle } from "framer-motion";
import { useRef, useState } from "react";

type CinematicLayerProps = {
  src: string;
  className?: string;
  style?: MotionStyle;
  opacity?: number;
  blur?: number;
  parallax?: number;
  objectPosition?: string;
};

/** Hero background — visible but behind typography */
export function CinematicLayer({
  src,
  className = "",
  style,
  opacity = 0.82,
  blur = 0,
  parallax = 40,
  objectPosition = "center",
}: CinematicLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax]);

  return (
    <motion.div
      ref={ref}
      className={`pointer-events-none absolute overflow-hidden ${className}`}
      style={style}
      aria-hidden
    >
      <motion.div className="absolute inset-[-8%]" style={{ y }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className="h-full w-full object-cover transition-opacity duration-700"
          style={{
            objectPosition,
            opacity: ready ? opacity : 0,
            filter:
              blur > 0
                ? `blur(${blur}px) saturate(1.12) contrast(1.08) brightness(1.02)`
                : "saturate(1.12) contrast(1.08) brightness(1.02)",
          }}
          onLoad={() => setReady(true)}
          draggable={false}
        />
      </motion.div>
      <motion.div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/40" />
    </motion.div>
  );
}
