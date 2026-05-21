import type { ContentBlock } from "@/lib/journal/types";
import type { JournalFAQ } from "@/lib/journal/types";
import { joinContent, section, bulletList, paragraph, faq as defineFaq } from "./_shared";

export const content: ContentBlock[] = joinContent(
  [{ type: "p" as const, text: "Drone çekimi marka filmlerine epik ölçek katar. Kontrolsüz uçuş ise amatör sonuç verir." }, { type: "p" as const, text: "Yavaş hareket, doğru irtifa ve kurgu uyumu sinematik drone görüntüsünün temelidir." }, { type: "p" as const, text: "Yasal izin ve güvenlik, yaratıcılık kadar önemlidir." }],
  section("hareket", "Hareket Kalitesi", [
      "Yavaş reveal ve orbit profesyonel his verir. Ani joystick hareketlerinden kaçının.",
      "ND filtre ile doğru shutter sinematik motion blur sağlar.",
      "Video kurguda hız ramping bilinçli kullanılmalıdır.",
    ]),
  section("komp", "Kompozisyon ve Işık", [
      "Çizgiler ve simetri hava perspektifinde güçlüdür. Gün doğumu kontrastı yumuşatır.",
      "İç mekan reklam çekimi ile birleşen dış planlar hikâyeyi büyütür.",
      "Marka kimliği renkleri grade aşamasında desteklenebilir.",
    ]),
  section("guvenlik", "Güvenlik ve İzin", [
      "SHGM kuralları ve uçuş yasağı bölgeleri kontrol edilir.",
      "Hava durumu ve rüzgâr limitleri set güvenliğini belirler.",
      "Yedek batarya ve SD kart operasyonel standarttır.",
    ]),
  section("kurgu-drone", "Kurgu Entegrasyonu", [
      "Drone sahnesi müzik vuruşuna oturmalıdır. Uzun tek plan izleyiciyi yorar.",
      "Yer çekimi ile hava planı ritmi dengelemelidir.",
      "Reels video için dikey kesit önceden düşünülmelidir.",
    ]),
  section("sonuc-drone", "Sonuç", [
      "Hava çekimi, doğru ellerde marka değerini yükseltir.",
      "VEXT Medya lisanslı pilot ve kamera ekibiyle çalışır.",
      "Projenize hava perspektifi ekleyelim.",
    ])
);

export const faq: JournalFAQ[] = defineFaq([
  {
    "question": "4K yeterli mi?",
    "answer": "Evet; exposure ve ND ile profesyonel sonuç alınır."
  },
  {
    "question": "VEXT Medya ile çalışmak ne katar?",
    "answer": "Konseptten teslimata aynı görsel dil, profesyonel ekip ve ölçülebilir süreç. Video prodüksiyon, sosyal medya yönetimi ve marka kimliği paralel yürütülür."
  }
]);
