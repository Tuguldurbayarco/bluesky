"use client";

import Link from "next/link";
import { isValidLocale, defaultLocale, createTranslator } from "@/lib/i18n";
import styles from "./TourCards.module.css";

interface TourCard {
  nameKey: string;
  href: string;
  imageSrc: string;
  popular?: boolean;
}

interface TourCardsProps {
  locale?: string;
}

const TourCards = ({ locale }: TourCardsProps) => {
  const validLocale = isValidLocale(locale || "en") ? (locale || "en") : defaultLocale;
  const t = createTranslator(validLocale as "en" | "ko");

  const tours: TourCard[] = [
    { nameKey: "Tours.classicTours.city.cardLabel", href: "/tours/city", imageSrc: "/tours/tour-central/day5.webp" },
    { nameKey: "Tours.classicTours.gobi.cardLabel", href: "/tours/gobi", imageSrc: "/tours/Gobi1.jpg", popular: true },
    { nameKey: "Tours.classicTours.central.cardLabel", href: "/tours/central", imageSrc: "/tours/Central1.jpg" },
    { nameKey: "Tours.classicTours.zavkhan.cardLabel", href: "/tours/zavkhan", imageSrc: "/tours/tour-zavkhan/card.jpg" },
    { nameKey: "KhuvsgulSelection.cardLabel", href: "/tours/khuvsgul", imageSrc: "/tours/tour-khuvsgul1/huvsgul.jpg" },
  ];

  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }

  return (
    <div className={styles.tour_cards_container}>
      {tours.map((tour, index) => (
        <div key={index} className={styles.tour_card_wrapper}>
          {tour.popular && (
            <div className={styles.tour_card_popular_badge} aria-hidden>
              <svg className={styles.tour_card_star_icon} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>{t("Tours.popularLabel")}</span>
            </div>
          )}
          <Link
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
        </div>
      ))}
    </div>
  );
};

export default TourCards;
