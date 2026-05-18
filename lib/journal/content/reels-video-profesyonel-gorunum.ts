import type { ContentBlock } from "@/lib/journal/types";
import type { JournalFAQ } from "@/lib/journal/types";
import {
  joinContent,
  section,
  bulletList,
  paragraph,
  faq as defineFaq,
} from "./_shared";

export const content: ContentBlock[] = joinContent(
  [
    paragraph(
      "Reels dünyasında izleyici, parmak ucunda kaydırmaya hazır bekler; bu yüzden profesyonel video prodüksiyon bakışını dikeye taşımak sadece estetik değil, dönüşüm meselesidir. İlk üç saniye, markanızın o anki kararını belirleyen sahne olarak düşünülmeli ve metin‑görsel çelişkisine izin verilmemelidir. VEXT Creative yaklaşımında sosyal medya yönetimi, yayın takviminden önce sahne tasarımı ve ses mimarisi ile başlar çünkü akış içinde doğallık tesadüf değil, planlı bir ritimdir.",
    ),
    paragraph(
      "Dikey kadraj küçültülmüş bir sinema sahnesidir; yüz güvenlik alanı, ürün vurgusu ve marka kimliği renklerinin tonlamasıyla birlikte değerlendirildiğinde sonuç “ucuz acele” hissini reddeder. Reels videoda amaç görülebilecek kadar yakın gelmek, anlamayı kolaylaştırmaktır fakat yakınlık yüz anatomisini sıkıştırırsa premium algıyı düşürür. Bu yüzden lens seçimi, ışık yumuşaması ve hareket miktarı aynı cümleyi tek bir nefeste bitirir.",
    ),
    paragraph(
      "Kaliteli grafik tasarım unsurları, alt başlıklar ve hareketli tipografi doğru kullanıldığında mesaj karmaşayı azaltır; yanlış kullanıldığında ise kurgunun üstüne kaos gibi yapışır. Web tasarımında olduğu gibi kullanıcı yolculuğu dikey videoda da kısalır ve her kare tek bir aksiyona hizalanmalıdır. Sinematik çekim hissini yakalamak, yüksek fps kaosundan çok doğru exposition ve yüz üçgeni ile yakalanır.",
    ),
  ],
  section(
    "ilk-sahneler-hook",
    "Hook ve İlk Kareler: Kaydıran Parmakları Durdurmak",
    [
      "Güçlü reels video açılışında üç şey paralel işler: kısmi hareket, net konuşma ve sahneye dahil olan bir mikro aksiyon. Bu üçlü koparsa kullanıcı, dijital deneyimin en değişken dilinde sıradan içeriklere geri düşür. Profesyonel video üretimi, özellikle kısa formatta mikro aksiyonu senaryoya gömerek çalışır; kamera hareketini değil, insanı ve nesneyi sahneye sokar.",
      "Hook metinleri kısa üslup ister ancak yüzeyselleşmez; bir vaat, bir soru ya da ani bir beklenmedik kesit izleyicide merak deliği yaratır. Bu “delik”, video kurgu ritminde yakalanacak enstrümana dönüşür: bir kesim yerine titreşimin devamlılığı daha çok güvenilir. Reklam çekimi disiplinine yakın olan bu çalışma, ajans süreçinde storyboard’a küçük notlar halinde bile kaydedilir.",
      "Ses dalga formunun ilk vuruşu, görselden daha hızlı beyni yakalar; bu yüzden müzik seçimi ticari lisansların ötesinde, markanın tonunu temsil etmelidir. İçerik üretimi topluca düşünüldüğünde ses ve görsel aynı cümleyi iki farklı dille konuşmamalıdır; biri yükseltirken diğeri sönümlendiriliyorsa premium his zedelenir.",
    ],
    [
      {
        id: "uc-saniye",
        title: "İlk üç saniyede sık yapılan hatalar",
        paragraphs: [
          "Boş yüz yakın planıyla başlamak, izlemeyi yormadan önce beklenti yaratmaz çünkü merak zaman kazanamaz. Sürekli elde titreyen ilk kare ise dijital medya ajansı kalitesinden uzak görünüm üretir. Sinematik çekim yaklaşımı, aksiyona öncesinde zemini üç kare içinde kurar ki izleyici nereye baktığını bilir.",
        ],
      },
    ],
  ),
  section(
    "isik-tonlama-dikey-kadraj",
    "Işık, Ten Rengi ve Dikey Güvenlik Alanları",
    [
      "Sürekli ışıkta kaybolmuş ten rengi, dikey güvenlik alanında sık sık sıkışan bir ürün ve art arda kesilmiş konuşmalar sosyal medya yönetimi planını bile boşa çıkarır. Profesyonel video çekimi, yüz üçgeninin dikey güvenlikte kalmasına ve parmakların ekranın üst ve alt çubuklarına çarpmamasına dikkat eder. Drone çekimi veya iç mekan reklam çekimi fark etmeksizin ışık planı sahne hissini belirler.",
      "Sıcak tonlu mekân ışığı tek başına yeterliyse doğal hissiyat korunmalıdır; karmaşıksa filtrelere kaçmak yerine ışığı yönlendirmek gerekir. Video prodüksiyon tarafında bu, çekim gününde küçük yansıtıcılar ve diffüzorlarla bile çözülebilen bir meseledir. Post prodüksiyonda kurtarılan düşük ışık, genelde daha çok gürültü ve daha az prestij olarak geri döner.",
      "Contrast ve highlight dengesi yüzünde gereksiz parlamalar oluştuğunda, izleyicide “stüdyo değilmiş” hissini doğurur çünkü göz doğal nüans arar. Reels için bile sinematik kapanış hissini yakalamak, highlight’ların kontrollü tutulması ve gölgelerin ölümü yerine süzülmesidir.",
    ],
  ),
  [
    bulletList([
      "Konuşma alt satırdan daha yüksek seviyede duyulsun ki sessiz kaydırma sırasında da mesaj yaşasın.",
      "Metin blokları yüz güvenlik alanına bindiğinde değil, sahneyi okumaya yardım ettiğinde kullanılmalıdır.",
      "Arka plan ayrımı oluşturan ince backlight, dikey görüntünün derinliğini yükseltir.",
    ]),
  ],
  section(
    "kurgu-ritmi-montaj",
    "Video Kurgu Ritmi ve Hikâyenin Küçültülmesi",
    [
      "Kurgu yaparken sık yapılan hata, doğal süreyi sıkıştırırken anlamayı da sıkıştırmaktır; bu da izleyicide “ne olduğunu şimdi anladım” yerine “zaten hep biliyordum” tepkisidir. Üst üste yüz güldüğü saniyede kesilirse enerji yükselir fakat yüz yüze gelmezse ritim kopar. Profesyonel video üretimi, metni ve görüntüyü ayrı zaman çizgisinde düşünüp sonra birbirine yaklaştırır.",
      "Jump cut bilinçli enerji gerektiren bir tekniktir; plansız sık kullanılırsa düşük bütçe izlenimi verir. Sinematik geçiş ihtiyaç ise kamera hareketi ile çözülmüş olmalıdır ki sahne doğal bağlansın. Video kurguda müzik tempo uyuşması, titreşimin beden hissini taşır; bu titreşimin olmadığı işler sık sık sıkıcı hisseder.",
      "Altyazı satır düzeni grafik tasarım terimleriyle uyum içinde seçildiğinde marka kimliği hissi oluşur; rastgele font ve parlak kenar ise karışıklığa teslim olmuş üretim hissini yükseltir. Kısa formatta bile editoryal bir üçlü vardır: teşhis, doğrulama, davet.",
    ],
  ),
  section(
    "ses-muzik-clear",
    "Ses Temizliği, Lav ve Ortam Dengesi",
    [
      "Lavalyer mikrofonda kumaş sürtüşmesi, telefon yakın kenarından gelen yanlış mikrofonlama bir reels’ın öldürücü sessiz kusurudur. Video prodüksiyon çıktısı, konuşma netliği olmadan algoritmada da güven oluşturmaz çünkü kullanıcı ekranın altına bakmadan anlamayı dener.",
      "Müzik seviyesi konuşmanın yüzünden daha yüksekse izleyicide zihinsel yorgunluk oluşur; çok düşükse ise boş sahne hissine dönerüz. Reklam çekimi deneyimi, bu dengeyi sahnede yakalamayı öğretir. İç mekan çekimi gibi yankılı ortamlarda yankı bastırımı bile premium ajans çıktılarını ayırır.",
      "Ses tasarımcısı olmayan süreçlerde bile küçük ortam düzeltmesi yapılmış kayıt kullanıcıyı yakalar; sıfır sürtünme sıfır duygu değildir, doğaya yakın nefes hâlâ insani bir köprüdür.",
    ],
  ),
  section(
    "strateji-etik-platform",
    "Sosyal Medya Stratejisi ve Sürdürülebilir Yayın Ritmi",
    [
      "Güzel çekilmiş tek bir sahne bile seri halinde yönetilmezse sosyal medya yönetimi hedefine değmez çünkü süreklilik hikâyeyi oluşturan tutarlı görsel dildir. Marka kimliği renk kodları sahneye sızdırılmışsa bile dozaj kaçmadan zarif bir tutarlılık doğar. Grafik tasarım ekibinin oluşturduğu şablonlar, yayın sırasında hız katmak için değil, konuşma tonunu yükseltmek için yaşamalıdır.",
      "Çok sık yayın yapmak kaliteyi düşürmez ancak düşük plan doğruca kalite eksikliğine gider çünkü üretimin merkezi fikir eksik kalır. Dijital medya ajansı iş birliği, çekim günleri ve batch üretimiyle boşluğu kontrol altına alır. Web tasarımı ve site trafiği hedefliyorsanız, reels alt metinleri ve aksiyon cümleleri aynı cümleyi farklı boyutta tekrar etmelidir.",
      "Çoklu hesap yayını veya kampanya paralelliği gibi durumlarda, formatın dikey doğası gereği ölçeklenen sahne blokları daha hızlı tüketilir; bu yüzden seri bağlayıcı “tema sahnesi” fikri premium üretimin omurgasıdır.",
    ],
  ),
  section(
    "olcum-donusum",
    "Ölçüm, Dönüşüm ve Profesyonel Üretim Kararı",
    [
      "Reels performansını yalnızca izlenme sayısıyla okumak, sinematik çekim emeğinin yarısını görmezden gelmek demektir. Kaydetme, paylaşım ve profil ziyareti gibi sinyaller, içeriğin güven üretip üretmediğini daha net anlatır. Profesyonel video üretimine geçiş çoğu marka için tek seferlik bir masraf değil; tekrarlanabilir bir görsel dil yatırımıdır.",
      "İçerik üretimi sürecinde A/B test mantığıyla farklı açılış sahneleri denemek, veriyi yaratıcılığa karşı kullanmak değil yaratıcılığı güçlendirmektir. VEXT Creative ile çalışan markalar, çekim öncesi net brief ve çekim sonrası platforma özel export setleri sayesinde hem Instagram hem reklam panelinde tutarlı kalite görür.",
      "Sonuç olarak reels, kısa süreli bir format olsa da markanızın uzun soluklu dijital hikâyesinin giriş kapısıdır. Doğru ışık, doğru ses ve bilinçli video kurgu bir araya geldiğinde izleyici sadece izlemez; markayı hatırlar ve bir sonraki adımda sizinle iletişime geçmeyi düşünür.",
    ],
  ),
);

