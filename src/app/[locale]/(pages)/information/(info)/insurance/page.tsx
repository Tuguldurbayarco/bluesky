import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import styles from "./insurance.module.css";

const Insurance = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div>
      <div className={styles.insurance_hero_container}>
      </div>
      <div className='visibility_area'>
        <div style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem'}}>{t('Information.insurance.pageTitle')}</h2>
          <div className='visa_text' style={{textAlign: "justify", maxWidth: "800px", margin: "0 auto"}}>
            <p>
              {t('Information.insurance.pagePara1')}
            </p>
            <br/>
            <p>
              {t('Information.insurance.pagePara2')}
            </p>
            <br/>
            <p>
              {t('Information.insurance.pagePara3Part1')}
              <a href="https://www.worldnomads.com/Turnstile/AffiliateLink?partnerCode=DM43994&source=&utm_source=DM43994&utm_content=link&path=https://www.worldnomads.com/travel-insurance/" target="_blank" rel="noopener noreferrer" style={{color: '#65deaa'}}>extend and claim online</a>
              {t('Information.insurance.pagePara3Part2')}
              <a href="https://www.worldnomads.com/Turnstile/AffiliateLink?partnerCode=DM43994&source=&utm_source=DM43994&utm_content=link&path=https://www.worldnomads.com" target="_blank" rel="noopener noreferrer" style={{color: '#65deaa'}}>WorldNomads.com</a>
              {t('Information.insurance.pagePara3Part3')}
              <a href="https://www.worldnomads.com/Turnstile/AffiliateLink?partnerCode=DM43994&source=&utm_source=DM43994&utm_content=link&path=https://www.worldnomads.com/adventure-travel-insurance" target="_blank" rel="noopener noreferrer" style={{color: '#65deaa'}}>adventure sports and activities</a>
              {t('Information.insurance.pagePara3Part4')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;