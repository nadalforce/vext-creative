import type { ReactElement, ReactNode, SVGProps } from "react";

type IconSvgProps = SVGProps<SVGSVGElement>;

function PremiumIconBase({
  className,
  children,
  ...props
}: IconSvgProps & { children: ReactNode }) {
  return (
    <svg
      className={`premium-icon shrink-0 ${className ?? ""}`.trim()}
      viewBox="0 0 24 24"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

/** Reklam filmi / prodüksiyon — sinema kamera */
export function IconFilm({ className, ...props }: IconSvgProps) {
  return (
    <PremiumIconBase className={className} {...props}>
      <path
        className="premium-icon__base transition-colors duration-300"
        d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"
      />
      <path
        className="premium-icon__accent transition-colors duration-300"
        d="M8 8.25h2.25v2.25H8V8.25Zm5.75 0H16v2.25h-2.25V8.25ZM8 13.5h2.25v2.25H8V13.5Zm5.75 0H16v2.25h-2.25V13.5Z"
      />
      <circle
        className="premium-icon__highlight transition-colors duration-300"
        cx="12"
        cy="12"
        r="2.35"
      />
      <path
        className="premium-icon__base transition-colors duration-300"
        d="M3 9.25h1.35v5.5H3v-5.5Zm16.65 0H21v5.5h-1.35v-5.5Z"
      />
    </PremiumIconBase>
  );
}

/** Video kurgu / post prodüksiyon */
export function IconEdit({ className, ...props }: IconSvgProps) {
  return (
    <PremiumIconBase className={className} {...props}>
      <path
        className="premium-icon__base transition-colors duration-300"
        d="M4 6.75A2.25 2.25 0 0 1 6.25 4.5h11.5A2.25 2.25 0 0 1 20 6.75v10.5A2.25 2.25 0 0 1 17.75 19.5H6.25A2.25 2.25 0 0 1 4 17.25V6.75Z"
      />
      <path
        className="premium-icon__accent transition-colors duration-300"
        d="M7.25 8.25h9.5v1.35h-9.5V8.25Zm0 3h6.2v1.35h-6.2v-1.35Zm0 3h4.1v1.35h-4.1v-1.35Z"
      />
      <path
        className="premium-icon__highlight transition-colors duration-300"
        d="M15.9 13.1l3.35 1.95-1.35 2.35-3.35-1.95 1.35-2.35Z"
      />
    </PremiumIconBase>
  );
}

/** Grafik tasarım — palet & fırça */
export function IconPalette({ className, ...props }: IconSvgProps) {
  return (
    <PremiumIconBase className={className} {...props}>
      <path
        className="premium-icon__base transition-colors duration-300"
        d="M12 3.5c4.4 0 8 3.15 8 7.05 0 2.35-1.9 4.25-4.25 4.25-.95 0-1.45.55-1.45 1.35 0 .8.55 1.35 1.35 1.35H9.1c-3.35 0-6.1-2.65-6.1-5.95C3 6.45 7.05 3.5 12 3.5Z"
      />
      <circle className="premium-icon__highlight transition-colors duration-300" cx="9" cy="9" r="1.1" />
      <circle className="premium-icon__accent transition-colors duration-300" cx="12.2" cy="7.4" r="1.1" />
      <circle className="premium-icon__accent transition-colors duration-300" cx="15" cy="9.2" r="1.1" />
      <path
        className="premium-icon__base transition-colors duration-300"
        d="M17.75 16.25 20.5 19l-1.35 1.35-2.9-2.65 1.5-1.45Z"
      />
    </PremiumIconBase>
  );
}

/** Marka kimliği */
export function IconDiamond({ className, ...props }: IconSvgProps) {
  return (
    <PremiumIconBase className={className} {...props}>
      <path
        className="premium-icon__base transition-colors duration-300"
        d="M12 3 19.5 8.25 12 21 4.5 8.25 12 3Z"
      />
      <path
        className="premium-icon__highlight transition-colors duration-300"
        d="M12 6.35 16.35 8.25 12 16.2 7.65 8.25 12 6.35Z"
      />
      <path
        className="premium-icon__accent transition-colors duration-300"
        d="M4.5 8.25 7.2 7.1 12 16.2 16.8 7.1l2.7 1.15L12 19.35 4.5 8.25Z"
        opacity="0.55"
      />
    </PremiumIconBase>
  );
}

/** Web / SEO — monitör + arama */
export function IconGlobe({ className, ...props }: IconSvgProps) {
  return (
    <PremiumIconBase className={className} {...props}>
      <path
        className="premium-icon__base transition-colors duration-300"
        d="M3.75 5.5A2.25 2.25 0 0 1 6 3.25h12A2.25 2.25 0 0 1 20.25 5.5v9A2.25 2.25 0 0 1 18 16.75H6A2.25 2.25 0 0 1 3.75 14.5v-9Z"
      />
      <path
        className="premium-icon__accent transition-colors duration-300"
        d="M6.75 7.25h10.5v5.25H6.75V7.25Z"
      />
      <path
        className="premium-icon__base transition-colors duration-300"
        d="M9 18.25h6v1.5H9v-1.5Zm3-1.5v1.5"
      />
      <circle
        className="premium-icon__highlight transition-colors duration-300"
        cx="16.85"
        cy="15.85"
        r="3.65"
      />
      <path
        fill="#fff"
        d="M16.85 14.1v3.5M15.1 15.85h3.5"
        stroke="#fff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </PremiumIconBase>
  );
}

/** Sosyal medya / reklam — megafon + trend */
export function IconSocial({ className, ...props }: IconSvgProps) {
  return (
    <PremiumIconBase className={className} {...props}>
      <path
        className="premium-icon__base transition-colors duration-300"
        d="M4.5 9.25h7.35l4.65-2.6v11.2l-4.65-2.6H4.5a1.1 1.1 0 0 1-1.1-1.1v-3.8a1.1 1.1 0 0 1 1.1-1.1Z"
      />
      <path
        className="premium-icon__highlight transition-colors duration-300"
        d="M16.25 14.1h3.25v1.35h-3.25V14.1Zm0-3h4.5v1.35h-4.5V11.1Zm0-3h2.75v1.35h-2.75V8.1Z"
      />
      <path
        className="premium-icon__accent transition-colors duration-300"
        d="M15.5 16.75c1.45.85 3.2.35 3.95-1.1.75-1.45.2-3.2-1.25-4.05"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        fill="none"
      />
    </PremiumIconBase>
  );
}

/** Drone çekimleri */
export function IconDrone({ className, ...props }: IconSvgProps) {
  return (
    <PremiumIconBase className={className} {...props}>
      <path
        className="premium-icon__base transition-colors duration-300"
        d="M12 10.1a2.15 2.15 0 1 0 0 4.3 2.15 2.15 0 0 0 0-4.3Z"
      />
      <path
        className="premium-icon__base transition-colors duration-300"
        d="M12 11.35v2.8M9.15 12.25h5.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        className="premium-icon__accent transition-colors duration-300"
        d="M5.25 6.75a2.35 2.35 0 1 1 0 4.7 2.35 2.35 0 0 1 0-4.7Zm13.5 0a2.35 2.35 0 1 1 0 4.7 2.35 2.35 0 0 1 0-4.7Zm-13.5 9.8a2.35 2.35 0 1 1 0 4.7 2.35 2.35 0 0 1 0-4.7Zm13.5 0a2.35 2.35 0 1 1 0 4.7 2.35 2.35 0 0 1 0-4.7Z"
      />
      <path
        className="premium-icon__highlight transition-colors duration-300"
        d="M7.35 8.35 10.2 10.6M16.65 8.35 13.8 10.6M7.35 17.15 10.2 14.9M16.65 17.15 13.8 14.9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </PremiumIconBase>
  );
}

/** Marka / kurumsal kimlik — rozet */
export function IconBrand({ className, ...props }: IconSvgProps) {
  return (
    <PremiumIconBase className={className} {...props}>
      <path
        className="premium-icon__base transition-colors duration-300"
        d="M12 2.75 19.25 6v8L12 17.75 4.75 14V6L12 2.75Z"
      />
      <path
        className="premium-icon__highlight transition-colors duration-300"
        d="M12 6.1c2.05 1.2 3.35 2.35 3.35 3.9S14.05 13.9 12 15.1 8.65 13.9 8.65 10s1.3-2.7 3.35-3.9Z"
      />
      <path
        className="premium-icon__accent transition-colors duration-300"
        d="M12 8.35v3.3M10.35 10h3.3"
        stroke="#fff"
        strokeWidth="1.15"
        strokeLinecap="round"
      />
    </PremiumIconBase>
  );
}

/** Kreatif içerik — ampul + kıvılcım */
export function IconCreative({ className, ...props }: IconSvgProps) {
  return (
    <PremiumIconBase className={className} {...props}>
      <path
        className="premium-icon__base transition-colors duration-300"
        d="M12 3.25a5.75 5.75 0 0 0-3.45 10.4c.55.45.9 1.05.95 1.7l.15 1.65h5.1l.15-1.65c.05-.65.4-1.25.95-1.7A5.75 5.75 0 0 0 12 3.25Z"
      />
      <path
        className="premium-icon__highlight transition-colors duration-300"
        d="M10.1 17.2h3.8v1.55h-3.8V17.2Zm.95 2.35h1.9v1.1h-1.9v-1.1Z"
      />
      <path
        className="premium-icon__accent transition-colors duration-300"
        d="M18.35 6.5 19.7 5.15M18.35 11.75l1.35 1.35M5.65 6.5 4.3 5.15M5.65 11.75 4.3 13.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </PremiumIconBase>
  );
}

export type PremiumIconName =
  | "film"
  | "edit"
  | "palette"
  | "diamond"
  | "globe"
  | "social"
  | "drone"
  | "web"
  | "brand"
  | "creative"
  | "product"
  | "camera"
  | "share";

const ICON_MAP: Record<
  PremiumIconName,
  (props: IconSvgProps) => ReactElement
> = {
  film: IconFilm,
  camera: IconFilm,
  edit: IconEdit,
  palette: IconPalette,
  diamond: IconDiamond,
  globe: IconGlobe,
  web: IconGlobe,
  social: IconSocial,
  drone: IconDrone,
  product: IconDrone,
  brand: IconBrand,
  creative: IconCreative,
  share: IconSocial,
};

export function PremiumIcon({
  name,
  className,
  ...props
}: IconSvgProps & { name: string }) {
  const key = (name in ICON_MAP ? name : "film") as PremiumIconName;
  const Icon = ICON_MAP[key] ?? IconFilm;
  return <Icon className={className} {...props} />;
}
