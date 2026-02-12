"use client";
import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const City = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  const searchParams = useSearchParams();
  const tab = searchParams?.get("tab");
  const isStandard = tab === "normal";
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  
  return (
    <div className={styles.tours_and_events_margin_top} style={{ marginTop: '170px' }}>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div>
            <h1 className="pageTitle" style={{ marginTop: '0', marginBottom: '1rem', textAlign: 'center' }}>{t('City.picture_text')}</h1>
            <p className="pageDescription">{t('City.description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/tours/tour-central/day5.webp'
              alt='Central Mongolia - Day 5'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2% 2% 0 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('City.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('City.day1text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
            <img
              src='/tours/city - day 2.jpg'
              alt='Terelj National Park'
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transform: 'scale(1.17)' }}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column", padding: "2% 2% 2% 2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>{/*left cont*/}
              <div>
                <p className={styles.tour_left_column_header}>{t('City.day2')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('City.day2text')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('City.day3text')}</p>
              </div>
            </div>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', marginTop: '1.5rem' }}>
              <img
                src='/tours/city - day 3.jpg'
                alt='Chinggis Khaan Statue'
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transform: 'scale(1.17)' }}
              />
            </div>
            <div style={{marginTop: "2rem", width: "100%"}}>
              <Link href={addLocaleToHref(`/contacts?tour=city${isStandard ? '&standard=true' : ''}#targetBlock`)} className='myButton'>
                {t('City.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default City