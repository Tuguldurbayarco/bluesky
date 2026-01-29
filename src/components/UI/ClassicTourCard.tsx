import React from "react";
import { createTranslator, defaultLocale, isValidLocale, Locale } from "@/lib/i18n";
import Link from "next/link";
import styles from "./classic-tour-card.module.css";

type ClassicTourCardProps = {
  locale?: Locale;
  tourKey: string;
  imageSrc: string;
  tourHref: string;
};

const ClassicTourCard: React.FC<ClassicTourCardProps> = ({ locale, tourKey, imageSrc, tourHref }) => {
  const validLocale = isValidLocale(locale || "en") ? (locale || "en") : defaultLocale;
  const t = createTranslator(validLocale);

  const readMoreHref = `/${validLocale}${tourHref}`;

  return (
    <div className={styles.classic_tour_card}>
      <div className={styles.classic_tour_image_container}>
        <Link href={readMoreHref}>
          <img 
            src={imageSrc}
            alt={t(`Tours.classicTours.${tourKey}.title`)}
            className={styles.classic_tour_image}
          />
        </Link>
      </div>
      <div className={styles.classic_tour_content}>
        <Link href={readMoreHref} className={styles.classic_tour_title_link}>
          <h3 className={styles.classic_tour_title}>
            {t(`Tours.classicTours.${tourKey}.title`)}
          </h3>
        </Link>
        <Link href={readMoreHref} className={styles.classic_tour_duration_link}>
          <p className={styles.classic_tour_duration}>
            {t(`Tours.classicTours.${tourKey}.duration`)}
          </p>
        </Link>
        <p className={styles.classic_tour_description}>
          {t(`Tours.classicTours.${tourKey}.description`)}{" "}
          <Link href={readMoreHref} className={styles.classic_tour_read_more}>
            {t('Tours.read_more')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ClassicTourCard;
