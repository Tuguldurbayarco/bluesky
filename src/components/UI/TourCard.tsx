"use client";
import React from "react";
import { createTranslator, defaultLocale, isValidLocale, Locale } from "@/lib/i18n";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "./tour-card.module.css";

type TourCardProps = {
  locale?: Locale;
  tourKey: string;
  imageSrc: string;
  tourHref: string;
};

const TourCard: React.FC<TourCardProps> = ({ locale, tourKey, imageSrc, tourHref }) => {
  const validLocale = isValidLocale(locale || "en") ? (locale || "en") : defaultLocale;
  const t = createTranslator(validLocale);
  const searchParams = useSearchParams();
  const tab = searchParams?.get("tab");
  
  // Preserve tab=normal parameter when linking to detail page
  const queryString = tab === "normal" ? "?tab=normal" : "";
  const readMoreHref = `/${validLocale}${tourHref}${queryString}`;

  return (
    <div className={styles.tour_card}>
      <div className={styles.tour_image_container}>
        <Link href={readMoreHref}>
          <img 
            src={imageSrc}
            alt={t(`Tours.classicTours.${tourKey}.title`)}
            className={styles.tour_image}
          />
        </Link>
      </div>
      <div className={styles.tour_content}>
        <Link href={readMoreHref} className={styles.tour_title_link}>
          <h3 className={styles.tour_title}>
            {t(`Tours.classicTours.${tourKey}.title`)}{" "}
            <span style={{fontSize: '0.72em', fontWeight: 'normal', color: '#c23b3b'}}>
              {t(`Tours.classicTours.${tourKey}.duration`)}
            </span>
          </h3>
        </Link>
        <p className={styles.tour_description}>
          {t(`Tours.classicTours.${tourKey}.description`)}{" "}
          <Link href={readMoreHref} className={styles.tour_read_more}>
            {t('Tours.read_more')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TourCard;
