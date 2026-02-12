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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;