import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Bánh Mì Kansas City | Authentic Vietnamese Sandwiches',
  description:
    'The best Bánh Mì in Kansas City. Crispy French baguette, house-made pâté, pickled daikon, and your choice of protein. Order online for fast pickup in Olathe, KS.',
  alternates: { canonical: 'https://www.comgahouston.com/banh-mi-kansas-city' },
}

export default function BanhMiPage() {
  return (
    <main className="py-20 bg-background">
      <BreadcrumbSchema name="Bánh Mì Kansas City" path="/banh-mi-kansas-city" />
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {' / '}
          <span>Bánh Mì Kansas City</span>
        </nav>

        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          Authentic Bánh Mì in Kansas City
        </h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          A perfect Bánh Mì is an art form: the right baguette and the right balance of savory meats, tangy pickled vegetables, and fresh herbs all in one bite. Cơm Gà Houston has been perfecting it for years.
        </p>

        <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm mb-12">
          <div className="relative h-96 overflow-hidden">
            <img
              src="/images/banh-mi-vietnamese-sandwich.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-50"
              loading="eager"
            />
            <img
              src="/images/banh-mi-vietnamese-sandwich.jpg"
              alt="Bánh Mì – Vietnamese Sandwich at Cơm Gà Houston"
              className="relative w-full h-full object-contain"
              loading="eager"
            />
          </div>
          <div className="p-8">
            <h2 className="font-serif text-3xl text-foreground mb-2">Combo Bánh Mì</h2>
            <p className="text-primary font-semibold text-lg mb-4">From $7.99</p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A toasted crispy baguette loaded with house-marinated meats, creamy house-made pâté, pickled daikon and carrots, cucumber slices, fresh cilantro, and sliced jalapeños. Finished with a drizzle of Maggi seasoning.
            </p>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-foreground mb-6">The Anatomy of a Perfect Bánh Mì</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'The Baguette', desc: 'Light, airy French-Vietnamese bread with a shattering crust, baked fresh. Not too dense, not too soft.' },
              { title: 'The Pâté', desc: 'Rich, silky house-made liver pâté spread generously inside each sandwich.' },
              { title: 'The Pickles', desc: 'Daikon and carrot pickled in house brine, bright, tangy, and crunchy.' },
              { title: 'The Herbs', desc: 'Fresh cilantro and sliced jalapeños finish every sandwich with heat and fragrance.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-surface rounded-xl p-6 border border-border">
                <h3 className="font-serif text-xl text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-lg text-foreground/80 mb-12">
            <Link href="/vietnamese-food-overland-park" className="text-primary hover:underline">Coming from Overland Park?</Link> We are about 10 minutes away on 119th Street.
          </p>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-3xl text-foreground mb-4">Order Your Bánh Mì Today</h2>
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
            <Link href="/menu" className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary px-8 text-base font-semibold text-primary hover:bg-primary/5 transition-colors">
              View Full Menu
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
