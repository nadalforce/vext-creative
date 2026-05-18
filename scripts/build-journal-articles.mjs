/**
 * One-time generator for long-form journal content files.
 * Run: node scripts/build-journal-articles.mjs
 */
import { writeFileSync } from "fs";
import { join } from "path";

const dir = join(process.cwd(), "lib/journal/content");

const header = `import type { ContentBlock } from "@/lib/journal/types";
import type { JournalFAQ } from "@/lib/journal/types";
import { joinContent, section, bulletList, paragraph, faq as defineFaq } from "./_shared";

`;

function file(slug, contentBlocks, faqItems) {
  const body = `export const content: ContentBlock[] = ${contentBlocks};

export const faq: JournalFAQ[] = defineFaq(${JSON.stringify(faqItems, null, 2)});
`;
  writeFileSync(join(dir, `${slug}.ts`), header + body, "utf8");
}

function p(text) {
  return `{ type: "p" as const, text: ${JSON.stringify(text)} }`;
}
function s(id, title, paragraphs, subs) {
  let out = `section(${JSON.stringify(id)}, ${JSON.stringify(title)}, [\n`;
  out += paragraphs.map((t) => `      ${JSON.stringify(t)},\n`).join("");
  out += `    ]`;
  if (subs?.length) {
    out += `, [\n`;
    for (const sub of subs) {
      out += `      { id: ${JSON.stringify(sub.id)}, title: ${JSON.stringify(sub.title)}, paragraphs: [\n`;
      out += sub.paragraphs.map((t) => `          ${JSON.stringify(t)},\n`).join("");
      out += `        ] },\n`;
    }
    out += `    ]`;
  }
  out += `)`;
  return out;
}

function buildArticle(sections, intro) {
  const parts = [
    `[${intro.map((t) => p(t)).join(", ")}]`,
    ...sections.map((sec) => s(sec.id, sec.title, sec.paragraphs, sec.subs)),
  ];
  return `joinContent(\n  ${parts.join(",\n  ")}\n)`;
}

// Shared FAQ tail
const agencyFaq = {
  question: "VEXT Creative ile çalışmak ne katar?",
  answer:
    "Konseptten teslimata aynı görsel dil, profesyonel ekip ve ölçülebilir süreç. Video prodüksiyon, sosyal medya yönetimi ve marka kimliği paralel yürütülür.",
};

function sec(id, title, paragraphs) {
  return { id, title, paragraphs };
}

