import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Image from "next/image";
import styles from "./visa.module.css";

const Visa = ({params: {locale}}: {params: {locale: string}}) => {
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
          src="/travel-tools/visa-page-header.png"
          alt="Visa Header"
          fill
          style={{objectFit: "cover", zIndex: 0}}
          priority
        />
        <div className='header_container_for_picture' style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1}}>
          <h1 className='header_on_picture'>{t('Information.visa.pageTitle')}</h1>
        </div>
      </div>
      <div className='visibility_area'>
        <div style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem', marginBottom: '2rem'}}>{t('Information.visa.title')}</h2>
          <div className='visa_text' style={{textAlign: "justify", maxWidth: "800px", margin: "0 auto"}}>
            <p>{t('Information.visa.text1')}</p>
            <br/>
            <p><strong>{t('Information.visa.subtitle1')}</strong></p>
            <ul className={`${styles.visa_points} ${styles.visa_points_bullet}`}>
              <li>{t('Information.visa.ul1')}</li>
              <li>{t('Information.visa.ul2')}</li>
              <li>{t('Information.visa.ul3')}</li>
              <li>{t('Information.visa.ul4')}</li>
              <li>{t('Information.visa.ul5')}</li>
              <li>{t('Information.visa.ul6')}</li>
              <li>{t('Information.visa.ul7')}</li>
              <li>{t('Information.visa.ul8')}</li>
              <li>{t('Information.visa.ul9')}</li>
            </ul>
            <br/>
            <p>{t('Information.visa.text2')}</p>
            <br/>
            <p><strong>{t('Information.visa.subtitle2')}</strong></p>
            <ol className={`${styles.visa_points} ${styles.visa_points_numbered}`}>
              <li>{t('Information.visa.materials1')}</li>
              <li>{t('Information.visa.materials2')}</li>
              <li>
                APPLICATION FORM PDF (
                <a 
                  href="http://consul.mn/file/visa_application.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{color: "#4d5df0", textDecoration: "underline"}}
                >
                  VISA APPLICATION FORM
                </a>
                ) (VISA APPLICATION FORM FOR TOURIST)
              </li>
              <li>{t('Information.visa.materials4')}</li>
            </ol>
            <ul className={`${styles.visa_points} ${styles.visa_points_bullet}`}>
              <li>{t('Information.visa.materials5')}</li>
              <li>{t('Information.visa.materials6')}</li>
              <li>{t('Information.visa.materials7')}</li>
            </ul>
            <br/>
            <p><strong>{t('Information.visa.subtitle3')}</strong></p>
            <ul className={`${styles.visa_points} ${styles.visa_points_bullet}`}>
              <li>{t('Information.visa.fees1')}</li>
              <li>{t('Information.visa.fees2')}</li>
              <li>{t('Information.visa.fees3')}</li>
              <li>{t('Information.visa.fees4')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visa