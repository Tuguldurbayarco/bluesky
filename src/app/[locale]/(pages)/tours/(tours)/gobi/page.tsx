import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const Gobi = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
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
              src='/mapgobi.png'
              alt='Route'
            />
          </div>
          <div className={styles.tours_background_color}>
            <h1 className={styles.tours_main_description_header}>{t('Gobi.picture_text')}</h1>
            <p className={styles.tours_main_description}>{t('Gobi.description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/gt0.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <p className={styles.tours_page_main_header}></p>
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
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Gobi.schedule1-1')}</li>
                  <li>{t('Gobi.schedule1-2')}</li>
                  <li>{t('Gobi.schedule1-3')}</li>
                  <li>{t('Gobi.schedule1-4')}</li>
                  <li>{t('Gobi.schedule1-5')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gt1.jpg'
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
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Gobi.schedule2-1')}</li>
                  <li>{t('Gobi.schedule2-2')}</li>
                  <li>{t('Gobi.schedule2-3')}</li>
                  <li>{t('Gobi.schedule2-4')}</li>
                  <li>{t('Gobi.schedule2-5')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gt2.jpg'
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
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Gobi.schedule3-1')}</li>
                  <li>{t('Gobi.schedule3-2')}</li>
                  <li>{t('Gobi.schedule3-3')}</li>
                  <li>{t('Gobi.schedule3-4')}</li>
                  <li>{t('Gobi.schedule3-5')}</li>
                  <li>{t('Gobi.schedule3-6')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gt3.jpg'
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
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Gobi.schedule4-1')}</li>
                  <li>{t('Gobi.schedule4-2')}</li>
                  <li>{t('Gobi.schedule4-3')}</li>
                  <li>{t('Gobi.schedule4-4')}</li>
                  <li>{t('Gobi.schedule4-5')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gt4.jpg'
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
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Gobi.schedule5-1')}</li>
                  <li>{t('Gobi.schedule5-2')}</li>
                  <li>{t('Gobi.schedule5-3')}</li>
                  <li>{t('Gobi.schedule5-4')}</li>
                  <li>{t('Gobi.schedule5-5')}</li>
                  <li>{t('Gobi.schedule5-6')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gt5.jpg'
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
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Gobi.schedule6-1')}</li>
                  <li>{t('Gobi.schedule6-2')}</li>
                  <li>{t('Gobi.schedule6-3')}</li>
                  <li>{t('Gobi.schedule6-4')}</li>
                  <li>{t('Gobi.schedule6-5')}</li>
                  <li>{t('Gobi.schedule6-6')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gt6.jpg'
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
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Gobi.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Gobi.schedule7-1')}</li>
                  <li>{t('Gobi.schedule7-2')}</li>
                  <li>{t('Gobi.schedule7-3')}</li>
                  <li>{t('Gobi.schedule7-4')}</li>
                  <li>{t('Gobi.schedule7-5')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Gobi.icon3')}
                </p>
              </div>
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