import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Blog | Vietnamese Food Stories – Cơm Gà Houston',
  description:
    'Stories, recipes, and Vietnamese food culture from the Cơm Gà Houston kitchen in Olathe, KS. Learn about pho, banh mi, com ga, and more.',
  alternates: { canonical: 'https://www.comgahouston.com/blog' },
}

const posts = [
  {
    slug: 'what-is-com-ga',
    title: 'What Is Cơm Gà? The Story Behind Vietnamese Chicken Rice',
    excerpt:
      'From the streets of Hội An to our kitchen in Olathe: how a humble dish of poached chicken and golden rice became our namesake.',
    date: 'April 21, 2026',
    category: 'Food Culture',
    img: '/images/com-ga-dark-white-chicken-rice.png',
  },
  {
    slug: 'how-to-eat-pho',
    title: 'How to Eat Pho Like You Grew Up With It',
    excerpt:
      'Herbs first or last? Hoisin in the bowl or on the side? A friendly guide to getting the most out of every bowl.',
    date: 'May 5, 2026',
    category: 'Guides',
    img: '/images/pho-bo.jpg',
  },
  {
    slug: 'vietnamese-coffee-guide',
    title: 'Cà Phê Sữa Đá: Why Vietnamese Coffee Hits Different',
    excerpt:
      'Slow-drip phin filters, dark roast, and sweetened condensed milk. The afternoon ritual we brought with us to Kansas.',
    date: 'May 19, 2026',
    category: 'Drinks',
    img: '/images/ca-phe-sua-da-iced-coffee.png',
  },
]

export default function BlogPage() {
  return (
    <main className="py-20 bg-background">
      <BreadcrumbSchema name="Blog" path="/blog" />
      <div className="container mx-auto px-4 max-w-5xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {' / '}
          <span>Blog</span>
        </nav>

        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">From Our Kitchen</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stories, guides, and Vietnamese food culture from the family behind Cơm Gà Houston.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(({ slug, title, excerpt, date, category, img }) => (
            <Link key={slug} href={`/blog/${slug}`} className="bg-card rounded-xl overflow-hidden shadow-md border border-border group hover:shadow-lg transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-dark/80 text-gold text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{date}</p>
                <h2 className="font-serif text-xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">{title}</h2>
                <p className="text-muted-foreground text-sm flex-grow">{excerpt}</p>
                <p className="text-primary text-sm font-semibold mt-4">Read the story →</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center bg-primary/5 border border-primary/20 rounded-2xl p-8">
          <h2 className="font-serif text-2xl text-foreground mb-3">More stories are on the way.</h2>
          <p className="text-muted-foreground mb-6">
            The best way to experience our food is still in person.
          </p>
          <a
            href="https://comgahoustonolathe.toast.site/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover transition-colors"
          >
            Order Online
          </a>
        </div>
      </div>
    </main>
  )
}
