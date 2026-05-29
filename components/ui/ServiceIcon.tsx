import { PremiumIcon } from "@/components/icons/PremiumIcons";

type ServiceIconProps = {
  name: string;
  className?: string;
};

export function ServiceIcon({ name, className = "w-6 h-6" }: ServiceIconProps) {
  return <PremiumIcon name={name} className={className} />;
}
