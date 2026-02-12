import React from "react";
import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import BookingLink from "@/components/UI/BookingLink";
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const ZavkhanTour = async ({ params: { locale } }: { params: { locale: string } }) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);

  const days = [
    { img: '/tours/tour-zavkhan/day1.avif', dayKey: 'day1', textKey: 'day1text' },
    { img: '/tours/tour-zavkhan/day2.jpg', dayKey: 'day2', textKey: 'day2text' },
    { img: '/tours/tour-zavkhan/day3.jpg', dayKey: 'day3', textKey: 'day3text' },
    { img: '/tours/tour-zavkhan/day4.jpg', dayKey: 'day4', textKey: 'day4text' },
    { img: '/tours/tour-zavkhan/day5.jpg', dayKey: 'day5', textKey: 'day5text' },
    { img: '/tours/cet1.jpg', dayKey: 'day6', textKey: 'day6text' },
    { img: '/tours/tour-zavkhan/day6.png', dayKey: 'day7', textKey: 'day7text' },
    { img: '/tours/tour-zavkhan/day7.webp', dayKey: 'day8', textKey: 'day8text' },
  ];

  return (
    <div className={styles.tours_and_events_margin_top} style={{ marginTop: '170px' }}>
      <div className='visibility_area'>
        <div>
          <div style={{ marginBottom: '4rem' }}>
            <h1 className="pageTitle" style={{ marginTop: '0', marginBottom: '1rem', textAlign: 'center' }}>{t('Zavkhan.picture_text')}</h1>
            <p className="pageDescription" style={{ textAlign: 'justify' }}>{t('Zavkhan.description')}</p>
          </div>
          {days.map(({ img, dayKey, textKey }) => (
            <div key={dayKey}>
              <div style={{ position: 'relative', marginTop: 0 }}>
                <img
                  src={img}
                  alt={t(`Zavkhan.${dayKey}`)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff" }}>
                <div style={{ width: "100%", marginRight: "8%" }}>
                  <div>
                    <p className={styles.tour_left_column_header}>{t(`Zavkhan.${dayKey}`)}</p>
                  </div>
                  <div>
                    <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t(`Zavkhan.${textKey}`)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: "2rem", width: "100%", padding: "0 2% 2% 2%", backgroundColor: "#f6f5ff" }}>
            <BookingLink locale={validLocale} tourValue="zavkhan" buttonText={t('Zavkhan.button')} className='myButton' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZavkhanTour;
