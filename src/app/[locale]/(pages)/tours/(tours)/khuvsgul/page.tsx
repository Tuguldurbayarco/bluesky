"use client";

import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import styles from "../../tours.module.css";
import TourCardsStyles from "@/components/UI/TourCards.module.css";

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
      imageSrc: "/ctmkhuvsgul1.jpg"
    },
    {
      name: t('KhuvsgulSelection.tour2_name'),
      description: t('KhuvsgulSelection.tour2_description'),
      duration: t('KhuvsgulSelection.tour2_duration'),
      href: "/tours/khuvsgul2",
      imageSrc: "/ctmkhuvsgul1.jpg"
    }
  ];

  return (
    <div className={styles.tours_and_events_margin_top}>
      <div className='visibility_area'>
        <div className={styles.tours_background_color} style={{padding: "2rem 0"}}>
          <h1 className={styles.tours_main_description_header}>{t('KhuvsgulSelection.title')}</h1>
          <p className={styles.tours_main_description} style={{textAlign: "center", maxWidth: "800px", margin: "0 auto"}}>
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
              <div style={{
                backgroundColor: "#f6f5ff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                height: "100%",
                display: "flex",
                flexDirection: "column"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 12px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
              }}
              >
                <div style={{
                  width: "100%",
                  height: "250px",
                  backgroundImage: `url(${tour.imageSrc})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative"
                }}>
                  <div style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    backgroundColor: "#3B82F6",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "8px",
                    fontWeight: "600",
                    fontSize: "0.9rem"
                  }}>
                    {tour.duration}
                  </div>
                </div>
                <div style={{
                  padding: "1.5rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column"
                }}>
                  <h2 style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    marginBottom: "1rem",
                    color: "#333"
                  }}>
                    {tour.name}
                  </h2>
                  <p style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    color: "#666",
                    marginBottom: "1.5rem",
                    flex: 1
                  }}>
                    {tour.description}
                  </p>
                  <div style={{
                    display: "inline-block",
                    backgroundColor: "#2563eb",
                    color: "white",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    fontWeight: "600",
                    textAlign: "center",
                    transition: "background-color 0.3s ease"
                  }}>
                    {t('KhuvsgulSelection.view_details')}
                  </div>
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
