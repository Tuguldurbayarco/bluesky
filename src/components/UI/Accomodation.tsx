
import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import tourStyles from "@/app/[locale]/(pages)/tours/tours.module.css";
import hotelStyles from "@/app/[locale]/(pages)/information/(info)/hotels/hotels.module.css";

const Accommodation = ({locale}: {locale?: Locale}) => {
  const validLocale = isValidLocale(locale || 'en') ? (locale || 'en') : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  
  return (
    <div style={{position: 'relative', marginBottom: "3%"}}>
      <h2 className={`${tourStyles.tour_items_header} trocchi-regular`}>{t('Accommodation.title')}</h2>
      <img
        src='/tmcity.jpg'
        alt="City"
        width='100%'
        height='auto'
        style={{position: "relative", borderRadius: "10px"}}
      />
      <a className={hotelStyles.hotels_container} href='/information/hotels'>{t('Accommodation.subtitle')}</a>
    </div>
  )
}

export default Accommodation