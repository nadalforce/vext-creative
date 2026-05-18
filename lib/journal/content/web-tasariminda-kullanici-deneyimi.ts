import type { ContentBlock } from "@/lib/journal/types";
import type { JournalFAQ } from "@/lib/journal/types";
import { joinContent, section, bulletList, paragraph, faq as defineFaq } from "./_shared";

export const content: ContentBlock[] = joinContent(
  [{ type: "p" as const, text: "Web tasarımında kullanıcı deneyimi, ziyaretçinin hedefe ne kadar kolay ulaştığını ölçer. Güzel arayüz tek başına dönüşüm getirmez." }, { type: "p" as const, text: "Hız, okunabilirlik ve mobil uyum Google sıralamasını da etkiler. Dijital medya ajansı bakışı UX'i SEO ile birleştirir." }, { type: "p" as const, text: "Bu yazıda işletmeler için uygulanabilir UX prensiplerini paylaşıyoruz." }],
  section("nav", "Navigasyon ve Bilgi Mimarisi", [
      "Menü sezgisel olmalı; kullanıcı üç tıklamada aradığını bulmalıdır.",
      "Hizmet sayfaları video prodüksiyon ve sosyal medya yönetimi gibi net başlıklarla ayrılmalıdır.",
      "Journal ve iletişim gibi güven sayfaları görünür olmalıdır.",
    ]),
  section("hiz", "Hız ve Core Web Vitals", [
      "Görsel optimizasyonu ve lazy load şarttır. Ağır video dosyaları kontrollü embed edilmelidir.",
      "Sunucu yanıt süresi ve önbellek ayarları profesyonel web tasarımının parçasıdır.",
      "Mobil öncelikli indeksleme artık varsayılandır.",
    ]),
  section("mobil", "Mobil Deneyim", [
      "Dokunma alanları yeterli büyüklükte olmalıdır. Formlar kısa tutulmalıdır.",
      "Dikey kaydırmada CTA görünür kalmalıdır. Proje Başlat gibi butonlar erişilebilir olmalıdır.",
      "Marka kimliği mobilde de tutarlı kalmalıdır.",
    ]),
  section("icerik", "İçerik ve Okunabilirlik", [
      "Başlık hiyerarşisi H1–H3 düzenli olmalıdır. Paragraflar nefes almalıdır.",
      "Grafik tasarım boşluk kullanımı yorgunluğu azaltır. Kontrast erişilebilirlik için kritiktir.",
      "Güven unsurları: referans, ekip, iletişim bilgisi.",
    ]),
  section("sonuc-web", "Sonuç", [
      "UX yatırımı dönüşümü artırır. VEXT Creative web tasarımını marka kimliği ile birlikte kurgular.",
      "Hızlı, anlaşılır ve sinematik bir site güven verir.",
      "Web projenizi birlikte planlayalım.",
    ])
);

export const faq: JournalFAQ[] = defineFaq([
  {
    "question": "UX ve UI farkı?",
    "answer": "UI görsel arayüz; UX tüm etkileşim deneyimidir."
  },
  {
    "question": "SEO ile ilişkisi?",
    "answer": "Hız ve yapılandırılmış içerik sıralamayı destekler."
  },
  {
    "question": "VEXT Creative ile çalışmak ne katar?",
    "answer": "Konseptten teslimata aynı görsel dil, profesyonel ekip ve ölçülebilir süreç. Video prodüksiyon, sosyal medya yönetimi ve marka kimliği paralel yürütülür."
  }
]);
