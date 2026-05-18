import { SITE_URL } from "@/lib/journal/site";
import { BRAND } from "@/lib/brand";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND.name,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/android-chrome-512x512.png`,
    width: 512,
    height: 512,
  },
  sameAs: [
    "https://www.instagram.com/vextcreative",
  ],
};

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
