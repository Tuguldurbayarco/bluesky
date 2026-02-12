"use client";
import React from "react";
import { createTranslator, defaultLocale, isValidLocale, Locale } from "@/lib/i18n";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "./group-tour.module.css";

type SouthNorthTourProps = {
  locale?: Locale;
  dateRanges?: string[];
  tourKey: string;
  imageSrc: string;
  tourHref: string;
};

const SouthNorthTour: React.FC<SouthNorthTourProps> = ({ locale, dateRanges, tourKey, imageSrc, tourHref }) => {
  const validLocale = isValidLocale(locale || "en") ? (locale || "en") : defaultLocale;
  const t = createTranslator(validLocale);
  const dates = dateRanges ? dateRanges : [];
  const searchParams = useSearchParams();
  const tab = searchParams?.get("tab");
  
  // Preserve tab=normal parameter when linking to detail page
  const queryString = tab === "normal" ? "?tab=normal" : "";
  const readMoreHref = `/${validLocale}${tourHref}${queryString}`;

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
            <span style={{ color: "var(--color-main)" }}>
              {t(`Tours.${tourKey}.read_more`)}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );

  const calendarIcon = (
    <svg className={styles.group_tour_calendar_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
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

      {dates.length > 0 && (
        <div className={styles.group_tour_dates}>
          <div className={styles.group_tour_dates_header}>
            {calendarIcon}
            <span className={styles.group_tour_dates_label}>{t("Tours.tour_dates")}</span>
          </div>
          <ul className={styles.group_tour_date_list}>
            {dates.map((date, i) => (
              <li key={i} className={styles.group_tour_date_item}>{date}</li>
            ))}
          </ul>
        </div>
      )}

      <Link href={readMoreHref} className={styles.group_tour_reserve_button} style={{ textDecoration: "none", display: "block", textAlign: "center" }}>
        {t(`Tours.${tourKey}.reserve_spot`)}
      </Link>
    </div>
  );

  return (
    <div className={styles.group_tour_wrapper}>
      <p className={`${styles.group_tour_title} ${styles.group_tour_title_left}`}>
        {t(`Tours.${tourKey}.title`)}
      </p>
      <div className={styles.group_tour_container}>
        {imageSection}
        {contentSection}
      </div>
    </div>
  );
};

export default SouthNorthTour;
