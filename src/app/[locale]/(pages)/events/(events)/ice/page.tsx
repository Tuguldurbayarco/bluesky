import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../nextButton.css';
import styles from '../../events.module.css';

const IceFestival = ({params: {locale}}: {params: {locale: string}}) => {  
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }
  return (
    <div className='visibility_area'>
      <div className='image_container'>
        <div className='image_container_image'>
          <img
            src='/events/23.jpg'
            style={{marginBottom: "3%"}}
          />
        </div>
      </div>
      <div className='main_container'>
        <div className={styles.events_margins}> 
          <p className='header_container'>{t('Events.ice-festival.title')}</p>
        </div>
        <div>
          <p className='text_container' style={{textAlign: 'justify'}}>{t('Events.ice-festival.text')}</p>
        </div>
        {t('Events.ice-festival.itinerary', { returnObjects: true }) && (
          <div style={{marginTop: '3rem'}}>
            <h2 style={{fontSize: '1.8rem', fontWeight: 500, marginBottom: '2rem', textAlign: 'center'}}>{t('Events.itineraryLabel')}</h2>
            {(t('Events.ice-festival.itinerary', { returnObjects: true }) as any[]).map((item: any, index: number) => (
              <div key={index} style={{marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f6f5ff', borderRadius: '8px'}}>
                <h3 style={{fontSize: '1.3rem', fontWeight: 500, marginBottom: '0.5rem', color: '#333'}}>{item.day}</h3>
                <p style={{fontSize: '1.1rem', color: '#555', lineHeight: '1.6'}}>{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.events_button_btn}> 
        <Link href={addLocaleToHref('/events/tsagaansar')}>
          <button className={styles.events_button}>
            {t('Events.previous')}
          </button>
        </Link>
        <Link href={addLocaleToHref('/events/eagle')}>
          <button className={styles.events_button}> 
            {t('Events.next')}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default IceFestival