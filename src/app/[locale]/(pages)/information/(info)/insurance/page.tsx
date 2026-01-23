import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import styles from "./insurance.module.css";

const Insurance = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div>
      <div className={styles.insurance_hero_container}>
      </div>
      <div className='visibility_area'>
        <div style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem'}}>Protect Your Journey</h2>
          <div className='visa_text' style={{textAlign: "justify", maxWidth: "800px", margin: "0 auto"}}>
            <p>
              Travel insurance for independent travelers and intrepid families. You'd rather not think about all of the things that might go wrong on your trip, but these things can and do happen.
            </p>
            <br/>
            <p>
              World Nomads travel insurance has been designed by travelers for travelers, to cover your trip essentials. Even if you run out of travel insurance or leave without it, World Nomads can cover you. We don't just keep you and your family protected, with us, you'll travel smarter and safer.
            </p>
            <br/>
            <p>
              You can buy, <a href="https://www.worldnomads.com/Turnstile/AffiliateLink?partnerCode=DM43994&source=&utm_source=DM43994&utm_content=link&path=https://www.worldnomads.com/travel-insurance/" target="_blank" rel="noopener noreferrer" style={{color: '#65deaa'}}>extend and claim online</a>, even after you've left home. Travel insurance from <a href="https://www.worldnomads.com/Turnstile/AffiliateLink?partnerCode=DM43994&source=&utm_source=DM43994&utm_content=link&path=https://www.worldnomads.com" target="_blank" rel="noopener noreferrer" style={{color: '#65deaa'}}>WorldNomads.com</a> is available to people from over 150 countries. It's designed for adventurous travelers with cover for overseas medical, evacuation, baggage and a range of <a href="https://www.worldnomads.com/Turnstile/AffiliateLink?partnerCode=DM43994&source=&utm_source=DM43994&utm_content=link&path=https://www.worldnomads.com/adventure-travel-insurance" target="_blank" rel="noopener noreferrer" style={{color: '#65deaa'}}>adventure sports and activities</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Insurance;