import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../../components/UI/button.css';
import styles from "../../../tours.module.css";

const GobiWinter = ({params: {locale}}: {params: {locale: string}}) => {
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
            <h1 className="pageTitle" style={{ marginTop: '0', marginBottom: '1rem', textAlign: 'center' }}>{t('GobiWinter.picture_text')}</h1>
            <p className="pageDescription" style={{ textAlign: 'justify' }}>{t('GobiWinter.description')}</p>
          </div>
          <div style={{position: 'relative', marginTop: '1rem'}}>
            <img
              src='/AWORK/Gobi  5shunu6udur /1(차강소브라가)달란자드가드/d2054de7-97af-4c61-8828-c2a1419ed074.jpg'
              alt='Gobi Day 1 - Tsagaan Suvarga'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('GobiWinter.day1')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('GobiWinter.day1text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/AWORK/Gobi  5shunu6udur /2욜링암/5bc1f25638faddb434a47add87b72edd0cc923b2aeb03b389c37d1ad5f999a2f.avif'
              alt='Gobi Day 2 - Yoliin Am'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('GobiWinter.day2')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('GobiWinter.day2text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/AWORK/Gobi  5shunu6udur /3홍고링엘스/34547640-8ace-4cb6-9a3d-0f90847b9641.jpg'
              alt='Gobi Day 3 - Hongoriin Els'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('GobiWinter.day3')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('GobiWinter.day3text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/AWORK/Gobi  5shunu6udur /4바얀작/6aba655f-8ac4-4d40-8956-b830e91174a7.jpg'
              alt='Gobi Day 4 - Bayanzag'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('GobiWinter.day4')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('GobiWinter.day4text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/AWORK/Gobi  5shunu6udur /5달란자드가드/c2c2df6a-d824-4507-a4bf-e74a2c57b2c5.jpg'
              alt='Gobi Day 5 - Dalanzadgad'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%", marginRight: "8%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('GobiWinter.day5')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('GobiWinter.day5text')}</p>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div style={{position: 'relative'}}>
            <img
              src='/AWORK/Gobi  5shunu6udur /6UB/7aecb03999e8d6109a5cd7803211bc3f060ef83ce06509ff441d5e018c3cfbb5.avif'
              alt='Gobi Day 6 - Ulaanbaatar'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{display: "flex", flexDirection: "column", padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div style={{width: "100%"}}>
              <div>
                <p className={styles.tour_left_column_header}>{t('GobiWinter.day6')}</p>
              </div>
              <div>
                <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('GobiWinter.day6text')}</p>
              </div>
            </div>
            <div style={{marginTop: "2rem", width: "100%"}}>
              <Link href={addLocaleToHref("/contacts?tour=gobi-winter#targetBlock")} className='myButton'>
                {t('GobiWinter.button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GobiWinter
