import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import SeasonsSlider from '@/components/UI/SeasonsSlider';

const Visit = ({params: {locale}}: {params: {locale: string}}) => {  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);  return (
    <div>
      <div>
        <div>
          <SeasonsSlider  
            winter={t('Information.seasons.title1')}
            winterDescription1={t('Information.seasons.description1')}
            winterDescription2={t('Information.seasons.description1-1')}
            spring={t('Information.seasons.title2')}
            springDescription1={t('Information.seasons.description2')}
            springDescription2={t('Information.seasons.description2-1')}
            summer={t('Information.seasons.title3')}
            summerDescription1={t('Information.seasons.description3')}
            summerDescription2={t('Information.seasons.description3-1')}
            autumn={t('Information.seasons.title4')}
            autumnDescription1={t('Information.seasons.description4')}
            autumnDescription2={t('Information.seasons.description4-1')}
          />
        </div>
        <div className='seasons_title_positioning'>
          <p className='seasons_title_on_picture'>{t('Information.visit')}</p>
        </div>
      </div>
    </div>
  )
}

export default Visit  