const articles = {
  "video-kurgu-yaparken-yapilan-hatalar": {
    intro: [
      "Video kurgu, çekimden sonra hikâyenin gerçekten anlatıldığı masadır. Ham görüntü güçlü olsa bile zayıf montaj, markanızı amatör gösterir ve izleyici güvenini düşürür.",
      "Post prodüksiyon sürecinde ritim, ses ve renk aynı anda düşünülmelidir. VEXT Creative ekibi, profesyonel video prodüksiyon çıktısını platforma göre optimize ederek teslim eder.",
      "Bu rehberde en sık yapılan kurgu hatalarını ve sinematik çekim kalitesini koruyan çözümleri sade Türkçe ile paylaşıyoruz.",
    ],
    sections: [
      {
        id: "ritim-sure",
        title: "Ritim ve Süre Dengesi",
        paragraphs: [
          "Her sahnenin aynı uzunlukta kalması izleyicide yorgunluk yaratır. Mesaj yoğun sahneler kısa, duygusal sahneler nefes alacak kadar uzun olmalıdır.",
          "Sosyal medya yönetimi için üretilen kısa videolarda bile ritim, kaydırma oranını doğrudan etkiler. Profesyonel video kurgu, platform ritmine saygı duyar.",
          "Jump cut plansız kullanıldığında ucuz enerji verir; bilinçli kullanıldığında reels video temposunu yükseltir.",
        ],
      },
      {
        id: "renk-ses",
        title: "Renk Düzenleme ve Ses Miksajı",
        paragraphs: [
          "Aşırı filtre ve doygunluk, sinematik çekim emeğini gizler. Color grading marka kimliği renklerine yaklaşmalı, cilt tonlarını bozmamalıdır.",
          "Konuşma sesi müziğin altında kaybolursa mesaj kaybolur. İçerik üretimi sürecinde ses, görüntü kadar kritiktir.",
          "Ortam gürültüsü temizlenmeden yayınlanan işler, dijital medya ajansı kalitesinden uzaklaşır.",
        ],
        subs: [
          {
            id: "muzik-lisans",
            title: "Müzik ve lisans",
            paragraphs: [
              "Telifsiz müzik seçimi yasal güvenlik sağlar. Tempo uyumsuzluğu ise duygusal kopukluk yaratır.",
            ],
          },
        ],
      },
      {
        id: "efekt-story",
        title: "Efekt ve Hikâye Bütünlüğü",
        paragraphs: [
          "Geçiş efektleri hikâyeye hizmet etmelidir. Her sahneye farklı stil uygulamak marka tutarlılığını kırar.",
          "Grafik tasarım katmanları kurgunun üstüne bindiğinde okunabilirlik test edilmelidir. Web tasarımındaki sadelik ilkesi videoda da geçerlidir.",
          "Drone çekimi veya iç mekan reklam çekimi gibi güçlü sahneler, zayıf montajla birleşirse potansiyel kaybolur.",
        ],
      },
      {
        id: "platform-export",
        title: "Platforma Göre Export",
        paragraphs: [
          "Tek bir master dosya her platform için yeterli değildir. Dikey, kare ve yatay kesitler önceden planlanmalıdır.",
          "Sıkıştırma ayarları kaliteyi düşürür; doğru codec ve bitrate profesyonel video algısını korur.",
          "Altyazı ve güvenli alan, reels video ve feed formatlarında ayrı kontrol edilmelidir.",
        ],
      },
      {
        id: "sonuc",
        title: "Profesyonel Post Prodüksiyon Kararı",
        paragraphs: [
          "Kurgu masası, markanızın son imza noktasıdır. Deneyimli ekip, hataları çekim sonrası bile düzeltebilir.",
          "VEXT Creative, video kurgu sürecini marka hedeflerinize göre yönetir ve teslim setlerini netleştirir.",
          "Projenizi birlikte planlayarak sinematik çekim yatırımınızın karşılığını alın.",
        ],
      },
    ],
    faq: [
      {
        question: "En yaygın kurgu hatası nedir?",
        answer: "Gereksiz uzun sahneler ve zayıf ritim. İzleyici ilk saniyelerde karar verir.",
      },
      {
        question: "Renk düzenleme şart mı?",
        answer: "Profesyonel görünüm için evet. Ham görüntü tek başına yeterli değildir.",
      },
      {
        question: "Ses neden ihmal edilir?",
        answer: "Görüntü öncelikli düşünülür; oysa kötü ses güveni düşürür.",
      },
      agencyFaq,
    ],
  },
  "marka-kimligi-nasil-olusturulur": {
    intro: [
      "Marka kimliği, müşterinin sizi hatırlama biçimidir. Logo tek başına kimlik değildir; renk, tipografi, ses tonu ve görsel tutarlılık birlikte güven inşa eder.",
      "Küçük işletmeler de kurumsal firmalar kadar tutarlı görünmek zorundadır çünkü dijital ortamda ilk izlenim saniyeler içinde oluşur.",
      "VEXT Creative olarak marka kimliği sürecini araştırma, konumlandırma ve uygulama üçlüsüyle yürütüyoruz. Bu rehber, adım adım net bir yol haritası sunar.",
    ],
    sections: [
      sec("arastirma", "Araştırma ve Konumlandırma", [
        "Hedef kitle net değilse tasarım kararları rastgele kalır. Rakip analizi fark yaratacak boşlukları gösterir.",
        "Marka vaadi tek cümlede ifade edilebilmelidir. Bu cümle logo, web tasarımı ve video prodüksiyon dilini besler.",
        "Dijital medya ajansı ile çalışırken brief bu aşamada somutlaşır.",
      ]),
      sec("logo-renk", "Logo, Renk ve Tipografi", [
        "Logo ölçeklenebilir ve sade olmalıdır. Karmaşık detaylar küçük ekranlarda kaybolur.",
        "Renk paleti duygusal mesaj taşır. Grafik tasarım ekibi CMYK ve RGB varyantlarını hazırlar.",
        "Tipografi okunabilirlik ve karakter sunar. Web ve baskı için ayrı kontrol şarttır.",
      ]),
      sec("kilavuz", "Marka Kılavuzu ve Uygulama", [
        "Kılavuz olmadan ekip içi tutarlılık bozulur. Sosyal medya yönetimi görselleri aynı kurallara uymalıdır.",
        "İçerik üretimi şablonları hız kazandırır ama markayı sıkıştırmamalıdır.",
        "Reklam çekimi ve ürün çekimlerinde aynı ışık ve renk dili korunmalıdır.",
      ]),
      sec("dijital", "Dijital Dokunuş Noktaları", [
        "Web sitesi, profil görselleri ve reels video kapakları aynı aileyi yansıtmalıdır.",
        "Profesyonel video intro ve outro animasyonları kimliği güçlendirir.",
        "E-posta imzası bile küçük bir tutarlılık alanıdır.",
      ]),
      sec("sonuc-marka", "Sonuç: Güçlü Kimlik Yatırımı", [
        "Marka kimliği tek seferlik değil, yaşayan bir sistemdir.",
        "VEXT Creative markanızı sinematik çekim ve dijital kanallarda aynı dilde taşır.",
        "Projenizi birlikte planlayarak görsel güveninizi kalıcı hale getirin.",
      ]),
    ],
    faq: [
      {
        question: "Marka kimliği ile kurumsal kimlik farkı?",
        answer: "Marka kimliği daha geniş; kurumsal kimlik uygulama kitaplığıdır.",
      },
      {
        question: "Süreç ne kadar sürer?",
        answer: "Kapsama göre 2–8 hafta. Araştırma ve onay aşamaları belirleyicidir.",
      },
      agencyFaq,
    ],
  },
  "sosyal-medya-icerikleri-neden-kalitesiz-gorunur": {
    intro: [
      "Sosyal medyada kalite algısı hızlı oluşur. Telefon çekimi bile profesyonel görünebilir; tersi de mümkündür.",
      "Düşük ışık, tutarsız filtre ve plansız paylaşım markayı ucuz gösterir. Sosyal medya yönetimi bu riski süreçle yönetir.",
      "İşletme sahipleri için anlaşılır bir dille, kalitesiz görünmenin nedenlerini ve çözümlerini derledik.",
    ],
    sections: [
      sec("nedenler", "Kalitesiz Görünmenin Başlıca Nedenleri", [
        "Yetersiz ışık yüzü ve ürünü düzleştirir. Sinematik çekim planı olmadan çekilen sahneler düz kalır.",
        "Her paylaşımda farklı filtre marka kimliğini dağıtır. Grafik tasarım şablonları kullanılmazsa karmaşa artar.",
        "Düşük çözünürlük ve aşırı sıkıştırma detayı öldürür. Profesyonel video export ayarları ihmal edilir.",
      ]),
      sec("plan", "Plan ve Takvim Disiplini", [
        "Plansız sıklık kaliteyi düşürür. İçerik üretimi haftalık tema ile yürütülmelidir.",
        "Çekim günü toplu üretim verimi artırır. Reels video ve feed görselleri aynı günde planlanabilir.",
        "Dijital medya ajansı ritmi kampanya hedeflerine bağlar.",
      ]),
      sec("uretim", "Profesyonel Üretim Katmanı", [
        "Kamera, ses ve kurgu üçlüsü ayrılmamalıdır. Video kurgu zayıfsa çekim boşa gider.",
        "Ürün ve mekân çekimlerinde reklam çekimi standardı hedeflenmelidir.",
        "Drone çekimi veya stüdyo sahneleri feed'e premium nefes katar.",
      ]),
      sec("marka-uyum", "Marka Uyumu ve Güven", [
        "Tutarlı renk ve tipografi güven oluşturur. Web tasarımı ile sosyal profil aynı dili konuşmalıdır.",
        "Kullanıcı yorumlarına görsel kalite yansır. Kaliteli içerik etkileşimi besler.",
        "VEXT Creative sosyal medya yönetimini prodüksiyonla birleştirir.",
      ]),
      sec("sonuc-sosyal", "Sonuç", [
        "Kalite tesadüf değil süreçtir. Küçük iyileştirmeler bile algıyı değiştirir.",
        "Profesyonel destek, zaman ve tutarlılık kazandırır.",
        "İletişime geçerek içerik üretim modelinizi birlikte kuralım.",
      ]),
    ],
    faq: [
      {
        question: "Her gün paylaşım şart mı?",
        answer: "Hayır; tutarlı ve planlı ritim daha değerlidir.",
      },
      {
        question: "Telefon yeterli mi?",
        answer: "Bazı formatlar için evet; kampanya dönemlerinde profesyonel prodüksiyon fark yaratır.",
      },
      agencyFaq,
    ],
  },
  "web-tasariminda-kullanici-deneyimi": {
    intro: [
      "Web tasarımında kullanıcı deneyimi, ziyaretçinin hedefe ne kadar kolay ulaştığını ölçer. Güzel arayüz tek başına dönüşüm getirmez.",
      "Hız, okunabilirlik ve mobil uyum Google sıralamasını da etkiler. Dijital medya ajansı bakışı UX'i SEO ile birleştirir.",
      "Bu yazıda işletmeler için uygulanabilir UX prensiplerini paylaşıyoruz.",
    ],
    sections: [
      sec("nav", "Navigasyon ve Bilgi Mimarisi", [
        "Menü sezgisel olmalı; kullanıcı üç tıklamada aradığını bulmalıdır.",
        "Hizmet sayfaları video prodüksiyon ve sosyal medya yönetimi gibi net başlıklarla ayrılmalıdır.",
        "Journal ve iletişim gibi güven sayfaları görünür olmalıdır.",
      ]),
      sec("hiz", "Hız ve Core Web Vitals", [
        "Görsel optimizasyonu ve lazy load şarttır. Ağır video dosyaları kontrollü embed edilmelidir.",
        "Sunucu yanıt süresi ve önbellek ayarları profesyonel web tasarımının parçasıdır.",
        "Mobil öncelikli indeksleme artık varsayılandır.",
      ]),
      sec("mobil", "Mobil Deneyim", [
        "Dokunma alanları yeterli büyüklükte olmalıdır. Formlar kısa tutulmalıdır.",
        "Dikey kaydırmada CTA görünür kalmalıdır. Proje Başlat gibi butonlar erişilebilir olmalıdır.",
        "Marka kimliği mobilde de tutarlı kalmalıdır.",
      ]),
      sec("icerik", "İçerik ve Okunabilirlik", [
        "Başlık hiyerarşisi H1–H3 düzenli olmalıdır. Paragraflar nefes almalıdır.",
        "Grafik tasarım boşluk kullanımı yorgunluğu azaltır. Kontrast erişilebilirlik için kritiktir.",
        "Güven unsurları: referans, ekip, iletişim bilgisi.",
      ]),
      sec("sonuc-web", "Sonuç", [
        "UX yatırımı dönüşümü artırır. VEXT Creative web tasarımını marka kimliği ile birlikte kurgular.",
        "Hızlı, anlaşılır ve sinematik bir site güven verir.",
        "Web projenizi birlikte planlayalım.",
      ]),
    ],
    faq: [
      {
        question: "UX ve UI farkı?",
        answer: "UI görsel arayüz; UX tüm etkileşim deneyimidir.",
      },
      {
        question: "SEO ile ilişkisi?",
        answer: "Hız ve yapılandırılmış içerik sıralamayı destekler.",
      },
      agencyFaq,
    ],
  },
  "profesyonel-urun-cekimi-teknikleri": {
    intro: [
      "Profesyonel ürün çekimi, e-ticaret ve reklamın görsel kanıtıdır. Işık, açı ve arka plan satın alma kararını etkiler.",
      "Amatör görüntü, ürün kalitesine olan güveni zedeler. Sinematik çekim disiplini ürün kadrajına da uygulanabilir.",
      "Stüdyo ve iç mekan reklam çekimi deneyimimizi bu rehberde paylaşıyoruz.",
    ],
    sections: [
      sec("isik-urun", "Işık ve Yansıma", [
        "Yansımalı yüzeylerde polarize filtre ve difüzör kullanın. Sert gölgeler formu bozar.",
        "Sürekli ışık kontrollü exposure sağlar. Flaş doğru kullanılmazsa plastik görünüm oluşur.",
        "Renk doğruluğu grafik tasarım ve baskı için referans kartıyla kontrol edilmelidir.",
      ]),
      sec("aci", "Açı ve Kompozisyon", [
        "Hero açı marka hikâyesini anlatır. Detay çekimleri malzeme kalitesini gösterir.",
        "Ölçek referansı boyut algısını netleştirir. Negatif alan premium his verir.",
        "Video prodüksiyon ile uyumlu kareler kampanya bütünlüğü sağlar.",
      ]),
      sec("arka", "Arka Plan Seçimi", [
        "Beyaz e-ticaret standardıdır; lifestyle sahneler duygusal bağ kurar.",
        "Marka kimliği rengine uyumlu gradient arka planlar kullanılabilir.",
        "Temiz kenarlar retouch süresini kısaltır.",
      ]),
      sec("post-urun", "Retouch ve Teslim", [
        "Toz, çizik ve renk düzeltme profesyonel teslimin parçasıdır.",
        "Çoklu boyut export web ve sosyal medya yönetimi için hazırlanır.",
        "Reklam çekimi kampanyalarında PSD katmanları saklanabilir.",
      ]),
      sec("sonuc-urun", "Sonuç", [
        "Ürün görseli satış ekibinizin sessiz temsilcisidir.",
        "VEXT Creative stüdyo ve lokasyon çekimlerini yönetir.",
        "Katalog ve kampanya görsellerinizi birlikte üretelim.",
      ]),
    ],
    faq: [
      {
        question: "Beyaz arka plan şart mı?",
        answer: "Pazaryeri için çoğu zaman evet; marka hikâyesi için lifestyle da değerlidir.",
      },
      agencyFaq,
    ],
  },
  "video-produksiyonunda-isik-kullanimi": {
    intro: [
      "Video prodüksiyonunda ışık, duyguyu belirleyen ana araçtır. Kamera ve lens doğru ışık olmadan potansiyeline ulaşamaz.",
      "İç ve dış mekanda farklı kurallar geçerlidir. Sinematik çekim hedefi için ışık planı çekim öncesi yazılmalıdır.",
      "Bu rehber, işletme sahiplerinin ekibiyle aynı dili konuşmasını sağlar.",
    ],
    sections: [
      sec("uc-nokta", "Üç Nokta Aydınlatma", [
        "Ana ışık, dolgu ve arka ışık portre ve ürün için temeldir. Oranlar yüze göre ayarlanır.",
        "Sert ışık drama yaratır; yumuşak ışık güven verir. Marka tonuna göre seçilir.",
        "Profesyonel video setlerinde ışık diagramı shot list ile birlikte durur.",
      ]),
      sec("dogal", "Doğal Işık", [
        "Altın saat dış çekimde idealdir. Pencere ışığı iç mekanda difüze edilmelidir.",
        "Karışık renk sıcaklığı cilt tonunu bozar. Tungsten ve gün ışığı karışımına dikkat.",
        "Reklam çekimi penceresinde blackout ile kontrol mümkündür.",
      ]),
      sec("stüdyo", "Stüdyo ve Modifiye", [
        "Softbox ve octabox farklı yumuşaklık verir. Reflektör ekonomik dolgu sağlar.",
        "Yeşil ekran aydınlatması ürün çekiminden ayrı düşünülmelidir.",
        "Drone çekiminde güneş açısı gölge yönünü belirler.",
      ]),
      sec("hata-isik", "Sık Hatalar", [
        "Aşırı arka ışık yüzü karartır. Ters silüet mesajı gizler.",
        "Flicker ve banding yapay ışıkta görülür; shutter açısı ayarlanır.",
        "Post prodüksiyonda kurtarılamayan underexposure güveni düşürür.",
      ]),
      sec("sonuc-isik", "Sonuç", [
        "Işık yatırımı, lens yatırımı kadar değerlidir.",
        "VEXT Creative çekim günü ışık ekibini yönetir.",
        "Sinematik prodüksiyonunuz için bizimle iletişime geçin.",
      ]),
    ],
    faq: [
      {
        question: "LED mi tungsten mi?",
        answer: "LED esnek ve verimli; renk doğruluğu modeline göre değişir. Proje ihtiyacına göre seçilir.",
      },
      agencyFaq,
    ],
  },
  "drone-cekimlerinde-sinematik-gorunum": {
    intro: [
      "Drone çekimi marka filmlerine epik ölçek katar. Kontrolsüz uçuş ise amatör sonuç verir.",
      "Yavaş hareket, doğru irtifa ve kurgu uyumu sinematik drone görüntüsünün temelidir.",
      "Yasal izin ve güvenlik, yaratıcılık kadar önemlidir.",
    ],
    sections: [
      sec("hareket", "Hareket Kalitesi", [
        "Yavaş reveal ve orbit profesyonel his verir. Ani joystick hareketlerinden kaçının.",
        "ND filtre ile doğru shutter sinematik motion blur sağlar.",
        "Video kurguda hız ramping bilinçli kullanılmalıdır.",
      ]),
      sec("komp", "Kompozisyon ve Işık", [
        "Çizgiler ve simetri hava perspektifinde güçlüdür. Gün doğumu kontrastı yumuşatır.",
        "İç mekan reklam çekimi ile birleşen dış planlar hikâyeyi büyütür.",
        "Marka kimliği renkleri grade aşamasında desteklenebilir.",
      ]),
      sec("guvenlik", "Güvenlik ve İzin", [
        "SHGM kuralları ve uçuş yasağı bölgeleri kontrol edilir.",
        "Hava durumu ve rüzgâr limitleri set güvenliğini belirler.",
        "Yedek batarya ve SD kart operasyonel standarttır.",
      ]),
      sec("kurgu-drone", "Kurgu Entegrasyonu", [
        "Drone sahnesi müzik vuruşuna oturmalıdır. Uzun tek plan izleyiciyi yorar.",
        "Yer çekimi ile hava planı ritmi dengelemelidir.",
        "Reels video için dikey kesit önceden düşünülmelidir.",
      ]),
      sec("sonuc-drone", "Sonuç", [
        "Hava çekimi, doğru ellerde marka değerini yükseltir.",
        "VEXT Creative lisanslı pilot ve kamera ekibiyle çalışır.",
        "Projenize hava perspektifi ekleyelim.",
      ]),
    ],
    faq: [
      {
        question: "4K yeterli mi?",
        answer: "Evet; exposure ve ND ile profesyonel sonuç alınır.",
      },
      agencyFaq,
    ],
  },
  "ic-mekan-reklam-cekimi-rehberi": {
    intro: [
      "İç mekan reklam çekimi, markanızın fiziksel dünyasını anlatır. Restoran, ofis, klinik veya stüdyo fark etmez; hikâye önceliklidir.",
      "Mekân analizi, ışık ve ses aynı günde çözülmelidir. Sinematik çekim planı zaman kazandırır.",
      "Tanıtım videosu ve reklam filmi için uygulanabilir bir rehber sunuyoruz.",
    ],
    sections: [
      sec("kesif", "Mekân Keşfi", [
        "Işık yönü ve gürültü haritası çekim öncesi çıkarılır. Dar alanlarda lens seçimi kritiktir.",
        "Müşteri akışı ve çalışan hareketleri senaryoya yansır.",
        "Grafik tasarım öğeleri ve logo yerleşimleri kadrajda planlanır.",
      ]),
      sec("isik-ses", "Işık ve Ses", [
        "Karışık tavan ışığı tek başına yeterli değildir. Yönlendirilmiş ışık derinlik verir.",
        "Lavalyer ve ortam sesi dengelenir. Yankılı mekânda süre sınırlı tutulur.",
        "Profesyonel video sesi, görüntü kadar güven oluşturur.",
      ]),
      sec("marka-sahne", "Marka Entegrasyonu", [
        "Logo ve ürün doğal sahneye yerleşmelidir. Zorlama reklam hissi kaçınılmalıdır.",
        "Ekip ve müşteri etkileşimi samimiyet katar.",
        "Sosyal medya yönetimi için kısa kesitler set gününde alınır.",
      ]),
      sec("teslim", "Teslim Formatları", [
        "16:9 ana film, 9:16 sosyal ve sessiz izleme versiyonu hazırlanır.",
        "Altyazı ve güvenli alan platforma göre kontrol edilir.",
        "Video kurgu ve renk tüm formatlarda tutarlıdır.",
      ]),
      sec("sonuc-ic", "Sonuç", [
        "İç mekan hikâyesi, marka güveninin güçlü kanalıdır.",
        "VEXT Creative lokasyon prodüksiyonunu uçtan uca yönetir.",
        "Mekânınızı sinematik dilde anlatalım.",
      ]),
    ],
    faq: [
      {
        question: "Çekim kaç gün sürer?",
        answer: "Kapsama göre yarım günden çok günlük prodüksiyona uzanabilir.",
      },
      agencyFaq,
    ],
  },
  "sinematik-video-cekim-teknikleri": {
    intro: [
      "Sinematik video çekimi, izleyiciyi sahneye davet eden görsel anlatımdır. Marka filmlerinden ürün tanıtımlarına aynı prensipler geçerlidir.",
      "Işık, kompozisyon, hareket ve ses birlikte çalışmalıdır. Profesyonel video prodüksiyon bu dörtlüyü planlar.",
      "VEXT Creative olarak iç ve dış mekan projelerinde sinematik dili sürdürülebilir kılıyoruz.",
    ],
    sections: [
      sec("plan", "Çekim Öncesi Planlama", [
        "Shot list ve storyboard zamanı sahada korur. Mekân keşfi ışık yönünü önceden gösterir.",
        "Lens ve kamera hareketi sahneye göre seçilir. Gimbal, slider veya tripod bilinçli tercih edilir.",
        "Ses koşulları çekim günü sürprizini azaltır.",
      ]),
      sec("isik-sin", "Işık ve Kompozisyon", [
        "Üç nokta aydınlatma ve pratik ışıklar derinlik kurar. Negatif alan premium kadraj sağlar.",
        "Ön plan–arka plan ayrımı sinematik çekim algısını güçlendirir.",
        "Renk sıcaklığı tutarlılığı grade sürecini kolaylaştırır.",
      ]),
      sec("hareket", "Kamera Hareketi", [
        "Yavaş ve sürekli hareket güven verir. El kamerası yalnızca bilinçli enerji için kullanılır.",
        "Drone çekimi açılış ve kapanışlarda ölçek katar.",
        "İç mekan reklam çekimi dar alanda hareket ekonomisini gerektirir.",
      ]),
      sec("kurgu-sin", "Kurgu ve Post Prodüksiyon", [
        "Color grading duygusal tonu sabitler. Ses miksajı konuşmayı öne çıkarır.",
        "Reels video ve ana film için ayrı ritim düşünülebilir.",
        "Video kurgu zayıfsa çekim yatırımı tam karşılık vermez.",
      ]),
      sec("ajans", "Ajans İş Birliği", [
        "Dijital medya ajansı bakışı prodüksiyonu kampanyaya bağlar.",
        "Marka kimliği ve grafik tasarım katmanları teslimde uyumludur.",
        "Web tasarımı ve sosyal medya yönetimi aynı görsel dilde yürür.",
      ]),
      sec("sonuc-sin", "Sonuç", [
        "Sinematik dil, markanızı hatırlanır kılar.",
        "VEXT Creative ekibiyle projenizi birlikte planlayın.",
        "Profesyonel video yolculuğunuza bugün başlayın.",
      ]),
    ],
    faq: [
      {
        question: "24 fps mi 30 fps mi?",
        answer: "Sinematik his için genelde 24 fps; spor ve slow-motion için daha yüksek fps ayrı planlanır.",
      },
      {
        question: "İç mekanda sinematik görünüm mümkün mü?",
        answer: "Evet; kontrollü ışık ve kadraj ile mümkündür.",
      },
      agencyFaq,
    ],
  },
};

for (const [slug, data] of Object.entries(articles)) {
  file(slug, buildArticle(data.sections, data.intro), data.faq);
  console.log("wrote", slug);
}

console.log("done");
