import type { JournalArticle } from "@/lib/journal/types";
import { getEnrichment } from "@/lib/journal/content/enrichment";
import { joinContent } from "@/lib/journal/utils";
import { estimateReadingMinutes } from "@/lib/journal/utils";
import * as reels from "@/lib/journal/content/reels-video-profesyonel-gorunum";
import * as kurgu from "@/lib/journal/content/video-kurgu-yaparken-yapilan-hatalar";
import * as marka from "@/lib/journal/content/marka-kimligi-nasil-olusturulur";
import * as sosyal from "@/lib/journal/content/sosyal-medya-icerikleri-neden-kalitesiz-gorunur";
import * as web from "@/lib/journal/content/web-tasariminda-kullanici-deneyimi";
import * as urun from "@/lib/journal/content/profesyonel-urun-cekimi-teknikleri";
import * as isik from "@/lib/journal/content/video-produksiyonunda-isik-kullanimi";
import * as drone from "@/lib/journal/content/drone-cekimlerinde-sinematik-gorunum";
import * as icMekan from "@/lib/journal/content/ic-mekan-reklam-cekimi-rehberi";
import * as sinematik from "@/lib/journal/content/sinematik-video-cekim-teknikleri";

type ArticleDef = Omit<JournalArticle, "readingTimeMinutes" | "content" | "faq"> & {
  content: JournalArticle["content"];
  faq: JournalArticle["faq"];
};

