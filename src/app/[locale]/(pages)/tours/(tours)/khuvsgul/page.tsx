"use client";

import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import styles from "../../tours.module.css";
import cardStyles from "./khuvsgul-selection.module.css";

const KhuvsgulSelection = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }

  const khuvsgulTours = [
    {
      name: t('KhuvsgulSelection.tour1_name'),
      description: t('KhuvsgulSelection.tour1_description'),
      duration: t('KhuvsgulSelection.tour1_duration'),
      href: "/tours/khuvsgul1",
      imageSrc: "/tours/tour-khuvsgul1/huvsgul.jpg"
    },
    {
      name: t('KhuvsgulSelection.tour2_name'),
      description: t('KhuvsgulSelection.tour2_description'),
      duration: t('KhuvsgulSelection.tour2_duration'),
      href: "/tours/khuvsgul2",
      imageSrc: "/tours/tour-khuvsgul2/day2.png"
    }
  ];

  return (
    <div className={styles.tours_and_events_margin_top}>
      <div className='visibility_area' style={{marginTop: "150px"}}>
        <div>
          <h2 className="pageTitle" style={{marginTop: '2rem', marginBottom: '2rem', textAlign: 'center'}}>{t('KhuvsgulSelection.title')}</h2>
          <p className="pageDescription" style={{marginBottom: '2rem'}}>
            {t('KhuvsgulSelection.description')}
          </p>
        </div>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "2rem",
          padding: "3rem 2%",
          maxWidth: "1200px",
          margin: "0 auto"
        }}>
          {khuvsgulTours.map((tour, index) => (
            <Link
              key={index}
              href={addLocaleToHref(tour.href)}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block"
              }}
            >
              <div className={cardStyles.khuvsgul_tour_card}>
                <div 
                  className={cardStyles.khuvsgul_tour_image}
                  style={{
                    backgroundImage: `url(${tour.imageSrc})`
                  }}
                >
                </div>
                <div className={cardStyles.khuvsgul_tour_content}>
                  <h3 className={cardStyles.khuvsgul_tour_title}>
                    {tour.name}{" "}
                    <span className={cardStyles.khuvsgul_tour_duration}>
                      {tour.duration}
                    </span>
                  </h3>
                  <p className={cardStyles.khuvsgul_tour_description}>
                    {tour.description}{" "}
                    <span style={{
                      color: "#4d5df0",
                      fontSize: "1rem",
                      fontWeight: "600",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#3b4ae0";
                      e.currentTarget.style.textDecoration = "underline";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#4d5df0";
                      e.currentTarget.style.textDecoration = "none";
                    }}>
                      {t('Tours.read_more')}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default KhuvsgulSelection
