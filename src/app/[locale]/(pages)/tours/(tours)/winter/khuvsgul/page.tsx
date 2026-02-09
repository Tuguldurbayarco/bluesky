import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../../components/UI/button.css';
import styles from "../../../tours.module.css";

const KhuvsgulWinter = ({params: {locale}}: {params: {locale: string}}) => {
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
            <h1 className="pageTitle" style={{ marginTop: '0', marginBottom: '1rem', textAlign: 'center' }}>{t('KhuvsgulWinter.picture_text')}</h1>
            <p className="pageDescription" style={{ textAlign: 'justify' }}>{t('KhuvsgulWinter.description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/AWORK/Khuvsgul 6 shunu 7 udur/1미니사막/34547640-8ace-4cb6-9a3d-0f90847b9641.jpg'
              alt='Khuvsgul Winter Day 1 - Mini Gobi'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulWinter.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulWinter.day1text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div> 
          <div style={{position: 'relative'}}>
            <img
              src='/AWORK/Khuvsgul 6 shunu 7 udur/2쳉헤르온천/b90f4863-ff34-444a-9b18-9a9a2d1e6d9f.jpg'
              alt='Tsenkher Hot Spring'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulWinter.day2')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulWinter.day2text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/AWORK/Khuvsgul 6 shunu 7 udur/3테르힝차강호수/e7624580-3d2e-4a38-992b-cb6e8a37c21b.jpg'
              alt='Terkhiin Tsagaan Lake'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulWinter.day3')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulWinter.day3text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/AWORK/Khuvsgul 6 shunu 7 udur/4신이데르/SE-e1ef2cfb-65fb-4218-b150-a6d1990a6c71.jpg'
              alt='Shine Ider'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulWinter.day4')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulWinter.day4text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/AWORK/Khuvsgul 6 shunu 7 udur/5홉스골(장하이)/DJI_0918.jpg'
              alt='Khuvsgul Lake'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulWinter.day5')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulWinter.day5text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/AWORK/Khuvsgul 6 shunu 7 udur/6볼강/4f5d3fb4ccf5604efe018f125d9cf6bb8b5ef78bf8bbf8633f7e85598718bd0d.avif'
              alt='Bulgan'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulWinter.day6')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulWinter.day6text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/AWORK/Khuvsgul 6 shunu 7 udur/7UB/7aecb03999e8d6109a5cd7803211bc3f060ef83ce06509ff441d5e018c3cfbb5.avif'
              alt='Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('KhuvsgulWinter.day7')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('KhuvsgulWinter.day7text')}</p>
              </div>
            </div>
            <div style={{marginTop: "2rem", width: "100%"}}>
              <Link href={addLocaleToHref("/contacts?tour=khuvsgul-winter#targetBlock")} className='myButton'>
                {t('KhuvsgulWinter.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KhuvsgulWinter
