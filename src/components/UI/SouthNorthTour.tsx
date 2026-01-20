import React from "react";
import { createTranslator, defaultLocale, isValidLocale, Locale } from "@/lib/i18n";
import Link from "next/link";
import styles from "./group-tour.module.css";

type SouthNorthTourProps = {
  locale?: Locale;
  dateRanges?: string[];
  tourKey: string;
  imageSrc: string;
  tourHref: string;
  reverse?: boolean; // When true, swaps left and right sides
};

const SouthNorthTour: React.FC<SouthNorthTourProps> = ({ locale, dateRanges, tourKey, imageSrc, tourHref, reverse = false }) => {
  const validLocale = isValidLocale(locale || "en") ? (locale || "en") : defaultLocale;
  const t = createTranslator(validLocale);
  const dates = dateRanges ? dateRanges : [];

  const readMoreHref = `/${validLocale}${tourHref}`;

  const imageSection = (
    <div className={styles.group_tour_left}>
      <Link 
        href={readMoreHref}
        className={styles.group_tour_image_link}
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          position: 'relative',
          display: 'block',
          textDecoration: 'none'
        }}
      >
        <div className={styles.tours_image_container}>
          <p className={styles.tour_container_desc}>
            {t(`Tours.${tourKey}.description`)}{" "}
            <span style={{ color: "#ebc934" }}>
              {t(`Tours.${tourKey}.read_more`)}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );

  const contentSection = (
    <div className={styles.group_tour_right}>
      <div className={styles.group_tour_meta}>
        <p className={styles.group_tour_duration}>
          {t(`Tours.${tourKey}.tour_duration_label`)} {t(`Tours.${tourKey}.duration`)}
        </p>
        <p className={styles.group_tour_price}>
          {t(`Tours.${tourKey}.price_per_person`)}{" "}
          <span className={styles.group_tour_price_amount}>
            {t(`Tours.${tourKey}.price_usd`)} USD / {t(`Tours.${tourKey}.price_eur`)} Eur
          </span>
        </p>
      </div>

      <div className={styles.group_tour_booking_grid}>
        <button className={styles.group_tour_date_button}>{dates[0]}</button>
        <Link href={readMoreHref} className={styles.group_tour_reserve_button} style={{ textDecoration: 'none', display: 'block', textAlign: 'center' }}>
          {t(`Tours.${tourKey}.reserve_spot`)}
        </Link>
        <button className={styles.group_tour_date_button}>{dates[1]}</button>
        {/* <button className={styles.group_tour_soldout_button}>{t(`Tours.${tourKey}`)}</button> */}
      </div>
    </div>
  );

  return (
    <div className={styles.group_tour_wrapper}>
      <p className={`${styles.group_tour_title} ${reverse ? styles.group_tour_title_right : styles.group_tour_title_left}`}>
        {t(`Tours.${tourKey}.title`)}
      </p>
      <div className={`${styles.group_tour_container} ${reverse ? styles.group_tour_reverse : ''}`}>
        {reverse ? (
          <>
            {contentSection}
            {imageSection}
          </>
        ) : (
          <>
            {imageSection}
            {contentSection}
          </>
        )}
      </div>
    </div>
  );
};

export default SouthNorthTour;
