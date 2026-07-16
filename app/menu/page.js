import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Full Menu | Vietnamese Restaurant in Olathe, KS',
  description:
    'Full menu for Cơm Gà Houston in Olathe, KS. Chicken rice, pho, banh mi, egg rolls, beef dishes, Vietnamese coffee, and desserts. Order online via Toast.',
  alternates: { canonical: 'https://www.comgahouston.com/menu' },
}

const sections = [
  {
    title: '🍚 Chicken Rice (Cơm Gà)',
    items: [
      { name: 'Cơm Gà Dark & White', desc: 'Cold-poached chicken, jasmine rice, ginger oil, herbs, house sauce.', price: '$16.95' },
      { name: 'Cơm Gà White Chicken', desc: 'Tender white meat, cold-poached, house sauce.', price: '$15.95' },
      { name: 'Cơm Gà Dark Chicken', desc: 'Flavorful dark meat, ginger oil, jasmine rice.', price: '$17.95' },
      { name: 'Houston Special ½ Gà', desc: 'Half Houston-style chicken with rice, herbs, house sauce.', price: '$24.99' },
      { name: 'Houston Special Whole', desc: 'Whole chicken for sharing with rice and accompaniments.', price: '$45.99' },
    ],
  },
  {
    title: '🍜 Soups & Noodles',
    items: [
      { name: 'Phở Gà', desc: 'Aromatic chicken broth, rice noodles, fresh herbs.', price: '$16.99' },
      { name: 'Phở Bò', desc: 'Beef broth, rice noodles, ribeye, meatballs.', price: '$17.99' },
      { name: 'Bún Măng Gà', desc: 'Chicken broth with bamboo shoots and vermicelli.', price: '$15.99' },
      { name: 'Bún Măng Vịt', desc: 'Duck simmered with bamboo shoots, fragrant broth.', price: '$17.95' },
      { name: 'Bánh Canh Gà', desc: 'Thick udon noodles in comforting chicken broth.', price: '$15.99' },
      { name: 'Cà Ri Gà', desc: 'Vietnamese chicken curry with rice or baguette.', price: '$15.99' },
    ],
  },
  {
    title: '🥢 Starters & Salads',
    items: [
      { name: 'Chả Giò (4)', desc: 'Crispy egg rolls, pork, shrimp, veggies. Herbs & dipping sauce.', price: '$6.99' },
      { name: 'Gỏi Cuốn (2)', desc: 'Fresh spring rolls, pork, shrimp, vermicelli, rice paper.', price: '$6.99' },
      { name: 'Combo Bánh Mì', desc: 'Crispy baguette, meats, pâté, pickled daikon, jalapeños.', price: '$7.99' },
      { name: 'Bánh Xèo', desc: '16" coconut milk crepe, pork, shrimp, squid, veggies.', price: '$24.99' },
      { name: 'Gỏi Gà (Small)', desc: 'Chicken cabbage salad, peanuts, fried shallots, vinaigrette.', price: '$15.95' },
      { name: 'Gỏi Gà (Large)', desc: 'Chicken cabbage salad, peanuts, fried shallots, vinaigrette.', price: '$21.95' },
      { name: 'Bún Thịt Nướng Chả Giò', desc: 'Grilled pork, egg rolls, vermicelli, herbs, peanuts.', price: '$15.95' },
    ],
  },
  {
    title: '🥩 Beef & Steak',
    items: [
      { name: 'Bò Né', desc: '6oz ribeye, sizzling skillet, egg, pâté, baguette.', price: '$21.99' },
      { name: 'Hủ Tiếu Bò Kho', desc: 'Slow-simmered beef stew with rice noodles.', price: '$16.99' },
      { name: 'Bánh Mì Bò Kho', desc: 'Beef stew with crispy baguette.', price: '$15.99' },
    ],
  },
  {
    title: '🧋 Drinks & Desserts',
    items: [
      { name: 'Cà Phê Sữa Đá', desc: 'Vietnamese drip coffee with condensed milk, iced.', price: '$5.99' },
      { name: 'Cà Phê Đen', desc: 'Dark Vietnamese drip coffee, iced.', price: '$4.99' },
      { name: 'Trà Lá Dứa', desc: 'Pandan leaf tea with boba jelly.', price: '$5.25' },
      { name: 'Sữa Đậu Nành', desc: 'Lightly sweetened Vietnamese soy milk, iced or hot.', price: '$4.99' },
      { name: 'Thạch Dừa', desc: 'Light, refreshing coconut jelly dessert.', price: '$6.99' },
      { name: 'Kem Bơ', desc: 'Creamy avocado and coconut ice cream.', price: '$5.50' },
    ],
  },
]

const menuJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  name: 'Cơm Gà Houston Menu',
  inLanguage: 'en',
  hasMenuSection: sections.map(({ title, items }) => ({
    '@type': 'MenuSection',
    name: title.replace(/^\S+\s/, ''),
    hasMenuItem: items.map(({ name, desc, price }) => ({
      '@type': 'MenuItem',
      name,
      description: desc,
      offers: {
        '@type': 'Offer',
        price: price.replace('$', ''),
        priceCurrency: 'USD',
      },
    })),
  })),
}

export default function MenuPage() {
  return (
    <main className="py-20 bg-background">
      <BreadcrumbSchema name="Menu" path="/menu" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {' / '}
          <span>Menu</span>
        </nav>

        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our Full Menu</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Authentic Vietnamese dishes prepared fresh daily. Order online for pickup or dine in.
          </p>
        </div>

        <div className="space-y-16">
          {sections.map(({ title, items }) => (
            <section key={title}>
              <h2 className="font-serif text-3xl text-foreground mb-6 pb-3 border-b border-border">{title}</h2>
              <div className="space-y-4">
                {items.map(({ name, desc, price }) => (
                  <div key={name} className="flex justify-between items-start gap-4 py-4 border-b border-border/50 last:border-0">
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-1">{name}</h3>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                    <span className="font-serif text-xl text-gold shrink-0">{price}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/5 border border-primary/20 rounded-2xl p-8">
          <h2 className="font-serif text-3xl text-foreground mb-4">Ready to Order?</h2>
          <p className="text-muted-foreground mb-6">Dine-in lunch specials Mon–Sat 11AM–3PM</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://comgahoustonolathe.toast.site/order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover transition-colors"
            >
              Order Online for Pickup
            </a>
            <a href="tel:9132328306" className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary px-8 text-base font-semibold text-primary hover:bg-primary/5 transition-colors">
              Call (913) 232-8306
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
