import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import styles from "./what-to-bring.module.css";

const WhatToBring = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
    <div>
      <div className={styles.what_to_bring_hero_container}>
        <h1 className='header_on_picture' style={{margin: 0, padding: 0}}>What to Bring</h1>
      </div>
      <div className='visibility_area'>
        <div style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem'}}>Essential Items</h2>
          <div className='visa_text' style={{textAlign: "justify", maxWidth: "800px", margin: "0 auto"}}>
            <p>
              When traveling to Mongolia, it's important to pack appropriately for the climate and activities you'll be doing. Here's a comprehensive list of essential items to bring:
            </p>
            <br/>
            <p><strong>Clothing:</strong></p>
            <ul className='visa_points'>
              <li>Layered clothing for varying temperatures</li>
              <li>Warm jacket or coat (even in summer, nights can be cold)</li>
              <li>Wind and waterproof jacket</li>
              <li>Warm clothes for cooler climates</li>
              <li>Comfortable and sturdy walking shoes or hiking boots</li>
              <li>Comfortable footwear</li>
              <li>Good walking socks</li>
              <li>Warm socks and thermal underwear (for winter trips)</li>
              <li>Warm hat and gloves</li>
              <li>Sunhat and sunglasses for sun protection</li>
              <li>Bikini/swimwear</li>
            </ul>
            <br/>
            <p><strong>Essentials:</strong></p>
            <ul className='visa_points'>
              <li>Passport and necessary travel documents</li>
              <li>Travel insurance documents</li>
              <li>Prescription medications (if needed) and basic first aid kit</li>
              <li>Sunscreen (high SPF) and lip balm</li>
              <li>Insect repellent</li>
              <li>Reusable water bottle</li>
              <li>Torch/flashlight or headlamp (and spare batteries)</li>
              <li>Money belt and small padlocks</li>
              <li>Daypack for day or overnight excursions</li>
              <li>Binoculars</li>
            </ul>
            <br/>
            <p><strong>Electronics:</strong></p>
            <ul className='visa_points'>
              <li>Camera and extra batteries or power bank</li>
              <li>Universal adapter for electrical outlets</li>
              <li>Mobile phone and charger</li>
              <li>SIM card (consider purchasing a local SIM card upon arrival)</li>
            </ul>
            <br/>
            <p><strong>Personal Items:</strong></p>
            <ul className='visa_points'>
              <li>Toiletries (some may be hard to find in remote areas)</li>
              <li>Roll of toilet paper and travel wipes</li>
              <li>Wet wipes or hand sanitizer</li>
              <li>Towel (quick-dry recommended)</li>
              <li>Personal hygiene items</li>
              <li>Earplugs and eye mask (for light sleepers)</li>
            </ul>
            <br/>
            <p>
              Remember that Mongolia's climate can be extreme, with hot summers and very cold winters. Pack according to the season of your visit, and always be prepared for sudden weather changes, especially if you're planning outdoor activities or staying in traditional ger camps.
            </p>
            <br/>
            <p><strong>Additional Information:</strong></p>
            <p>
              For more details, please refer to our travel resources: <strong>Best time to visit Mongolia</strong>, <strong>Weather/Climate</strong>, <strong>Travel Insurance</strong>, <strong>Visa Information</strong>, and <strong>SIM Card</strong> guides.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatToBring;
