import React from "react";
import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import BookingLink from "@/components/UI/BookingLink";
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const Khuvsgul1 = async ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div className={styles.tours_and_events_margin_top} style={{ marginTop: '170px' }}>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{ marginBottom: '4rem' }}>
            <h1 className="pageTitle" style={{ marginTop: '0', marginBottom: '1rem', textAlign: 'center' }}>{t('Khuvsgul1.picture_text')}</h1>
            <p className="pageDescription" style={{ textAlign: 'justify' }}>{t('Khuvsgul1.description')}</p>
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul1.day1')}</p>
              </div>
              <ul className={styles.tour_left_column_text} style={{ listStyle: 'disc', paddingLeft: '1.5rem', margin: 0 }}>
                {(t('Khuvsgul1.day1text') as string).split('\n').map((line, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-khuvsgul1/huvsgul.jpg'
              alt='Lake Khuvsgul'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul1.day2')}</p>
              </div>
              <ul className={styles.tour_left_column_text} style={{ listStyle: 'disc', paddingLeft: '1.5rem', margin: 0 }}>
                {(t('Khuvsgul1.day2text') as string).split('\n').map((line, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-khuvsgul1/day3.webp'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul1.day3')}</p>
              </div>
              <ul className={styles.tour_left_column_text} style={{ listStyle: 'disc', paddingLeft: '1.5rem', margin: 0 }}>
                {(t('Khuvsgul1.day3text') as string).split('\n').map((line, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>{line}</li>
                ))}
              </ul>
            </div>
            <div style={{marginTop: "2rem", width: "100%"}}>
              <BookingLink locale={validLocale} tourValue="khuvsgul1" buttonText={t('Khuvsgul1.button')} className='myButton' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
  
export default Khuvsgul1