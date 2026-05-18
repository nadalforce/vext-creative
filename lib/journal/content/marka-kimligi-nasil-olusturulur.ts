import type { ContentBlock } from "@/lib/journal/types";
import type { JournalFAQ } from "@/lib/journal/types";
import { joinContent, section, bulletList, paragraph, faq as defineFaq } from "./_shared";

export const content: ContentBlock[] = joinContent(
  [{ type: "p" as const, text: "Marka kimliği, müşterinin sizi hatırlama biçimidir. Logo tek başına kimlik değildir; renk, tipografi, ses tonu ve görsel tutarlılık birlikte güven inşa eder." }, { type: "p" as const, text: "Küçük işletmeler de kurumsal firmalar kadar tutarlı görünmek zorundadır çünkü dijital ortamda ilk izlenim saniyeler içinde oluşur." }, { type: "p" as const, text: "VEXT Creative olarak marka kimliği sürecini araştırma, konumlandırma ve uygulama üçlüsüyle yürütüyoruz. Bu rehber, adım adım net bir yol haritası sunar." }],
  section("arastirma", "Araştırma ve Konumlandırma", [
      "Hedef kitle net değilse tasarım kararları rastgele kalır. Rakip analizi fark yaratacak boşlukları gösterir.",
      "Marka vaadi tek cümlede ifade edilebilmelidir. Bu cümle logo, web tasarımı ve video prodüksiyon dilini besler.",
      "Dijital medya ajansı ile çalışırken brief bu aşamada somutlaşır.",
    ]),
  section("logo-renk", "Logo, Renk ve Tipografi", [
      "Logo ölçeklenebilir ve sade olmalıdır. Karmaşık detaylar küçük ekranlarda kaybolur.",
      "Renk paleti duygusal mesaj taşır. Grafik tasarım ekibi CMYK ve RGB varyantlarını hazırlar.",
      "Tipografi okunabilirlik ve karakter sunar. Web ve baskı için ayrı kontrol şarttır.",
    ]),
  section("kilavuz", "Marka Kılavuzu ve Uygulama", [
      "Kılavuz olmadan ekip içi tutarlılık bozulur. Sosyal medya yönetimi görselleri aynı kurallara uymalıdır.",
      "İçerik üretimi şablonları hız kazandırır ama markayı sıkıştırmamalıdır.",
      "Reklam çekimi ve ürün çekimlerinde aynı ışık ve renk dili korunmalıdır.",
    ]),
  section("dijital", "Dijital Dokunuş Noktaları", [
      "Web sitesi, profil görselleri ve reels video kapakları aynı aileyi yansıtmalıdır.",
      "Profesyonel video intro ve outro animasyonları kimliği güçlendirir.",
      "E-posta imzası bile küçük bir tutarlılık alanıdır.",
    ]),
  section("sonuc-marka", "Sonuç: Güçlü Kimlik Yatırımı", [
      "Marka kimliği tek seferlik değil, yaşayan bir sistemdir.",
      "VEXT Creative markanızı sinematik çekim ve dijital kanallarda aynı dilde taşır.",
      "Projenizi birlikte planlayarak görsel güveninizi kalıcı hale getirin.",
    ])
);

export const faq: JournalFAQ[] = defineFaq([
  {
    "question": "Marka kimliği ile kurumsal kimlik farkı?",
    "answer": "Marka kimliği daha geniş; kurumsal kimlik uygulama kitaplığıdır."
  },
  {
    "question": "Süreç ne kadar sürer?",
    "answer": "Kapsama göre 2–8 hafta. Araştırma ve onay aşamaları belirleyicidir."
  },
  {
    "question": "VEXT Creative ile çalışmak ne katar?",
    "answer": "Konseptten teslimata aynı görsel dil, profesyonel ekip ve ölçülebilir süreç. Video prodüksiyon, sosyal medya yönetimi ve marka kimliği paralel yürütülür."
  }
]);
