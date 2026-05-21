import { SERVICE_SHOWCASES } from "@/lib/constants";
import { getMediaByCategory } from "@/lib/media-server";
import { MEDIA, mergeMedia, padMediaImages } from "@/lib/media-manifest";
import { ServiceShowcaseSection } from "@/components/sections/ServiceShowcaseSection";

const FALLBACK: Record<string, readonly string[]> = {
  "video-prod": MEDIA.videoProd,
  "post-prod": MEDIA.postProd,
  grafik: MEDIA.grafik,
  marka: MEDIA.marka,
  web: MEDIA.web,
  "sosyal-medya": MEDIA.sosyalMedya,
};

function imagesForService(serviceId: string, mediaKey: string): string[] {
  const merged = mergeMedia(
    getMediaByCategory(mediaKey as Parameters<typeof getMediaByCategory>[0]),
    FALLBACK[mediaKey] ?? MEDIA.videoProd
  );

  if (
    serviceId === "video-prod" ||
    serviceId === "post-prod" ||
    serviceId === "grafik" ||
    serviceId === "marka" ||
    serviceId === "web" ||
    serviceId === "sosyal-medya"
  ) {
    return merged.length > 0 ? [merged[0]] : [];
  }

  return padMediaImages(merged, 3);
}

export function ServiceShowcases() {
  return (
    <>
      {SERVICE_SHOWCASES.map((service) => (
        <ServiceShowcaseSection
          key={service.id}
          sectionId={service.sectionId}
          title={service.title}
          description={
            (
              service as {
                showcaseDescription?: string;
                description: string;
              }
            ).showcaseDescription ?? service.description
          }
          tagline={service.tagline}
          icon={service.icon}
          images={imagesForService(service.id, service.mediaKey)}
        />
      ))}
    </>
  );
}
