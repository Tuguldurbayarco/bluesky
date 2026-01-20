import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import OptionsContainer from '@/components/UI/OptionsContainer'
import styles from "./information.module.css";

const Information = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);  return (
    <div className='visibility_area' > 
      <div className={styles.information_margin}>
        <p className={styles.information_main_header}>{t('Information.title')}</p>
        <div >
          <img
            src='/mongolia.jpg'
            style={{ margin: "0 auto", display: "block"}}
          />
        </div>
        <div>
          <p className={styles.information_second_header}>{t('Information.subtitle')}</p>
          <p className={styles.information_desc}>{t('Information.text')}</p>
        </div>
      </div>
      <div>
        <div>
          <img
            src='/terelj.jpg'
            alt='picture'
            width='100%'
            style={{marginBottom: "2.7%", borderRadius: "10px"}}
          />
          <div>
            <div className={styles.information_space}>
              <img
                src='/cousine1.jpg'
                alt='food'
                width='50%'
                style={{borderBottomLeftRadius: "10px", borderTopLeftRadius: "10px"}}
              />
              <img
                src='/cousine2.jpg'
                alt='meal'
                width='50%'
                style={{borderBottomRightRadius: "10px", borderTopRightRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className={styles.information_second_header} style={{marginBottom: "2%"}}>{t('Information.cuisine')}</p>
              <p className={styles.information_desc}>{t('Information.cuisine_desc')}</p>
            </div>
          </div>
          <div>
            <div className={styles.information_space}>
              <img
                src='/culture.jpg'
                alt='song'
                width='100%'
                style={{borderRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className={styles.information_second_header} style={{marginBottom: "2%"}}>{t('Information.culture')}</p>
              <p className={styles.information_desc}>{t('Information.culture_desc')}</p>
            </div>
          </div>
          <div>
            <div className={styles.information_space}>
              <img
                src='/kashmere.jpg'
                alt='cashmere'
                width='100%'
                style={{borderRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className={styles.information_second_header} style={{marginBottom: "2%"}}>{t('Information.cashmere')}</p>
              <p className={styles.information_desc}>{t('Information.kashmere_desc')}</p>
            </div>
          </div>
          <div>
            <div className={styles.information_space}>
              <img
                src='/muse.jpg'
                alt='Museums'
                width='100%'
                style={{borderRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className={styles.information_second_header} style={{marginBottom: "2%"}}>{t('Information.museum')}</p>
              <p className={styles.information_desc}>{t(`Information.museum_list.${0}.title`)} <br/> {t(`Information.museum_list.${1}.title`)}  <br/>{t(`Information.museum_list.${2}.title`)}  <br/>{t(`Information.museum_list.${3}.title`)} <br/>{t(`Information.museum_list.${4}.title`)} <br/>{t(`Information.museum_list.${5}.title`)} <br/>{t(`Information.museum_list.${6}.title`)}<br/> {t(`Information.museum_list.${7}.title`)} <br/>{t(`Information.museum_list.${8}.title`)} <br/>{t(`Information.museum_list.${9}.title`)} <br/>{t(`Information.museum_list.${10}.title`)}</p>
            </div>
          </div>
          <div>
            <div className={styles.information_space}>
              <img
                src='/temp.jpg'
                alt='Temples'
                width='100%'
                style={{borderRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className={styles.information_second_header} style={{marginBottom: "2%"}}>{t('Information.temple')}</p>
              <p className={styles.information_desc}>{t(`Information.temple_list.${0}.title`)} <br/> {t(`Information.temple_list.${1}.title`)} <br/> {t(`Information.temple_list.${2}.title`)}</p>
            </div>
          </div>
          <div>
            <div className={styles.information_space}>
              <img
                src='/music.jpg'
                alt='Music and free Time'
                width='100%'
                style={{borderRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className={styles.information_second_header} style={{marginBottom: "2%"}}>{t('Information.music')}</p>
              <p className={styles.information_desc}>{t(`Information.music_list.${0}.title`)} <br/> {t(`Information.music_list.${1}.title`)} <br/> {t(`Information.music_list.${2}.title`)} <br/> {t(`Information.music_list.${3}.title`)}<br/> {t(`Information.music_list.${4}.title`)}</p>
            </div>
          </div>
          <div>
            <div className={styles.information_space}>
              <img
                src='/rest.jpg'
                alt='Restaraunts'
                width='100%'
                style={{borderRadius: "10px"}}
              />
            </div>
            <div style={{marginTop: "2%"}}>
              <p className={styles.information_second_header} style={{marginBottom: "2%"}}>{t('Information.restaurante')}</p>
              <p className={styles.information_desc}>{t(`Information.restaurante_list.${0}.title`)}<br/> {t(`Information.restaurante_list.${1}.title`)}<br/>{t(`Information.restaurante_list.${2}.title`)}<br/>{t(`Information.restaurante_list.${3}.title`)}<br/>{t(`Information.restaurante_list.${4}.title`)}<br/>{t(`Information.restaurante_list.${5}.title`)}<br/>{t(`Information.restaurante_list.${6}.title`)}<br/>{t(`Information.restaurante_list.${7}.title`)}<br/>{t(`Information.restaurante_list.${8}.title`)}<br/>{t(`Information.restaurante_list.${9}.title`)}<br/>{t(`Information.restaurante_list.${10}.title`)}<br/>{t(`Information.restaurante_list.${11}.title`)}<br/>{t(`Information.restaurante_list.${12}.title`)}<br/>{t(`Information.restaurante_list.${13}.title`)}</p>
            </div>
          </div>
        </div>
        <div>
          <p className={styles.information_option}>{t('Information.subtitle2')}</p>
          <OptionsContainer locale={validLocale}/>
        </div>
      </div>
    </div>
  )
}

export default Information
