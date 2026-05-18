import type { ContentBlock } from "@/lib/journal/types";
import { joinContent, section } from "./_shared";

/** Extra long-form sections appended to every article body */
const EXTRA: Record<string, ContentBlock[]> = {
  "reels-video-profesyonel-gorunum": joinContent(
    section("reels-pratik", "Sahada Uygulanabilir Reels Kontrol Listesi", [
      "Çekim öncesi telefon veya kamera ayarlarını kilitleyin: exposure, beyaz dengesi ve çözünürlük değişirse renk atlamaları oluşur. Dikey çerçevede yüz ve ürün için güvenli alan çizgilerini zihninizde belirleyin; platform arayüzü bu alanları kapatır.",
      "Konuşma metnini cümle cümle prova edin; nefes araları kurguda kesim noktasıdır. Işık kaynağının yönünü değiştirmeden önce test kaydı alın ve cilt tonunu kontrol edin.",
      "Sosyal medya yönetimi takvimine çekim günü notu düşün; aynı ışıkta birden fazla hook denemek A/B testine zemin hazırlar.",
    ]),
    section("reels-marka", "Marka Dili ve Reels Uyumu", [
      "Marka kimliği renkleri grade aşamasında korunmalıdır. Grafik tasarım ekibinin font ve alt yazı kuralları videoya taşınır.",
      "Profesyonel video prodüksiyon ile üretilen yatay master’dan dikey kesit almak, görsel kaliteyi yükseltir.",
      "VEXT Creative, reels video setlerini ana kampanya çekimiyle aynı günde planlayarak tutarlılık sağlar.",
    ]),
    section("reels-analiz", "Performans Okuma ve İyileştirme", [
      "İzlenme süresi grafiğindeki düşüş noktası, zayıf hook veya fazla metin göstergesidir. Kaydetme oranı güçlü sahnenin tekrar edilebilir olduğunu söyler.",
      "Yorum ve paylaşım, duygusal rezonansın işaretidir. Sadece beğeni sayısına odaklanmak eksik analizdir.",
      "Haftalık üç kaliteli reels, günlük düşük kaliteli beş paylaşımdan daha sürdürülebilir büyüme sağlar.",
    ]),
  ),
};

