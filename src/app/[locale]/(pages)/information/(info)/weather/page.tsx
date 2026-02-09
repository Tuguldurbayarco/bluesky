import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Image from "next/image";
import ScrollDownHint from "@/components/UI/ScrollDownHint";

const Weather = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div>
      <div style={{
        position: "relative",
        width: "100%",
        aspectRatio: "1492 / 721.5"
      }}>
        <Image
          src="/travel-tools/weather.jpg"
          alt="Weather"
          fill
          style={{objectFit: "cover", zIndex: 0}}
          priority
        />
        <ScrollDownHint />
      </div>
      <div className='visibility_area'>
        <div style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem', marginBottom: '2rem'}}>{t('Information.weather.title')}</h2>
        </div>
        <div className='visa_margin_top' style={{marginBottom: "4%", textAlign: "justify"}}>
          <p className='visa_text'>{t('Information.weather.text1')}</p>
          <br/>
          <p className='visa_text'>{t('Information.weather.text2')}</p>
          <br/>
          <p className='visa_text'>{t('Information.weather.text3')}</p>
          <br/>
          <p className='visa_text'>{t('Information.weather.text4')}</p>
          <br/>
          <p className='visa_text'>{t('Information.weather.text5')}</p>
        </div>
      </div>
    </div>
  )
}

export default Weather