import type { ContentBlock } from "@/lib/journal/types";
import type { JournalFAQ } from "@/lib/journal/types";
import { joinContent, section, bulletList, paragraph, faq as defineFaq } from "./_shared";

export const content: ContentBlock[] = joinContent(
  [{ type: "p" as const, text: "Video kurgu, çekimden sonra hikâyenin gerçekten anlatıldığı masadır. Ham görüntü güçlü olsa bile zayıf montaj, markanızı amatör gösterir ve izleyici güvenini düşürür." }, { type: "p" as const, text: "Post prodüksiyon sürecinde ritim, ses ve renk aynı anda düşünülmelidir. VEXT Creative ekibi, profesyonel video prodüksiyon çıktısını platforma göre optimize ederek teslim eder." }, { type: "p" as const, text: "Bu rehberde en sık yapılan kurgu hatalarını ve sinematik çekim kalitesini koruyan çözümleri sade Türkçe ile paylaşıyoruz." }],
  section("ritim-sure", "Ritim ve Süre Dengesi", [
      "Her sahnenin aynı uzunlukta kalması izleyicide yorgunluk yaratır. Mesaj yoğun sahneler kısa, duygusal sahneler nefes alacak kadar uzun olmalıdır.",
      "Sosyal medya yönetimi için üretilen kısa videolarda bile ritim, kaydırma oranını doğrudan etkiler. Profesyonel video kurgu, platform ritmine saygı duyar.",
      "Jump cut plansız kullanıldığında ucuz enerji verir; bilinçli kullanıldığında reels video temposunu yükseltir.",
    ]),
  section("renk-ses", "Renk Düzenleme ve Ses Miksajı", [
      "Aşırı filtre ve doygunluk, sinematik çekim emeğini gizler. Color grading marka kimliği renklerine yaklaşmalı, cilt tonlarını bozmamalıdır.",
      "Konuşma sesi müziğin altında kaybolursa mesaj kaybolur. İçerik üretimi sürecinde ses, görüntü kadar kritiktir.",
      "Ortam gürültüsü temizlenmeden yayınlanan işler, dijital medya ajansı kalitesinden uzaklaşır.",
    ], [
      { id: "muzik-lisans", title: "Müzik ve lisans", paragraphs: [
          "Telifsiz müzik seçimi yasal güvenlik sağlar. Tempo uyumsuzluğu ise duygusal kopukluk yaratır.",
        ] },
    ]),
  section("efekt-story", "Efekt ve Hikâye Bütünlüğü", [
      "Geçiş efektleri hikâyeye hizmet etmelidir. Her sahneye farklı stil uygulamak marka tutarlılığını kırar.",
      "Grafik tasarım katmanları kurgunun üstüne bindiğinde okunabilirlik test edilmelidir. Web tasarımındaki sadelik ilkesi videoda da geçerlidir.",
      "Drone çekimi veya iç mekan reklam çekimi gibi güçlü sahneler, zayıf montajla birleşirse potansiyel kaybolur.",
    ]),
  section("platform-export", "Platforma Göre Export", [
      "Tek bir master dosya her platform için yeterli değildir. Dikey, kare ve yatay kesitler önceden planlanmalıdır.",
      "Sıkıştırma ayarları kaliteyi düşürür; doğru codec ve bitrate profesyonel video algısını korur.",
      "Altyazı ve güvenli alan, reels video ve feed formatlarında ayrı kontrol edilmelidir.",
    ]),
  section("sonuc", "Profesyonel Post Prodüksiyon Kararı", [
      "Kurgu masası, markanızın son imza noktasıdır. Deneyimli ekip, hataları çekim sonrası bile düzeltebilir.",
      "VEXT Creative, video kurgu sürecini marka hedeflerinize göre yönetir ve teslim setlerini netleştirir.",
      "Projenizi birlikte planlayarak sinematik çekim yatırımınızın karşılığını alın.",
    ])
);

export const faq: JournalFAQ[] = defineFaq([
  {
    "question": "En yaygın kurgu hatası nedir?",
    "answer": "Gereksiz uzun sahneler ve zayıf ritim. İzleyici ilk saniyelerde karar verir."
  },
  {
    "question": "Renk düzenleme şart mı?",
    "answer": "Profesyonel görünüm için evet. Ham görüntü tek başına yeterli değildir."
  },
  {
    "question": "Ses neden ihmal edilir?",
    "answer": "Görüntü öncelikli düşünülür; oysa kötü ses güveni düşürür."
  },
  {
    "question": "VEXT Creative ile çalışmak ne katar?",
    "answer": "Konseptten teslimata aynı görsel dil, profesyonel ekip ve ölçülebilir süreç. Video prodüksiyon, sosyal medya yönetimi ve marka kimliği paralel yürütülür."
  }
]);