function defaultExtra(topic: string): ContentBlock[] {
  return joinContent(
    section("derinlemesine", `${topic}: Derinlemesine Bakış`, [
      "Dijital medya ajansı deneyimi, teknik bilgiyi pazarlama hedefiyle birleştirir. Video prodüksiyon sürecinde her karar — lens seçiminden export ayarına — marka algısına yansır. Sinematik çekim standardı, izleyicide güven oluşturur ve rakiplerden ayrışmanızı sağlar.",
      "Sosyal medya yönetimi ve web tasarımı kanalları aynı görsel dili konuşmalıdır. İçerik üretimi dağınık kanallarda yapıldığında mesaj zayıflar. Profesyonel video, grafik tasarım ve marka kimliği tek strateji altında toplanmalıdır.",
      "Reklam çekimi ve ürün çekimlerinde ışık planı önceden yazılır. Drone çekimi ve iç mekan reklam çekimi sahneleri ana filme entegre edilir. Video kurgu aşamasında platforma özel ritim korunur.",
      "İşletme sahipleri için teknik jargon yerine sonuç odaklı iletişim önemlidir: daha fazla güven, daha yüksek etkileşim ve daha net bir marka hikâyesi. Bu hedefler ölçülebilir ve doğru üretim partneriyle sürdürülebilir.",
    ]),
    section("kanal-uyum", "Kanal Uyumu ve İçerik Döngüsü", [
      "Reels video, YouTube, web sitesi ve basılı materyal aynı çekim gününden türetilebilir. Tek prodüksiyon, çok kanallı kullanım maliyet avantajı sağlar.",
      "Grafik tasarım şablonları video kapağı, hikâye ve reklam paneli için ortak grid kullanmalıdır. Marka kimliği kılavuzu bu şablonların kaynağıdır.",
      "Sosyal medya yönetimi, yayın saatini değil içerik kalitesini önceleyen markalarla uzun vadeli büyür. Algoritma değişse bile güçlü görüntü kalıcıdır.",
      "Web tasarımına giden trafik, video ile ısıtıldığında dönüşüm oranı artar. Tanıtım filminizin ilk on saniyesi landing sayfasıyla uyumlu olmalıdır.",
    ]),
    section("vext-surec", "VEXT Creative Süreci", [
      "Brief toplantısında hedef kitle, kanal ve başarı metriği netleşir. Çekim günü shot list ve ses planı ekiple paylaşılır. Post prodüksiyonda renk ve ses onayı aşamalı yapılır.",
      "Reels video, web hero ve tanıtım filmi aynı prodüksiyon dilinden türetilebilir. Bu yaklaşım maliyeti optimize ederken kaliteyi yükseltir.",
      "İşletme sahipleri teknik detayları bilmeden sürece dahil olabilir; önemli olan onay noktalarında net geri bildirimdir.",
      "VEXT Creative, İstanbul merkezli ekibiyle iç ve dış mekan prodüksiyon, post prodüksiyon ve dijital içerik üretimini tek çatı altında sunar.",
    ]),
    section("olcum", "Ölçüm ve Sürekli İyileştirme", [
      "Yayın sonrası kaydetme, tamamlama ve profil ziyareti metrikleri içerik stratejisini besler. Tek bir videonun performansı tüm kanalı yönlendirmemeli; desen aranmalıdır.",
      "Müşteri geri bildirimleri bir sonraki çekim brief’ine girer. Bu döngü, ajans ve marka arasında öğrenen ilişki kurar.",
      "Yıllık görsel yenileme, markanın güncel kaldığını gösterir. Küçük dokunuşlar bile eskimiş algıyı tazeler.",
    ]),
    section("sonraki-adim", "Sonraki Adım", [
      "Okuduğunuz başlıkları kendi markanıza uyarlayın ve mevcut içeriklerinizi bu kontrol listesiyle gözden geçirin.",
      "Eksik kalan alanlar için profesyonel destek almak zaman kazandırır ve görsel güveni hızla yükseltir.",
      "Projenizi birlikte planlayalım: iletişim bölümünden hedeflerinizi paylaşın, size özel prodüksiyon takvimi oluşturalım.",
      "VEXT Creative ekibi, sinematik çekim ve dijital içerik üretiminde yanınızda.",
    ]),
  );
}

