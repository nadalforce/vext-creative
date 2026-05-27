"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function buildParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 17 + 7) % 100}%`,
    top: `${(i * 23 + 11) % 100}%`,
    size: 1 + (i % 3),
    duration: 14 + (i % 8),
    delay: (i % 6) * 0.7,
  }));
}

export function AmbientParticles() {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const particles = useMemo(
    () => buildParticles(isMobile ? 8 : 16),
    [isMobile]
  );

  if (reduceMotion) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[8] overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
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
            y: [0, -20 - (p.id % 4) * 6, 0],
            opacity: [0.06, 0.22, 0.06],
            scale: [1, 1.2, 1],
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
