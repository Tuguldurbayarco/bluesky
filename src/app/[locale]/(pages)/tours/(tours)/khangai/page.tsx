import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const GobiKhangai = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
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
              src='/mapkhangai.png'
              alt='Route'
            />
          </div>
          <div className={styles.tours_background_color}>
            <h1 className={styles.tours_main_description_header}>{t('Khangai.picture_text')}</h1>
            <p className={styles.tours_main_description}>{t('Khangai.description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/gkt0.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <p className={styles.tours_page_main_header}></p>
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khangai.day1text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Khangai.schedule1-1')}</li>
                  <li>{t('Khangai.schedule1-2')}</li>
                  <li>{t('Khangai.schedule1-3')}</li>
                  <li>{t('Khangai.schedule1-4')}</li>
                  <li>{t('Khangai.schedule1-5')}</li>
                  <li>{t('Khangai.schedule1-6')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gkt1.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day2')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khangai.day2text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Khangai.schedule2-1')}</li>
                  <li>{t('Khangai.schedule2-2')}</li>
                  <li>{t('Khangai.schedule2-3')}</li>
                  <li>{t('Khangai.schedule2-4')}</li>
                  <li>{t('Khangai.schedule2-5')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gkt2.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day3')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khangai.day3text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Khangai.schedule3-1')}</li>
                  <li>{t('Khangai.schedule3-2')}</li>
                  <li>{t('Khangai.schedule3-3')}</li>
                  <li>{t('Khangai.schedule3-4')}</li>
                  <li>{t('Khangai.schedule3-5')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gkt3.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day4')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khangai.day4text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Khangai.schedule4-1')}</li>
                  <li>{t('Khangai.schedule4-2')}</li>
                  <li>{t('Khangai.schedule4-3')}</li>
                  <li>{t('Khangai.schedule4-4')}</li>
                  <li>{t('Khangai.schedule4-5')}</li>
                  <li>{t('Khangai.schedule4-6')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gkt4.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day5')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khangai.day5text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Khangai.schedule5-1')}</li>
                  <li>{t('Khangai.schedule5-2')}</li>
                  <li>{t('Khangai.schedule5-3')}</li>
                  <li>{t('Khangai.schedule5-4')}</li>
                  <li>{t('Khangai.schedule5-5')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gkt5.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day6')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khangai.day6text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Khangai.schedule6-1')}</li>
                  <li>{t('Khangai.schedule6-2')}</li>
                  <li>{t('Khangai.schedule6-3')}</li>
                  <li>{t('Khangai.schedule6-4')}</li>
                  <li>{t('Khangai.schedule6-5')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gkt6.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day7')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khangai.day7text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Khangai.schedule7-1')}</li>
                  <li>{t('Khangai.schedule7-2')}</li>
                  <li>{t('Khangai.schedule7-3')}</li>
                  <li>{t('Khangai.schedule7-4')}</li>
                  <li>{t('Khangai.schedule7-5')}</li>
                  <li>{t('Khangai.schedule7-6')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gkt8.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day8')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khangai.day8text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}>{t('Khangai.attention')}</p>
                <p className={styles.tour_left_column_text_sec}>{t('Khangai.attention_desc')}</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Khangai.schedule8-1')}</li>
                  <li>{t('Khangai.schedule8-2')}</li>
                  <li>{t('Khangai.schedule8-3')}</li>
                  <li>{t('Khangai.schedule8-4')}</li>
                  <li>{t('Khangai.schedule8-5')}</li>
                  <li>{t('Khangai.schedule8-6')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gkt9.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day9')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khangai.day9text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Khangai.schedule9-1')}</li>
                  <li>{t('Khangai.schedule9-2')}</li>
                  <li>{t('Khangai.schedule9-3')}</li>
                  <li>{t('Khangai.schedule9-4')}</li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gkt10.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day10')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khangai.day10text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Khangai.schedule10-1')}</li>
                  <li>{t('Khangai.schedule10-2')}</li>
                  <li>{t('Khangai.schedule10-3')}</li>
                  <li>{t('Khangai.schedule10-4')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gkt11.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day11')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khangai.day11text')}</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Khangai.schedule11-1')}</li>
                  <li>{t('Khangai.schedule11-2')}</li>
                  <li>{t('Khangai.schedule11-3')}</li>
                  <li>{t('Khangai.schedule11-4')}</li>
                  <li>{t('Khangai.schedule11-5')}</li>
                  <li>{t('Khangai.schedule11-6')}</li>
                  <li>{t('Khangai.schedule11-7')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/gkt12.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day12')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khangai.day12text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}></p>
                <p className={styles.tour_left_column_text_sec}></p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Khangai.schedule12-1')}</li>
                  <li>{t('Khangai.schedule12-2')}</li>
                  <li>{t('Khangai.schedule12-3')}</li>
                  <li>{t('Khangai.schedule12-4')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon3')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "5%"}}> {/*удалить отсуп снизу*/}
          <div style={{position: 'relative'}}>
            <img
              src='/gkt13.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day13')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text}>{t('Khangai.day13text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader} style={{ visibility: 'hidden' }}>text</p>
                <p className={styles.tour_left_column_text_sec} style={{ visibility: 'hidden' }}>text</p>
              </div>
            </div>
            <div style={{width: "100%"}}>{/*right cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.program')}</p>
              </div>
              <div className={styles.tour_right_column_text}>
                <ul style={{fontWeight: "500", marginBottom: "1%"}}>
                  <li>{t('Khangai.schedule13-1')}</li>
                  <li>{t('Khangai.schedule13-2')}</li>
                  <li>{t('Khangai.schedule13-3')}</li>
                  <li>{t('Khangai.schedule13-4')}</li>
                  <li>{t('Khangai.schedule13-5')}</li>
                </ul>
              </div>
              <div style={{display: "flex", gap: "2.2%", marginRight: "3%", alignItems: 'flex-start'}}>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/eat.png' alt="eat" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon1')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/wifi.png' alt="wifi" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>3g/4g
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/shower.png' alt="shower" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon4')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/bulb.png' alt="bulb" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon5')}
                </p>
                <p className={styles.tour_right_column_icons_text}>
                  <img src='/battery.png' alt="battery" style={{backgroundColor: "#32a848", borderRadius: "8px"}} className={styles.tour_right_column_icons}/>{t('Khangai.icon3')}
                </p>
              </div>
              <div style={{marginTop: "2%"}}>
                <Link href={addLocaleToHref("/contacts?tour=gobikhangai#targetBlock")} className='myButton '>
                  {t('Khangai.button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GobiKhangai