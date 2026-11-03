import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Vietnamese Catering Kansas City',
  description:
    'Authentic Vietnamese catering in Olathe, KS, serving the Kansas City metro. Office lunches, family events, and private parties. Fresh Cơm Gà, Pho, Bánh Mì, and more.',
  alternates: { canonical: 'https://www.comgahouston.com/catering' },
}

export default function CateringPage() {
  return (
    <main className="py-20 bg-background">
      <BreadcrumbSchema name="Catering" path="/catering" />
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {' / '}
          <span>Catering</span>
        </nav>

        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          Vietnamese Catering in Kansas City
        </h1>
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
          Bring the authentic flavors of Cơm Gà Houston to your next event. Whether it's an office lunch, a family celebration, or a private party, we'll bring the food, you bring the people.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Corporate Lunches', desc: 'Impress your team with fresh Vietnamese fare. We accommodate groups of all sizes with easy pre-order options.' },
            { title: 'Family Celebrations', desc: 'Birthdays, graduations, reunions, let us handle the food so you can focus on the moments that matter.' },
            { title: 'Private Events', desc: 'From intimate gatherings to larger parties, our catering packages are flexible and customizable.' },
          ].map(({ title, desc }) => (
            <div key={title} className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <h2 className="font-serif text-xl text-foreground mb-3">{title}</h2>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <section className="mb-16 bg-surface rounded-2xl p-8 border border-border">
          <h2 className="font-serif text-3xl text-foreground mb-6">Popular Catering Items</h2>
          <ul className="grid md:grid-cols-2 gap-3 text-foreground/80">
            {[
              'Cơm Gà (Chicken Rice) Trays', 'Phở Gà & Phở Bò Stations', 'Bánh Mì Sandwich Platters',
              'Chả Giò (Egg Roll) Trays', 'Gỏi Cuốn (Spring Roll) Platters', 'Gỏi Gà (Chicken Salad)',
              'Bún Thịt Nướng (Grilled Pork Vermicelli)', 'Bánh Xèo (Crispy Crepe)', 'Vietnamese Coffee Station',
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-foreground mb-6">How Our Catering Works</h2>
          <div className="space-y-4 text-lg text-foreground/80">
            <p>
              <strong>1. Call us with the details.</strong> The more you can tell us — headcount,
              date, dine-in or pickup, dishes you already love — the faster we can put together a
              quote. You can reach us at <a href="tel:9132328306" className="text-primary hover:underline">(913) 232-8306</a> during
              regular hours: Monday and Wednesday through Saturday 11 AM to 9 PM, and Sunday 11 AM to 8 PM.
            </p>
            <p>
              <strong>2. We build the menu around your group.</strong> Cơm Gà trays, pho packaged so
              the broth travels well, bánh mì platters assembled fresh — we scale our regular menu
              to your headcount and budget. For reference, our everyday menu prices run from $6.99
              starters to $45.99 for a whole Houston Special chicken, so there is a comfortable
              range to work within.
            </p>
            <p>
              <strong>3. We prepare everything fresh.</strong> Our broth starts before sunrise and
              nothing is pre-made and reheated. That is the same promise we make to every table
              in the restaurant, and it does not change because the food is going to an office
              or a backyard instead.
            </p>
            <p>
              <strong>4. Pickup at our Olathe location.</strong> Place your order ahead of time and
              we will have it ready at 15204 W 119th St in Olathe. If you need delivery to the
              venue, mention it when you call and we will tell you what is possible.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="font-serif text-3xl text-foreground mb-6">Catering FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: 'How much notice do you need for catering orders?',
                a: 'Call us as early as you can, especially for weekend events. For smaller orders, ask us what is possible on short notice — we prepare food fresh daily and will do our best to accommodate your timeline.',
              },
              {
                q: 'Do you cater vegetarian or dietary-restricted groups?',
                a: 'Yes. Several menu items can be adapted, and our staff can walk you through options for vegetarians or for guests with dietary restrictions. Tell us your needs when you call and we will build the menu accordingly.',
              },
              {
                q: 'Can you handle corporate lunches in the Kansas City metro?',
                a: 'We regularly work with offices in Olathe, Overland Park, and the wider Kansas City metro. Pre-orders make pickup fast, and larger trays are easy to share in a conference room.',
              },
              {
                q: 'Do you offer drinks and desserts for events?',
                a: 'Yes. Vietnamese coffee, pandan tea, soy milk, coconut jelly, and avocado coconut ice cream are all available, and a Vietnamese coffee station is a popular add-on for morning events.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-card p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-serif text-xl font-bold mb-2">{q}</h3>
                <p className="text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-3xl text-foreground mb-4">Get a Catering Quote</h2>
          <p className="text-muted-foreground mb-6">
            Call us or stop by to discuss your event. We'll work with you to create a menu that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9132328306" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover transition-colors">
              Call (913) 232-8306
            </a>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary px-8 text-base font-semibold text-primary hover:bg-primary/5 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
