import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const City = ({params: {locale}}: {params: {locale: string}}) => {
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
              src='/tours/mapcity.png'
              alt='Route'
            />
          </div>
          <div className={styles.tours_background_color}>
            <h1 className={styles.tours_main_description_header}>{t('City.picture_text')}</h1>
            <p className={styles.tours_main_description}>{t('City.description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/cit0.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('City.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('City.day1text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/cit1.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('City.day2')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('City.day2text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/tours/cit2.jpg'
              alt='Chinggis Khaan Statue'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('City.day3')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('City.day3text')}</p>
              </div>
            </div>
            <div style={{width: "100%"}}>
              <div style={{marginTop: "2%", bottom: 0}}>
                <Link href={addLocaleToHref("/contacts?tour=city#targetBlock")} className='myButton'>
                  {t('City.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default City