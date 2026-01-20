import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";

const Insurance = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);  return (
    <div className='visa_margin_top'>  
      <div style={{marginTop: "10%"}} className='visibility_area'>
        <h2 className='visa_title'>{t('Information.insurance.title')}</h2>
        <div className='visa_text'>
          <p>{t('Information.insurance.text1')}</p>
          <br/>
          <p>{t('Information.insurance.text2')}</p>
          <br/>
          <p>{t('Information.insurance.text3')}</p>
          <br/>
          <p>{t('Information.insurance.text4')}</p>
          <br/>
          <p>{t('Information.insurance.text5')}</p>
        </div>
      </div>
    </div>
  )
}

export default Insurance