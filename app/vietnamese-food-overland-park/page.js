import Link from 'next/link'
import Image from 'next/image'
import { Star, MapPin, Clock, Phone, ChevronRight } from 'lucide-react'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { getGoogleRating } from '@/lib/google-rating'

export const metadata = {
  title: 'Vietnamese Food near Overland Park, KS',
  description:
    'Craving Vietnamese food near Overland Park? Com Ga Houston is about 10 minutes away in Olathe. Signature com ga chicken rice, pho, and banh mi from family recipes. Order online for pickup.',
  alternates: {
    canonical: 'https://www.comgahouston.com/vietnamese-food-overland-park',
  },
  openGraph: {
    title: 'Vietnamese Food near Overland Park, KS | Com Ga Houston',
    description:
      'Authentic Vietnamese restaurant about 10 minutes from Overland Park. Family recipes, pho simmered from 5 AM, fresh banh mi daily. Order online for pickup in Olathe, KS.',
    url: 'https://www.comgahouston.com/vietnamese-food-overland-park',
    images: [
      {
        url: '/images/hero-vietnamese-food-spread.jpg',
        width: 1365,
        height: 768,
        alt: 'A spread of Vietnamese dishes at Com Ga Houston: pho, banh mi, com ga, and more',
      },
    ],
  },
}

