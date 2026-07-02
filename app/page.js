import HomeContent from '@/components/HomeContent'

export const metadata = {
  title: 'Cơm Gà Houston | Authentic Vietnamese Cuisine – Kansas City, KS',
  description:
    'Authentic Vietnamese restaurant in Kansas City KS. Experience our signature chicken rice, fresh pho, and traditional family recipes. Order online for pickup.',
  alternates: {
    canonical: 'https://www.comgahouston.com/',
  },
  openGraph: {
    title: 'Cơm Gà Houston | Authentic Vietnamese Cuisine – Kansas City, KS',
    description:
      'Family-owned Vietnamese restaurant in Olathe, KS. Signature Cơm Gà, fresh Pho, Bánh Mì, and more.',
    url: 'https://www.comgahouston.com/',
    images: [
      {
        url: '/images/hero-vietnamese-chicken-rice.png',
        width: 1200,
        height: 630,
        alt: 'Cơm Gà Houston – Authentic Vietnamese Cuisine',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Cơm Gà Houston',
  description:
    'Authentic Vietnamese restaurant in Olathe, KS serving signature chicken rice, pho, banh mi, and traditional family recipes.',
  url: 'https://www.comgahouston.com',
  telephone: '+19132328306',
  image:
    'https://www.comgahouston.com/images/hero-vietnamese-chicken-rice.png',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    bestRating: '5',
    ratingCount: '150',
  },
  sameAs: [
    'https://www.facebook.com/ComGaHoustonKansas/',
    'https://www.instagram.com/comgahouston_ks/',
    'https://www.tiktok.com/@comgakansas',
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
  ],
}

export default function Page() {
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
      <HomeContent />
    </>
  )
}
