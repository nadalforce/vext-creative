"use client";

import { motion } from "framer-motion";

const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  top: `${(i * 23 + 11) % 100}%`,
  size: 1 + (i % 3),
  duration: 14 + (i % 8),
  delay: (i % 6) * 0.7,
}));

export function AmbientParticles() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[35] overflow-hidden"
      aria-hidden
    >
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-violet-300/30 blur-[1px]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30 - (p.id % 5) * 8, 0],
            opacity: [0.08, 0.35, 0.08],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
