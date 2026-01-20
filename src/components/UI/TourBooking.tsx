import React from "react";
import { createTranslator, defaultLocale, isValidLocale, Locale } from "@/lib/i18n";
import Link from "next/link";
import styles from "./group-tour.module.css";

type TourBookingProps = {
  locale?: Locale;
  tourKey: string;
  dateRanges: string[];
};

const TourBooking: React.FC<TourBookingProps> = ({ locale, tourKey, dateRanges }) => {
  const validLocale = isValidLocale(locale || "en") ? (locale || "en") : defaultLocale;
  const t = createTranslator(validLocale);
  const tourHref = tourKey === "southNorthTour" 
    ? "/tours/south-north"
    : tourKey === "eightLakesTrekking"
    ? "/tours/eight-lakes-trekking"
    : tourKey === "eightLakesEquestrian"
    ? "/tours/eight-lakes-equestrian"
    : tourKey === "altaiExpedition"
    ? "/tours/altai-expedition"
    : "/tours/south-north";
  
  // Map tourKey to form tour value
  const tourFormValue = tourKey === "southNorthTour" 
    ? "south-north"
    : tourKey === "eightLakesTrekking"
    ? "eight-lakes-trekking"
    : tourKey === "eightLakesEquestrian"
    ? "eight-lakes-equestrian"
    : tourKey === "altaiExpedition"
    ? "altai-expedition"
    : "south-north";
  
  const reserveHref = `/${validLocale}/contacts?tour=${tourFormValue}#targetBlock`;

  return (
    <div style={{
      marginTop: '0',
      marginBottom: '0',
      padding: '2rem',
      backgroundColor: '#fff',
      borderRadius: '12px',
      width: '100%'
    }}>
      <div style={{ marginBottom: '2rem' }}>
        <p style={{ 
          fontSize: '110%', 
          fontWeight: 700,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          alignItems: 'baseline'
        }}>
          <span>{t(`Tours.${tourKey}.price_per_person`)}</span>
          <span style={{ fontWeight: 400 }}>
            {t(`Tours.${tourKey}.price_usd`)} USD | {t(`Tours.${tourKey}.price_eur`)} EUR
            {' '}(incl. taxes and fees)
          </span>
        </p>
      </div>

      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ 
          fontSize: '115%', 
          fontWeight: 700, 
          marginBottom: '1rem' 
        }}>
          {t("Tours.tour_dates")}
        </h3>
        
        <div style={{ 
          marginBottom: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {dateRanges.map((dateRange, index) => (
            <div key={index} style={{
              padding: '0.8rem 1.2rem',
              border: '1px solid #96c15f',
              borderRadius: '10px',
              backgroundColor: '#fff',
              minWidth: '200px'
            }}>
              <span style={{ fontSize: '100%' }}>2026, {dateRange}</span>
            </div>
          ))}
        </div>
        <div>
          <Link 
            href={reserveHref} 
            className={styles.group_tour_reserve_button} 
            style={{ 
              textDecoration: 'none', 
              display: 'block', 
              textAlign: 'center',
              width: '200px'
            }}
          >
            {t(`Tours.${tourKey}.reserve_spot`)}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourBooking;
