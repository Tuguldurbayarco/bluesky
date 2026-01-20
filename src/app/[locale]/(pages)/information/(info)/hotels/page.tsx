import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import styles from "./hotels.module.css";

const Hotels = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);  return (
    <div className='visibility_area'>
      <div className={`${styles.hotels_display} ${styles.hotels_top_margin}`}>
        <div className={`${styles.hotel_image} ${styles.hotels_container_display}`}>
          <a href='https://www.shangri-la.com/en/ulaanbaatar/shangrila/' target="_blank">
            <img
              src='/shangri.jpg'
              alt='hotel'
            />
          </a>
          <a className={`${styles.hotels_container_text} ${styles.shangri_la_hotel}`} href='https://www.shangri-la.com/en/ulaanbaatar/shangrila/' target="_blank">{t(`Accommodation.hotels.${0}.title`)}</a>
        </div>
        <div className={`${styles.hotel_image} ${styles.hotels_container_display}`}>
          <a href='https://hotelbluesky.mn/' target="_blank">
            <img
              src='/blue-sky.jpg'
              alt='hotel'
            />
          </a>
          <a className={`${styles.hotels_container_text} ${styles.blue_sky_hotel}`} href='https://hotelbluesky.mn/' target="_blank" >{t(`Accommodation.hotels.${1}.title`)}</a>
        </div>
        <div className={`${styles.hotel_image} ${styles.hotels_container_display}`}>
          <a href='https://www.ramadaub.mn/' target="_blank">
            <img
              src='/ramada.jpg'
              alt='hotel'
            />
          </a>
          <a className={`${styles.hotels_container_text} ${styles.ramada_hotel}`} href='https://www.ramadaub.mn/' target="_blank">{t(`Accommodation.hotels.${2}.title`)}</a>
        </div>
      </div>
      <div className={styles.hotels_display}>
      <div className={`${styles.hotel_image} ${styles.hotels_container_display}`}>
          <a href='https://www.edelweiss.mn/#section-0' target="_blank">
            <img
              src='/edel.jpg'
              alt='hotel'
            />
          </a>
          <a className={`${styles.hotels_container_text} ${styles.edelweiss_hotel}`} href='https://www.edelweiss.mn/#section-0' target="_blank">{t(`Accommodation.hotels.${3}.title`)}</a>
        </div>
        <div className={`${styles.hotel_image} ${styles.hotels_container_display}`}>
          <a href='https://www.kempinski.com/en' target="_blank">
            <img
              src='/kemp.jpg'
              alt='hotel'
            />
          </a>
          <a className={`${styles.hotels_container_text} ${styles.kempinski_hotel}`} href='https://www.kempinski.com/en' target="_blank" >{t(`Accommodation.hotels.${4}.title`)}</a>
        </div>
        <div className={`${styles.hotel_image} ${styles.hotels_container_display}`}>
          <a href='https://mika.mn/' target="_blank">
            <img
              src='/mika.jpg'
              alt='hotel'
            />
          </a>
          <a className={`${styles.hotels_container_text} ${styles.mika_hotel}`} href='https://mika.mn/' target="_blank">{t(`Accommodation.hotels.${5}.title`)}</a>
        </div>
      </div>
      <div className={styles.hotels_display}>
      <div className={`${styles.hotel_image} ${styles.hotels_container_display}`}>
          <a href='https://ubcontinentalhotel.com/' target="_blank">
            <img
              src='/cont.jpg'
              alt='hotel'
            />
          </a>
          <a className={`${styles.hotels_container_text} ${styles.continental_hotel}`} href='https://ubcontinentalhotel.com/' target="_blank">{t(`Accommodation.hotels.${6}.title`)}</a>
        </div>
        <div className={`${styles.hotel_image} ${styles.hotels_container_display}`}>
          <a href='https://www.booking.com/hotel/mn/khongor-guest-house-amp-tours.en-gb.html?aid=397607&label=gog235jc-1FCAEoggI46AdIM1gDaJYBiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuAKzoauvBsACAdICJDljYWU5NzBkLTlkNzMtNDA2Mi04YWJhLWJjMzY3ZGE4NzkwYdgCBuACAQ&sid=02ef0e93167b364c6709feaed54be1c4&dest_id=-2353539&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=9&hpos=9&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1709887706&srpvid=f4b73ddfe12900eb&type=total&ucfs=1&activeTab=main' target="_blank">
            <img
              src='/khon.jpg'
              alt='guesthouse'
            />
          </a>
          <a className={`${styles.hotels_container_text} ${styles.khongor_guesthouse}`} href='https://www.booking.com/hotel/mn/khongor-guest-house-amp-tours.en-gb.html?aid=397607&label=gog235jc-1FCAEoggI46AdIM1gDaJYBiAEBmAEJuAEXyAEM2AEB6AEB-AEMiAIBqAIDuAKzoauvBsACAdICJDljYWU5NzBkLTlkNzMtNDA2Mi04YWJhLWJjMzY3ZGE4NzkwYdgCBuACAQ&sid=02ef0e93167b364c6709feaed54be1c4&dest_id=-2353539&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=9&hpos=9&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1709887706&srpvid=f4b73ddfe12900eb&type=total&ucfs=1&activeTab=main' target="_blank" > {t(`Accommodation.hotels.${7}.title`)}</a>
        </div>
        <div className={`${styles.hotel_image} ${styles.hotels_container_display}`}>
          <a href='https://www.booking.com/hotel/mn/nomuun-town.en-gb.html?aid=356980&label=gog235jc-1DCAsolgFCC25vbXV1bi10b3duSDNYA2iWAYgBAZgBCbgBF8gBDNgBA-gBAYgCAagCA7gCprrPrwbAAgHSAiQ4ZjIxMzAyOC04ZTE2LTRjYTktYmViZS1hYzM5MGNmOGM5ZmLYAgTgAgE&sid=02ef0e93167b364c6709feaed54be1c4&dist=0&keep_landing=1&sb_price_type=total&type=total&' target="_blank">
            <img
              src='/mash.jpg'
              alt='guesthouse'
            />
          </a>
          <a className={`${styles.hotels_container_text} ${styles.mash_guesthouse}`} href='https://www.booking.com/hotel/mn/nomuun-town.en-gb.html?aid=356980&label=gog235jc-1DCAsolgFCC25vbXV1bi10b3duSDNYA2iWAYgBAZgBCbgBF8gBDNgBA-gBAYgCAagCA7gCprrPrwbAAgHSAiQ4ZjIxMzAyOC04ZTE2LTRjYTktYmViZS1hYzM5MGNmOGM5ZmLYAgTgAgE&sid=02ef0e93167b364c6709feaed54be1c4&dist=0&keep_landing=1&sb_price_type=total&type=total&' target="_blank">{t(`Accommodation.hotels.${8}.title`)}</a>
        </div>
      </div>
    </div>
  )
}

export default Hotels