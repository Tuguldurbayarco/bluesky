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
          <h2 className="pageTitle" style={{marginTop: '8rem', marginBottom: '5rem'}}>Seasons In Mongolia</h2>
          <div style={{textAlign: "justify"}}>
            <p className="pageDescription">High ranges of Central Asia, outer Mongolia on almost all sides by powerful barriers that isolate it from the moist air currents as the Atlantic and the Pacific, which creates its territory is sharply continental climate. It is characterized by the predominance of Sunny days, especially in winter, significant dry air, low precipitation, sharp temperature fluctuations, not only yearly, but daily. The temperature during the day can sometimes fluctuate in the range of 20-30 degrees.</p>
            <p className="pageDescription">The coldest month of the year is January. In some parts of the country the temperature drops to -50 degrees.</p>
            <p className="pageDescription">The hottest month is July. The average temperature during this period most of the territory, +20 degrees, in the South to 25 degrees. The maximum temperature in the Gobi desert during this period can reach +58 degrees.</p>
            <p className="pageDescription">The average annual rainfall of 200-250 mm. 80-90 percent of total annual precipitation falls during the five months from may to September. The maximum amount of precipitation (600 mm) falls in Hentii aimag, Altai and around lake Huvsgul. Low precipitation (about 100 mm per year) falls on the Gobi desert.</p>
            <p className="pageDescription">The greatest force winds reach the spring. In the Gobi areas winds often lead to the formation of storms and reach enormous destructive power – 15-25 m/sec. Wind can tear the Yurt and carry for several kilometers, to tear to shreds the tents.</p>
          </div>
        </div>

        {/* Spring Season */}
        <div style={{marginTop: '5rem', marginBottom: '5rem'}}>
          <div style={{textAlign: "center", marginBottom: '2rem'}}>
            <img 
              src="/spring.jpg" 
              alt="Spring in Mongolia" 
              style={{display: 'block', width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '10px', margin: '0 auto 2rem auto'}}
            />
            <h3 className="pageTitle" style={{fontSize: '2rem', marginTop: '2rem'}}>Spring Season</h3>
          </div>
          <div style={{textAlign: "justify"}}>
            <p className="pageDescription">Spring in Mongolia is coming after a very cold winter. The days grew longer and nights shorter. Spring is the time for snow melting and the release of animals from hibernation.</p>
            <p className="pageDescription">Spring begins in mid March and usually lasts about 60 days, although it can be as long as 70 days or as short as 45 days in some areas of the country. For people and livestock, it is also the season of dry and windy days. In the spring of frequent dust storms, not only in the South but also in the Central regions of the country. Leaving the house of a resident trying to close the window, as dust storms swoop suddenly (and quickly tested).</p>
            
            <div style={{marginTop: '3rem', marginBottom: '3rem', overflowX: 'auto'}}>
              <table style={{width: '100%', maxWidth: '800px', margin: '0 auto'}}>
                <thead>
                  <tr>
                    <th>March</th>
                    <th>April</th>
                    <th>May</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Max average t°: -2 °C (28.4 °F)</td>
                    <td>Max average t°: +8.3 °C (46.9 °F)</td>
                    <td>Max average t°: +16.8°C (62.2°F)</td>
                  </tr>
                  <tr>
                    <td>Min average t°: -15.4 °C (4.3 °F)</td>
                    <td>Min average t°: -5.8 °C (21.6°F)</td>
                    <td>Min average t°: +2.7 °C (36.9 °F)</td>
                  </tr>
                  <tr>
                    <td>Sundial in the day: 12.5 hours</td>
                    <td>Sundial in the day: 14.2 hours</td>
                    <td>Sundial in the day: 15.8 hours</td>
                  </tr>
                  <tr>
                    <td>Rainy days: 0 days</td>
                    <td>Rainy days: 2 days</td>
                    <td>Rainy days: 7 days</td>
                  </tr>
                  <tr>
                    <td>Precipitation: 0 mm (0")</td>
                    <td>Precipitation: 10 mm (0.4")</td>
                    <td>Precipitation: 20 mm (0.8")</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{marginTop: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
              <h4 style={{fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem', color: '#666'}}>Spring Holidays</h4>
              <ul style={{listStyle: 'disc', paddingLeft: '1.5rem', margin: 0}}>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>28 February-10 March – a Great winter festival</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>March, 1-4 – Celebration of the ice on lake Hovsgol (Hovsgol)</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>March, 5 – Festival of the eagles in the National Park hustai</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>March, 5-9 – the Festival of a thousand camels in Dalanzadgad administrative center of South Gobi aimag</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>March, 8 – International women's day</li>
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
            <h3 className="pageTitle" style={{fontSize: '2rem', marginTop: '2rem'}}>Summer Season</h3>
          </div>
          <div style={{textAlign: "justify"}}>
            <p className="pageDescription">Summer is the warmest season in Mongolia. The best season to travel to Mongolia. There is more precipitation than spring and autumn. Rivers and lakes the most affluent. However, if the summer is very dry, then closer to the fall of the river become very shallow. The beginning of summer the most beautiful time of the year.</p>
            <p className="pageDescription">Steppe green (grass not yet burnt out from the sun), and livestock gain weight and fat. In Mongolia, summer lasts about 110 days from late may to September. The hottest month is July. The average temperature during this period most of the territory, +20 degrees, in the South to 25 degrees. The maximum temperature in the Gobi desert during this period can reach +58 degrees.</p>
            
            <div style={{marginTop: '3rem', marginBottom: '3rem', overflowX: 'auto'}}>
              <table style={{width: '100%', maxWidth: '800px', margin: '0 auto'}}>
                <thead>
                  <tr>
                    <th>June</th>
                    <th>July</th>
                    <th>August</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Max average t°: +21.6°C (70.9°F)</td>
                    <td>Max average t°: +22.7°C (72.9°F)</td>
                    <td>Max average t°: +21.5°C (70.7°F)</td>
                  </tr>
                  <tr>
                    <td>Min average t°: +8.3 °C (46.9 °F)</td>
                    <td>Min average t°: +11.2 °C (52.2°F)</td>
                    <td>Min average t°: +9.3 °C (48.7 °F)</td>
                  </tr>
                  <tr>
                    <td>Sundial in the day: 16.6 hours</td>
                    <td>Sundial in the day: 16.2 hours</td>
                    <td>Sundial in the day: 14.8 hours</td>
                  </tr>
                  <tr>
                    <td>Rainy days: 11 days</td>
                    <td>Rainy days: 14 days</td>
                    <td>Rainy days: 13 days</td>
                  </tr>
                  <tr>
                    <td>Precipitation: 60 mm (2.4")</td>
                    <td>Precipitation: 70 mm (2.7")</td>
                    <td>Precipitation: 80 mm (3.1")</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{marginTop: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
              <h4 style={{fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem', color: '#666'}}>Summer Holidays</h4>
              <ul style={{listStyle: 'disc', paddingLeft: '1.5rem', margin: 0}}>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>June, 14-20 – International music festival "Tourin tower-goon"</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>From 9 to 13 July – National holiday, Nadom</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>July, 22 – Feast of the AMC – Ulan Bator</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>beginning of August – the festival of horses</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>August, 22 – Festival "the Legacy of Genghis Khan" in the National Park Terelj</li>
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
            <h3 className="pageTitle" style={{fontSize: '2rem', marginTop: '2rem'}}>Autumn Season</h3>
          </div>
          <div style={{textAlign: "justify"}}>
            <p className="pageDescription">Autumn in Mongolia is the season of transition from the hot summer to the cold and dry winter. Autumn is less rainy. Gradually it gets cooler and vegetables and grains are harvested at this time. Pasture and forests become yellow. Flies die and livestock is fat and woolly in preparation for winter.</p>
            <p className="pageDescription">Autumn is an important season in Mongolia to prepare for winter, collecting grain crops, vegetables and fodder; the training in the amount of their barns and cattle sheds; preparation of wood and heat their homes and so on. Fall lasts about 60 days from early September to early November. The end of summer and beginning of autumn is very favorable season for travel. However, we must remember that snow can fall and in early September, but within 1-2 completely gone.</p>
            
            <div style={{marginTop: '3rem', marginBottom: '3rem', overflowX: 'auto'}}>
              <table style={{width: '100%', maxWidth: '800px', margin: '0 auto'}}>
                <thead>
                  <tr>
                    <th>September</th>
                    <th>October</th>
                    <th>November</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Max average t°: +15.6°C (60.1°F)</td>
                    <td>Max average t°: +6.8 °C (44.2 °F)</td>
                    <td>Max average t°: -4.4 °C (24.1 °F)</td>
                  </tr>
                  <tr>
                    <td>Min average t°: +2.2 °C (36 °F)</td>
                    <td>Min average t°: -6 °C (21.2 °F)</td>
                    <td>Min average t°: -16.2 °C (2.8 °F)</td>
                  </tr>
                  <tr>
                    <td>Sundial in the day: 13.1 hours</td>
                    <td>Sundial in the day: 11.3 hours</td>
                    <td>Sundial in the day: 9.8 hours</td>
                  </tr>
                  <tr>
                    <td>Rainy days: 7 days</td>
                    <td>Rainy days: 2 days</td>
                    <td>Rainy days: 0 days</td>
                  </tr>
                  <tr>
                    <td>Precipitation: 40 mm (1.6")</td>
                    <td>Precipitation: 10 mm (0.4")</td>
                    <td>Precipitation: 0 mm (0")</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{marginTop: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
              <h4 style={{fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem', color: '#666'}}>Autumn Holidays</h4>
              <ul style={{listStyle: 'disc', paddingLeft: '1.5rem', margin: 0}}>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>September 17-18 – Festival of nomads</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>3-5 October – the Golden eagle Festival in Bayan-present (Kazakh tradition)</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>November 26 – Independence Day of Mongolia</li>
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
            <h3 className="pageTitle" style={{fontSize: '2rem', marginTop: '2rem'}}>Winter Season</h3>
          </div>
          <div style={{textAlign: "justify"}}>
            <p className="pageDescription">In Mongolia, winter is the coldest and longest season. In winter the temperature drops so that all rivers, lakes, streams and ponds are frozen. Many rivers freeze almost to the bottom. It's snowing across the country, but not heavy. Winter begins in early November and lasts about 110 days until March. Sometimes it snows in September and November, but the heavy snow usually occurs in early November (in December). In General compared Russia with the snow very little. Winter in Ulaanbaatar dust rather than snow. Although with climate change it is noted that in winter in Mongolia began to drop more snow. And snow is a real disaster for pastoralists (DSWD).</p>
            <p className="pageDescription">The coldest month of the year is January. In some parts of the country the temperature drops to -50 degrees. It should be noted that the cold weather in Mongolia is tolerated much better, because of dry air. For example: temperature -20 degrees in Ulaanbaatar is also transferred as -10 degrees in the Central part of Russia.</p>
            
            <div style={{marginTop: '3rem', marginBottom: '3rem', overflowX: 'auto'}}>
              <table style={{width: '100%', maxWidth: '800px', margin: '0 auto'}}>
                <thead>
                  <tr>
                    <th>December</th>
                    <th>January</th>
                    <th>February</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Max average t°: -13.7 °C (7.3 °F)</td>
                    <td>Max average t°: -15.9 °C (3.9 °F)</td>
                    <td>Max average t°: -11.4°C (11.5°F)</td>
                  </tr>
                  <tr>
                    <td>Min average t°: -23.8°C (10.8°F)</td>
                    <td>Min average t°: -26.5°C (-15.7°F)</td>
                    <td>Min average t°: -24.1°C (-11.4°F)</td>
                  </tr>
                  <tr>
                    <td>Sundial in the day: 9.1 hours</td>
                    <td>Sundial in the day: 9.5 hours</td>
                    <td>Sundial in the day: 10.8 hours</td>
                  </tr>
                  <tr>
                    <td>Rainy days: 0 days</td>
                    <td>Rainy days: 1 day</td>
                    <td>Rainy days: 0 days</td>
                  </tr>
                  <tr>
                    <td>Precipitation: 0 mm (0")</td>
                    <td>Precipitation: 0 mm (0")</td>
                    <td>Precipitation: 0 mm (0")</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{marginTop: '3rem', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
              <h4 style={{fontSize: '1.5rem', fontWeight: '400', marginBottom: '1rem', color: '#666'}}>Winter Holidays</h4>
              <ul style={{listStyle: 'disc', paddingLeft: '1.5rem', margin: 0}}>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>December, 25 – Christmas Day</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>January, 1 – New Year</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>January, 13 – Constitution Day</li>
                <li className="pageDescription" style={{marginBottom: '0.5rem', marginLeft: 0}}>February, 19 – the White month</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visit;