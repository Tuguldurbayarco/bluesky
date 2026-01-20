import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";

const Visa = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);  return (
    <div className='visa_margin_top'>
      <div className='visibility_area'>
        <div>
          <h1 className='visa_title'>{t('Information.visa.title')}</h1>
          <p className='visa_text'>{t('Information.visa.text1')}</p>
          <ul className='visa_points'>
            <li>{t('Information.visa.ul1')}</li>
            <li>{t('Information.visa.ul2')}</li>
            <li>{t('Information.visa.ul3')}</li>
            <li>{t('Information.visa.ul4')}</li>
            <li>{t('Information.visa.ul5')}</li>
            <li>{t('Information.visa.ul6')}</li>
            <li>{t('Information.visa.ul7')}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Visa