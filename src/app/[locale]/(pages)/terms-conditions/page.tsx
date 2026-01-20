import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";

const Terms = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  return (
    <div style={{marginTop: "8%"}}>
      <div style={{width: "100%", height: "250px", backgroundColor: "#3d3d3b", color: '#fff'}}>
        <h1 style={{fontSize: "200%", fontWeight: "bolder", marginLeft: "15%", paddingTop: "4.5%"}}>TERMS & CONDITIONS</h1>
        <p style={{ marginLeft: "15%"}}>________________________</p>
      </div>
      <div className='visibility_area' style={{textAlign: "justify"}}>
        <h2>{t('Terms.contract')}</h2>
        <p>{t('Terms.contract_text')}</p>
        <h2 style={{marginTop: "5%"}}>{t('Terms.note')}</h2>
        <p>{t('Terms.note_text')}</p>
      </div>
    </div>
  )
}

export default Terms