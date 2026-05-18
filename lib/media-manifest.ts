/** Static media paths — always used as fallback so visuals never disappear */
export const MEDIA = {
  brandIdentity: "/logo/vext-logo.png",
  ofis: [
    "/media/ofis/ofis-01.png",
    "/media/ofis/ofis-02.png",
    "/media/ofis/ofis-03.png",
    "/media/ofis/ofis-04.png",
    "/media/ofis/ofis-05.png",
    "/media/ofis/ofis-06.png",
    "/media/ofis/ofis-07.png",
    "/media/ofis/ofis-08.png",
  ],
  studioProd: "/media/ofis/ofis-08.png",
  videoProd: ["/media/video-prod/prod-01.png"] as const,
  postProd: ["/media/post-prod/edit-01.png"] as const,
  grafik: ["/media/grafik/grafik-01.png"] as const,
  web: ["/images/web-tasarim-nextjs.png"] as const,
  marka: ["/media/marka/marka-01.png"] as const,
  sosyalMedya: ["/media/sosyal-medya/sosyal-01.png"] as const,
} as const;

export function mergeMedia(serverPaths: string[], fallback: readonly string[]) {
  const base = serverPaths.length > 0 ? serverPaths : [...fallback];
  return base.length > 0 ? base : [...fallback];
}

/** Repeat images so 2-up folders still fill 3-up editorial layouts */
export function padMediaImages(images: string[], min = 3): string[] {
  if (images.length === 0) return [];
  if (images.length >= min) return images;
  const out = [...images];
  let i = 0;
  while (out.length < min) {
    out.push(images[i % images.length]);
    i += 1;
  }
  return out;
}