function universalAppend(): ContentBlock[] {
  return joinContent(
    section("uretim-hatti", "Prodüksiyon Hattında Kalite Kontrolü", [
      "Profesyonel video üretiminde kalite, set sonunda değil her aşamada kontrol edilir. Kamera logları, ses seviyesi ve lens değişimleri shot list üzerinde işaretlenir. Bu disiplin, post prodüksiyonda sürpriz maliyetini düşürür ve teslim tarihini korur.",
      "Sinematik çekim hedefleniyorsa, operatör ve yönetmen aynı görsel referanslara bakmalıdır. Referans stiller moodboard’da toplanır; ekip sahada aynı dili konuşur.",
      "İçerik üretimi yoğun dönemlerde bile dosya adlandırma ve yedekleme standardı bozulmamalıdır. Bir disk hatası, tüm kampanyayı riske atar.",
      "Drone çekimi ve iç mekan reklam çekimi aynı proje dosyasında tutulduğunda kurgu editörü zaman kazanır. Organizasyon, yaratıcılığın sessiz ortağıdır.",
    ]),
    section("marka-guven", "Marka Güveni ve Görsel Tutarlılık", [
      "Marka kimliği yalnızca logo değildir; ışık sıcaklığı, konuşma tonu ve müzik seçimi de markayı taşır. Grafik tasarım çıktıları ile video renk paleti çelişmemelidir.",
      "Sosyal medya yönetimi görselleri, web sitesi ve basılı katalog aynı grid mantığında hizalanırsa müşteri zihninde net bir imaj oluşur.",
      "Reklam çekimi ve ürün çekimi sahnelerinde ekipman kalitesi kadar sahne düzeni de güven verir. Dağınık arka plan, ürünü ucuz gösterebilir.",
      "Dijital medya ajansı seçerken portföyde tutarlılık arayın; tek iyi örnek yerine seri üretim kalitesi ölçüt olmalıdır.",
    ]),
    section("platform-rehber", "Platformlara Göre Son Kontrol", [
      "Reels video için dikey güvenli alan, YouTube için başlık karesi ve web için hero loop farklı kontrol listeleri gerektirir. Tek export ile her yere aynı dosyayı koymak kalite kaybına yol açar.",
      "Video kurgu sonrası ses normalize edilmeli ve müzik seviyesi platforma göre test edilmelidir. Mobil hoparlörde dinleme, masaüstü monitörden farklı sonuç verir.",
      "Altyazı okunabilirliği küçük ekranda test edilmelidir. Kontrast düşükse mesaj kaybolur.",
      "Web tasarımı sayfasına gömülecek videolarda otomatik oynatma ve sessiz başlangıç kuralları göz önünde bulundurulmalıdır.",
    ]),
    section("pratik-oneriler", "Uygulamaya Dönük Öneriler", [
      "Ekip içi rol dağılımını netleştirin: kim çeker, kim onaylar, kim yayınlar. Belirsizlik prodüksiyon gününde zaman kaybettirir ve stres artırır.",
      "Çekim öncesi müşteri veya ürün hazırlığı kontrol listesi oluşturun. Eksik prop veya yanlış kıyafet tüm planı geciktirebilir.",
      "Ham dosyaları üç kopyada saklayın: çalışma disk, yedek disk ve bulut. Profesyonel video projelerinde veri güvenliği ihmal edilmemelidir.",
      "Kurgu aşamasında müşteri geri bildirimini yapılandırılmış verin: zaman kodu, ekran görüntüsü ve net cümle. “Beğenmedim” geri bildirimi üretimi kilitlemez.",
      "Yayın sonrası ilk 48 saatte performansı izleyin; düşük performanslı içeriği silmek yerine bir sonraki içerikte ders çıkarın.",
    ]),
    section("iletisim-cta", "Projenizi Birlikte Planlayalım", [
      "Bu rehberdeki maddeleri kendi ekibinizle paylaşın ve mevcut içeriklerinizi puanlayın. Zayıf alanlar çoğu zaman tek bir prodüksiyon günüyle güçlendirilebilir.",
      "VEXT Creative, video prodüksiyon, sosyal medya yönetimi, grafik tasarım ve web tasarımını tek stratejide birleştirir.",
      "Projenizi birlikte planlayalım: hedefinizi, bütçe aralığınızı ve teslim tarihinizi iletişim bölümünden iletin.",
      "Sinematik çekim, profesyonel video ve sürdürülebilir içerik üretimi için doğru adrestesiniz.",
    ]),
  );
}

const TOPICS: Record<string, string> = {
  "video-kurgu-yaparken-yapilan-hatalar": "Video kurgu",
  "marka-kimligi-nasil-olusturulur": "Marka kimliği",
  "sosyal-medya-icerikleri-neden-kalitesiz-gorunur": "Sosyal medya içeriği",
  "web-tasariminda-kullanici-deneyimi": "Web UX",
  "profesyonel-urun-cekimi-teknikleri": "Ürün çekimi",
  "video-produksiyonunda-isik-kullanimi": "Işık kullanımı",
  "drone-cekimlerinde-sinematik-gorunum": "Drone çekimi",
  "ic-mekan-reklam-cekimi-rehberi": "İç mekan reklam çekimi",
  "sinematik-video-cekim-teknikleri": "Sinematik video",
};

export function getEnrichment(slug: string): ContentBlock[] {
  const topic = TOPICS[slug];
  const parts: ContentBlock[][] = [];
  if (EXTRA[slug]) parts.push(EXTRA[slug]!);
  if (topic) parts.push(defaultExtra(topic));
  parts.push(universalAppend());
  return joinContent(...parts);
}
