import { PremiumIcon, type PremiumIconName } from "@/components/icons/PremiumIcons";

type AboutCapabilityIconProps = {
  name: PremiumIconName;
  className?: string;
};

export function AboutCapabilityIcon({
  name,
  className = "h-4 w-4",
}: AboutCapabilityIconProps) {
  return <PremiumIcon name={name} className={className} />;
}
