import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import EventContainer from '@/components/UI/EventContainer';

const Events = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div>
      <div style={{position: "relative"}}>
        <img
          src='/events/eventsHeader.jpg'
          alt='Events'
          width='100%'
        />
        <div className='header_container_for_picture' style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1}}>
          <h1 className='header_on_picture'>{t('Events.title')}</h1>
        </div>
      </div>
      <div className='visibility_area' style={{marginTop: "5%"}}>
        <div style={{justifyContent: "center", textAlign: "center", marginBottom: "4rem"}}>
          <h2 className="pageTitle" style={{marginTop: '2rem', marginBottom: '2rem'}}>{t('Events.headerTitle')}</h2>
          <p className="pageDescription">
            {t('Events.headerDescription')}
          </p>
        </div>
        <EventContainer locale={validLocale}/>
      </div>
    </div>
  )
}

export default Events