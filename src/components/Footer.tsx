import { FOOTER_PARTNERS, FOOTER_CTA_BIG_ICONS, FOOTER_CTA_SOCIALS } from "@/constants";
import { createTranslator, isValidLocale, defaultLocale, Locale } from "@/lib/i18n";
import styles from "./footer.module.css";

function CtaIcon({ name, url, icon }: { name: string; url: string; icon: string }) {
  const linkProps = { href: url, target: "_blank" as const, rel: "noopener noreferrer", "aria-label": name };
  const content = <img src={icon} alt="" className={styles.footer_cta_icon_img} />;
  return (
    <a {...linkProps} className={styles.footer_cta_icon_link}>
      {content}
    </a>
  );
}

const Footer = ({locale}: {locale: Locale}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);

  return (
    <footer className={styles.footer_wrapper}>
      <div className="visibility_area">
        <div className={styles.footer_display}>
          {/* Column 1: CONTACT */}
          <div className={styles.footer_first_column}>
            <h2 className={styles.footer_containers_title}>{t('Footer.contactTitle')}</h2>
            <div className={styles.footer_contact_list}>
              <div className={`${styles.footer_contact_item} ${styles.footer_tooltip_item}`} title={t('Footer.phone')}>
                <img src="/phone.png" alt="Phone" className={styles.footer_icon} />
                <div className={styles.footer_contact_text}>
                  <div>{t('Footer.phone2')} ({t('Footer.phoneLabelEnglish')})</div>
                  <div>{t('Footer.phone1')} ({t('Footer.phoneLabelKorea')})</div>
                  <div>{t('Footer.phone3')} ({t('Footer.phoneLabelKorea')})</div>
                  <div>{t('Footer.phone4')} (WhatsApp)</div>
                </div>
              </div>
              <div className={`${styles.footer_contact_item} ${styles.footer_tooltip_item}`} title={t('Footer.mail')}>
                <svg className={styles.footer_icon} width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className={styles.footer_contact_text}>
                  {t('Footer.email1')}<br />
                  {t('Footer.email2')}<br />
                  {t('Footer.email3')}
                </div>
              </div>
              <div className={styles.footer_contact_item}>
                <img src="/location.png" alt="Location" className={styles.footer_icon} />
                <div className={styles.footer_contact_text}>
                  {t('Footer.title1')}<br />
                  {t('Footer.address_line1')}<br />
                  {t('Footer.address_line2')}<br />
                  {t('Footer.address_line3')}<br />
                  {t('Footer.address')}
                </div>
              </div>
            </div>
          </div>
          {/* Column 2: PARTNERS */}
          <div className={styles.footer_second_column}>
            <h2 className={styles.footer_containers_title}>{t('Footer.partnersTitle')}</h2>
            <div className={styles.footer_partners_list}>
              {FOOTER_PARTNERS.map((partner, index) => {
                const imgStyle = partner.width != null ? { width: partner.width, height: 'auto' } : undefined;
                const img = (
                  <img
                    src={partner.logoSrc}
                    alt={partner.name}
                    className={styles.footer_partner_logo}
                    style={imgStyle}
                  />
                );
                return partner.url ? (
                  <a
                    key={index}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footer_partner_link}
                    aria-label={partner.name}
                  >
                    {img}
                  </a>
                ) : (
                  <div key={index} className={styles.footer_partner_item}>
                    {img}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Column 3: CTA (tagline + socials row above big icons) */}
          <div className={styles.footer_third_column}>
            <h2 className={styles.footer_cta_heading}>{t('Footer.ctaHeading')}</h2>
            <p className={styles.footer_cta_line1}>{t('Footer.ctaLine1')}</p>
            <p className={styles.footer_cta_line2}>{t('Footer.ctaLine2')}</p>
            <div className={styles.footer_cta_socials}>
              {FOOTER_CTA_SOCIALS.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footer_cta_social_link}
                  aria-label={social.name}
                >
                  {social.icon === 'email' ? (
                    <svg className={styles.footer_cta_social_icon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    <img src={social.icon} alt="" className={styles.footer_cta_social_icon} />
                  )}
                </a>
              ))}
            </div>
            <div className={styles.footer_cta_big_icons}>
              {FOOTER_CTA_BIG_ICONS.map((item, index) => (
                <CtaIcon key={index} name={item.name} url={item.url} icon={item.icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom_bar}>
        <div className={`visibility_area ${styles.footer_bottom}`}>
          <p className={styles.footer_copyright}>© Eternal Sky Tour LLC. 2018-2026.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

