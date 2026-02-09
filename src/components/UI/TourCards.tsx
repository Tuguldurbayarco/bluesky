"use client";

import Link from "next/link";
import { isValidLocale, defaultLocale } from "@/lib/i18n";
import styles from "./TourCards.module.css";

interface TourCard {
  name: string;
  href: string;
  imageSrc: string;
}

interface TourCardsProps {
  locale?: string;
}

const TourCards = ({ locale }: TourCardsProps) => {
  const validLocale = isValidLocale(locale || "en") ? (locale || "en") : defaultLocale;

  const tours: TourCard[] = [
    { name: "City", href: "/tours/city", imageSrc: "/tours/tour-central/day5.webp" },
    { name: "Gobi", href: "/tours/gobi", imageSrc: "/tours/Gobi1.jpg" },
    { name: "Central", href: "/tours/central", imageSrc: "/tours/Central1.jpg" },
    { name: "ZAVKHAN", href: "/tours/khangai", imageSrc: "/tours/Zavkhan1.jpg" },
    { name: "Khuvsgul", href: "/tours/khuvsgul", imageSrc: "/tours/tour-khuvsgul1/day1.png" },
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
              <span className={styles.tour_card_text}>{tour.name}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TourCards;
