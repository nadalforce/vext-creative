import type { ContentBlock } from "@/lib/journal/types";
import type { JournalFAQ } from "@/lib/journal/types";
import { joinContent, section, bulletList, paragraph, faq as defineFaq } from "./_shared";

export const content: ContentBlock[] = joinContent(
  [{ type: "p" as const, text: "Sosyal medyada kalite algısı hızlı oluşur. Telefon çekimi bile profesyonel görünebilir; tersi de mümkündür." }, { type: "p" as const, text: "Düşük ışık, tutarsız filtre ve plansız paylaşım markayı ucuz gösterir. Sosyal medya yönetimi bu riski süreçle yönetir." }, { type: "p" as const, text: "İşletme sahipleri için anlaşılır bir dille, kalitesiz görünmenin nedenlerini ve çözümlerini derledik." }],
  section("nedenler", "Kalitesiz Görünmenin Başlıca Nedenleri", [
      "Yetersiz ışık yüzü ve ürünü düzleştirir. Sinematik çekim planı olmadan çekilen sahneler düz kalır.",
      "Her paylaşımda farklı filtre marka kimliğini dağıtır. Grafik tasarım şablonları kullanılmazsa karmaşa artar.",
      "Düşük çözünürlük ve aşırı sıkıştırma detayı öldürür. Profesyonel video export ayarları ihmal edilir.",
    ]),
  section("plan", "Plan ve Takvim Disiplini", [
      "Plansız sıklık kaliteyi düşürür. İçerik üretimi haftalık tema ile yürütülmelidir.",
      "Çekim günü toplu üretim verimi artırır. Reels video ve feed görselleri aynı günde planlanabilir.",
      "Dijital medya ajansı ritmi kampanya hedeflerine bağlar.",
    ]),
  section("uretim", "Profesyonel Üretim Katmanı", [
      "Kamera, ses ve kurgu üçlüsü ayrılmamalıdır. Video kurgu zayıfsa çekim boşa gider.",
      "Ürün ve mekân çekimlerinde reklam çekimi standardı hedeflenmelidir.",
      "Drone çekimi veya stüdyo sahneleri feed'e premium nefes katar.",
    ]),
  section("marka-uyum", "Marka Uyumu ve Güven", [
      "Tutarlı renk ve tipografi güven oluşturur. Web tasarımı ile sosyal profil aynı dili konuşmalıdır.",
      "Kullanıcı yorumlarına görsel kalite yansır. Kaliteli içerik etkileşimi besler.",
      "VEXT Medya sosyal medya yönetimini prodüksiyonla birleştirir.",
    ]),
  section("sonuc-sosyal", "Sonuç", [
      "Kalite tesadüf değil süreçtir. Küçük iyileştirmeler bile algıyı değiştirir.",
      "Profesyonel destek, zaman ve tutarlılık kazandırır.",
      "İletişime geçerek içerik üretim modelinizi birlikte kuralım.",
    ])
);

export const faq: JournalFAQ[] = defineFaq([
  {
    "question": "Her gün paylaşım şart mı?",
    "answer": "Hayır; tutarlı ve planlı ritim daha değerlidir."
  },
  {
    "question": "Telefon yeterli mi?",
    "answer": "Bazı formatlar için evet; kampanya dönemlerinde profesyonel prodüksiyon fark yaratır."
  },
  {
    "question": "VEXT Medya ile çalışmak ne katar?",
    "answer": "Konseptten teslimata aynı görsel dil, profesyonel ekip ve ölçülebilir süreç. Video prodüksiyon, sosyal medya yönetimi ve marka kimliği paralel yürütülür."
  }
]);
