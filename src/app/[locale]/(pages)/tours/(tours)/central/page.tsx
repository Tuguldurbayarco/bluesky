import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const Central = ({params: {locale}}: {params: {locale: string}}) => {
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
              src='/tours/mapcenter.png'
              alt='Route'
            />
          </div>
          <div className={styles.tours_background_color}>
            <h1 className={styles.tours_main_description_header}>{t('Central.picture_text')}</h1>
            <p className={styles.tours_main_description}>{t('Central.description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/cet0.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Central.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Central.day1text')}</p>
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
                <p className={styles.tour_left_column_text}>{t('Central.day2text')}</p>
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
              src='/tours/cet3.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Central.day3')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Central.day3text')}</p>
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
                <p className={styles.tour_left_column_text}>{t('Central.day4text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "5%"}}> {/*удалить отсуп снизу*/}
          <div style={{position: 'relative'}}>
            <img
              src='/tours/cet5.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Central.day5')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Central.day5text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader} style={{ visibility: 'hidden' }}> text</p>
                <p className={styles.tour_left_column_text_sec} style={{ visibility: 'hidden' }}> text</p>
              </div>
            </div>
            <div style={{width: "100%"}}>
              <div style={{marginTop: "2%", bottom: 0}}>
                <Link href={addLocaleToHref("/contacts?tour=central#targetBlock")} className='myButton'>
                  {t('Central.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Central