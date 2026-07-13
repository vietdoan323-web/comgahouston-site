import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { getAllPosts, formatDate } from '@/lib/blog'

export const metadata = {
  title: 'Blog | Vietnamese Food Stories – Cơm Gà Houston',
  description:
    'Stories, recipes, and Vietnamese food culture from the Cơm Gà Houston kitchen in Olathe, KS. Learn about pho, banh mi, com ga, and more.',
  alternates: { canonical: 'https://www.comgahouston.com/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()

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
          {posts.map(({ slug, title, excerpt, date, category, image }) => (
            <Link key={slug} href={`/blog/${slug}`} className="bg-card rounded-xl overflow-hidden shadow-md border border-border group hover:shadow-lg transition-all flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-dark/80 text-gold text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                  {category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{formatDate(date)}</p>
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
