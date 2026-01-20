import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import EventContainer from '@/components/UI/EventContainer';

const Events = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div>
      <div>
        <img
          src='/3-3.jpg'
          alt='Name'
          width='100%'
        />
        <div className='header_container_for_picture'>
          <h1 className='header_on_picture'>{t('Events.title')}</h1>
        </div>
      </div>
      <div className='visibility_area' style={{marginTop: "5%"}}>
        <EventContainer locale={validLocale}/>
      </div>
    </div>
  )
}

export default Events