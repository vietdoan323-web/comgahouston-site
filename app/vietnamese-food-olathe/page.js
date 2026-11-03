import Link from 'next/link'
import Image from 'next/image'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { restaurantJsonLd } from '@/lib/restaurant-schema'

export const metadata = {
  title: 'Vietnamese Food in Olathe, KS',
  description:
    'Looking for Vietnamese food in Olathe, KS? Cơm Gà Houston is a family-owned Vietnamese restaurant at 15204 W 119th St. Signature chicken rice, pho, bánh mì, and more. Order online for pickup.',
  alternates: { canonical: 'https://www.comgahouston.com/vietnamese-food-olathe' },
}

export default function OlathePage() {
  return (
    <main className="py-20 bg-background">
      <BreadcrumbSchema name="Vietnamese Food Olathe" path="/vietnamese-food-olathe" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {' / '}
          <span>Vietnamese Food Olathe</span>
        </nav>

        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          Vietnamese Food in Olathe, KS
        </h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          If you are searching for Vietnamese food in Olathe, Cơm Gà Houston is a family-owned
          restaurant at 15204 W 119th St, just off the 119th Street corridor. We serve the dishes
          Vietnamese families cook at home: cold-poached chicken rice, slow-simmered pho, crispy
          bánh mì, and fresh herbs in almost everything.
        </p>

        <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm mb-16">
          <div className="relative h-72">
            <Image
              src="/images/com-ga-dark-white-chicken-rice.png"
              alt="Cơm Gà Dark & White – signature Vietnamese chicken rice at Cơm Gà Houston in Olathe"
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-foreground mb-6">What We Serve</h2>
          <div className="space-y-4 text-lg text-foreground/80">
            <p>
              Our namesake dish is <strong>Cơm Gà</strong>, Vietnamese chicken rice. Chicken is
              gently poached, never boiled, then sliced and served over jasmine rice cooked in
              chicken broth and finished with ginger oil. Order it with white meat ($15.95), dark
              meat ($17.95), or the classic combination of both ($16.95).
            </p>
            <p>
              If broth is what you are after, our <Link href="/pho-kansas-city" className="text-primary hover:underline">pho</Link> includes
              Phở Gà (chicken pho, $16.99) and Phở Bò (beef pho, $17.99), plus bamboo shoot soups
              like Bún Măng Gà. For something handheld, our <Link href="/banh-mi-kansas-city" className="text-primary hover:underline">bánh mì</Link> pairs
              a crispy baguette with house meats, pâté, and pickled vegetables ($7.99).
            </p>
            <p>
              Starters include Chả Giò egg rolls and Gỏi Cuốn spring rolls ($6.99), and the menu
              rounds out with vermicelli bowls, sizzling Bò Né steak, salads, Vietnamese iced
              coffee, and desserts. See the <Link href="/menu" className="text-primary hover:underline">full menu</Link> for everything.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-foreground mb-6">Hours & Ordering</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <h3 className="font-serif text-2xl text-foreground mb-4">Hours</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between"><span>Monday</span><span>11 AM – 9 PM</span></li>
                <li className="flex justify-between text-red-500/80"><span>Tuesday</span><span>CLOSED</span></li>
                <li className="flex justify-between"><span>Wednesday – Saturday</span><span>11 AM – 9 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>11 AM – 8 PM</span></li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Dine-in lunch specials run Monday and Wednesday through Saturday, 11 AM to 3
                PM, with a free drink included. We are closed Tuesdays.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <h3 className="font-serif text-2xl text-foreground mb-4">Order & Visit</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>15204 W 119th St, Olathe, KS 66062</li>
                <li>
                  <a href="tel:9132328306" className="hover:text-primary transition-colors">(913) 232-8306</a>
                </li>
                <li>Pickup orders via Toast, typically ready in about 15 minutes</li>
              </ul>
              <a
                href="https://comgahoustonolathe.toast.site/order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-white hover:bg-primary-hover transition-colors mt-4"
              >
                Order Online
              </a>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-foreground mb-6">Vietnamese Food Near Me in Olathe</h2>
          <div className="space-y-4 text-lg text-foreground/80">
            <p>
              Olathe diners looking for Vietnamese food usually want one of three things: a quick
              pho lunch, a family dinner with dishes to share, or catering for the office. All
              three start with the same cooking. Our broth begins before sunrise, our chicken is
              poached the traditional way, and our herbs are fresh every day.
            </p>
            <p>
              We are easy to reach from anywhere in the Kansas City metro. If you are coming from
              Overland Park, we are just west of US-169 — see our{' '}
              <Link href="/vietnamese-food-overland-park" className="text-primary hover:underline">guide for Overland Park visitors</Link>.
              If you want to understand what makes our signature dish special before you order,
              read about <Link href="/com-ga-kansas-city" className="text-primary hover:underline">cơm gà, Vietnamese chicken rice</Link>.
            </p>
            <p>
              Whether you grew up eating Vietnamese food or you are trying it for the first time,
              our staff is happy to walk you through the menu and help you find something you
              will love.
            </p>
          </div>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-3xl text-foreground mb-4">Visit Us in Olathe</h2>
          <p className="text-muted-foreground mb-6">15204 W 119th St, Olathe, KS 66062</p>
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
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary px-8 text-base font-semibold text-primary hover:bg-primary/5 transition-colors"
            >
              Contact & Directions
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
