import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import EventContainer from '@/components/UI/EventContainer';
import ScrollDownHint from "@/components/UI/ScrollDownHint";

const Events = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div>
      <div style={{position: "relative", marginTop: 100}}>
        <img
          src='/events/eventsHeader.jpg'
          alt='Events'
          width='100%'
        />
        <ScrollDownHint lightBackground />
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