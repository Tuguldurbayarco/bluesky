import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const Gobi = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  
  return (
    <div className={styles.tours_and_events_margin_top}>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/tours/mapgobi.png'
              alt='Route'
            />
          </div>
          <div className={styles.tours_background_color}>
            <h1 className={styles.tours_main_description_header}>{t('Gobi.picture_text')}</h1>
            <p className={styles.tours_main_description}>{t('Gobi.description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/gt0.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Gobi.day1text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/gt1.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day2')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Gobi.day2text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/gt2.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day3')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Gobi.day3text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/gt3.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day4')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Gobi.day4text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/gt4.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day5')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Gobi.day5text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/gt5.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day6')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Gobi.day6text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/gt6.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.day7')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Gobi.day7text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader} style={{ visibility: 'hidden' }}>text</p>
                <p className={styles.tour_left_column_text_sec} style={{ visibility: 'hidden' }}>text</p>
              </div>
            </div>
            <div style={{width: "100%"}}>
              <div style={{marginTop: "2%"}}>
                <Link href={addLocaleToHref("/contacts?tour=gobi#targetBlock")} className='myButton '>
                  {t('Gobi.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gobi