import FooterInput from "./UI/FooterInput"
import { links, SOCIALS } from "@/constants";
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
    <footer style={{ backgroundColor: "#3d3d3b", marginTop: '7rem' }}>
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
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: "2%" }}>
                  <img src="/location.png" alt="Location" className={styles.footer_icon} style={{width: '16px', height: '16px', margin: 0}} />
                  <a 
                    href="https://maps.app.goo.gl/CjbCscitPJNKdCV4A" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{textDecoration: "none", color: "#fff"}} 
                    className={styles.footer_containers_text}
                  >
                    {t('Footer.guestHouse')}
                  </a>
                </li>
              </div>
            </div>
          </div>
          {/* 2 column */}
          <div className={styles.footer_second_column}>
            <div style={{color: "#fff"}} >
              <h2 className={styles.footer_containers_title}>{t('Footer.title1')}</h2>
              <div className={styles.footer_contact_grid}>
                {/* Address - full width (2 columns) */}
                <div className={styles.footer_contact_full_width}>
                  <div className={styles.footer_contact_item}>
                    <img src="/location.png" alt="Location" className={styles.footer_icon} />
                    <div className={styles.footer_contact_text}>
                      {t('Footer.address_line1')}<br />
                      {t('Footer.address_line2')}<br />
                      {t('Footer.address_line3')}<br />
                      {t('Footer.address')}
                    </div>
                  </div>
                </div>
                {/* Phone - left column */}
                <div className={styles.footer_contact_half_width}>
                  <div className={`${styles.footer_contact_item} ${styles.footer_tooltip_item}`} title={t('Footer.phone')}>
                    <img src="/phone.png" alt="Phone" className={styles.footer_icon} />
                    <div className={styles.footer_contact_text_wrapper}>
                      <div className={`${styles.footer_contact_text} ${styles.footer_contact_no_wrap}`}>
                        {t('Footer.phone1')}
                      </div>
                      <div className={`${styles.footer_contact_text} ${styles.footer_contact_no_wrap}`}>
                        {t('Footer.phone2')}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Kakao Talk - right column */}
                <div className={styles.footer_contact_half_width}>
                  <div className={`${styles.footer_contact_item} ${styles.footer_kakao_item}`} title={t('Footer.kakao')}>
                    <i className={`${styles.ii} ${styles.ii_kakaotalk}`}></i>
                    <div className={styles.footer_contact_text}>
                      {t('Footer.kakao1').replace(/^1\.\s*/, '').replace(/\.$/, '')}<br />
                      {t('Footer.kakao2').replace(/^2\.\s*/, '')}
                    </div>
                  </div>
                </div>
                {/* Email - full width (2 columns) */}
                <div className={styles.footer_contact_full_width}>
                  <div className={`${styles.footer_contact_item} ${styles.footer_tooltip_item}`} title={t('Footer.mail')}>
                    <svg className={styles.footer_icon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className={styles.footer_contact_text}>
                      <div>{t('Footer.email1')}</div>
                      <div>{t('Footer.email2')}</div>
                    </div>
                  </div>
                </div>
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
        <div className={`visibility_area ${styles.footer_bottom}`}>
          <div className={styles.footer_bottom_content}>
            <p className={styles.footer_copyright}>©Eternal Sky Tours LLC. 2018 - 2025.</p>
            <div className={styles.footer_socials}>
              {SOCIALS.links.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footer_social_link}
                  aria-label={social.name}
                >
                  {social.icon === 'email' ? (
                    <svg className={styles.footer_social_icon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <img src={social.icon} alt={social.name} className={styles.footer_social_icon} />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

