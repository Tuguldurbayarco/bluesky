import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Image from "next/image";

const Currency = ({params: {locale}}: {params: {locale: string}}) => {
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
          src="/travel-tools/currency.png"
          alt="Currency Header"
          fill
          style={{objectFit: "cover", zIndex: 0}}
          priority
        />
        <div className='header_container_for_picture' style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1}}>
          <h1 className='header_on_picture'>{t('CurrencyPage.pageTitle')}</h1>
        </div>
      </div>
      <div className='visibility_area'>
        <div style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem', marginBottom: '2rem'}}>{t('CurrencyPage.sectionTitle')}</h2>
          <div style={{
            maxWidth: "800px",
            margin: "0 auto 3rem auto",
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden"
          }}>
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              src="https://www.youtube.com/embed/UfF9Wle5Edw"
              title={t('CurrencyPage.sectionTitle')}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className='visa_text' style={{textAlign: "justify", maxWidth: "800px", margin: "0 auto"}}>
            <p>{t('CurrencyPage.intro')}</p>
            <br/>
            <p><strong>{t('CurrencyPage.currencyDetails')}</strong></p>
            <ul className='visa_points'>
              <li><strong>{t('CurrencyPage.currencyCode')}</strong> MNT (Mongolian Tugrik)</li>
              <li><strong>{t('CurrencyPage.symbol')}</strong> ₮</li>
              <li><strong>{t('CurrencyPage.banknotes')}</strong> {t('CurrencyPage.banknotesDesc')}</li>
            </ul>
            <br/>
            <p><strong>{t('CurrencyPage.exchangingTitle')}</strong></p>
            <ul className='visa_points'>
              <li>{t('CurrencyPage.exchanging1')}</li>
              <li>{t('CurrencyPage.exchanging2')}</li>
              <li>{t('CurrencyPage.exchanging3')}</li>
              <li>{t('CurrencyPage.exchanging4')}</li>
            </ul>
            <br/>
            <p><strong>{t('CurrencyPage.paymentTitle')}</strong></p>
            <ul className='visa_points'>
              <li>{t('CurrencyPage.payment1')}</li>
              <li>{t('CurrencyPage.payment2')}</li>
              <li>{t('CurrencyPage.payment3')}</li>
              <li>{t('CurrencyPage.payment4')}</li>
            </ul>
            <br/>
            <p><strong>{t('CurrencyPage.tipsTitle')}</strong></p>
            <ul className='visa_points'>
              <li>{t('CurrencyPage.tips1')}</li>
              <li>{t('CurrencyPage.tips2')}</li>
              <li>{t('CurrencyPage.tips3')}</li>
              <li>{t('CurrencyPage.tips4')}</li>
            </ul>
            <br/>
            <p>{t('CurrencyPage.outro')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currency;
