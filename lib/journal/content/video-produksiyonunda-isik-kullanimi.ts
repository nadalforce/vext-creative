import type { ContentBlock } from "@/lib/journal/types";
import type { JournalFAQ } from "@/lib/journal/types";
import { joinContent, section, bulletList, paragraph, faq as defineFaq } from "./_shared";

export const content: ContentBlock[] = joinContent(
  [{ type: "p" as const, text: "Video prodüksiyonunda ışık, duyguyu belirleyen ana araçtır. Kamera ve lens doğru ışık olmadan potansiyeline ulaşamaz." }, { type: "p" as const, text: "İç ve dış mekanda farklı kurallar geçerlidir. Sinematik çekim hedefi için ışık planı çekim öncesi yazılmalıdır." }, { type: "p" as const, text: "Bu rehber, işletme sahiplerinin ekibiyle aynı dili konuşmasını sağlar." }],
  section("uc-nokta", "Üç Nokta Aydınlatma", [
      "Ana ışık, dolgu ve arka ışık portre ve ürün için temeldir. Oranlar yüze göre ayarlanır.",
      "Sert ışık drama yaratır; yumuşak ışık güven verir. Marka tonuna göre seçilir.",
      "Profesyonel video setlerinde ışık diagramı shot list ile birlikte durur.",
    ]),
  section("dogal", "Doğal Işık", [
      "Altın saat dış çekimde idealdir. Pencere ışığı iç mekanda difüze edilmelidir.",
      "Karışık renk sıcaklığı cilt tonunu bozar. Tungsten ve gün ışığı karışımına dikkat.",
      "Reklam çekimi penceresinde blackout ile kontrol mümkündür.",
    ]),
  section("stüdyo", "Stüdyo ve Modifiye", [
      "Softbox ve octabox farklı yumuşaklık verir. Reflektör ekonomik dolgu sağlar.",
      "Yeşil ekran aydınlatması ürün çekiminden ayrı düşünülmelidir.",
      "Drone çekiminde güneş açısı gölge yönünü belirler.",
    ]),
  section("hata-isik", "Sık Hatalar", [
      "Aşırı arka ışık yüzü karartır. Ters silüet mesajı gizler.",
      "Flicker ve banding yapay ışıkta görülür; shutter açısı ayarlanır.",
      "Post prodüksiyonda kurtarılamayan underexposure güveni düşürür.",
    ]),
  section("sonuc-isik", "Sonuç", [
      "Işık yatırımı, lens yatırımı kadar değerlidir.",
      "VEXT Creative çekim günü ışık ekibini yönetir.",
      "Sinematik prodüksiyonunuz için bizimle iletişime geçin.",
    ])
);

export const faq: JournalFAQ[] = defineFaq([
  {
    "question": "LED mi tungsten mi?",
    "answer": "LED esnek ve verimli; renk doğruluğu modeline göre değişir. Proje ihtiyacına göre seçilir."
  },
  {
    "question": "VEXT Creative ile çalışmak ne katar?",
    "answer": "Konseptten teslimata aynı görsel dil, profesyonel ekip ve ölçülebilir süreç. Video prodüksiyon, sosyal medya yönetimi ve marka kimliği paralel yürütülür."
  }
]);
