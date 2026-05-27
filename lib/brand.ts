/** Official VEXT Medya brand assets — use only these paths */
export const BRAND = {
  /** Navbar / icon mark — also used as favicon (unmodified source file) */
  symbol: "/logo/vext-symbol.png",
  favicon: "/logo/vext-symbol.png",
  /** Full wordmark PNG */
  logo: "/logo/vext-logo.png",
  /** Full wordmark SVG */
  logoSvg: "/vext-logo.svg",
  /** Hero atmospheric watermark */
  logoFull: "/logo/vext-logo.png",
  name: "VEXT Medya",
} as const;

export const BRAND_COLORS = {
  accent: "#5a3838",
  electric: "#9a7878",
  deep: "#0a0606",
  glowAmbient: "rgba(120, 0, 0, 0.1)",
  glowSoft: "rgba(255, 255, 255, 0.06)",
} as const;

export const ATMOSPHERE_OPACITY = {
  hero: 0.06,
  section: 0.045,
  fragment: 0.035,
} as const;
