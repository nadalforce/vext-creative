import type { MediaCategory } from "@/lib/media-server";

export const CONTACT = {
  phone: "+90 552 104 26 94",
  phoneHref: "tel:+905521042694",
  email: "info@vextmedya.com",
  emailHref: "mailto:info@vextmedya.com",
  whatsapp: "https://wa.me/905521042694",
  instagram: "https://www.instagram.com/vextmedya",
  officeLabel: "OFİS",
  officeAddress: "İstanbul / Kartal / Yalı Mah.",
  location: "İstanbul / Kartal / Yalı Mah.",
} as const;

export const SERVICES = [
  {
    id: "video-prod",
    title: "İç / Dış Mekan Video Prodüksiyon",
    description:
      "Profesyonel iç ve dış mekan video çekimleri gerçekleştiriyoruz.",
    showcaseDescription:
      "İç ve dış mekan prodüksiyonlarını yalnızca çekmiyor; kurgu, renk, ses ve sinematik anlatımla markanız için etkileyici reklam filmlerine dönüştürüyoruz. Drone çekimleri, emlak tanıtım videoları, işletme, kafe ve kurum / kuruluş çekimleriyle markanızın dijital görünümünü profesyonel şekilde güçlendiriyoruz.",
    icon: "film" as const,
    mediaKey: "video-prod" as MediaCategory,
    href: "#hizmet-video-prod",
  },
  {
    id: "post-prod",
    title: "Video Kurgu & Post Prodüksiyon",
    description:
      "Videolarınızı kurgu, renk ve ses düzenlemeleriyle tamamlıyoruz.",
    showcaseDescription:
      "Adobe Premiere Pro, After Effects ve DaVinci Resolve tabanlı profesyonel post prodüksiyon süreçleriyle içeriklerinizi sinematik bir yapıya dönüştürüyoruz. Kurgu, renk düzenleme, ses tasarımı, VFX ve dinamik geçişlerle videolarınızı dijital platformlara hazır güçlü reklam filmlerine dönüştürüyoruz.",
    icon: "edit" as const,
    mediaKey: "post-prod" as MediaCategory,
    href: "#hizmet-post-prod",
  },
  {
    id: "grafik",
    title: "Grafik Tasarım",
    description:
      "Markanıza özel dijital ve basılı tasarımlar üretiyoruz.",
    showcaseDescription:
      "Adobe Photoshop, Illustrator ve profesyonel tasarım araçlarıyla markanıza özel dijital ve basılı görseller üretiyoruz. Sosyal medya tasarımlarından reklam kreatiflerine, kurumsal materyallerden modern görsel kampanyalara kadar tüm süreci premium bir tasarım diliyle yönetiyoruz.",
    icon: "palette" as const,
    mediaKey: "grafik" as MediaCategory,
    href: "#hizmet-grafik",
  },
  {
    id: "marka",
    title: "Marka Kimliği Oluşturma",
    description:
      "Markanıza özgün ve güçlü bir görsel kimlik oluşturuyoruz.",
    showcaseDescription:
      "Adobe Illustrator, Photoshop ve modern tasarım sistemleriyle markanıza özel güçlü bir görsel kimlik inşa ediyoruz. Logo tasarımından tipografi seçimine, renk paletlerinden kurumsal marka diline kadar tüm süreci estetik ve stratejik bir yaklaşımla yönetiyoruz.",
    icon: "diamond" as const,
    mediaKey: "marka" as MediaCategory,
    href: "#hizmet-marka",
  },
  {
    id: "web",
    title: "Web Tasarımı",
    description:
      "Modern, hızlı ve kullanıcı odaklı web siteleri tasarlıyoruz.",
    showcaseDescription:
      "İşletmenize özel modern web siteleri geliştiriyor; Next.js, React ve güncel frontend teknolojileriyle hızlı, SEO uyumlu ve responsive dijital deneyimler oluşturuyoruz. UI/UX tasarımından optimize edilmiş kullanıcı akışlarına, mobil performanstan yüksek hızlı render altyapılarına kadar tüm süreci modern yazılım standartlarıyla yönetiyoruz.",
    icon: "globe" as const,
    mediaKey: "web" as MediaCategory,
    href: "#hizmet-web",
  },
  {
    id: "sosyal-medya",
    title: "Sosyal Medya Yönetimi",
    description:
      "Markanızın sosyal medya süreçlerini profesyonel şekilde yönetiyoruz.",
    showcaseDescription:
      "Markanızın dijital dünyadaki görünürlüğünü stratejik içerik üretimi, profesyonel sosyal medya yönetimi ve performans odaklı reklam çalışmalarıyla güçlendiriyoruz.\n\nMeta (Facebook & Instagram) reklam yönetimi, hedef kitle analizi, içerik planlaması, kreatif tasarım, reels stratejileri ve dönüşüm odaklı kampanyalar ile markanızı daha fazla kişiye ulaştırıyoruz.\n\nSadece paylaşım yapmak değil; etkileşim, güven ve satış odaklı sürdürülebilir bir dijital marka kimliği oluşturuyoruz.",
    icon: "social" as const,
    mediaKey: "sosyal-medya" as MediaCategory,
    href: "#hizmet-sosyal-medya",
    cta: "Bölüme Git",
  },
] as const;

const SHOWCASE_TAGLINES = [
  "Mekân · Işık · Hareket",
  "Kurgu · Renk · Ses",
  "Form · Doku · Denge",
  "Kimlik · İmza · Hikâye",
  "Arayüz · Akış · Derinlik",
  "Kanal · İçerik · Büyüme",
] as const;

export const SERVICE_SHOWCASES = SERVICES.map((service, index) => ({
  ...service,
  sectionId: `hizmet-${service.id}`,
  reverse: index % 2 === 1,
  tagline: SHOWCASE_TAGLINES[index] ?? SHOWCASE_TAGLINES[0],
}));

export const NAV_LINKS = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#services", label: "Hizmetler" },
  { href: "/journal", label: "Yazılar" },
  { href: "#about", label: "Hakkımızda" },
  { href: "#contact", label: "İletişim" },
] as const;
