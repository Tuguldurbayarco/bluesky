import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import { mobileCompanies } from '@/constants'
import styles from '../../information.module.css'

const Phone = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);  return (
    <div>
      <div className={styles.phone_page_hero_container}></div>
      <div className='visibility_area'>
        <div style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem', marginBottom: '2rem'}}>{t('Information.phone.pageTitle')}</h2>
          <p className="pageDescription" style={{marginBottom: '5rem'}}>
            {t('Information.phone.pageDescription')}
          </p>
        </div>
        <div className='phone_page_display'>
        {mobileCompanies.map((element, index) => (
          <div key={element.id} className={styles.phone_operator_card}>
            <div className={styles.phone_operator_image_container}>
              <img 
                key={element.id} 
                src={element.src} 
                alt={element.title} 
                className={styles.phone_page_png_size}
              />
            </div>
            <div className={styles.phone_operator_content}>
              <div className={styles.phone_title_container}>
                <h3 className={styles.phone_titles}>{t(`Information.phone.title.${index}.title`)}</h3>
                {element.recommended && (
                  <span className={styles.phone_recommended_badge}>{t('Information.phone.recommendedOperator')}</span>
                )}
              </div>
              {element.recommended && (
                <p className={styles.phone_recommended_text}>{t('Information.phone.recommendedText')}</p>
              )}
              <p className={styles.phone_description}>{t(`Information.phone.title.${index}.description`)}</p>
              <a href={element.href} target="_blank" rel="noopener noreferrer" className={styles.phone_website_link}>
                {t('Information.phone.visitWebsite')} →
              </a>
            </div>
          </div>
        ))}
        </div>
        <div>
          <p className='phone_text'>{t('Information.phone.text')}</p>
        </div>
      </div>
    </div>
  )
}

export default Phone