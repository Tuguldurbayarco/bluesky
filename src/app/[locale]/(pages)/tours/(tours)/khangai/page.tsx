import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const GobiKhangai = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  
  return (
    <div className={styles.tours_and_events_margin_top} style={{ marginTop: '170px' }}>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{ marginBottom: '4rem' }}>
            <h1 className="pageTitle" style={{ marginTop: '0', marginBottom: '1rem', textAlign: 'center' }}>{t('Khangai.picture_text')}</h1>
            <p className="pageDescription" style={{ textAlign: 'justify' }}>{t('Khangai.description')}</p>
          </div>
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/gkt0.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day1text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/gobi day 1.jpeg'
              alt='Gobi landscape - Tsagaan Suvarga'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day2')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day2text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/gkt2.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day3')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day3text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/gkt3.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day4')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day4text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/gobi day 4.jpg'
              alt='Bayanzag Flaming Cliffs'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day5')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day5text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/ongi.jpg'
              alt='Ongi Monastery'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day6')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day6text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/central day 3.png'
              alt='Kharkhorin - Erdene Zuu Monastery'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day7')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day7text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/gkt8.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day8')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day8text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_subheader}>{t('Khangai.attention')}</p>
                <p className={styles.tour_left_column_text_sec}>{t('Khangai.attention_desc')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/gkt9.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day9')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day9text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/tsagaan nuur.jpg'
              alt='Zuun Nuur - Tsagaan Nuur'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day10')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day10text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/gkt11.jpg'
              alt='Khuvsgul Lake - Day 11, 12'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day12')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day12text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/uran togoo.webp'
              alt='Uran Togoo - Volcanic Mountain'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day13')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day13text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/amarbayasgalant_splash.jpg'
              alt='Amarbayasgalant Monastery'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day14')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day14text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/central day 5.jpg'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('Khangai.day15')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('Khangai.day15text')}</p>
              </div>
            </div>
            <div style={{marginTop: "2rem", width: "100%"}}>
              <Link href={addLocaleToHref("/contacts?tour=khangai#targetBlock")} className='myButton'>
                {t('Khangai.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GobiKhangai