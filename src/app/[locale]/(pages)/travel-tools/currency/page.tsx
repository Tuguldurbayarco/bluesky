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
          <h1 className='header_on_picture'>Currency</h1>
        </div>
      </div>
      <div className='visibility_area'>
        <div style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem', marginBottom: '2rem'}}>Currency Information</h2>
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
              title="Currency Information Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className='visa_text' style={{textAlign: "justify", maxWidth: "800px", margin: "0 auto"}}>
            <p>
              The official currency of Mongolia is the Mongolian Tugrik (MNT). Here's essential information about currency and money matters for travelers:
            </p>
            <br/>
            <p><strong>Currency Details:</strong></p>
            <ul className='visa_points'>
              <li><strong>Currency Code:</strong> MNT (Mongolian Tugrik)</li>
              <li><strong>Symbol:</strong> ₮</li>
              <li><strong>Banknotes:</strong> Available in denominations of 10, 20, 50, 100, 500, 1,000, 5,000, 10,000, and 20,000 Tugrik</li>
            </ul>
            <br/>
            <p><strong>Exchanging Money:</strong></p>
            <ul className='visa_points'>
              <li>Exchange currency at banks or exchange offices in Ulaanbaatar</li>
              <li>Major currencies like USD, EUR, and GBP are widely accepted for exchange</li>
              <li>Keep exchange receipts as you may need them when leaving the country</li>
              <li>ATMs are available in Ulaanbaatar and major cities</li>
            </ul>
            <br/>
            <p><strong>Payment Methods:</strong></p>
            <ul className='visa_points'>
              <li>Cash is preferred, especially in rural areas and local markets</li>
              <li>Credit cards (Visa, MasterCard) are accepted in hotels, restaurants, and shops in Ulaanbaatar</li>
              <li>Carry small denominations for tips and small purchases</li>
              <li>In remote areas, cash may be needed - plan accordingly</li>
            </ul>
            <br/>
            <p><strong>Tips for Travelers:</strong></p>
            <ul className='visa_points'>
              <li>Exchange enough cash before heading to remote areas</li>
              <li>US Dollars are sometimes accepted, but Tugrik is preferred</li>
              <li>Check current exchange rates before your trip</li>
              <li>Keep some cash in a safe place as backup</li>
            </ul>
            <br/>
            <p>
              As of recent years, the exchange rate is approximately 3,400-3,700 MNT per 1 USD, but rates fluctuate. It's best to check current rates at the time of your visit. Most tourist establishments in Ulaanbaatar accept major credit cards, but always carry cash for smaller vendors and rural areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currency;
