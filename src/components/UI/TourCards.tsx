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
    { name: "City", href: "/tours/city", imageSrc: "/tmcity.jpg" },
    { name: "Gobi", href: "/tours/gobi", imageSrc: "/ctmgobi.jpg" },
    { name: "Central", href: "/tours/central", imageSrc: "/ctmcentral.jpg" },
    { name: "Gobi & Khangai", href: "/tours/khangai", imageSrc: "/ctmgobi.jpg" },
    { name: "Khuvsgul", href: "/tours/khuvsgul1", imageSrc: "/ctmkhuvsgul1.jpg" },
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
