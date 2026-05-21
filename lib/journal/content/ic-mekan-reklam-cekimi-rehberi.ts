import type { ContentBlock } from "@/lib/journal/types";
import type { JournalFAQ } from "@/lib/journal/types";
import { joinContent, section, bulletList, paragraph, faq as defineFaq } from "./_shared";

export const content: ContentBlock[] = joinContent(
  [{ type: "p" as const, text: "İç mekan reklam çekimi, markanızın fiziksel dünyasını anlatır. Restoran, ofis, klinik veya stüdyo fark etmez; hikâye önceliklidir." }, { type: "p" as const, text: "Mekân analizi, ışık ve ses aynı günde çözülmelidir. Sinematik çekim planı zaman kazandırır." }, { type: "p" as const, text: "Tanıtım videosu ve reklam filmi için uygulanabilir bir rehber sunuyoruz." }],
  section("kesif", "Mekân Keşfi", [
      "Işık yönü ve gürültü haritası çekim öncesi çıkarılır. Dar alanlarda lens seçimi kritiktir.",
      "Müşteri akışı ve çalışan hareketleri senaryoya yansır.",
      "Grafik tasarım öğeleri ve logo yerleşimleri kadrajda planlanır.",
    ]),
  section("isik-ses", "Işık ve Ses", [
      "Karışık tavan ışığı tek başına yeterli değildir. Yönlendirilmiş ışık derinlik verir.",
      "Lavalyer ve ortam sesi dengelenir. Yankılı mekânda süre sınırlı tutulur.",
      "Profesyonel video sesi, görüntü kadar güven oluşturur.",
    ]),
  section("marka-sahne", "Marka Entegrasyonu", [
      "Logo ve ürün doğal sahneye yerleşmelidir. Zorlama reklam hissi kaçınılmalıdır.",
      "Ekip ve müşteri etkileşimi samimiyet katar.",
      "Sosyal medya yönetimi için kısa kesitler set gününde alınır.",
    ]),
  section("teslim", "Teslim Formatları", [
      "16:9 ana film, 9:16 sosyal ve sessiz izleme versiyonu hazırlanır.",
      "Altyazı ve güvenli alan platforma göre kontrol edilir.",
      "Video kurgu ve renk tüm formatlarda tutarlıdır.",
    ]),
  section("sonuc-ic", "Sonuç", [
      "İç mekan hikâyesi, marka güveninin güçlü kanalıdır.",
      "VEXT Medya lokasyon prodüksiyonunu uçtan uca yönetir.",
      "Mekânınızı sinematik dilde anlatalım.",
    ])
);

export const faq: JournalFAQ[] = defineFaq([
  {
    "question": "Çekim kaç gün sürer?",
    "answer": "Kapsama göre yarım günden çok günlük prodüksiyona uzanabilir."
  },
  {
    "question": "VEXT Medya ile çalışmak ne katar?",
    "answer": "Konseptten teslimata aynı görsel dil, profesyonel ekip ve ölçülebilir süreç. Video prodüksiyon, sosyal medya yönetimi ve marka kimliği paralel yürütülür."
  }
]);
