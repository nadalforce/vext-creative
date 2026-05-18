"use client";

import { motion } from "framer-motion";

type ViewfinderMarkProps = {
  size?: number;
  className?: string;
  pulse?: boolean;
};

/** Animated viewfinder inspired by the VEXT logo center focus brackets */
export function ViewfinderMark({
  size = 48,
  className = "",
  pulse = true,
}: ViewfinderMarkProps) {
  const arm = size * 0.22;
  const offset = size * 0.12;

  const cornerClass =
    "absolute border-violet-400/70 border-solid";

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={pulse ? { opacity: [0.5, 1, 0.5] } : undefined}
      transition={pulse ? { duration: 2.5, repeat: Infinity } : undefined}
      aria-hidden
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]"
        animate={pulse ? { scale: [1, 1.3, 1] } : undefined}
        transition={pulse ? { duration: 2, repeat: Infinity } : undefined}
      />
      <span
        className={`${cornerClass} left-0 top-0 border-l-2 border-t-2`}
        style={{ width: arm, height: arm }}
      />
      <span
        className={`${cornerClass} right-0 top-0 border-r-2 border-t-2`}
        style={{ width: arm, height: arm }}
      />
      <span
        className={`${cornerClass} bottom-0 left-0 border-b-2 border-l-2`}
        style={{ width: arm, height: arm }}
      />
      <span
        className={`${cornerClass} bottom-0 right-0 border-b-2 border-r-2`}
        style={{ width: arm, height: arm }}
      />
    </motion.div>
  );
}
