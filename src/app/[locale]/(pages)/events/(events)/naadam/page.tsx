import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Link from 'next/link';
import '../../nextButton.css';
import styles from '../../events.module.css';

const Naadam = ({params: {locale}}: {params: {locale: string}}) => {  
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
            src='/21.jpg'
            style={{marginBottom: "3%"}}
          />
        </div>
      </div>
      <div className='main_container'>
        <div className={styles.events_margins}> 
          <p className='header_container'>{t('Events.naadam-festival.title')}</p>
        </div>
        <div>
          <p className='text_container' style={{textAlign: 'justify'}}>{t('Events.naadam-festival.text')}</p>
        </div>
        <div className='text_container'> 
        </div>
      </div>
      <div className={styles.events_button_btn}> 
        <Link href={addLocaleToHref('/events/ice')}>
          <button className={styles.events_button}>
            {t('Events.previous')}
          </button>
        </Link>
        <Link href={addLocaleToHref('/events/tsagaansar')}>
          <button className={styles.events_button}> 
            {t('Events.next')}
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Naadam