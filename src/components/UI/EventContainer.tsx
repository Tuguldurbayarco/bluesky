import Image from 'next/image';
import { EVENTS } from '@/constants';
import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import styles from "@/app/[locale]/(pages)/events/events.module.css";

const EventContainer = ({locale}: {locale?: Locale}) => {
  const validLocale = isValidLocale(locale || 'en') ? (locale || 'en') : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  return (
    <div >
      <div className={styles.events_display}>
        {EVENTS.map((element, index) => (
          <div key={index} className={styles.events_display_container}>
            <a href={addLocaleToHref(element.href)} className={styles.events_display_image_cont}>
              <img
                src={element.src}
                alt='images'
                width='100%'
                height='auto'
                style={{borderRadius: "10px", marginTop:"38px"}}
              />
            </a>
            <div className={styles.events_display_text_cont}>
              <h3 className={styles.event_block_header}>{t(`Events.event-container.${index}.title`)} <span style={{fontSize: '0.72em', fontWeight: 'normal', color: '#c23b3b'}}>{element.days}</span></h3>
              <p className={styles.event_block_desc}>
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