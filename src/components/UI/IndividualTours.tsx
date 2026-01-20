import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import { INDIVIDUAL } from '@/constants'
import Link from "next/link";
import styles from "@/app/[locale]/(pages)/main.module.css";
import tourStyles from "@/app/[locale]/(pages)/tours/tours.module.css";

const IndividualTours = ({locale}: {locale?: Locale}) => {
  const validLocale = isValidLocale(locale || 'en') ? (locale || 'en') : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
    return (
    <div>
      <h2 className={`${tourStyles.tour_items_header} trocchi-regular`}>{t('Tours.individual_title')}</h2>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {INDIVIDUAL.map((element, index) => (
          <div key={index} className={styles.main_page_individual_tours_container}>
            <a href={addLocaleToHref(element.href)}>
              <img
                src={element.src}
                alt=''
                width='100%'
                height='auto'
                style={{borderRadius: "10px"}}
              />
            </a>
            <div style={{textAlign: "center", padding: "1%", marginBottom: "4%"}}>
              <Link href={addLocaleToHref(element.href)} className={`${styles.mainpage_festivals_title} trocchi-regular`}>
                {t(`Tours.individuals.${index}.tour`)}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default IndividualTours