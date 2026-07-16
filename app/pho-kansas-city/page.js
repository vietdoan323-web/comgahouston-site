import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Best Pho in Kansas City',
  description:
    'Authentic Vietnamese pho in Olathe, KS. Our Phở Gà (chicken pho) and Phở Bò (beef pho) are made with broths simmered for hours. Order online or visit us.',
  alternates: { canonical: 'https://www.comgahouston.com/pho-kansas-city' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Cơm Gà Houston',
  servesCuisine: ['Vietnamese'],
  hasMenuItem: [
    {
      '@type': 'MenuItem',
      name: 'Phở Gà',
      description: 'Clear aromatic chicken broth, rice noodles, fresh herbs.',
      offers: { '@type': 'Offer', price: '16.99', priceCurrency: 'USD' },
    },
    {
      '@type': 'MenuItem',
      name: 'Phở Bò',
      description: 'Beef broth, rice noodles, ribeye, and meatballs.',
      offers: { '@type': 'Offer', price: '17.99', priceCurrency: 'USD' },
    },
  ],
}

export default function PhoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="py-20 bg-background">
        <BreadcrumbSchema name="Pho Kansas City" path="/pho-kansas-city" />
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            {' / '}
            <span>Pho Kansas City</span>
          </nav>

          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Authentic Vietnamese Pho in Kansas City
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Craving a soul-warming bowl of pho near Kansas City? At Cơm Gà Houston in Olathe, KS, we simmer our broths for hours using traditional Vietnamese recipes, no shortcuts, just real flavor.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
              <img
                src="/images/pho-ga-chicken-pho.png"
                alt="Phở Gà – Chicken Pho at Cơm Gà Houston"
                className="w-full h-56 object-cover"
                loading="eager"
              />
              <div className="p-6">
                <h2 className="font-serif text-2xl text-foreground mb-2">Phở Gà – Chicken Pho</h2>
                <p className="text-primary font-semibold mb-3">$16.99</p>
                <p className="text-muted-foreground">
                  Our chicken pho features a crystal-clear broth built on free-range chicken bones, charred ginger, and star anise. Served over silky rice noodles with bean sprouts, fresh basil, lime, and jalapeño on the side.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm">
              <img
                src="/images/pho-bo.jpg"
                alt="Phở Bò – Beef Pho at Cơm Gà Houston"
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h2 className="font-serif text-2xl text-foreground mb-2">Phở Bò – Beef Pho</h2>
                <p className="text-primary font-semibold mb-3">$17.99</p>
                <p className="text-muted-foreground">
                  A rich, deeply aromatic beef broth slow-cooked with beef bones, cinnamon, cloves, and roasted onion. Topped with thinly sliced ribeye and beef meatballs. The ultimate Kansas City pho experience.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-16">
            <h2 className="font-serif text-3xl text-foreground mb-6">What Makes Our Pho Different?</h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                Pho is more than a soup, it's a ritual. At Cơm Gà Houston, we start every batch of broth at the crack of dawn, letting it simmer low and slow for a minimum of 8 hours. The result is a broth that's clear, complex, and deeply nourishing.
              </p>
              <p>
                We use traditional Vietnamese spices: star anise, cloves, cinnamon, and cardamom, toasted whole and added at the right moment. Our noodles are ordered fresh and cooked to order so they never sit soggy in the bowl.
              </p>
              <p>
                Every bowl is served with a full plate of accompaniments: bean sprouts, Thai basil, lime wedges, and fresh jalapeños. Add hoisin or sriracha to your taste.
              </p>
            </div>
          </section>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="font-serif text-3xl text-foreground mb-4">Order Pho for Pickup Today</h2>
            <p className="text-muted-foreground mb-6">15204 W 119th St, Olathe, KS 66062 · (913) 232-8306</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://comgahoustonolathe.toast.site/order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover transition-colors"
              >
                Order Online
              </a>
              <Link
                href="/menu"
                className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary px-8 text-base font-semibold text-primary hover:bg-primary/5 transition-colors"
              >
                View Full Menu
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
