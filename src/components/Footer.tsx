import FooterInput from "./UI/FooterInput"
import { links } from "@/constants";
import Link from "next/link"
import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import styles from "./footer.module.css";

const Footer = ({locale}: {locale: Locale}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }

  return (
    <footer style={{ backgroundColor: "#3d3d3b" }}>
      <div className="visibility_area">
        <div className={styles.footer_display}>
          <div className={styles.footer_first_column}>
            {/* 1 column */}
            <div style={{color: "#fff"}}>
              <h2 className={styles.footer_containers_title}>{t('Footer.title2')}</h2>
              <div>
                {links.map((link, index) => (
                  <li key={link.key} style={{ display: 'block', marginBottom: "2%" }}>
                    <Link href={addLocaleToHref(link.href)} key={link.key} style={{textDecoration: "none", color: "#fff"}} className={styles.footer_containers_text}>
                      {t(`Footer.links.${index}.title`)}
                    </Link>
                  </li>
                ))}
              </div>
            </div>
          </div>
          {/* 2 column */}
          <div className={styles.footer_second_column}>
            <div style={{color: "#fff"}} >
              <h2 className={styles.footer_containers_title}>{t('Footer.title1')}</h2>
              <div className={styles.footer_containers_text}>
                <p>
                  Ulaanbaatar, Mongolia,<br />
                  Bayangol District, 9th Khoroo,<br />
                  3-2 building, {t('Footer.address')}
                </p>
                <div>
                  <strong >{t('Footer.phone')} </strong>
                  +976-88109099<br />
                  <strong style={{opacity: "0"}}>{t('Footer.phone')} </strong>
                  +976-72206810<br /> 
                </div>
                <p>
                  <strong>{t('Footer.mail')} </strong>
                  info@saibaitour.mn<br />
                </p>
              </div>
            </div>
          </div>
          {/* 3 column */}
          <div className={styles.footer_third_column}>
            <div style={{color: "#fff"}}>
              <h2 className={styles.footer_containers_title}>{t('Footer.title3')}</h2>
            </div>
            <div style={{gap: "2%", display: "flex", width: "100%"}}>
              <div>
                {/*<FooterInput/>*/}
                <FooterInput 
                  title={t('Footer.ntitle')} 
                  mail={t('Footer.ntitle1')} 
                  messages={t('Footer.ntitle2')} 
                  button={t('Footer.button')} 
                  pl1={t('Footer.placeholder1')} 
                  pl2={t('Footer.placeholder2')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: "#282829", color: "#fff"}}>
        <div className="visibility_area" style={{display: "flex", justifyContent: "space-between", paddingTop: "2%", paddingBottom: "1.3%"}}>
          <div>
            <p>©Eternal Sky Tours LLC. 2018 - 2025.</p>
          </div>
          <div>
            <a href="/terms-conditions"></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

