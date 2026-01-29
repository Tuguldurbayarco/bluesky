import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import { TOURS_LINK } from '@/constants';
import TourCard from "@/components/UI/TourCard";
import tourStyles from "./tours.module.css";

const Tours = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div>
      <div className={tourStyles.tours_hero_container}>
        <h1 className='header_on_picture'>{t('Tours.title_on_picture')}</h1>
      </div>
      <div className='visibility_area' style={{marginTop: "5%"}}>
        <div>
          <h2 className="pageTitle" style={{marginTop: '2rem', marginBottom: '2rem', textAlign: 'center'}}>{t('Tours.classic_tours_title')}</h2>
          <p className="pageDescription" style={{marginBottom: '2rem'}}>{t('Tours.classic_tours_description')}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
            {TOURS_LINK.map((tour) => (
              <TourCard
                key={tour.id}
                locale={validLocale as Locale}
                tourKey={tour.tourKey}
                imageSrc={tour.src}
                tourHref={tour.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tours