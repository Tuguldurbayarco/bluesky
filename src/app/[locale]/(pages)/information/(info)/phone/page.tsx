import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import { mobileCompanies } from '@/constants'

const Phone = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);  return (
    <div className='visibility_area' style={{marginTop: "7.4%"}}>
      <img
        src='/pmain.jpg'
        alt='phone_page'
        style={{marginBottom: "3%"}}
      />
      <div className='phone_page_display'>
        {mobileCompanies.map((element, index) => (
          <div key={element.id} style={{ justifyContent: "center", alignItems: "center" }}>
            <a href={element.href}>
              <img 
                key={element.id} 
                src={element.src} 
                alt={element.title} 
                height='auto'
                className='phone_page_png_size'
                style={{marginBottom: "2%",}}
              /> 
            </a>
          <p className='phone_titles'>{t(`Information.phone.title.${index}.title`)}</p>
        </div>
        ))}
      </div>
      <div>
        <p className='phone_text'>{t('Information.phone.text')}</p>
      </div>
    </div>
  )
}

export default Phone