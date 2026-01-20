import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import Image from 'next/image'
import { FESTIVALS } from '@/constants'
import Link from "next/link";
import styles from "@/app/[locale]/(pages)/main.module.css";

const Festivals = ({locale}: {locale?: Locale}) => {
  const validLocale = isValidLocale(locale || 'en') ? (locale || 'en') : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
    return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
      {FESTIVALS.map((element, index) => (
        <div key={index} className={styles.main_page_festivals_container}>
          <a href={addLocaleToHref(element.href)}>
            <img
              src={element.src}
              alt='festivals'
              width='100%'
              height='auto'
              style={{borderRadius: "10px"}}
            />
          </a>
          <div style={{textAlign: "center", padding: "1%", marginBottom: "4%"}}>
            <Link href={addLocaleToHref(element.href)} className={`${styles.mainpage_festivals_title} trocchi-regular`}>
              {t(`Events.festivals.${index}.title`)}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Festivals