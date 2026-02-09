import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../../components/UI/button.css';
import styles from "../../../tours.module.css";

const CentralWinter = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  
  return (
    <div className={styles.tours_and_events_margin_top} style={{ marginTop: '170px' }}>
      <div className='visibility_area'>
        <div>
          <div style={{ marginBottom: '4rem' }}>
            <h1 className="pageTitle" style={{ marginTop: '0', marginBottom: '1rem', textAlign: 'center' }}>{t('CentralWinter.picture_text')}</h1>
            <p className="pageDescription" style={{ textAlign: 'justify' }}>{t('CentralWinter.description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-central-winter/day1.jpg'
              alt='Central Mongolia - Mini Gobi'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('CentralWinter.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('CentralWinter.day1text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div> 
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-central-winter/day2.jpg'
              alt='Tsenkher Hot Spring'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('CentralWinter.day2')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('CentralWinter.day2text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}>{t('CentralWinter.attention2')}</p>
                <p className={styles.tour_left_column_text_sec}>{t('CentralWinter.att_desc2')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-central-winter/day3.jpg'
              alt='Terelj National Park'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('CentralWinter.day3')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('CentralWinter.day3text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div> 
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-central-winter/day4.avif'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('CentralWinter.day4')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('CentralWinter.day4text')}</p>
              </div>
            </div>
            <div style={{marginTop: "2rem", width: "100%"}}>
              <Link href={addLocaleToHref("/contacts?tour=central-winter#targetBlock")} className='myButton'>
                {t('CentralWinter.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CentralWinter
