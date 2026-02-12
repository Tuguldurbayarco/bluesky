import React from "react";
import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import BookingLink from "@/components/UI/BookingLink";
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const Gobi = async ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div className={styles.tours_and_events_margin_top} style={{ marginTop: '170px' }}>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{ marginBottom: '4rem' }}>
            <h1 className="pageTitle" style={{ marginTop: '0', marginBottom: '1rem', textAlign: 'center' }}>{t('Gobi.picture_text')}</h1>
            <p className="pageDescription" style={{ textAlign: 'justify' }}>{t('Gobi.description')}</p>
          </div>
          <div style={{position: 'relative', marginTop: '1rem'}}>
            <img
              src='/tours/tour-gobi/day1.jpg'
              alt='Gobi Day 1'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Gobi.day1text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-gobi/day2.jpg'
              alt='Gobi Day 2'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day2')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Gobi.day2text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-gobi/day3.jpg'
              alt='Gobi Day 3'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day3')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Gobi.day3text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-gobi/day4.jpg'
              alt='Gobi Day 4'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day4')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Gobi.day4text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-gobi/day5.jpg'
              alt='Gobi Day 5'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day5')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Gobi.day5text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-gobi/day6.jpg'
              alt='Gobi Day 6'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day6')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Gobi.day6text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-gobi/day7.webp'
              alt='Gobi Day 7'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day7')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Gobi.day7text')}</p>
              </div>
            </div>
            <div style={{marginTop: "2rem", width: "100%"}}>
              <BookingLink locale={validLocale} tourValue="gobi" buttonText={t('Gobi.button')} className='myButton' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gobi