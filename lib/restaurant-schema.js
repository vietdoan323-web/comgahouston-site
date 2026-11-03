const BASE = 'https://www.comgahouston.com'

/** Stable Google place URL built from the place CID in our map embed. */
export const GOOGLE_PLACE_URL = 'https://www.google.com/maps?cid=14295853395954048914'

export const RESTAURANT_ID = `${BASE}/#restaurant`

/** Canonical Restaurant entity. Every page should reference this same @id. */
export const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': RESTAURANT_ID,
  name: 'Cơm Gà Houston',
  alternateName: ['Com Ga Houston', 'Com Ga Houston Olathe'],
  description:
    'Family-owned Vietnamese restaurant in Olathe, KS serving signature cơm gà chicken rice, pho, bánh mì, and traditional family recipes to the Kansas City metro.',
  url: BASE,
  telephone: '+19132328306',
  image: `${BASE}/images/hero-vietnamese-food-spread.jpg`,
  logo: `${BASE}/images/logo.png`,
  hasMap: GOOGLE_PLACE_URL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '15204 W 119th St',
    addressLocality: 'Olathe',
    addressRegion: 'KS',
    postalCode: '66062',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.9106,
    longitude: -94.7674,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '11:00', closes: '20:00' },
  ],
  servesCuisine: ['Vietnamese'],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card',
  hasMenu: `${BASE}/menu`,
  acceptsReservations: false,
  sameAs: [
    GOOGLE_PLACE_URL,
    'https://www.yelp.com/biz/com-ga-houston-olathe',
    'https://comgahoustonolathe.toast.site/',
    'https://www.facebook.com/ComGaHoustonKansas/',
    'https://www.instagram.com/comgahouston_ks/',
    'https://www.tiktok.com/@comgakansas',
  ],
  areaServed: [
    { '@type': 'City', name: 'Olathe', '@id': 'https://www.wikidata.org/wiki/Q485196' },
    { '@type': 'City', name: 'Overland Park', '@id': 'https://www.wikidata.org/wiki/Q738142' },
    { '@type': 'Place', name: 'Kansas City metro' },
  ],
  potentialAction: {
    '@type': 'OrderAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://comgahoustonolathe.toast.site/order',
      inLanguage: 'en-US',
      actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
    },
    deliveryMethod: 'http://purl.org/goodrelations/v1#DeliveryModePickUp',
  },
}

/** WebSite entity for the homepage. */
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE}/#website`,
  url: BASE,
  name: 'Cơm Gà Houston',
  inLanguage: 'en-US',
  publisher: { '@id': RESTAURANT_ID },
}

/** Reference to the canonical Restaurant entity, for sub-pages. */
export function restaurantRef(overrides = {}) {
  return { ...restaurantJsonLd, ...overrides }
}
