import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import Image from "next/image";

const PlugInOut = ({params: {locale}}: {params: {locale: string}}) => {
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
          src="/travel-tools/plugInOUt.webp"
          alt="Plug In/Out Header"
          fill
          style={{objectFit: "cover", zIndex: 0}}
          priority
        />
        <div className='header_container_for_picture' style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 1}}>
          <h1 className='header_on_picture'>Plug In/Out - Electrical Information</h1>
        </div>
      </div>
      <div className='visibility_area'>
        <div style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem', marginBottom: '2rem'}}>Plug In/Out - Electrical Information</h2>
          <div className='visa_text' style={{textAlign: "justify", maxWidth: "800px", margin: "0 auto"}}>
            <p><strong>Voltage:</strong></p>
            <p>
              The standard voltage in Mongolia is 220-230 V at 50 Hz frequency, which is the same voltage used in China, Greece, Russia, South Korea, and the United Arab Emirates.
            </p>
            <p>
              Devices rated for 220-240V will work without a converter, but devices from countries using 100-127V (like the US and Canada) will require a voltage converter. 220-230 V has an advantage over lower voltage such as the 110 V that it is cheaper to transmit. On the other hand, 220-230 V is more dangerous than lower voltages.
            </p>
            <br/>
            <p><strong>Plug / Socket Type(s) in use In Mongolia:</strong></p>
            <div style={{display: "flex", justifyContent: "center", margin: "20px 0"}}>
              <Image 
                src="/travel-tools/plugs.png" 
                alt="Type C and Type E plugs" 
                width={500}
                height={70}
                style={{maxWidth: "100%", height: "auto"}}
              />
            </div>
            <p>
              Mongolia uses <strong>Type C</strong> and <strong>Type E</strong> plugs as official standards. Type C (Europlug) has two round pins and is ungrounded. Type E (French) has two round pins plus a hole for a grounding pin.
            </p>
            <p>
              Many sockets in Mongolia are universal and may accept multiple plug types including A, B, C, D, E, F, G, I, and O. However, to ensure compatibility, it's recommended to travel with a universal plug adapter or converter.
            </p>
            <p>
              Plugs/sockets are usually an issue when it comes to traveling, so always make sure you travel with a universal plug adapter.
            </p>
            <br/>
            <p><strong>Mongolia GSM Frequency(ies):</strong></p>
            <p>
              Mongolia uses the following GSM frequencies: GSM 900 / GSM 1800.
            </p>
            <p>
              <strong>Mobicom</strong> uses GSM 900 MHz and GSM 1800 MHz frequencies. <strong>Unitel</strong> uses GSM 900 MHz frequency. Both operators are the largest mobile providers in Mongolia.
            </p>
            <p>
              When travelling, make sure that your phone supports the GSM frequency of the country you're traveling to. Usually the supported GSM frequencies are printed on the box of your phone as well as its manual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlugInOut;
