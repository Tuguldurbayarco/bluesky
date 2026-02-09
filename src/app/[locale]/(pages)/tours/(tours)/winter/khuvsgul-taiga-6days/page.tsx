import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../../components/UI/button.css';
import styles from "../../../tours.module.css";

const KhuvsgulTaiga6Days = ({params: {locale}}: {params: {locale: string}}) => {
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
            <h1 className="pageTitle" style={{ marginTop: '0', marginBottom: '1rem', textAlign: 'center' }}>{t('KhuvsgulTaiga6Days.picture_text')}</h1>
            <p className="pageDescription" style={{ textAlign: 'justify' }}>{t('KhuvsgulTaiga6Days.description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-khuvsgul-taiga-6days/day1.jpg'
              alt='Bulgan Province'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulTaiga6Days.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulTaiga6Days.day1text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div> 
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-khuvsgul-taiga-6days/day2.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulTaiga6Days.day2')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulTaiga6Days.day2text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-khuvsgul-taiga-6days/day3.jpg'
              alt='Tsagaan Nuur - Taiga'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulTaiga6Days.day3')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulTaiga6Days.day3text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-khuvsgul-taiga-6days/day4.jpg'
              alt='Renchinlkhumbe - Tsaatan'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulTaiga6Days.day4')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulTaiga6Days.day4text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-khuvsgul-taiga-6days/day5.jpg'
              alt='Khuvsgul Lake'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulTaiga6Days.day5')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulTaiga6Days.day5text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-khuvsgul-taiga-6days/day6.jpg'
              alt='Erdenet'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulTaiga6Days.day6')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulTaiga6Days.day6text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-khuvsgul-taiga-6days/day7.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulTaiga6Days.day7')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulTaiga6Days.day7text')}</p>
              </div>
            </div>
            <div style={{marginTop: "2rem", width: "100%"}}>
              <Link href={addLocaleToHref("/contacts?tour=khuvsgul-taiga-6days#targetBlock")} className='myButton'>
                {t('KhuvsgulTaiga6Days.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KhuvsgulTaiga6Days
