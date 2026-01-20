import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import PricingDetails from "@/components/UI/PricingDetails";
import TourBooking from "@/components/UI/TourBooking";
import styles from "../../tours.module.css";

const EightLakesEquestrian = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div className={styles.tours_and_events_margin_top}>
      <div className='visibility_area'>
        <div>
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/group-eight-lake-equestrian/eight_lake_eq_header.png'
              alt='Eight Lakes Equestrian Adventure'
            />
          </div>
          <div className={styles.tours_background_color}>
            <h1 className={styles.tours_main_description_header}>{t('Tours.eightLakesEquestrian.title')} - {t('Tours.eightLakesEquestrian.duration')}</h1>
            <p className={styles.tours_main_description}>{t('Tours.eightLakesEquestrian.detail_description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/group-eight-lake-equestrian/day 1 ub naadam.png'
              alt='Day 1'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesEquestrian.day1')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text}>{t('EightLakesEquestrian.day1text')}</p>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/group-eight-lake-equestrian/day 2 elsen tasarkhai.png'
              alt='Day 2'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesEquestrian.day2')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text}>{t('EightLakesEquestrian.day2text')}</p>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/group-eight-lake-equestrian/day 3 malchin ail 2B.png'
              alt='Day 3'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesEquestrian.day3')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text}>{t('EightLakesEquestrian.day3text')}</p>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/group-eight-lake-equestrian/day 4 морин аялал хажуугаас хөвсгөл.png'
              alt='Day 4-8'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesEquestrian.day4to8')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text}>{t('EightLakesEquestrian.day4to8text')}</p>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/group-eight-lake-equestrian/day 9 tsenkher hot springs.png'
              alt='Day 9'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesEquestrian.day9')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text}>{t('EightLakesEquestrian.day9text')}</p>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/group-eight-lake-equestrian/day 10 kharkhorin eredenzuu.png'
              alt='Day 10'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff", marginBottom: "5%"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesEquestrian.day10')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text}>{t('EightLakesEquestrian.day10text')}</p>
            </div>
          </div>
          <PricingDetails locale={validLocale as Locale} />
          <TourBooking 
            locale={validLocale as Locale} 
            tourKey="eightLakesEquestrian"
            dateRanges={["07/11 – 07/20", "08/06 – 08/15"]}
          />
        </div>
      </div>
    </div>
  );
}

export default EightLakesEquestrian;
