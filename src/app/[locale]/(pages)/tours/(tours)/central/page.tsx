import React from "react";
import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import BookingLink from "@/components/UI/BookingLink";
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const Central = async ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div className={styles.tours_and_events_margin_top} style={{ marginTop: '170px' }}>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{ marginBottom: '4rem' }}>
            <h1 className="pageTitle" style={{ marginTop: '0', marginBottom: '1rem', textAlign: 'center' }}>{t('Central.picture_text')}</h1>
            <p className="pageDescription" style={{ textAlign: 'justify' }}>{t('Central.description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-central/day1.png'
              alt='Central Mongolia'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Central.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Central.day1text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div> 
          <div style={{position: 'relative'}}>
            <img
              src='/tours/cet1.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Central.day2')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Central.day2text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}>{t('Central.attention2')}</p>
                <p className={styles.tour_left_column_text_sec}>{t('Central.att_desc2')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-central/day3.avif'
              alt='Central Mongolia - Day 3'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Central.day3')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Central.day3text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div> 
          <div style={{position: 'relative'}}>
            <img
              src='/tours/cet4.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Central.day4')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Central.day4text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-central/day5.webp'
              alt='Central Mongolia - Day 5'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Central.day5')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Central.day5text')}</p>
              </div>
            </div>
            <div style={{marginTop: "2rem", width: "100%"}}>
              <BookingLink locale={validLocale} tourValue="central" buttonText={t('Central.button')} className='myButton' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Central