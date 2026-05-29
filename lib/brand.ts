/** Official VEXT Medya brand assets — use only these paths */
export const BRAND = {
  /** Icon mark — favicon, schema, atmospheric watermark */
  symbol: "/logo/vext-icon.png",
  favicon: "/logo/vext-icon.png",
  /** Shared transparent wordmark for navbar + footer */
  navbarWordmark: "/logo/vext-transparent.png",
  /** Full wordmark PNG */
  logo: "/logo/vext-logo.png",
  /** Full wordmark SVG */
  logoSvg: "/vext-logo.svg",
  /** Hero atmospheric watermark */
  logoFull: "/logo/vext-logo.png",
  name: "VEXT Medya",
} as const;

export const BRAND_COLORS = {
  accent: "#e30613",
  electric: "#f04450",
  deep: "#111111",
  glowAmbient: "rgba(227, 6, 19, 0.1)",
  glowSoft: "rgba(17, 17, 17, 0.04)",
} as const;

export const ATMOSPHERE_OPACITY = {
  hero: 0.06,
  section: 0.045,
  fragment: 0.035,
} as const;
