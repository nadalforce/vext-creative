import type { LucideIcon } from "lucide-react";
import {
  Handshake,
  MapPin,
  Rocket,
  Star,
  Target,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";

export type WhyChooseUsItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    icon: Zap,
    title: "Hızlı Çözüm ve Teslimat",
    description:
      "Projelerinizi zaman kaybetmeden planlar, hızlı ve profesyonel şekilde teslim ederiz.",
  },
  {
    icon: Wallet,
    title: "Uygun Fiyat Politikası",
    description:
      "Kaliteli hizmeti işletmenizin bütçesine uygun çözümlerle sunarız.",
  },
  {
    icon: Rocket,
    title: "Yenilikçi ve Güncel Yaklaşım",
    description:
      "Tasarım, yapay zeka ve dijital pazarlamadaki güncel trendleri projelerimize entegre ederiz.",
  },
  {
    icon: TrendingUp,
    title: "Performans Odaklı Çalışma",
    description:
      "Sadece estetik değil, markanıza gerçek katkı sağlayan sonuçlar üretiriz.",
  },
  {
    icon: Handshake,
    title: "Her Zaman Destek",
    description:
      "Proje sürecinde ve sonrasında ihtiyaç duyduğunuz her an yanınızdayız.",
  },
  {
    icon: Target,
    title: "Tek Noktadan Tüm Çözümler",
    description:
      "Prodüksiyon, reklam, web tasarım, sosyal medya ve grafik tasarım hizmetlerini tek çatı altında sunarız.",
  },
  {
    icon: MapPin,
    title: "Türkiye Geneli Hizmet",
    description:
      "İstanbul merkezli çalışıyor, uzaktan hizmet veriyor ve çekim projeleri için Türkiye'nin her şehrine ulaşabiliyoruz.",
  },
  {
    icon: Star,
    title: "Marka Odaklı Yaklaşım",
    description:
      "Her projeyi hazır şablonlarla değil, markanızın ihtiyaçlarına özel olarak planlarız.",
  },
];
