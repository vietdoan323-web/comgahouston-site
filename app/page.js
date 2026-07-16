import HomeContent from '@/components/HomeContent'
import { getAllPosts } from '@/lib/blog'
import { getGoogleRating } from '@/lib/google-rating'

export const metadata = {
  title: 'Best Vietnamese Food in Kansas City | Cơm Gà Houston – Olathe, KS',
  description:
    'Looking for the best Vietnamese food in KC? Cơm Gà Houston serves signature chicken rice, fresh pho, and banh mi from family recipes. Top rated on Google. Order online for pickup.',
  alternates: {
    canonical: 'https://www.comgahouston.com/',
  },
  openGraph: {
    title: 'Best Vietnamese Food in Kansas City | Cơm Gà Houston',
    description:
      'Family-owned Vietnamese restaurant in Olathe, KS serving some of the best Vietnamese food in KC. Signature Cơm Gà, fresh Pho, Bánh Mì, and more.',
    url: 'https://www.comgahouston.com/',
    images: [
      {
        url: '/images/hero-vietnamese-food-spread.jpg',
        width: 1365,
        height: 768,
        alt: 'A spread of Cơm Gà Houston dishes: phở, bánh mì, cơm gà, and more',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Cơm Gà Houston',
  description:
    'Family-owned restaurant serving some of the best Vietnamese food in Kansas City: signature chicken rice, pho, banh mi, and traditional family recipes in Olathe, KS.',
  url: 'https://www.comgahouston.com',
  telephone: '+19132328306',
  image:
    'https://www.comgahouston.com/images/hero-vietnamese-food-spread.jpg',
  logo:
    'https://www.comgahouston.com/images/logo.png',
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
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday',    opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Wednesday', opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday',  opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday',    opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday',  opens: '11:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday',    opens: '11:00', closes: '20:00' },
  ],
  servesCuisine: ['Vietnamese'],
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card',
  hasMenu: 'https://www.comgahouston.com/menu',
  acceptsReservations: 'false',
  sameAs: [
    'https://www.facebook.com/ComGaHoustonKansas/',
    'https://www.instagram.com/comgahouston_ks/',
    'https://www.tiktok.com/@comgakansas',
  ],
  areaServed: [
    { '@type': 'City', name: 'Olathe', '@id': 'https://www.wikidata.org/wiki/Q485196' },
    { '@type': 'City', name: 'Overland Park', '@id': 'https://www.wikidata.org/wiki/Q738142' },
    { '@type': 'Place', name: 'Kansas City metro' },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Cơm Gà Houston located and what are your hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cơm Gà Houston is located at 15204 W 119th St, Olathe, KS 66062. We are open Mon, Wed-Sat 11AM-9PM and Sunday 11AM-8PM. Closed Tuesdays.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I order online for carry-out?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Order directly through our website via Toast. We offer fast carry-out pickup. During peak hours carry-out may take slightly longer as we prepare each dish fresh.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I customize my order at Cơm Gà Houston?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Most menu items can be customized: spice level, protein choices, and side selections. Add special requests in the notes section when ordering online.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your signature dish?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our signature dish is Cơm Gà, cold-poached chicken served over fragrant jasmine rice infused with ginger oil, with fresh herbs and our house dipping sauce.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer vegetarian or dietary-friendly options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We do our best to accommodate dietary preferences. Let us know any dietary restrictions when you visit or order and our staff will guide you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I find the best Vietnamese food in Kansas City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Kansas City locals consistently rate Cơm Gà Houston among the best Vietnamese food in KC, top rated on Google. Our signature cơm gà chicken rice, slow-simmered pho, and fresh bánh mì are made daily from family recipes at 15204 W 119th St in Olathe.',
      },
    },
  ],
}

export default async function Page() {
  const googleRating = await getGoogleRating()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeContent googleRating={googleRating} />
    </>
  )
}