const DEFINITIONS: ArticleDef[] = [
  {
    slug: "sinematik-video-cekim-teknikleri",
    title: "Sinematik Video Çekimi Nasıl Yapılır? Profesyonel Rehber",
    metaDescription:
      "Sinematik video çekimi teknikleri: ışık, lens, hareket ve kurgu. İç ve dış mekan profesyonel video prodüksiyon rehberi | VEXT Medya.",
    keywords: [
      "sinematik video çekimi",
      "sinematik çekim",
      "profesyonel video prodüksiyon",
      "video prodüksiyon",
      "dijital medya ajansı",
    ],
    category: "Video Prodüksiyon",
    excerpt:
      "Sinematik görünüm tesadüf değildir: ışık, lens, hareket ve kurgu aynı dilde konuşmalıdır.",
    publishedAt: "2026-03-01T09:00:00+03:00",
    author: "VEXT Medya Ekibi",
    authorRole: "Video Prodüksiyon",
    coverImage: "/media/journal/sinematik-video-cekim-teknikleri.jpg",
    coverImageAlt:
      "Sinematik video çekimi eğitimi: kamera, lensler ve stüdyo ışık kurulumu",
    featured: true,
    relatedServiceHref: "/#hizmet-video-prod",
    relatedServiceLabel: "İç / Dış Mekan Video Prodüksiyon",
    relatedSlugs: [
      "video-produksiyonunda-isik-kullanimi",
      "ic-mekan-reklam-cekimi-rehberi",
      "drone-cekimlerinde-sinematik-gorunum",
    ],
    content: sinematik.content,
    faq: sinematik.faq,
  },
  {
    slug: "reels-video-profesyonel-gorunum",
    title: "Profesyonel Reels Video Teknikleri | Sinematik Kısa İçerik",
    metaDescription:
      "Profesyonel reels video teknikleri: ışık, hook, kurgu ve ses. Sosyal medya için sinematik dikey video rehberi | VEXT Medya dijital medya ajansı.",
    keywords: [
      "reels video",
      "profesyonel reels",
      "sosyal medya yönetimi",
      "video prodüksiyon",
      "içerik üretimi",
    ],
    category: "Video Prodüksiyon",
    excerpt:
      "Dikey formatta bile sinematik kalite mümkün — doğru kadraj, ışık ve ilk 3 saniye kuralı.",
    publishedAt: "2026-02-22T10:00:00+03:00",
    author: "VEXT Medya Ekibi",
    authorRole: "Sosyal Medya & Video",
    coverImage: "/media/journal/reels-video-profesyonel-gorunum.jpg",
    coverImageAlt:
      "Reels ve kısa video eğitimi: içerik analitiği ve yayın planlama arayüzü",
    relatedServiceHref: "/#hizmet-sosyal-medya",
    relatedServiceLabel: "Sosyal Medya Yönetimi",
    relatedSlugs: [
      "sosyal-medya-icerikleri-neden-kalitesiz-gorunur",
      "sinematik-video-cekim-teknikleri",
    ],
    content: reels.content,
    faq: reels.faq,
  },
  {
    slug: "video-kurgu-yaparken-yapilan-hatalar",
    title: "Video Kurgu Yaparken Yapılan Hatalar ve Profesyonel Çözümler",
    metaDescription:
      "Video kurgu sürecinde sık yapılan hatalar, renk düzenleme ve ses miksajı çözümleri. Post prodüksiyon rehberi | VEXT Medya.",
    keywords: [
      "video kurgu",
      "post prodüksiyon",
      "profesyonel video",
      "video prodüksiyon",
    ],
    category: "Post Prodüksiyon",
    excerpt:
      "Zayıf ritim, aşırı efekt ve ses dengesizliği en sık görülen üç kurgu hatasıdır.",
    publishedAt: "2026-02-15T11:00:00+03:00",
    author: "VEXT Medya Ekibi",
    authorRole: "Post Prodüksiyon",
    coverImage: "/media/journal/video-kurgu-yaparken-yapilan-hatalar.jpg",
    coverImageAlt:
      "Video kurgu eğitimi: zaman çizelgesi, renk düzenleme ve post prodüksiyon arayüzü",
    relatedServiceHref: "/#hizmet-post-prod",
    relatedServiceLabel: "Video Kurgu & Post Prodüksiyon",
    relatedSlugs: ["sinematik-video-cekim-teknikleri", "video-produksiyonunda-isik-kullanimi"],
    content: kurgu.content,
    faq: kurgu.faq,
  },
  {
    slug: "marka-kimligi-nasil-olusturulur",
    title: "Marka Kimliği Oluşturma Rehberi | Kurumsal Görsel Dil",
    metaDescription:
      "Marka kimliği nasıl oluşturulur? Logo, renk, tipografi ve görsel dil adımları. Profesyonel marka rehberi | VEXT Medya.",
    keywords: [
      "marka kimliği",
      "kurumsal kimlik",
      "grafik tasarım",
      "dijital medya ajansı",
    ],
    category: "Marka Kimliği",
    excerpt:
      "Güçlü marka kimliği logo değil; tutarlı bir görsel ve sözel sistemdir.",
    publishedAt: "2026-02-08T09:30:00+03:00",
    author: "VEXT Medya Ekibi",
    authorRole: "Marka Stratejisi",
    coverImage: "/media/journal/marka-kimligi-nasil-olusturulur.jpg",
    coverImageAlt:
      "Marka kimliği eğitimi: logo eskizleri, renk paleti ve tipografi sistemi",
    relatedServiceHref: "/#hizmet-marka",
    relatedServiceLabel: "Marka Kimliği Oluşturma",
    relatedSlugs: [
      "sosyal-medya-icerikleri-neden-kalitesiz-gorunur",
      "web-tasariminda-kullanici-deneyimi",
    ],
    content: marka.content,
    faq: marka.faq,
  },
  {
    slug: "sosyal-medya-icerikleri-neden-kalitesiz-gorunur",
    title: "Sosyal Medya İçerikleri Neden Kalitesiz Görünür?",
    metaDescription:
      "Sosyal medya içeriklerinin amatör görünme nedenleri ve profesyonel çözümler. Sosyal medya yönetimi ve içerik üretimi | VEXT.",
    keywords: [
      "sosyal medya yönetimi",
      "içerik üretimi",
      "profesyonel video",
      "dijital medya ajansı",
    ],
    category: "Sosyal Medya",
    excerpt:
      "Düşük ışık, tutarsız filtreler ve zayıf planlama içerikleri anında ucuz gösterir.",
    publishedAt: "2026-01-28T14:00:00+03:00",
    author: "VEXT Medya Ekibi",
    authorRole: "Sosyal Medya",
    coverImage: "/media/journal/sosyal-medya-icerikleri-neden-kalitesiz-gorunur.jpg",
    coverImageAlt:
      "Sosyal medya eğitimi: içerik kalitesi, metrikler ve planlama çalışma alanı",
    relatedServiceHref: "/#hizmet-sosyal-medya",
    relatedServiceLabel: "Sosyal Medya Yönetimi",
    relatedSlugs: ["reels-video-profesyonel-gorunum", "marka-kimligi-nasil-olusturulur"],
    content: sosyal.content,
    faq: sosyal.faq,
  },
  {
    slug: "web-tasariminda-kullanici-deneyimi",
    title: "Web Tasarımında Kullanıcı Deneyimi (UX) Rehberi",
    metaDescription:
      "Web tasarımında kullanıcı deneyimi: hız, navigasyon, mobil uyum ve dönüşüm. Modern web tasarımı rehberi | VEXT Medya.",
    keywords: [
      "web tasarımı",
      "kullanıcı deneyimi",
      "ux tasarım",
      "dijital medya ajansı",
    ],
    category: "Web Tasarım",
    excerpt:
      "Güzel arayüz yeterli değil; kullanıcı yolculuğu ve performans dönüşümü belirler.",
    publishedAt: "2026-01-20T10:00:00+03:00",
    author: "VEXT Medya Ekibi",
    authorRole: "Web Tasarım",
    coverImage: "/media/journal/web-tasariminda-kullanici-deneyimi.jpg",
    coverImageAlt:
      "Web tasarım UX eğitimi: wireframe, responsive mockup ve kod editörü",
    relatedServiceHref: "/#hizmet-web",
    relatedServiceLabel: "Web Tasarımı",
    relatedSlugs: ["marka-kimligi-nasil-olusturulur"],
    content: web.content,
    faq: web.faq,
  },
  {
    slug: "profesyonel-urun-cekimi-teknikleri",
    title: "Profesyonel Ürün Çekimi Teknikleri | E-Ticaret Görsel Rehberi",
    metaDescription:
      "Profesyonel ürün çekimi: ışık, arka plan, açı ve retouch. E-ticaret ve reklam için görsel prodüksiyon | VEXT Medya.",
    keywords: [
      "ürün çekimi",
      "reklam çekimi",
      "grafik tasarım",
      "profesyonel video",
    ],
    category: "Grafik Tasarım",
    excerpt:
      "Ürünün değerini yansıtan çekim; doğru ışık ve arka plan seçimiyle başlar.",
    publishedAt: "2026-01-12T09:00:00+03:00",
    author: "VEXT Medya Ekibi",
    authorRole: "Görsel Prodüksiyon",
    coverImage: "/media/journal/profesyonel-urun-cekimi-teknikleri.jpg",
    coverImageAlt:
      "Ürün çekimi eğitimi: ışık tenti, katman paneli ve stüdyo kompozisyonu",
    relatedServiceHref: "/#hizmet-grafik",
    relatedServiceLabel: "Grafik Tasarım",
    relatedSlugs: ["ic-mekan-reklam-cekimi-rehberi", "video-produksiyonunda-isik-kullanimi"],
    content: urun.content,
    faq: urun.faq,
  },
  {
    slug: "video-produksiyonunda-isik-kullanimi",
    title: "Video Prodüksiyonunda Işık Kullanımı | Sinematik Aydınlatma",
    metaDescription:
      "Video prodüksiyonunda ışık kurulumu: üç nokta aydınlatma, doğal ışık ve sinematik efekt. Profesyonel çekim rehberi | VEXT.",
    keywords: [
      "video prodüksiyon",
      "sinematik çekim",
      "profesyonel video",
      "iç mekan reklam çekimi",
    ],
    category: "Video Prodüksiyon",
    excerpt:
      "Işık, videonun duygusunu belirleyen en güçlü araçtır — doğru kurulum fark yaratır.",
    publishedAt: "2026-01-05T11:30:00+03:00",
    author: "VEXT Medya Ekibi",
    authorRole: "Işık & Kamera",
    coverImage: "/media/journal/video-produksiyonunda-isik-kullanimi.jpg",
    coverImageAlt:
      "Video prodüksiyon ışık eğitimi: üç nokta aydınlatma ve stüdyo ekipmanları",
    relatedServiceHref: "/#hizmet-video-prod",
    relatedServiceLabel: "Video Prodüksiyon",
    relatedSlugs: [
      "sinematik-video-cekim-teknikleri",
      "ic-mekan-reklam-cekimi-rehberi",
    ],
    content: isik.content,
    faq: isik.faq,
  },
  {
    slug: "drone-cekimlerinde-sinematik-gorunum",
    title: "Drone Çekimlerinde Sinematik Görünüm | Hava Çekimi Rehberi",
    metaDescription:
      "Drone ile sinematik hava çekimi: hareket, ışık ve kurgu ipuçları. Profesyonel drone prodüksiyon rehberi | VEXT Medya.",
    keywords: [
      "drone çekimi",
      "sinematik çekim",
      "video prodüksiyon",
      "profesyonel video",
    ],
    category: "Video Prodüksiyon",
    excerpt:
      "Yavaş, kontrollü hareket ve doğru irtifa sinematik drone görüntüsünün anahtarıdır.",
    publishedAt: "2025-12-20T09:00:00+03:00",
    author: "VEXT Medya Ekibi",
    authorRole: "Hava Çekimi",
    coverImage: "/media/journal/drone-cekimlerinde-sinematik-gorunum.jpg",
    coverImageAlt:
      "Drone sinematik çekim eğitimi: hava görüntüsü monitörü ve kontrol istasyonu",
    relatedServiceHref: "/#hizmet-video-prod",
    relatedServiceLabel: "Video Prodüksiyon",
    relatedSlugs: ["sinematik-video-cekim-teknikleri", "video-produksiyonunda-isik-kullanimi"],
    content: drone.content,
    faq: drone.faq,
  },
  {
    slug: "ic-mekan-reklam-cekimi-rehberi",
    title: "İç Mekan Reklam Çekimi Rehberi | Tanıtım Videosu",
    metaDescription:
      "İç mekan reklam ve tanıtım videosu çekimi: mekân analizi, ışık, ses ve marka entegrasyonu. Profesyonel reklam çekimi | VEXT.",
    keywords: [
      "reklam çekimi",
      "iç mekan video",
      "video prodüksiyon",
      "profesyonel video",
    ],
    category: "Video Prodüksiyon",
    excerpt:
      "Ofis, mağaza veya stüdyo — mekânın hikâyesi doğru planla anlatılır.",
    publishedAt: "2025-12-10T10:00:00+03:00",
    author: "VEXT Medya Ekibi",
    authorRole: "Reklam Prodüksiyon",
    coverImage: "/media/journal/ic-mekan-reklam-cekimi-rehberi.jpg",
    coverImageAlt:
      "İç mekan reklam çekimi eğitimi: kamera, slider ve mekân ışık kurulumu",
    relatedServiceHref: "/#hizmet-video-prod",
    relatedServiceLabel: "İç / Dış Mekan Video Prodüksiyon",
    relatedSlugs: [
      "sinematik-video-cekim-teknikleri",
      "profesyonel-urun-cekimi-teknikleri",
    ],
    content: icMekan.content,
    faq: icMekan.faq,
  },
];

export const JOURNAL_ARTICLES: JournalArticle[] = DEFINITIONS.map((def) => {
  const content = joinContent(def.content, getEnrichment(def.slug));
  return {
    ...def,
    content,
    readingTimeMinutes: estimateReadingMinutes(content),
  };
});
