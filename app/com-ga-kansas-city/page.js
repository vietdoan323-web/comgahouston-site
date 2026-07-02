import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Cơm Gà Kansas City | Vietnamese Chicken Rice – Cơm Gà Houston',
  description:
    'The best Cơm Gà (Vietnamese chicken rice) in Kansas City, KS. Cold-poached chicken, fragrant jasmine rice, ginger oil, and house dipping sauce. Order online in Olathe.',
  alternates: { canonical: 'https://www.comgahouston.com/com-ga-kansas-city' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FoodEstablishment',
  name: 'Cơm Gà Houston',
  hasMenuItem: [
    { '@type': 'MenuItem', name: 'Cơm Gà Dark & White', offers: { '@type': 'Offer', price: '16.95', priceCurrency: 'USD' } },
    { '@type': 'MenuItem', name: 'Cơm Gà White Chicken', offers: { '@type': 'Offer', price: '15.95', priceCurrency: 'USD' } },
    { '@type': 'MenuItem', name: 'Cơm Gà Dark Chicken', offers: { '@type': 'Offer', price: '17.95', priceCurrency: 'USD' } },
    { '@type': 'MenuItem', name: 'Houston Special Whole Chicken', offers: { '@type': 'Offer', price: '45.99', priceCurrency: 'USD' } },
  ],
}

export default function ComGaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="py-20 bg-background">
        <BreadcrumbSchema name="Cơm Gà Kansas City" path="/com-ga-kansas-city" />
        <div className="container mx-auto px-4 max-w-4xl">
          <nav className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            {' / '}
            <span>Cơm Gà Kansas City</span>
          </nav>

          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Cơm Gà: Vietnamese Chicken Rice in Kansas City
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Cơm Gà is our namesake and our pride. This beloved Vietnamese dish, cold-poached chicken over fragrant rice cooked in chicken broth, is a study in simplicity done perfectly. Find the best Cơm Gà in Kansas City right here in Olathe, KS.
          </p>

          <section className="mb-16">
            <h2 className="font-serif text-3xl text-foreground mb-8">Our Cơm Gà Varieties</h2>
            <div className="grid gap-6">
              {[
                {
                  img: '/images/com-ga-dark-white-chicken-rice.png',
                  name: 'Cơm Gà Dark & White',
                  price: '$16.95',
                  desc: 'The classic. Dark and white meat together, cold-poached to perfection, served over ginger-oil rice.',
                },
                {
                  img: '/images/com-ga-white-chicken-rice.png',
                  name: 'Cơm Gà White Chicken',
                  price: '$15.95',
                  desc: 'Tender breast and wing meat, leaner, lighter, and silky smooth.',
                },
                {
                  img: '/images/com-ga-dark-chicken-rice.png',
                  name: 'Cơm Gà Dark Chicken',
                  price: '$17.95',
                  desc: 'Thighs and drumsticks, more flavor, more fat, more satisfaction.',
                },
                {
                  img: '/images/houston-special-whole-chicken.jpg',
                  name: 'Houston Special Whole Chicken',
                  price: '$45.99',
                  desc: 'The full bird. Perfect for sharing with the whole family, served with rice and all the accompaniments.',
                },
              ].map(({ img, name, price, desc }) => (
                <div key={name} className="flex gap-6 bg-card rounded-xl border border-border p-6 shadow-sm hover:border-primary/30 transition-colors">
                  <img src={img} alt={name} className="w-28 h-28 rounded-lg object-cover shrink-0" loading="lazy" />
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-1">{name}</h3>
                    <p className="text-primary font-semibold mb-2">{price}</p>
                    <p className="text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 bg-surface rounded-2xl p-8 border border-border">
            <h2 className="font-serif text-3xl text-foreground mb-4">The Cơm Gà Method</h2>
            <p className="text-lg text-foreground/80 mb-4">
              Cơm Gà originates from Hội An, Vietnam, where it's been perfected over centuries. The chicken is poached whole in an aromatic bath of ginger, lemongrass, and scallion at a controlled temperature, never boiled, always gently coaxed. This keeps the meat incredibly juicy and the skin silky.
            </p>
            <p className="text-lg text-foreground/80">
              The rice is cooked in the poaching broth, absorbing all that deep chicken flavor, then finished with ginger oil and fried shallots. Every element on the plate has a purpose. Nothing is wasted.
            </p>
          </section>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
            <h2 className="font-serif text-3xl text-foreground mb-4">Try Kansas City's Best Cơm Gà</h2>
            <p className="text-muted-foreground mb-6">15204 W 119th St, Olathe, KS 66062</p>
            <a
              href="https://comgahoustonolathe.toast.site/order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover transition-colors"
            >
              Order Cơm Gà Online
            </a>
          </div>
        </div>
      </main>
    </>
  )
}
