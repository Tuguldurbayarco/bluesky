import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const City = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }  return (
    <div className={styles.tours_and_events_margin_top}>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/mapcity.png'
              alt='Route'
            />
          </div>
          <div className={styles.tours_background_color}>
            <h1 className={styles.tours_main_description_header}>{t('City.picture_text')}</h1>
            <p className={styles.tours_main_description}>{t('City.description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/cit0.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <p className={styles.tours_page_main_header}></p>
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('City.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('City.day1text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}> </p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('City.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('City.schedule1-1')}</li>
                  <li>{t('City.schedule1-2')}</li>
                  <li>{t('City.schedule1-3')}</li>
                  <li>{t('City.schedule1-4')}</li>
                  <li>{t('City.schedule1-5')}</li>
                  <li>{t('City.schedule1-6')}</li>
                  <li>{t('City.schedule1-7')}</li>
                  <li>{t('City.schedule1-8')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('City.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('City.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('City.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('City.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/cit1.jpg'
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
              {/* <div>
                <p className={styles.tour_left_column_subheader}>{t('City.attention')}</p>
                <p className={styles.tour_left_column_text_sec}> {t('City.attention_desc1')} <br/>{t('City.attention_desc2')}  <br/>{t('City.attention_desc3')} </p>
              </div> */}
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('City.program')} </p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('City.schedule2-1')}</li>
                  <li>{t('City.schedule2-2')}</li>
                  <li>{t('City.schedule2-3')}</li>
                  <li>{t('City.schedule2-4')}</li>
                  <li>{t('City.schedule2-5')}</li>
                  <li>{t('City.schedule2-6')}</li>
                  <li>{t('City.schedule2-7')}</li>
                  <li>{t('City.schedule2-8')}</li>
                  <li>{t('City.schedule2-9')}</li>
                  <li>{t('City.schedule2-10')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('City.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('City.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('City.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('City.icon3')}
                </p>
              </div>
              <div style={{marginTop: "2%", bottom: 0}}>
                <Link href={addLocaleToHref("/contacts?tour=city#targetBlock")} className='myButton'>
                  {t('City.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "5%"}}> {/*удалить отсуп снизу*/}
          <div style={{position: 'relative'}}>
            <img
              src='/cit2.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default City