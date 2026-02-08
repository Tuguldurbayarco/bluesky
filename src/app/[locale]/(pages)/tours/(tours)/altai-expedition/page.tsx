import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import PricingDetails from "@/components/UI/PricingDetails";
import GroupTourDetailLayout from "@/components/UI/GroupTourDetailLayout";
import styles from "../../tours.module.css";

const AltaiExpedition = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div className="visibility_area">
      <GroupTourDetailLayout
        locale={validLocale as Locale}
        tourKey="altaiExpedition"
        mapSrc="/group-altai/map.jpg"
        mapAlt="Altai Expedition route map"
        dateRanges={["07/11 – 07/26", "08/08 – 08/23"]}
        title={`${t("Tours.altaiExpedition.title")} - ${t("Tours.altaiExpedition.duration")}`}
      >
          <p className="pageDescription" style={{ textAlign: "justify", marginBottom: 0 }}>{t("Tours.altaiExpedition.detail_description")}</p>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-altai-expedition/day1.webp'
              alt='Day 1'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day1')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day1text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-altai-expedition/day2.png'
              alt='Day 2'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day2')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day2text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-altai/day 3 tsenkher hot springs.png'
              alt='Day 3'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day3')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day3text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-altai-expedition/day4.jpg'
              alt='Day 4'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day4')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day4text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-altai-expedition/day5.jpg'
              alt='Day 5'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day5')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day5text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-altai-expedition/day6.png'
              alt='Day 6'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day6')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day6text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-altai/day 7 khovd.jpeg'
              alt='Day 7'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day7')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day7text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-altai-expedition/day8.jpg'
              alt='Day 8'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day8')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day8text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-altai-expedition/day9.jpg'
              alt='Days 9-11'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day9')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day9text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-altai-expedition/day12.jpg'
              alt='Day 12'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day12')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day12text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-altai/day 13 говь алтай.webp'
              alt='Day 13'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day13')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day13text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-altai/day 14 шатар чулуу.jpg'
              alt='Day 14'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day14')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day14text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-altai-expedition/day15.avif'
              alt='Day 15'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day15')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day15text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/tours/tour-altai-expedition/day16.webp'
              alt='Day 16'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('AltaiExpedition.day16')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('AltaiExpedition.day16text')}</p>
            </div>
          </div>
          <PricingDetails locale={validLocale as Locale} />
      </GroupTourDetailLayout>
    </div>
  );
}

export default AltaiExpedition;
