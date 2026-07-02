import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Vietnamese Catering Kansas City | Cơm Gà Houston',
  description:
    'Authentic Vietnamese catering in Kansas City, KS. Office lunches, family events, and private parties. Fresh Cơm Gà, Pho, Bánh Mì, and more. Contact us to plan your event.',
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
