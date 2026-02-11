"use client";

import Link from "next/link";
import { isValidLocale, defaultLocale, createTranslator } from "@/lib/i18n";
import styles from "./TourCards.module.css";

interface TourCard {
  nameKey: string;
  href: string;
  imageSrc: string;
}

interface TourCardsProps {
  locale?: string;
}

const TourCards = ({ locale }: TourCardsProps) => {
  const validLocale = isValidLocale(locale || "en") ? (locale || "en") : defaultLocale;
  const t = createTranslator(validLocale as "en" | "ko");

  const tours: TourCard[] = [
    { nameKey: "Tours.classicTours.city.cardLabel", href: "/tours/city", imageSrc: "/tours/tour-central/day5.webp" },
    { nameKey: "Tours.classicTours.gobi.cardLabel", href: "/tours/gobi", imageSrc: "/tours/Gobi1.jpg" },
    { nameKey: "Tours.classicTours.central.cardLabel", href: "/tours/central", imageSrc: "/tours/Central1.jpg" },
    { nameKey: "Tours.classicTours.zavkhan.cardLabel", href: "/tours/zavkhan", imageSrc: "/tours/tour-zavkhan/card.jpg" },
    { nameKey: "KhuvsgulSelection.cardLabel", href: "/tours/khuvsgul", imageSrc: "/tours/tour-khuvsgul1/day1.png" },
  ];

  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }

  return (
    <div className={styles.tour_cards_container}>
      {tours.map((tour, index) => (
        <Link
          key={index}
          href={addLocaleToHref(tour.href)}
          className={styles.tour_card}
        >
          <div
            className={styles.tour_card_image}
            style={{ backgroundImage: `url(${tour.imageSrc})` }}
          >
            <div className={styles.tour_card_overlay}>
              <span className={styles.tour_card_text}>{t(tour.nameKey)}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TourCards;