const faqData = [
  {
    q: 'Is Com Ga Houston located in Overland Park?',
    a: 'No. Com Ga Houston is located at 15204 W 119th St in Olathe, KS 66062, about 10 minutes west of Overland Park along 119th Street.',
  },
  {
    q: 'How far is Com Ga Houston from Overland Park?',
    a: 'We are about 10 minutes from the 119th and Metcalf area and roughly 15 minutes from Oak Park Mall. The restaurant sits right on W 119th St, which runs straight into Overland Park.',
  },
  {
    q: 'Can I order pickup online?',
    a: 'Yes! Order directly through our website via Toast for fast carry-out pickup. Your food is prepared fresh to order.',
  },
  {
    q: 'Do you deliver to Overland Park?',
    a: 'Delivery may be available through third-party apps depending on your address. For the freshest experience, we recommend ordering pickup directly through our website.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
}

export default async function VietnameseFoodOverlandParkPage() {
  const googleRating = await getGoogleRating()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main className="pb-20 md:pb-0">
        <BreadcrumbSchema name="Vietnamese Food near Overland Park" path="/vietnamese-food-overland-park" />

        {/* HERO */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-vietnamese-food-spread.jpg"
              alt="A spread of Vietnamese dishes at Com Ga Houston"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
          </div>

          <div className="container relative z-10 mx-auto px-4 py-20 md:py-28 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <MapPin size={14} className="text-primary" />
              <span>About 10 min from Overland Park</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6 max-w-4xl [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              Authentic Vietnamese Food{' '}
              <span className="text-gold">near Overland Park</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]">
              Family recipes. Broth started before sunrise. Three generations of flavor, about 10 minutes from Overland Park and worth every mile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="https://comgahoustonolathe.toast.site/order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover transition-all hover:scale-105 shadow-lg shadow-primary/30"
              >
                Order for Pickup
              </a>
              <Link
                href="/menu"
                className="inline-flex h-14 items-center justify-center rounded-md bg-white/10 backdrop-blur-sm border border-white/20 px-8 text-base font-semibold text-white hover:bg-white/20 transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>
        </section>

        {/* WHY OVERLAND PARK DINERS MAKE THE DRIVE */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
              Why Overland Park Diners Make the Drive
            </h2>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                At Com Ga Houston, we are the only com ga specialist in the Kansas City metro. Our signature cold-poached chicken rice is prepared the traditional Vietnamese way: whole chickens gently poached, then served over fragrant jasmine rice infused with ginger oil. It is a dish you will not find done this way anywhere else nearby.
              </p>
              <p>
                Our pho broth starts simmering at 5 AM every morning. Beef bones, charred ginger, star anise, and cinnamon cook low and slow for hours before the first bowl is served. When you taste it, you will understand why regulars from Overland Park, Lenexa, and across the metro keep coming back.
              </p>
              <p>
                We also bake fresh banh mi baguettes daily, loaded with house-marinated meats, silky pate, pickled daikon, and fresh herbs. Pair one with a Vietnamese iced coffee for the full experience.
              </p>
              <p>
                Looking for a weekday lunch deal? Our dine-in lunch specials run Monday through Saturday, 11 AM to 3 PM, and include a free drink with your meal.
              </p>
            </div>
          </div>
        </section>

        {/* GETTING HERE FROM OVERLAND PARK */}
        <section className="py-20 bg-surface border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-tight">
              Getting Here from Overland Park
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 mb-10">
              <p>
                Com Ga Houston sits right on W 119th Street, the same road that runs through the heart of Overland Park. From the 119th and Metcalf area, we are about 10 minutes straight west. Coming from Oak Park Mall, the drive is roughly 15 minutes.
              </p>
              <p>
                Our address is 15204 W 119th St, Olathe, KS 66062. There is plenty of free parking right in front of the restaurant. You can also order online for pickup so your food is ready when you arrive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=15204+W+119th+St,+Olathe,+KS+66062"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-semibold text-white hover:bg-primary-hover transition-colors group"
              >
                <MapPin size={18} className="mr-2" />
                Get Directions
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:9132328306"
                className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary px-6 text-base font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                <Phone size={18} className="mr-2" />
                (913) 232-8306
              </a>
            </div>
          </div>
        </section>

        {/* MENU HIGHLIGHTS */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 leading-tight">
              What to Order
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              A few favorites from our menu that bring Overland Park diners back again and again.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <Link href="/com-ga-kansas-city" className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm group hover:shadow-lg transition-all block">
                <Image
                  src="/images/com-ga-dark-white-chicken-rice.png"
                  alt="Com Ga - Signature Chicken Rice"
                  width={720}
                  height={710}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">Com Ga</h3>
                  <p className="text-sm text-primary font-medium mb-2">Signature Chicken Rice</p>
                  <p className="text-muted-foreground">Cold-poached chicken over fragrant jasmine rice with ginger oil, fresh herbs, and house dipping sauce. The dish that gives us our name.</p>
                </div>
              </Link>

              <Link href="/pho-kansas-city" className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm group hover:shadow-lg transition-all block">
                <Image
                  src="/images/pho-ga-chicken-pho.png"
                  alt="Pho Ga - Chicken Pho"
                  width={720}
                  height={705}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">Pho</h3>
                  <p className="text-sm text-primary font-medium mb-2">Chicken or Beef Pho</p>
                  <p className="text-muted-foreground">Broth simmered for hours with traditional Vietnamese spices. Served with rice noodles, fresh herbs, and all the fixings.</p>
                </div>
              </Link>

              <Link href="/banh-mi-kansas-city" className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm group hover:shadow-lg transition-all block">
                <Image
                  src="/images/banh-mi-vietnamese-sandwich.jpg"
                  alt="Banh Mi - Vietnamese Sandwich"
                  width={540}
                  height={720}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">Banh Mi</h3>
                  <p className="text-sm text-primary font-medium mb-2">Vietnamese Sandwich</p>
                  <p className="text-muted-foreground">Crispy baguette with house-marinated meats, pate, pickled daikon, cucumber, cilantro, and jalapenos.</p>
                </div>
              </Link>

              <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
                <Image
                  src="/images/bo-ne-sizzling-steak.jpg"
                  alt="Bo Ne - Sizzling Steak and Egg"
                  width={800}
                  height={800}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-foreground mb-2">Bo Ne</h3>
                  <p className="text-sm text-primary font-medium mb-2">Sizzling Steak and Egg</p>
                  <p className="text-muted-foreground">6oz ribeye on a sizzling skillet with a fried egg, pate, and crispy baguette. A Vietnamese breakfast classic.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/menu"
                className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary px-8 text-base font-semibold text-primary hover:bg-primary/5 transition-colors group"
              >
                See the Full Menu <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* RATING AND REVIEWS */}
        <section className="py-20 bg-surface border-y border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="font-serif text-4xl text-gold">{googleRating.rating.toFixed(1)}</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => {
                    const fill = Math.min(1, Math.max(0, googleRating.rating - i))
                    if (fill >= 1) return <Star key={i} size={24} className="text-gold fill-gold" />
                    if (fill <= 0) return <Star key={i} size={24} className="text-gold" />
                    return (
                      <div key={i} className="relative flex" >
                        <Star size={24} className="text-gold" />
                        <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                          <Star size={24} className="text-gold fill-gold" />
                        </div>
                      </div>
                    )
                  })}
                </div>
                <span className="text-muted-foreground text-sm">({googleRating.count}+ reviews)</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                What Kansas City Diners Are Saying
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {[
                { quote: '"10000/10!!! Highly recommended! Com Ga, Chicken Salad, Chicken Porridge and Egg Rolls are my absolutely favorites!!"', name: 'Hannah H.' },
                { quote: '"Real Vietnamese taste. This is the authentic flavor I\'ve been looking for. Reminds me of home."', name: 'Thien N.' },
              ].map(({ quote, name }) => (
                <div key={name} className="bg-card p-8 rounded-2xl shadow-sm border border-border">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="font-serif italic text-lg text-foreground/90 mb-6">{quote}</p>
                  <div>
                    <p className="font-bold text-foreground">{name}</p>
                    <p className="text-sm text-muted-foreground">Google Review</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://www.google.com/maps/search/Com+Ga+Houston+Olathe+KS"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-transparent border border-border px-6 text-base font-medium text-foreground hover:bg-muted transition-colors group"
              >
                Read More Reviews on Google <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqData.map(({ q, a }) => (
                <div key={q} className="bg-card p-6 rounded-xl border border-border shadow-sm">
                  <h3 className="font-serif text-xl font-bold mb-2">{q}</h3>
                  <p className="text-muted-foreground">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BLOCK */}
        <section className="bg-primary py-16 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Ready to Try the Best Vietnamese Food near Overland Park?</h2>
            <p className="text-lg text-white/90 mb-4">15204 W 119th St, Olathe, KS 66062</p>
            <div className="flex items-center justify-center gap-2 text-white/80 text-sm mb-8">
              <Clock size={16} />
              <span>Mon, Wed-Sat 11AM-9PM · Sun 11AM-8PM · Closed Tuesdays</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://comgahoustonolathe.toast.site/order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-md bg-white px-8 text-base font-bold text-primary hover:bg-white/90 transition-all hover:scale-105 shadow-lg group"
              >
                Order Online <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:9132328306"
                className="inline-flex h-14 items-center justify-center rounded-md border-2 border-white px-8 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <Phone size={18} className="mr-2" />
                Call (913) 232-8306
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=15204+W+119th+St,+Olathe,+KS+66062"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-md border-2 border-white px-8 text-base font-semibold text-white hover:bg-white/10 transition-colors"
              >
                <MapPin size={18} className="mr-2" />
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
