import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import PricingDetails from "@/components/UI/PricingDetails";
import GroupTourDetailLayout from "@/components/UI/GroupTourDetailLayout";
import styles from "../../tours.module.css";

const EightLakesTrekking = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div className="visibility_area">
      <GroupTourDetailLayout
        locale={validLocale as Locale}
        tourKey="eightLakesTrekking"
        mapSrc="/group-eight-lake-trekk/map.jpg"
        mapAlt="Naiman Lakes Trekking route map"
        dateRanges={["07/11 – 07/22", "08/04 – 08/15"]}
        title={`${t("Tours.eightLakesTrekking.title")} - ${t("Tours.eightLakesTrekking.duration")}`}
      >
          <p className="pageDescription" style={{ textAlign: "justify", marginBottom: 0 }}>{t("Tours.eightLakesTrekking.detail_description")}</p>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-eight-lakes-trekking/day1.webp'
              alt='Day 1'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesTrekking.day1')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('EightLakesTrekking.day1text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-eight-lakes-trekking/day2.png'
              alt='Day 2'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesTrekking.day2')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('EightLakesTrekking.day2text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-eight-lakes-trekking/day3.jpg'
              alt='Day 3'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesTrekking.day3')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('EightLakesTrekking.day3text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-eight-lakes-trekking/day4.jpg'
              alt='Day 4-10'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesTrekking.day4to10')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('EightLakesTrekking.day4to10text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
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
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('EightLakesTrekking.day11text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-eight-lakes-trekking/day12.avif'
              alt='Day 12'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('EightLakesTrekking.day12')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('EightLakesTrekking.day12text')}</p>
            </div>
          </div>
          <PricingDetails locale={validLocale as Locale} />
      </GroupTourDetailLayout>
    </div>
  );
}

export default EightLakesTrekking;
