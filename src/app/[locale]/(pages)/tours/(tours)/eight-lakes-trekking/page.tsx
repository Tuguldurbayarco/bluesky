import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import PricingDetails from "@/components/UI/PricingDetails";
import TourBooking from "@/components/UI/TourBooking";
import styles from "../../tours.module.css";

const EightLakesTrekking = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div className={styles.tours_and_events_margin_top}>
      <div className='visibility_area'>
        <div>
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/group-eight-lake-trekk/eight_lake_trek_header.png'
              alt='Eight Lakes Trekking Adventure'
            />
          </div>
          <div className={styles.tours_background_color}>
            <h1 className={styles.tours_main_description_header}>{t('Tours.eightLakesTrekking.title')} - {t('Tours.eightLakesTrekking.duration')}</h1>
            <p className={styles.tours_main_description}>{t('Tours.eightLakesTrekking.detail_description')}</p>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/group-eight-lake-trekk/day 1 ub naadam.png'
              alt='Day 1'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesTrekking.day1')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text}>{t('EightLakesTrekking.day1text')}</p>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/group-eight-lake-trekk/day 2 elsen tasarkhai 2B.png'
              alt='Day 2'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesTrekking.day2')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text}>{t('EightLakesTrekking.day2text')}</p>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/group-eight-lake-trekk/day 3 gobi malchin ail 2C.png'
              alt='Day 3'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesTrekking.day3')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text}>{t('EightLakesTrekking.day3text')}</p>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/group-eight-lake-trekk/day 4 naiman nuur.png'
              alt='Day 4-10'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesTrekking.day4to10')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text}>{t('EightLakesTrekking.day4to10text')}</p>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/group-eight-lake-trekk/day 11 tsenkher hot springs.png'
              alt='Day 11'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesTrekking.day11')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text}>{t('EightLakesTrekking.day11text')}</p>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <img
              src='/group-eight-lake-trekk/day 12 kharkhorin eredenzuu.png'
              alt='Day 12'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff", marginBottom: "5%"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesTrekking.day12')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text}>{t('EightLakesTrekking.day12text')}</p>
            </div>
          </div>
          <PricingDetails locale={validLocale as Locale} />
          <TourBooking 
            locale={validLocale as Locale} 
            tourKey="eightLakesTrekking"
            dateRanges={["07/11 – 07/22", "08/04 – 08/15"]}
          />
        </div>
      </div>
    </div>
  );
}

export default EightLakesTrekking;
