import type { ContentBlock } from "@/lib/journal/types";
import type { JournalFAQ } from "@/lib/journal/types";
import { joinContent, section, bulletList, paragraph, faq as defineFaq } from "./_shared";

export const content: ContentBlock[] = joinContent(
  [{ type: "p" as const, text: "Sinematik video çekimi, izleyiciyi sahneye davet eden görsel anlatımdır. Marka filmlerinden ürün tanıtımlarına aynı prensipler geçerlidir." }, { type: "p" as const, text: "Işık, kompozisyon, hareket ve ses birlikte çalışmalıdır. Profesyonel video prodüksiyon bu dörtlüyü planlar." }, { type: "p" as const, text: "VEXT Creative olarak iç ve dış mekan projelerinde sinematik dili sürdürülebilir kılıyoruz." }],
  section("plan", "Çekim Öncesi Planlama", [
      "Shot list ve storyboard zamanı sahada korur. Mekân keşfi ışık yönünü önceden gösterir.",
      "Lens ve kamera hareketi sahneye göre seçilir. Gimbal, slider veya tripod bilinçli tercih edilir.",
      "Ses koşulları çekim günü sürprizini azaltır.",
    ]),
  section("isik-sin", "Işık ve Kompozisyon", [
      "Üç nokta aydınlatma ve pratik ışıklar derinlik kurar. Negatif alan premium kadraj sağlar.",
      "Ön plan–arka plan ayrımı sinematik çekim algısını güçlendirir.",
      "Renk sıcaklığı tutarlılığı grade sürecini kolaylaştırır.",
    ]),
  section("hareket", "Kamera Hareketi", [
      "Yavaş ve sürekli hareket güven verir. El kamerası yalnızca bilinçli enerji için kullanılır.",
      "Drone çekimi açılış ve kapanışlarda ölçek katar.",
      "İç mekan reklam çekimi dar alanda hareket ekonomisini gerektirir.",
    ]),
  section("kurgu-sin", "Kurgu ve Post Prodüksiyon", [
      "Color grading duygusal tonu sabitler. Ses miksajı konuşmayı öne çıkarır.",
      "Reels video ve ana film için ayrı ritim düşünülebilir.",
      "Video kurgu zayıfsa çekim yatırımı tam karşılık vermez.",
    ]),
  section("ajans", "Ajans İş Birliği", [
      "Dijital medya ajansı bakışı prodüksiyonu kampanyaya bağlar.",
      "Marka kimliği ve grafik tasarım katmanları teslimde uyumludur.",
      "Web tasarımı ve sosyal medya yönetimi aynı görsel dilde yürür.",
    ]),
  section("sonuc-sin", "Sonuç", [
      "Sinematik dil, markanızı hatırlanır kılar.",
      "VEXT Creative ekibiyle projenizi birlikte planlayın.",
      "Profesyonel video yolculuğunuza bugün başlayın.",
    ])
);

export const faq: JournalFAQ[] = defineFaq([
  {
    "question": "24 fps mi 30 fps mi?",
    "answer": "Sinematik his için genelde 24 fps; spor ve slow-motion için daha yüksek fps ayrı planlanır."
  },
  {
    "question": "İç mekanda sinematik görünüm mümkün mü?",
    "answer": "Evet; kontrollü ışık ve kadraj ile mümkündür."
  },
  {
    "question": "VEXT Creative ile çalışmak ne katar?",
    "answer": "Konseptten teslimata aynı görsel dil, profesyonel ekip ve ölçülebilir süreç. Video prodüksiyon, sosyal medya yönetimi ve marka kimliği paralel yürütülür."
  }
]);
