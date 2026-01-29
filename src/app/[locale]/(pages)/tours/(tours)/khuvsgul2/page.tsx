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
    <div className={styles.tours_and_events_margin_top}>
      <div className='visibility_area'>
        <div>
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/tours/mapkhuvsgul.png'
              alt='Route'
            />
          </div>
          <div className={styles.tours_background_color}>
            <h1 className={styles.tours_main_description_header}>{t('Khuvsgul2.picture_text')}</h1>
            <p className={styles.tours_main_description}>{t('Khuvsgul2.description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/kt0.jpg'
              alt='Bulgan Province'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <p className={styles.tours_page_main_header}></p>
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul2.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khuvsgul2.day1text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/kt1.jpg'
              alt='Khuvsgul Lake'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul2.day2')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khuvsgul2.day2text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/kt2.jpg'
              alt='Khuvsgul Lake'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul2.day3')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khuvsgul2.day3text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/kt3.jpg'
              alt='Zuun Nuur'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul2.day4')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khuvsgul2.day4text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/kt4.jpg'
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
                <p className={styles.tour_left_column_text}>{t('Khuvsgul2.day5text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/kt5.jpg'
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
                <p className={styles.tour_left_column_text}>{t('Khuvsgul2.day6text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/kt6.jpg'
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
                <p className={styles.tour_left_column_text}>{t('Khuvsgul2.day7text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "5%"}}>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/kt7.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khuvsgul2.day8')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khuvsgul2.day8text')}</p>
              </div>
              <div style={{marginTop: "2%"}}>
                <Link href={addLocaleToHref("/contacts?tour=khuvsgul2#targetBlock")} className='myButton '>
                  {t('Khuvsgul2.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Khuvsgul2
