import Image from 'next/image';
import { EVENTS } from '@/constants';
import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";

const EventContainer = ({locale}: {locale?: Locale}) => {
  const validLocale = isValidLocale(locale || 'en') ? (locale || 'en') : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  return (
    <div >
      <div className='events_display'>
        {EVENTS.map((element, index) => (
          <div key={index} className='events_display_container'>
            <a href={addLocaleToHref(element.href)} className='events_display_image_cont'>
              <img
                src={element.src}
                alt='images'
                width='100%'
                height='auto'
                style={{borderRadius: "10px", marginTop:"38px"}}
              />
            </a>
            <div className='events_display_text_cont'>
              <p className='event_block_header'>{t(`Events.event-container.${index}.title`)}</p>
              <p className='event_block_desc'>
                {t(`Events.event-container.${index}.description`)}
                <a href={addLocaleToHref(element.href)} style={{color: "#4d5df0"}}> {t('Events.eventContainer')}</a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventContainer