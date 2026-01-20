import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../../../../../components/UI/button.css';
import styles from "../../tours.module.css";

const Horse = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }  return (
    <div className={styles.tours_and_events_margin_top}>
      <div className='visibility_area'> {/*For description*/}
        <div>
          <div style={{position: 'relative', padding: "1%", backgroundColor: "#ffde4d"}}>
            <img
              src='/horse_tour.jpg'
              alt='Route'
            />
          </div>
          <div style={{ padding: "2%", backgroundColor: "#f6f5ff"}}>
            <h2 className={styles.tour_left_column_header}>{t('Tours.horse_tour_title')}</h2>
            <p className='tour_individual_text'>{t('Tours.horse_tour_text')}</p>
            <div style={{marginTop: "2%", bottom: 0}}>
              <Link href={addLocaleToHref("/contacts?tour=horse#targetBlock")} className='myButton '>
                {t('Tours.altai_tour_button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Horse