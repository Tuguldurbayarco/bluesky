import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import PricingDetails from "@/components/UI/PricingDetails";
import GroupTourDetailLayout from "@/components/UI/GroupTourDetailLayout";
import styles from "../../tours.module.css";

const SouthNorth = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div className="visibility_area">
      <GroupTourDetailLayout
        locale={validLocale as Locale}
        tourKey="southNorthTour"
        mapSrc="/group-south-north/map.jpg"
        mapAlt="South North Tour route map"
        dateRanges={["07/11 – 07/23", "08/02 – 08/14"]}
        title={`${t("Tours.southNorthTour.title")} - ${t("Tours.southNorthTour.duration")}`}
      >
          <p className="pageDescription" style={{ textAlign: "justify", marginBottom: 0 }}>{t("Tours.southNorthTour.detail_description")}</p>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-south-north/day 1 ub naadam.png'
              alt='Day 1'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('SouthNorth.day1')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('SouthNorth.day1text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-south-north/day 2 tsagaan suvarga.png'
              alt='Day 2'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('SouthNorth.day2')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('SouthNorth.day2text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-south-north/day 3 yoliin am.jpg'
              alt='Day 3'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('SouthNorth.day3')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('SouthNorth.day3text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-south-north/day 4 khongor els.png'
              alt='Day 4'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('SouthNorth.day4')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('SouthNorth.day4text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-south-north/day 5 bayanzag.png'
              alt='Day 5'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('SouthNorth.day5')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('SouthNorth.day5text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-south-north/day 6 ongiin hiid.png'
              alt='Day 6'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('SouthNorth.day6')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('SouthNorth.day6text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-south-north/day 7 kharkhorin erdenezuu.png'
              alt='Day 7'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('SouthNorth.day7')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('SouthNorth.day7text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-south-north/day 8 tsenkher rashaan.png'
              alt='Day 8'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('SouthNorth.day8')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('SouthNorth.day8text')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_subheader}>{t('SouthNorth.attention')}</p>
              <p className={styles.tour_left_column_text_sec}>{t('SouthNorth.attention_desc')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-south-north/day 9 terkhiin tsagaan.png'
              alt='Day 9'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('SouthNorth.day9')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('SouthNorth.day9text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-south-north/day 10 drive to jankai.png'
              alt='Day 10'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('SouthNorth.day10')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('SouthNorth.day10text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-south-north/day 11 jankhai.png'
              alt='Day 11'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('SouthNorth.day11')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('SouthNorth.day11text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-south-north/day 12 uran togoo.png'
              alt='Day 12'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('SouthNorth.day12')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('SouthNorth.day12text')}</p>
            </div>
          </div>
          <div style={{position: 'relative', marginTop: '2rem'}}>
            <img
              src='/group-south-north/day 13 ulaanbaatar.png'
              alt='Day 13'
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{padding: "2%", backgroundColor: "#f6f5ff"}}>
            <div>
              <p className={styles.tour_left_column_header}>{t('SouthNorth.day13')}</p>
            </div>
            <div>
              <p className={styles.tour_left_column_text} style={{ whiteSpace: 'pre-line' }}>{t('SouthNorth.day13text')}</p>
            </div>
          </div>
          <PricingDetails locale={validLocale as Locale} />
      </GroupTourDetailLayout>
    </div>
  );
}

export default SouthNorth;
