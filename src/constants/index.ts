import exp from "constants";

//Navigation
export const NAV_LINKS = [
  {href: '/tours', key: 'tours', title: 'Tours'},
  {href: '/events', key: 'events', title: 'Events'},
  {href: '/information', key: 'information', title: 'Information'},
  {href: '/about', key: 'about', title: 'About'},
  {href: '/contacts', key: 'contacts', title: 'Contacts'},
];

export const links = [
  {href: '/information/visit', key: 'visit', label: 'Seasons of Mongolia'},
  {href: '/information/visa', key: 'visa', label: 'Visa information'},
  {href: '/information/insurance', key: 'insurance', label: 'Insurance'},
  {href: '/information/weather', key: 'weather', label: 'Weather in Mongolia'},
  {href: '/information/phone', key: 'phone', label: 'Phone connection'},
  {href: '/information/hotels', key: 'hotel', label: 'Accomodation'},
];

export const FOOTER_CONTACT_INFO = {
  title: 'Eternal Sky Tour',
  links: [
    {label: 'Address', value: 'Mongolia, Ulaanbaatar, Sukhbaatar District, 5th Khoroo, Narnii Road, 24-32, Zip code:14253'},
    {label: 'Phone', value: '+976-99902202'},
    {label: '', value: '+976-80303997'},
    {label: 'Telegram', value: '@Ankhaa8899'},
    {label: '', value: '@narangarav'},
    {label: 'E-mail', value: 'eternalskytour@gmail.com'},
    {label: '', value: 'eternalskytour@naver.com'}
  ],
};

export const FOOTER_LINKS = {
  title: 'Learn more',
  links: [
    'Seasons of Mongolia',
    'Visa information',
    'Insurance',
    'Weather in Mongolia',
    'Mobile connection',
    'Accomodation'
  ]
}

export const SOCIALS = {
  title: 'Socials',
  links: [
    '/instagram.svg', 
    '/facebook.svg', 
    '/mail.png', 
  ],
};

export const QUESTION_FORM = {
  title: 'Have a question?', value: '* Indicates required field'
};

export const images = [
  {id: 1, src: "/1.jpg", title: 'First tour'},
  {id: 2, src: "/2.jpg", title: 'Second trip'},
  {id: 3, src: "/3.jpg", title: 'Third destination'},
];
// Лучше добавить title в объекте ниже
export const TOURS_IMAGES = [
  {id: 1, href: '/tours/city', src: "/ctmcity.jpg"}, 
  {id: 2, href: '/tours/central', src: "/ctmcentral.jpg"},
  {id: 3, href: '/tours/khuvsgul1', src: "/ctmkhuvsgul1.jpg"},
]

export const TOURS_IMAGES_2 = [
  {id: 4, href: '/tours/gobi', src: "/ctmgobi.jpg"},
  {id: 5, href: '/tours/khangai', src: "/ctmkhangai.jpg"},
]

export const TOURS_LINK = [
  {id: 1, href: '/tours/city', src: "/tmcity.jpg"}, 
  {id: 2, href: '/tours/central', src: "/tmcentral.jpg"},
  {id: 3, href: '/tours/khuvsgul1', src: "/tmkhuvsgul1.jpg"},
  {id: 4, href: '/tours/gobi', src: "/tmgobi.jpg"},
]

export const INDIVIDUAL = [
  {id: 1, href: '/tours/altai', src: "/caltai.jpg"}, 
  {id: 2, href: '/tours/horse', src: "/chorse.jpg"},
  {id: 3, href: '/tours/reindeer', src: "/ctsaatan.jpg"},
]

export const INDIVIDUAL_TOURS = [
  {id: 1, href: '/tours/horse', src: "/chorse.jpg"},
  {id: 2, href: '/tours/reindeer', src: "/ctsaatan.jpg"},
]

