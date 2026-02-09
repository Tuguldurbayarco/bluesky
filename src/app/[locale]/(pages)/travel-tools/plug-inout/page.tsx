import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Image from "next/image";
import ScrollDownHint from "@/components/UI/ScrollDownHint";

const PlugInOut = ({params: {locale}}: {params: {locale: string}}) => {
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
          src="/travel-tools/plugInOUt.webp"
          alt="Plug In/Out"
          fill
          style={{objectFit: "cover", zIndex: 0}}
          priority
        />
        <ScrollDownHint />
      </div>
      <div className='visibility_area'>
        <div style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem', marginBottom: '2rem'}}>{t('PlugInoutPage.sectionTitle')}</h2>
          <div className='visa_text' style={{textAlign: "justify", maxWidth: "800px", margin: "0 auto"}}>
            <p><strong>{t('PlugInoutPage.voltageTitle')}</strong></p>
            <p>{t('PlugInoutPage.voltage1')}</p>
            <p>{t('PlugInoutPage.voltage2')}</p>
            <br/>
            <p><strong>{t('PlugInoutPage.plugTitle')}</strong></p>
            <div style={{display: "flex", justifyContent: "center", margin: "20px 0"}}>
              <Image 
                src="/travel-tools/plugs.png" 
                alt="Type C and Type E plugs" 
                width={500}
                height={70}
                style={{maxWidth: "100%", height: "auto"}}
              />
            </div>
            <p>{t('PlugInoutPage.plug1')}</p>
            <p>{t('PlugInoutPage.plug2')}</p>
            <p>{t('PlugInoutPage.plug3')}</p>
            <br/>
            <p><strong>{t('PlugInoutPage.gsmTitle')}</strong></p>
            <p>{t('PlugInoutPage.gsm1')}</p>
            <p>{t('PlugInoutPage.gsm2')}</p>
            <p>{t('PlugInoutPage.gsm3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlugInOut;