export const faq: JournalFAQ[] = defineFaq([
  {
    question: "Reels’ta ilk üç saniye neden kritik?",
    answer:
      "Kullanıcı kararını milisaniye ölçeğinde verir; ilk kare güçsüzse görüntü kaydırılır ve algoritmik olarak da tepki yüzdesi düşer. Bu yüzden hook sahnesi sahne tasarımı ile birlikte planlanır.",
  },
  {
    question: "Dikey kadraj sinematik his verebilir mi?",
    answer:
      "Evet; derinlik, hareket sürekliliği ve kontrollü ışık dikey görüntünün sığlığını hissettirmez. Ancak sık sık yakın yüz yaklaşımları yüz anatomisinin ezilmesine dikkat edilmelidir.",
  },
  {
    question: "Telefon ile premium reels yapılabilir mi?",
    answer:
      "Doğru ışık, stabilizasyon ve bilinçli kurgu ile mümkündür fakat kritik kampanyalar için profesyonel lens ve mikrofon yatırımı fark doğurur. Profesyonel video çekimi, bu farkın süreklilik kazanması içindir.",
  },
  {
    question: "Metin kullanımı ne zaman fazla?",
    answer:
      "Sahnedeki yüzün ve nesnenin görsel olarak söylediği şeyleri tekrar eden bloklar gereksizdir. Metin, merak oluşturmak ya da aksiyona yön vermek için konumlanır.",
  },
  {
    question: "VEXT Creative bu süreci nasıl yönlendirir?",
    answer:
      "Konsept storyboardundan ses ve montaj kalibrasyonuna kadar üretimin her adımında aynı estetik dili sürdürür; sosyal medya yönetimi ve profesyonel video prodüksiyon ekipleri paralel düşünür.",
  },
]);
