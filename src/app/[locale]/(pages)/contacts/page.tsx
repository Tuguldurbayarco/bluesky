import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import InputForm from '@/components/UI/InputForm';
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
        <div className='header_container_for_picture' style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1}}>
          <h1 className='header_on_picture'>{t('Contacts.title')}</h1>
        </div>
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
              <a href="tel:+97699902202" style={{textDecoration: "none"}}>+976 99902202<br /></a>
              <a href="tel:+97680303997" style={{textDecoration: "none"}}>+976 80303997</a>
            </div>
            <div style={{padding: "2%"}}>
              <img
                src='/email.png'
                alt='mail'
                height='auto'
                className={styles.contact_paddings}
              />
              <a href="mailto:eternalskytour@gmail.com" style={{textDecoration: "none"}}>eternalskytour@gmail.com<br /></a>
              <a href="mailto:eternalskytour@naver.com" style={{textDecoration: "none"}}>eternalskytour@naver.com</a>
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
              toursCategory={t('Contacts.toursCategory')}
              eventsCategory={t('Contacts.eventsCategory')}
              tour1={t('Contacts.tour1')}
              tour2={t('Contacts.tour2')}
              tour3={t('Contacts.tour3')}
              tour4={t('Contacts.tour4')}
              tour5={t('Contacts.tour5')}
              tour6={t('Contacts.tour6')}
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