export const EVENTS = [
  {id: 1, href: '/events/tsagaansar', src: "/tsagaan.jpg", title: 'Tsagaan Sar', description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden "},
  {id: 2, href: '/events/camel', src: "/22.jpg", title: "Camel Festival", description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden "},
  {id: 3, href: '/events/eagle', src: "/20.jpg", title: 'Eagle Festival', description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden "},
  {id: 4, href: '/events/ice', src: "/23.jpg", title: 'Ice festival', description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden "},
  {id: 5, href: '/events/naadam', src: "/21.jpg", title: 'Naadam Festival', description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden "},
]

export const OPTIONS = [
  {id: 1, src: "/15.jpg"},
  {id: 2, src: "/hyndai.jpg"}, 
  {id: 3, src: "/18.jpg"},
]

export const FESTIVALS = [
  {id: 1, href: '/events/naadam', src: "/21-c.jpg", title: 'Naadam Festival', description: "Far far"},
  {id: 2, href: '/events/camel', src: "/22-c.jpg", title: 'Camel Festival', description: "Far far"},
  {id: 3, href: '/events/eagle', src: "/20-c.jpg", title: 'Eagle Festival', description: "Far far"},
]

export const CENTRAL = "Immerse yourself in the captivating beauty of central Mongolia, where rolling hills, emerald grasslands, and meandering rivers paint a picturesque landscape. Experience the serenity of pristine nature, dotted with nomadic herder communities and their traditional gers. Central Mongolia invites you to explore its enchanting valleys, historic monasteries, and the majestic Khangai mountain range. Discover the heart of the country's cultural heritage as you witness age-old traditions against a backdrop of lush meadows. A journey through central Mongolia promises an awe-inspiring encounter with the charm of its landscapes and the enduring spirit of its people."

export const GOBI = 'Gobi is known for its dunes, mountains, and rare animals such as snow leopards and Bactrian camels. In the Gobi Gurvansaikhan National Park, the Khongoryn Els sand dunes are said to sing when the wind blows. The park also features the deep ice field of Yolyn Am canyon. Also, the Gobi is most known for its Dinosaur fossils that had been found at the red "Flaming Cliffs" of Bayanzag.'

export const CITY = 'Ulaanbaatar can be a little difficult to navigate through, but with the assistance of our  experienced guides,  travelers can cross-off all the activities on their to-do list, from a visit to world-class museums, watch traditional theaters, sample international cuisines and experience the nigh life until  three in the morning. Indeed, this ever-changing city may be the biggest surprise of your Mongolian adventure.'

export const KHUVSGUL1 = "Khuvsgul lake is known as an Asian Switzerland and the Asian blue pearl. It is situated 1645 m above the sea level and is 136 km long and 262 m deep. It is the second most voluminous freshwater lake in Asia, and holds almost 70% of Mongolia's fresh water and 0.4% of all the fresh water in the world."

export const KHUVSGUL2 = "Khuvsgul lake is known as an Asian Switzerland and the Asian blue pearl. It is situated 1645 m above the sea level and is 136 km long and 262 m deep. It is the second most voluminous freshwater lake in Asia, and holds almost 70% of Mongolia's fresh water and 0.4% of all the fresh water in the world."

export const GOBI_KHANGAI = 'Getting from one province to another involves days of driving over some of the roughest terrain on the planet, often across vast stretches of empty space. Sometimes, the only company you will have on the road is the herds of horses, yaks and sheep found grazing on the plains. Other times, its vultures seen circling above.'


export const CentralTour = [
  {id: 1, src: "/c00.jpg", title: 'Elsen Tasarkhai-Mini Gobi'},
  {id: 2, src: "/c01.jpg", title: 'Tsenkher Hot Spring'},
  {id: 3, src: "/c02.jpg", title: 'Kharkhorin - Ancient capital city of Mongolia'},
  {id: 4, src: "/c03.jpg", title: 'Terelj National Park'},
  {id: 5, src: "/c04.jpg", title: 'Back to Ulaanbaatar'},
]

export const GobiTour = [
  {id: 1, src: "/ws.jpg", title: 'Day 1. White Stupa'},
  {id: 2, src: "/ya.jpg", title: 'Day 2. Yolyn Am'},
  {id: 3, src: "/ke.jpg", title: 'Day 3. Khongor Sand Dunes'},
  {id: 4, src: "/bz.jpg", title: 'Day 4. Bayanzag'},
  {id: 5, src: "/bg.jpg", title: 'Day 5. Baga Gazryn Chuluu'},
  {id: 6, src: "/c03.jpg", title: 'Day 6. Terelj National Park'},
  {id: 7, src: "/c04.jpg", title: 'Day 7. Back to Ulaanbaatar'},
]

export const CityTour = [
  {id: 1, src: "/ub.jpg", title: 'Day 1. Ulaanbaatar City'},
  {id: 2, src: "/c03.jpg", title: 'Day 2. Terelj National Park'},
  {id: 3, src: "/ch.jpg", title: 'Day 3. Chinggis Khaan Statue'},
]

export const KhuvsgulAimag = [
  {id: 1, src: "/kn.jpg", title: 'Day 1 and 2. Khuvsgul Lake (Murun Airport)'},
  {id: 2, src: "/c01.jpg", title: 'Day 3. Tsenkher Hot Spring'},
]

export const KhuvsgulTour = [
  {id: 1, src: "/bl.jpg", title: 'Day 1. Bulgan Province'},
  {id: 2, src: "/kn.jpg", title: 'Day 2 and 3. Khuvsgul Lake'},
  {id: 3, src: "/zn.jpg", title: 'Day 4. Zuun Nuur'},
  {id: 4, src: "/tn.jpg", title: 'Day 5. Terkh White Lake'},
  {id: 5, src: "/c01.jpg", title: 'Day 6. Tsenkher Hot Spring'},
  {id: 6, src: "/c00.jpg", title: 'Day 7. Mini Gobi'},
  {id: 7, src: "/ub.jpg", title: 'Day 8. Back to Ulaanbaatar'},
]

export const KhangaiTour = [
  {id: 1, src: "/bg.jpg", title: 'Day 1. Baga Gazryn Chuluu', description: "Around the mountain pass and  the valley, one can see considerable number of ancient graves,  monuments besides many gushing springs. There are many sights to explore such as a rocky ravine of poplar called Sudutyn Am, Jargalant Cave, spring of eyesight."},
  {id: 2, src: "/ws.jpg", title: 'Day 2. White Stupa', description: "Tsagaan suvarga /White Stupa/, 90 degrees of vertically risen hills, consists of many colors of clay deposits. This is 65 km south west of Ulziit sum, Dundgovi province. Tsagaan suvarga is a big escarpment with 200 m of height and 400 m long."},
  {id: 3, src: "/ya.jpg", title: 'Day 3. Yolyn Am', description: "It is an excellent spot to observe vultures, wild Argali sheep and golden eagles. It was first established to conserve the regional bird population but eventually became a popular site to visit for the deep ice field that forms in winter and remains well into summer (although it had melted by the time we got there in August)."},
  {id: 4, src: "/ke.jpg", title: 'Day 4. Khongoryn Els', description: "This is one of the largest and most spectacular sand dunes in Mongolia. Rising as high as 200 m, the dunes are 7-8 km wide and about 180 km long. Climbing the dunes is breathtaking, not only for the view at the top, but the singing sound it makes when there is a wind, which you can experience during your climb."},
  {id: 5, src: "/bz.jpg", title: 'Day 5. Bayanzag-Flaming Cliffs', description: "It has a unique 5 km wide texture, approximately 8 km long. American paleontologist first found dinosaur bones and eggs in the area while he was on an expedition to trace the ancient people with his crew in 1922."},
  {id: 6, src: "/os.jpg", title: 'Day 6. Ongi Monastery', description: "It is located in Saihan-Ovoo soum of Dundgovi province. One of the biggest monasteries in Mongolia, Ongi was founded in 1660 and it is consisted of two temple complexes on the North and South banks of the river Ongi."},
  {id: 7, src: "/c02.jpg", title: 'Day 7. Kharkhorin - Ancient capital city of Mongolia', description: "The historians know much about Kharkhorin city, a destination that situated on the Silk Road. In 1206, Chinggis Khaan established the Mongolian Great Empire and built the capital city of Kharkhorin."},
  {id: 8, src: "/c01.jpg", title: 'Day 8. Tsenkher Hot Spring', description: "This spring lies south of Tsetserleg town in Arkhangai province and the pressure comes out from far deep part of the ground and its water is not mixed with soil waters because it is hot. Also, the spring is kept in high pressure under the ground and the flow rate is high as 10 liters per second."},
  {id: 9, src: "/tn.jpg", title: 'Day 9. Terkh White Lake and Khorgo Volcano', description: "Terkhiin Tsagaan Lake is an astonishingly beautiful lake with a relatively pure fresh water. Torrents of lava flowed from the Khorgo volcano blocked the north and south Terkh Rivers, forming the lake of Terkhiin Tsagaan Lake at an altitude of 2060 meters above the sea level. The lake is 16 km long, 4-10 meters wide, 20 m deep with and its deepest point is at 28 meters and over 20 kilometers in surface evaluation."},
  {id: 10, src: "/zn.jpg", title: 'Day 10. Zuun Nuur', description: "This large lake is the scenic highlight of Khuvsgul's far south. There is an excellent camping all around, or you can choose stay in the Ger to experience the nomadic day to day life."},
  {id: 11, src: "/kn.jpg", title: 'Day 11 and 12. Khuvsgul Lake', description: "​Over 46 streams pour into Khuvsgul Lake. There are 12 species of fish, 4 large islands, and the 70 percent of the lake is more than 100 m deep, and the clear water reaches 24 m. By the end of  November, water freezes completely to form 1 m thick ice. Surrounded by 3000-3200 m high mountains, Khuvsgul Lake has a legend about the lifted “sea”. There is a legend that says Khuvsgul was once an ocean."},
  {id: 12, src: "/bl.jpg", title: 'Day 13. Uran Togoo - Volcanic Mountain', description: "Uran is an extinct volcano in the western side of Uran-Togoo Natural Monument in Bulgan province, 80 km west of Bulgan town. Uran means /\"Artistic/\", Mongols gave this name because its ridge of the crater is one of many examples of circles that arise in nature, resembling a nice creation of a craftsman."},
  {id: 13, src: "/as.jpg", title: 'Day 14. Amarbayasgalant Monastery', description: "Enjoy a bumpy ride out to the Amarbayasgalant Monastery, the second most important monastery in Mongolia, located in the beautiful Iven Gol Valley."},
  {id: 14, src: "/ub.jpg", title: 'Day 15. Back to Ulaanbaatarn', description: "Ulaanbaatar is the capital of Mongolia. It's in the Tuul River valley, bordering the Bogd Khan Uul National Park."},
]

export const mobileCompanies = [
  {id: 1, src: "/gmobile.png", title: 'G-Mobile', href: "https://gmobile.mn/"},
  {id: 2, src: "/unitel.png", title: 'Unitel', href: "https://www.unitel.mn/unitel/"},
  {id: 3, src: "/skytel.png", title: 'Skytel', href: "https://www.skytel.mn/"},
  {id: 4, src: "/mobicom.png", title: 'Mobicom', href: "https://support.mobicom.mn/"},
]