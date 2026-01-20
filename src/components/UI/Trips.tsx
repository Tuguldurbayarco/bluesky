import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import { TOURS_IMAGES, TOURS_IMAGES_2 } from '@/constants'
import Link from "next/link";
import styles from "@/app/[locale]/(pages)/main.module.css";
import tourStyles from "@/app/[locale]/(pages)/tours/tours.module.css";

const Trips = ({locale}: {locale?: Locale}) => {
  const validLocale = isValidLocale(locale || 'en') ? (locale || 'en') : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
    return (
    <div >
      <h2 className={`${tourStyles.tour_items_header} trocchi-regular`}>{t('Tours.title')}</h2>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {TOURS_IMAGES.map((element, index) => (
          <div key={element.id} className={styles.main_page_three_tours_container}>
            <a href={addLocaleToHref(element.href)}>
              <img 
                key={element.id} 
                src={element.src} 
                width='100%' 
                height="auto"
                style={{borderRadius: "10px"}}
              /> 
            </a>
            <div style={{textAlign: "center", padding: "1%"}}>
              <Link href={addLocaleToHref(element.href)} className={`${styles.mainpage_festivals_title} trocchi-regular`}>
                {t(`Tours.tourList.${index}.title`)}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginTop: "0.7%"}}>
        {TOURS_IMAGES_2.map((elem, ind) => (
          <div key={elem.id} className={styles.main_page_two_tours_container}>
            <a href={addLocaleToHref(elem.href)}>
              <img 
                key={elem.id} 
                src={elem.src} 
                width='100%' 
                height="auto"
                style={{borderRadius: "10px"}}
              /> 
            </a>
            <div style={{textAlign: "center", marginBottom: "5%", padding: "1%"}}>
              <Link href={addLocaleToHref(elem.href)} className={`${styles.mainpage_festivals_title} trocchi-regular`}>
                {t(`Tours.tourList.${ind + 3}.title`)}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trips