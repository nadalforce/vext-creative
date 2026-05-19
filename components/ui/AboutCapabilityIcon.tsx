type AboutCapabilityIconProps = {
  name: "film" | "product" | "social" | "brand";
  className?: string;
};

const svgProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Minimal stroke icons for About capability list (Lucide-style) */
export function AboutCapabilityIcon({
  name,
  className = "h-4 w-4",
}: AboutCapabilityIconProps) {
  switch (name) {
    case "film":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...svgProps}>
          <path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <path d="M4 11h16" />
          <path d="M8 15V7" />
          <path d="M12 15V7" />
          <path d="M16 15V7" />
          <path d="M4 7V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "product":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...svgProps}>
          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
          <path d="M12 22V12" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M7.5 4.27 16.5 9.42" />
        </svg>
      );
    case "social":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...svgProps}>
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="M8.59 13.51 15.42 17.49" />
          <path d="M15.41 6.51 8.59 10.49" />
        </svg>
      );
    case "brand":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden {...svgProps}>
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="M8 9h8M8 12h5" />
        </svg>
      );
  }
}
