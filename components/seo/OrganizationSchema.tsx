import { BRAND } from "@/lib/brand";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BRAND.name,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}${BRAND.favicon}`,
    width: 512,
    height: 512,
  },
  sameAs: ["https://www.instagram.com/vextcreative"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND.name,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "tr-TR",
  publisher: {
    "@type": "Organization",
    name: BRAND.name,
    url: SITE_URL,
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/og-image.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "İstanbul",
    addressRegion: "Kartal",
    addressCountry: "TR",
  },
  areaServed: "TR",
  serviceType: [
    "Web Tasarım",
    "Video Prodüksiyon",
    "Grafik Tasarım",
    "Sosyal Medya Yönetimi",
    "Drone Çekimi",
  ],
};

export function OrganizationSchema() {
  const jsonLd = [organizationSchema, websiteSchema, professionalServiceSchema];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
