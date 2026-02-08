import { createTranslator, isValidLocale, defaultLocale } from "@/lib/i18n";
import SeasonsSlider from '@/components/UI/SeasonsSlider';

const Visit = ({params: {locale}}: {params: {locale: string}}) => {
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const t = createTranslator(validLocale);
  
  return (
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
      </div>
      <div className='visibility_area'>
        <div style={{textAlign: "center"}}>
          <h2 className="pageTitle" style={{marginTop: '8rem', marginBottom: '5rem'}}>{t('Information.visitPage.pageTitle')}</h2>
          <div style={{textAlign: "justify"}}>
            <p className="pageDescription">{t('Information.visitPage.intro1')}</p>
            <p className="pageDescription">{t('Information.visitPage.intro2')}</p>
            <p className="pageDescription">{t('Information.visitPage.intro3')}</p>
            <p className="pageDescription">{t('Information.visitPage.intro4')}</p>
            <p className="pageDescription">{t('Information.visitPage.intro5')}</p>
          </div>
        </div>

        {/* Spring Season */}
        <div style={{marginTop: '5rem', marginBottom: '5rem'}}>
          <div style={{textAlign: "center", marginBottom: '2rem'}}>
            <img 
src="/travel-tools/spring.jpg"
              alt="Spring in Mongolia"
              style={{display: 'block', width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '10px', margin: '0 auto 2rem auto'}}
            />
            <h3 className="pageTitle" style={{fontSize: '2rem', marginTop: '2rem'}}>{t('Information.visitPage.springTitle')}</h3>
          </div>
          <div style={{textAlign: "justify"}}>
            <p className="pageDescription">{t('Information.visitPage.springPara1')}</p>
            <p className="pageDescription">{t('Information.visitPage.springPara2')}</p>
            
            <div style={{marginTop: '3rem', marginBottom: '3rem', overflowX: 'auto'}}>
              <table style={{width: '100%', maxWidth: '800px', margin: '0 auto'}}>
                <thead>
                  <tr>
                    <th>{t('Information.visitPage.monthMarch')}</th>
                    <th>{t('Information.visitPage.monthApril')}</th>
                    <th>{t('Information.visitPage.monthMay')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('Information.visitPage.tableMaxTemp')}: -2 °C (28.4 °F)</td>
                    <td>{t('Information.visitPage.tableMaxTemp')}: +8.3 °C (46.9 °F)</td>
                    <td>{t('Information.visitPage.tableMaxTemp')}: +16.8°C (62.2°F)</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tableMinTemp')}: -15.4 °C (4.3 °F)</td>
                    <td>{t('Information.visitPage.tableMinTemp')}: -5.8 °C (21.6°F)</td>
                    <td>{t('Information.visitPage.tableMinTemp')}: +2.7 °C (36.9 °F)</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tableSundial')}: 12.5 {t('Information.visitPage.hours')}</td>
                    <td>{t('Information.visitPage.tableSundial')}: 14.2 {t('Information.visitPage.hours')}</td>
                    <td>{t('Information.visitPage.tableSundial')}: 15.8 {t('Information.visitPage.hours')}</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tableRainyDays')}: 0 {t('Information.visitPage.days')}</td>
                    <td>{t('Information.visitPage.tableRainyDays')}: 2 {t('Information.visitPage.days')}</td>
                    <td>{t('Information.visitPage.tableRainyDays')}: 7 {t('Information.visitPage.days')}</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tablePrecipitation')}: 0 mm (0")</td>
                    <td>{t('Information.visitPage.tablePrecipitation')}: 10 mm (0.4")</td>
                    <td>{t('Information.visitPage.tablePrecipitation')}: 20 mm (0.8")</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{marginTop: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
              <h4 style={{fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem', color: '#666'}}>{t('Information.visitPage.springHolidaysTitle')}</h4>
              <ul style={{listStyle: 'disc', paddingLeft: '1.5rem', margin: 0}}>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.springH1')}</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.springH2')}</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.springH3')}</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.springH4')}</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.springH5')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Summer Season */}
        <div style={{marginTop: '5rem', marginBottom: '5rem'}}>
          <div style={{textAlign: "center", marginBottom: '2rem'}}>
            <img 
              src="/summer.jpg" 
              alt="Summer in Mongolia" 
              style={{display: 'block', width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '10px', margin: '0 auto 2rem auto'}}
            />
            <h3 className="pageTitle" style={{fontSize: '2rem', marginTop: '2rem'}}>{t('Information.visitPage.summerTitle')}</h3>
          </div>
          <div style={{textAlign: "justify"}}>
            <p className="pageDescription">{t('Information.visitPage.summerPara1')}</p>
            <p className="pageDescription">{t('Information.visitPage.summerPara2')}</p>
            
            <div style={{marginTop: '3rem', marginBottom: '3rem', overflowX: 'auto'}}>
              <table style={{width: '100%', maxWidth: '800px', margin: '0 auto'}}>
                <thead>
                  <tr>
                    <th>{t('Information.visitPage.monthJune')}</th>
                    <th>{t('Information.visitPage.monthJuly')}</th>
                    <th>{t('Information.visitPage.monthAugust')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('Information.visitPage.tableMaxTemp')}: +21.6°C (70.9°F)</td>
                    <td>{t('Information.visitPage.tableMaxTemp')}: +22.7°C (72.9°F)</td>
                    <td>{t('Information.visitPage.tableMaxTemp')}: +21.5°C (70.7°F)</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tableMinTemp')}: +8.3 °C (46.9 °F)</td>
                    <td>{t('Information.visitPage.tableMinTemp')}: +11.2 °C (52.2°F)</td>
                    <td>{t('Information.visitPage.tableMinTemp')}: +9.3 °C (48.7 °F)</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tableSundial')}: 16.6 {t('Information.visitPage.hours')}</td>
                    <td>{t('Information.visitPage.tableSundial')}: 16.2 {t('Information.visitPage.hours')}</td>
                    <td>{t('Information.visitPage.tableSundial')}: 14.8 {t('Information.visitPage.hours')}</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tableRainyDays')}: 11 {t('Information.visitPage.days')}</td>
                    <td>{t('Information.visitPage.tableRainyDays')}: 14 {t('Information.visitPage.days')}</td>
                    <td>{t('Information.visitPage.tableRainyDays')}: 13 {t('Information.visitPage.days')}</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tablePrecipitation')}: 60 mm (2.4")</td>
                    <td>{t('Information.visitPage.tablePrecipitation')}: 70 mm (2.7")</td>
                    <td>{t('Information.visitPage.tablePrecipitation')}: 80 mm (3.1")</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{marginTop: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
              <h4 style={{fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem', color: '#666'}}>{t('Information.visitPage.summerHolidaysTitle')}</h4>
              <ul style={{listStyle: 'disc', paddingLeft: '1.5rem', margin: 0}}>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.summerH1')}</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.summerH2')}</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.summerH3')}</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.summerH4')}</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.summerH5')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Autumn Season */}
        <div style={{marginTop: '5rem', marginBottom: '5rem'}}>
          <div style={{textAlign: "center", marginBottom: '2rem'}}>
            <img 
              src="/autumn.jpg" 
              alt="Autumn in Mongolia" 
              style={{display: 'block', width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '10px', margin: '0 auto 2rem auto'}}
            />
            <h3 className="pageTitle" style={{fontSize: '2rem', marginTop: '2rem'}}>{t('Information.visitPage.autumnTitle')}</h3>
          </div>
          <div style={{textAlign: "justify"}}>
            <p className="pageDescription">{t('Information.visitPage.autumnPara1')}</p>
            <p className="pageDescription">{t('Information.visitPage.autumnPara2')}</p>
            
            <div style={{marginTop: '3rem', marginBottom: '3rem', overflowX: 'auto'}}>
              <table style={{width: '100%', maxWidth: '800px', margin: '0 auto'}}>
                <thead>
                  <tr>
                    <th>{t('Information.visitPage.monthSeptember')}</th>
                    <th>{t('Information.visitPage.monthOctober')}</th>
                    <th>{t('Information.visitPage.monthNovember')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('Information.visitPage.tableMaxTemp')}: +15.6°C (60.1°F)</td>
                    <td>{t('Information.visitPage.tableMaxTemp')}: +6.8 °C (44.2 °F)</td>
                    <td>{t('Information.visitPage.tableMaxTemp')}: -4.4 °C (24.1 °F)</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tableMinTemp')}: +2.2 °C (36 °F)</td>
                    <td>{t('Information.visitPage.tableMinTemp')}: -6 °C (21.2 °F)</td>
                    <td>{t('Information.visitPage.tableMinTemp')}: -16.2 °C (2.8 °F)</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tableSundial')}: 13.1 {t('Information.visitPage.hours')}</td>
                    <td>{t('Information.visitPage.tableSundial')}: 11.3 {t('Information.visitPage.hours')}</td>
                    <td>{t('Information.visitPage.tableSundial')}: 9.8 {t('Information.visitPage.hours')}</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tableRainyDays')}: 7 {t('Information.visitPage.days')}</td>
                    <td>{t('Information.visitPage.tableRainyDays')}: 2 {t('Information.visitPage.days')}</td>
                    <td>{t('Information.visitPage.tableRainyDays')}: 0 {t('Information.visitPage.days')}</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tablePrecipitation')}: 40 mm (1.6")</td>
                    <td>{t('Information.visitPage.tablePrecipitation')}: 10 mm (0.4")</td>
                    <td>{t('Information.visitPage.tablePrecipitation')}: 0 mm (0")</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{marginTop: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
              <h4 style={{fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem', color: '#666'}}>{t('Information.visitPage.autumnHolidaysTitle')}</h4>
              <ul style={{listStyle: 'disc', paddingLeft: '1.5rem', margin: 0}}>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.autumnH1')}</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.autumnH2')}</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.autumnH3')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Winter Season */}
        <div style={{marginTop: '5rem', marginBottom: '5rem'}}>
          <div style={{textAlign: "center", marginBottom: '2rem'}}>
            <div style={{width: '100%', maxWidth: '800px', margin: '0 auto 2rem auto', overflow: 'hidden', borderRadius: '10px', height: '500px'}}>
              <img 
                src="/travel-tools/winter.webp" 
                alt="Winter in Mongolia" 
                style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top'}}
              />
            </div>
            <h3 className="pageTitle" style={{fontSize: '2rem', marginTop: '2rem'}}>{t('Information.visitPage.winterTitle')}</h3>
          </div>
          <div style={{textAlign: "justify"}}>
            <p className="pageDescription">{t('Information.visitPage.winterPara1')}</p>
            <p className="pageDescription">{t('Information.visitPage.winterPara2')}</p>
            
            <div style={{marginTop: '3rem', marginBottom: '3rem', overflowX: 'auto'}}>
              <table style={{width: '100%', maxWidth: '800px', margin: '0 auto'}}>
                <thead>
                  <tr>
                    <th>{t('Information.visitPage.monthDecember')}</th>
                    <th>{t('Information.visitPage.monthJanuary')}</th>
                    <th>{t('Information.visitPage.monthFebruary')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{t('Information.visitPage.tableMaxTemp')}: -13.7 °C (7.3 °F)</td>
                    <td>{t('Information.visitPage.tableMaxTemp')}: -15.9 °C (3.9 °F)</td>
                    <td>{t('Information.visitPage.tableMaxTemp')}: -11.4°C (11.5°F)</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tableMinTemp')}: -23.8°C (10.8°F)</td>
                    <td>{t('Information.visitPage.tableMinTemp')}: -26.5°C (-15.7°F)</td>
                    <td>{t('Information.visitPage.tableMinTemp')}: -24.1°C (-11.4°F)</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tableSundial')}: 9.1 {t('Information.visitPage.hours')}</td>
                    <td>{t('Information.visitPage.tableSundial')}: 9.5 {t('Information.visitPage.hours')}</td>
                    <td>{t('Information.visitPage.tableSundial')}: 10.8 {t('Information.visitPage.hours')}</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tableRainyDays')}: 0 {t('Information.visitPage.days')}</td>
                    <td>{t('Information.visitPage.tableRainyDays')}: 1 {t('Information.visitPage.days')}</td>
                    <td>{t('Information.visitPage.tableRainyDays')}: 0 {t('Information.visitPage.days')}</td>
                  </tr>
                  <tr>
                    <td>{t('Information.visitPage.tablePrecipitation')}: 0 mm (0")</td>
                    <td>{t('Information.visitPage.tablePrecipitation')}: 0 mm (0")</td>
                    <td>{t('Information.visitPage.tablePrecipitation')}: 0 mm (0")</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{marginTop: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
              <h4 style={{fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem', color: '#666'}}>{t('Information.visitPage.winterHolidaysTitle')}</h4>
              <ul style={{listStyle: 'disc', paddingLeft: '1.5rem', margin: 0}}>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.winterH1')}</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.winterH2')}</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.winterH3')}</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>{t('Information.visitPage.winterH4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visit;