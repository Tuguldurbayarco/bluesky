import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const Khuvsgul2 = ({params: {locale}}: {params: {locale: string}}) => {
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
            <h1 className="pageTitle" style={{ marginTop: '0', marginBottom: '1rem', textAlign: 'center' }}>{t('Khuvsgul2.picture_text')}</h1>
            <p className="pageDescription" style={{ textAlign: 'justify' }}>{t('Khuvsgul2.description')}</p>
          </div>
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/bulgan .jpg'
              alt='Bulgan Province'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul2.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khuvsgul2.day1text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/tour-khuvsgul2/day2.png'
              alt='Terkh White Lake'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul2.day2')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khuvsgul2.day2text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/tour-khuvsgul2/day4.png'
              alt='Shine-ider'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul2.day4')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khuvsgul2.day4text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/tour-khuvsgul2/day5.jpg'
              alt='Terkh White Lake'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul2.day5')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khuvsgul2.day5text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/cet1.jpg'
              alt='Tsenkher Hot Spring'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul2.day6')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khuvsgul2.day6text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/tour-khuvsgul2/day7.png'
              alt='Mini Gobi'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul2.day7')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khuvsgul2.day7text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/tour-khuvsgul2/day8.webp'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul2.day8')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khuvsgul2.day8text')}</p>
              </div>
            </div>
            <div style={{marginTop: "2rem", width: "100%"}}>
              <Link href={addLocaleToHref("/contacts?tour=khuvsgul2#targetBlock")} className='myButton'>
                {t('Khuvsgul2.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Khuvsgul2
