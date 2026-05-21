import type { ContentBlock } from "@/lib/journal/types";
import type { JournalFAQ } from "@/lib/journal/types";
import { joinContent, section, bulletList, paragraph, faq as defineFaq } from "./_shared";

export const content: ContentBlock[] = joinContent(
  [{ type: "p" as const, text: "Profesyonel ürün çekimi, e-ticaret ve reklamın görsel kanıtıdır. Işık, açı ve arka plan satın alma kararını etkiler." }, { type: "p" as const, text: "Amatör görüntü, ürün kalitesine olan güveni zedeler. Sinematik çekim disiplini ürün kadrajına da uygulanabilir." }, { type: "p" as const, text: "Stüdyo ve iç mekan reklam çekimi deneyimimizi bu rehberde paylaşıyoruz." }],
  section("isik-urun", "Işık ve Yansıma", [
      "Yansımalı yüzeylerde polarize filtre ve difüzör kullanın. Sert gölgeler formu bozar.",
      "Sürekli ışık kontrollü exposure sağlar. Flaş doğru kullanılmazsa plastik görünüm oluşur.",
      "Renk doğruluğu grafik tasarım ve baskı için referans kartıyla kontrol edilmelidir.",
    ]),
  section("aci", "Açı ve Kompozisyon", [
      "Hero açı marka hikâyesini anlatır. Detay çekimleri malzeme kalitesini gösterir.",
      "Ölçek referansı boyut algısını netleştirir. Negatif alan premium his verir.",
      "Video prodüksiyon ile uyumlu kareler kampanya bütünlüğü sağlar.",
    ]),
  section("arka", "Arka Plan Seçimi", [
      "Beyaz e-ticaret standardıdır; lifestyle sahneler duygusal bağ kurar.",
      "Marka kimliği rengine uyumlu gradient arka planlar kullanılabilir.",
      "Temiz kenarlar retouch süresini kısaltır.",
    ]),
  section("post-urun", "Retouch ve Teslim", [
      "Toz, çizik ve renk düzeltme profesyonel teslimin parçasıdır.",
      "Çoklu boyut export web ve sosyal medya yönetimi için hazırlanır.",
      "Reklam çekimi kampanyalarında PSD katmanları saklanabilir.",
    ]),
  section("sonuc-urun", "Sonuç", [
      "Ürün görseli satış ekibinizin sessiz temsilcisidir.",
      "VEXT Medya stüdyo ve lokasyon çekimlerini yönetir.",
      "Katalog ve kampanya görsellerinizi birlikte üretelim.",
    ])
);

export const faq: JournalFAQ[] = defineFaq([
  {
    "question": "Beyaz arka plan şart mı?",
    "answer": "Pazaryeri için çoğu zaman evet; marka hikâyesi için lifestyle da değerlidir."
  },
  {
    "question": "VEXT Medya ile çalışmak ne katar?",
    "answer": "Konseptten teslimata aynı görsel dil, profesyonel ekip ve ölçülebilir süreç. Video prodüksiyon, sosyal medya yönetimi ve marka kimliği paralel yürütülür."
  }
]);
