"use client";

import React from "react";
import { createTranslator, defaultLocale, isValidLocale, Locale } from "@/lib/i18n";
import Link from "next/link";
import styles from "./GroupTourDetailLayout.module.css";
import groupTourStyles from "./group-tour.module.css";

export type GroupTourDetailLayoutProps = {
  locale: Locale;
  tourKey: "altaiExpedition" | "southNorthTour" | "eightLakesTrekking" | "eightLakesEquestrian";
  mapSrc: string;
  mapAlt: string;
  dateRanges: string[];
  title: string;
  children: React.ReactNode;
};

function getReserveHref(locale: string, tourKey: string): string {
  const tourFormValue =
    tourKey === "southNorthTour"
      ? "south-north"
      : tourKey === "eightLakesTrekking"
        ? "eight-lakes-trekking"
        : tourKey === "eightLakesEquestrian"
          ? "eight-lakes-equestrian"
          : tourKey === "altaiExpedition"
            ? "altai-expedition"
            : "south-north";
  return `/${locale}/contacts?tour=${tourFormValue}#targetBlock`;
}

const GroupTourDetailLayout: React.FC<GroupTourDetailLayoutProps> = ({
  locale,
  tourKey,
  mapSrc,
  mapAlt,
  dateRanges,
  title,
  children,
}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  const reserveHref = getReserveHref(validLocale, tourKey);

  const calendarIcon = (
    <svg
      className={groupTourStyles.group_tour_calendar_icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );

  return (
    <div className={styles.detail_wrapper}>
      <aside className={styles.detail_sidebar}>
        <div className={styles.detail_map_wrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={mapSrc} alt={mapAlt} width="600" height="400" style={{ width: "100%", height: "auto" }} />
        </div>
        <div className={styles.detail_overview}>
          <p className={styles.detail_overview_line}>
            <strong>{t(`Tours.${tourKey}.tour_duration_label`)}</strong>
            <span className={styles.detail_overview_value}>
              {t(`Tours.${tourKey}.duration`)}
            </span>
          </p>
          <div className={styles.detail_price_wrap}>
            <p className={styles.detail_price_line}>
              <strong>{t(`Tours.${tourKey}.price_per_person`)}</strong>
              <span className={styles.detail_price_amount}>
                {t(`Tours.${tourKey}.price_usd`)} USD / {t(`Tours.${tourKey}.price_eur`)} Eur
              </span>
            </p>
          </div>
        </div>
        {dateRanges.length > 0 && (
          <div className={`${styles.detail_dates_wrap} ${groupTourStyles.group_tour_dates}`}>
            <div className={groupTourStyles.group_tour_dates_header}>
              {calendarIcon}
              <span className={groupTourStyles.group_tour_dates_label}>{t("Tours.tour_dates")}</span>
            </div>
            <ul className={groupTourStyles.group_tour_date_list}>
              {dateRanges.map((date, i) => (
                <li key={i} className={groupTourStyles.group_tour_date_item}>
                  {date}
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link href={reserveHref} className={styles.detail_book_button}>
          {t("Tours.book_this_tour")}
        </Link>
      </aside>
      <main className={styles.detail_content}>
        <h1 className={styles.detail_title}>{title}</h1>
        <div className={styles.detail_body}>{children}</div>
      </main>
    </div>
  );
};

export default GroupTourDetailLayout;
