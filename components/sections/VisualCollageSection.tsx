import { VisualCollage } from "@/components/sections/VisualCollage";

/** Atölye Kareleri — dedicated gallery uploads only */
const COLLAGE_IMAGES = [
  "/media/atolye/atolye-01.png",
  "/media/atolye/atolye-02.png",
  "/media/atolye/atolye-03.png",
  "/media/atolye/atolye-04.png",
  "/media/atolye/atolye-05.png",
  "/media/atolye/atolye-06.png",
  "/media/atolye/atolye-07.png",
  "/media/atolye/atolye-08.png",
] as const;

export function VisualCollageSection() {
  return <VisualCollage images={[...COLLAGE_IMAGES]} />;
}
