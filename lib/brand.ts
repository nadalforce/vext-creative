/** Official VEXT Creative brand assets — use only these paths */
export const BRAND = {
  /** Navbar / icon mark */
  symbol: "/logo/vext-symbol.png",
  /** Full wordmark PNG */
  logo: "/logo/vext-logo.png",
  /** Full wordmark SVG */
  logoSvg: "/vext-logo.svg",
  /** Hero atmospheric watermark */
  logoFull: "/logo/vext-logo.png",
  name: "VEXT Creative",
} as const;

export const BRAND_COLORS = {
  violet: "#7c3aed",
  electric: "#a78bfa",
  deep: "#1e0b3a",
  glowViolet: "rgba(124, 58, 237, 0.5)",
  glowBlue: "rgba(59, 130, 246, 0.25)",
} as const;

export const ATMOSPHERE_OPACITY = {
  hero: 0.06,
  section: 0.045,
  fragment: 0.035,
} as const;
