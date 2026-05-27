export const EASE = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = { once: true, margin: "-40px" } as const;

/** Visible by default; animates on scroll without opacity:0 flash */
export const inViewFadeUp = {
  initial: { opacity: 1, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
  transition: { duration: 0.55, ease: EASE },
} as const;

export const inViewVisible = {
  initial: { opacity: 1 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
} as const;

export const fadeUp = {
  hidden: { opacity: 1, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const fadeIn = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const scaleIn = {
  hidden: { opacity: 1, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const slideFromLeft = {
  hidden: { opacity: 1, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const slideFromRight = {
  hidden: { opacity: 1, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};
