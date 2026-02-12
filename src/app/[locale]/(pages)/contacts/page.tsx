import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import InputForm from '@/components/UI/InputForm';
import ScrollDownHint from "@/components/UI/ScrollDownHint";
import styles from "./contacts.module.css";
import formStyles from "@/components/footer.module.css";
import { Suspense } from "react";

const Contacts = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  // Function to add locale prefix to href
  function addLocaleToHref(href: string): string {
    return `/${validLocale}${href}`;
  }  return (
    <div >
      <div style={{width: "100%", position: "relative", marginTop: 100}}>
        <video
          className={styles.contactHeaderVideo}
          src="/contacts/contact-c.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Contacts header"
        />
        <ScrollDownHint lightBackground />
      </div>
      <div style={{width: "100%", height: "100%", textAlign: "center"}}>
        <div style={{width: "100%", height: "100%"}}>
          <div className={styles.contact_plank}>
            <div style={{padding: "2%"}}>
              <img
                src='/phone.png'
                alt='phone'
                height='auto'
                className={styles.contact_paddings}
              />
              <div className={styles.contact_info_list}>
                <a href={`tel:${t('Footer.phone2').replace(/\s/g, '')}`} className={styles.contact_info_item}>{t('Footer.phone2')} ({t('Footer.phoneLabelEnglish')})</a>
                <a href={`tel:${t('Footer.phone1').replace(/\s/g, '')}`} className={styles.contact_info_item}>{t('Footer.phone1')} ({t('Footer.phoneLabelKorea')})</a>
                <a href={`tel:${t('Footer.phone3').replace(/\s/g, '')}`} className={styles.contact_info_item}>{t('Footer.phone3')} ({t('Footer.phoneLabelKorea')})</a>
                <a href={`tel:${t('Footer.phone4').replace(/\s/g, '')}`} className={styles.contact_info_item}>{t('Footer.phone4')} (WhatsApp)</a>
              </div>
            </div>
            <div style={{padding: "2%"}}>
              <img
                src='/email.png'
                alt='mail'
                height='auto'
                className={styles.contact_paddings}
              />
              <div className={styles.contact_info_list}>
                <a href={`mailto:${t('Footer.email1')}`} className={styles.contact_info_item}>{t('Footer.email1')}</a>
                <a href={`mailto:${t('Footer.email2')}`} className={styles.contact_info_item}>{t('Footer.email2')}</a>
                <a href={`mailto:${t('Footer.email3')}`} className={styles.contact_info_item}>{t('Footer.email3')}</a>
              </div>
            </div>
            <div style={{padding: "2%"}}>
              <img
                src='/location.png'
                alt='location'
                height='auto'
                className={styles.contact_paddings}
              />
              <a href="https://maps.app.goo.gl/CjbCscitPJNKdCV4A" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>{t('Contacts.fourth')}</a>
            </div>
            <div style={{padding: "2%"}}>
              <img
                src='/post.png'
                alt='post'
                height='auto'
                className={styles.contact_paddings}
              />
              <p>{t('Footer.address_line1')}<br />{t('Footer.address_line2')}<br />{t('Footer.address_line3')}<br />{t('Footer.address')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='visibility_area'>
        <div>
          <h2 className={styles.contact_subheader}>{t('Contacts.header')}</h2>
        </div>
        <div >
          <p className={styles.contact_text}>{t('Contacts.text')}</p>
        </div>
      </div>
      <div id="targetBlock" className='visibility_area'>
        <h2 className={styles.contact_subheader}>{t('Contacts.second')}</h2>
        <p className={styles.contact_text} style={{textAlign: "center"}}>{t('Contacts.third')}</p>
        <div className='visibility_area'>
          <Suspense fallback={<div>Loading...</div>}>
            <div className={formStyles.footer_third_column} style={{backgroundColor: "#3d3d3b", padding: "2rem", borderRadius: "8px", marginTop: "2rem"}}>
              <InputForm
              formHeader={t('Contacts.formHeader')}
              formTitle={t('Contacts.name')}
              formPlaceholder1={t('Contacts.first')}
              formPlaceholder2={t('Contacts.last')}
              mail={t('Contacts.email')}
              countryTitle={t('Contacts.country')}
              tourTitle={t('Contacts.tour')}
              numberTitle={t('Contacts.number')}
              messageTitle={t('Contacts.message')}
              agreeTitle={t('Contacts.agree')}
              buttonTitle={t('Contacts.button')}
              choice={t('Contacts.choice')}
              groupToursCategory={t('Contacts.groupToursCategory')}
              classicToursCategory={t('Contacts.classicToursCategory')}
              standardToursCategory={t('Contacts.standardToursCategory')}
              winterToursCategory={t('Contacts.winterToursCategory')}
              eventsCategory={t('Contacts.eventsCategory')}
              groupTour1={t('Contacts.groupTour1')}
              groupTour2={t('Contacts.groupTour2')}
              groupTour3={t('Contacts.groupTour3')}
              groupTour4={t('Contacts.groupTour4')}
              classicTour1={t('Contacts.classicTour1')}
              classicTour2={t('Contacts.classicTour2')}
              classicTour3={t('Contacts.classicTour3')}
              classicTour4={t('Contacts.classicTour4')}
              classicTour5={t('Contacts.classicTour5')}
              classicTour6={t('Contacts.classicTour6')}
              classicTour7={t('Contacts.classicTour7')}
              standardTour1={t('Contacts.standardTour1')}
              standardTour2={t('Contacts.standardTour2')}
              standardTour3={t('Contacts.standardTour3')}
              standardTour4={t('Contacts.standardTour4')}
              standardTour5={t('Contacts.standardTour5')}
              standardTour6={t('Contacts.standardTour6')}
              standardTour7={t('Contacts.standardTour7')}
              winterTour1={t('Contacts.winterTour1')}
              winterTour2={t('Contacts.winterTour2')}
              winterTour3={t('Contacts.winterTour3')}
              winterTour4={t('Contacts.winterTour4')}
              winterTour5={t('Contacts.winterTour5')}
              event1={t('Contacts.event1')}
              event2={t('Contacts.event2')}
              event3={t('Contacts.event3')}
              event4={t('Contacts.event4')}
              event5={t('Contacts.event5')}
              country1={t('Contacts.country1')}
              country2={t('Contacts.country2')}
              country3={t('Contacts.country3')}
              country4={t('Contacts.country4')}
              country5={t('Contacts.country5')}
              country6={t('Contacts.country6')}
              country7={t('Contacts.country7')}
              country8={t('Contacts.country8')}
              country9={t('Contacts.country9')}
              country10={t('Contacts.country10')}
              country11={t('Contacts.country11')}
              country12={t('Contacts.country12')}
              country13={t('Contacts.country13')}
            />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Contacts