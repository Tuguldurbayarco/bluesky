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
              src='/tours/tour-khangai/day1.jpg'
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
              src='/tours/tour-khangai/day2.jpg'
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
              src='/tours/tour-khangai/day3.jpg'
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
              src='/tours/tour-khangai/day4.jpg'
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
              src='/tours/tour-khangai/day5.jpg'
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
              src='/tours/tour-khangai/day6.webp'
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
              src='/tours/tour-khangai/day7.avif'
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
              src='/tours/tour-khangai/day9.jpg'
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
              src='/tours/tour-khangai/day10.png'
              alt='Shine-ider - Tsagaan Nuur'
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
              src='/tours/tour-khangai/day12.png'
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
              src='/tours/tour-khangai/day13.jpg'
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
        <div>
          <div style={{position: 'relative', marginTop: 0}}>
            <img
              src='/tours/tour-khangai/day14.webp'
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