import React, { Suspense } from "react";
import { createTranslator, defaultLocale, isValidLocale, Locale } from "@/lib/i18n";
import Link from "next/link";
import TourDetailLink from "./TourDetailLink";
import styles from "./tour-card.module.css";

type TourCardProps = {
  locale?: Locale;
  tourKey: string;
  imageSrc: string;
  tourHref: string;
};

const TourCardContent: React.FC<TourCardProps> = ({ locale, tourKey, imageSrc, tourHref }) => {
  const validLocale = isValidLocale(locale || "en") ? (locale || "en") : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div className={styles.tour_card}>
      <div className={styles.tour_image_container}>
        <TourDetailLink locale={validLocale} tourHref={tourHref}>
          <img 
            src={imageSrc}
            alt={t(`Tours.classicTours.${tourKey}.title`)}
            className={styles.tour_image}
          />
        </TourDetailLink>
      </div>
      <div className={styles.tour_content}>
        <TourDetailLink locale={validLocale} tourHref={tourHref} className={styles.tour_title_link}>
          <h3 className={styles.tour_title}>
            {t(`Tours.classicTours.${tourKey}.title`)}{" "}
            <span style={{fontSize: '0.72em', fontWeight: 'normal', color: '#c23b3b'}}>
              {t(`Tours.classicTours.${tourKey}.duration`)}
            </span>
          </h3>
        </TourDetailLink>
        <p className={styles.tour_description}>
          {t(`Tours.classicTours.${tourKey}.description`)}{" "}
          <TourDetailLink locale={validLocale} tourHref={tourHref} className={styles.tour_read_more}>
            {t('Tours.read_more')}
          </TourDetailLink>
        </p>
      </div>
    </div>
  );
};

const TourCard: React.FC<TourCardProps> = (props) => {
  const validLocale = isValidLocale(props.locale || "en") ? (props.locale || "en") : defaultLocale;
  const fallbackHref = `/${validLocale}${props.tourHref}`;
  
  return (
    <Suspense fallback={
      <div className={styles.tour_card}>
        <div className={styles.tour_image_container}>
          <a href={fallbackHref}>
            <img 
              src={props.imageSrc}
              alt="Tour"
              className={styles.tour_image}
            />
          </a>
        </div>
      </div>
    }>
      <TourCardContent {...props} />
    </Suspense>
  );
};

export default TourCard;
