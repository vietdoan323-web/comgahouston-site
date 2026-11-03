import HomeContent from '@/components/HomeContent'
import { getAllPosts } from '@/lib/blog'
import { getGoogleRating } from '@/lib/google-rating'
import { restaurantJsonLd, websiteJsonLd } from '@/lib/restaurant-schema'

export const metadata = {
  title: 'Cơm Gà Houston | Vietnamese Restaurant in Olathe, KS',
  description:
    'Family-owned Vietnamese restaurant in Olathe, KS serving the Kansas City metro. Signature cơm gà chicken rice, pho, and bánh mì from family recipes. Order online for pickup.',
  alternates: {
    canonical: 'https://www.comgahouston.com/',
  },
  openGraph: {
    title: 'Cơm Gà Houston | Vietnamese Restaurant in Olathe, KS',
    description:
      'Family-owned Vietnamese restaurant in Olathe, KS serving the Kansas City metro. Signature Cơm Gà, fresh Phở, Bánh Mì, and more.',
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

const jsonLd = restaurantJsonLd

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
        text: 'Kansas City diners rate Cơm Gà Houston highly on Google. Our signature cơm gà chicken rice, slow-simmered pho, and fresh bánh mì are made daily from family recipes at 15204 W 119th St in Olathe.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <HomeContent googleRating={googleRating} />
    </>
  )
}
