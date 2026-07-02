import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'How to Eat Pho Like You Grew Up With It',
  description:
    'Herbs first or last? Hoisin in the bowl or on the side? A friendly guide to eating Vietnamese pho the traditional way, from the family at Cơm Gà Houston in Olathe, KS.',
  alternates: { canonical: 'https://www.comgahouston.com/blog/how-to-eat-pho' },
  openGraph: {
    title: 'How to Eat Pho Like You Grew Up With It',
    description: 'A friendly guide to eating Vietnamese pho the traditional way.',
    type: 'article',
    images: [{ url: '/images/pho-bo.jpg' }],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Eat Pho Like You Grew Up With It',
  description: 'A friendly guide to eating Vietnamese pho the traditional way.',
  image: 'https://www.comgahouston.com/images/pho-bo.jpg',
  datePublished: '2026-05-05',
  dateModified: '2026-05-30',
  author: { '@type': 'Organization', name: 'Cơm Gà Houston' },
  publisher: {
    '@type': 'Organization',
    name: 'Cơm Gà Houston',
    logo: { '@type': 'ImageObject', url: 'https://www.comgahouston.com/images/logo.png' },
  },
  mainEntityOfPage: 'https://www.comgahouston.com/blog/how-to-eat-pho',
}

export default function Post() {
  return (
    <main className="py-20 bg-background">
      <BreadcrumbSchema
        trail={[
          { name: 'Blog', path: '/blog' },
          { name: 'How to Eat Pho', path: '/blog/how-to-eat-pho' },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article className="container mx-auto px-4 max-w-3xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {' / '}
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          {' / '}
          <span>How to Eat Pho</span>
        </nav>

        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-3">Guides · May 5, 2026</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          How to Eat Pho Like You Grew Up With It
        </h1>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          There is no single right way to eat pho, but there is a way that gets you the most flavor out of every bowl. Consider this the advice we would give a friend sitting down to their first bowl of Phở Bò.
        </p>

        <img
          src="/images/pho-bo.jpg"
          alt="Phở Bò, beef pho with ribeye and meatballs at Cơm Gà Houston"
          width={720}
          height={405}
          className="w-full rounded-2xl shadow-md mb-12 object-cover"
          loading="eager"
        />

        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <h2 className="font-serif text-3xl text-foreground pt-4">Step one: taste the broth first</h2>
          <p>
            Before you add anything, take a spoonful of plain broth. A proper pho broth simmers for eight hours or more with charred onion, ginger, and whole spices like star anise and cinnamon. That first sip tells you everything about the kitchen. Ours starts before dawn, and we think it shows.
          </p>

          <h2 className="font-serif text-3xl text-foreground pt-4">Step two: herbs go in hot</h2>
          <p>
            Your bowl arrives with a side plate of bean sprouts, Thai basil, lime, and jalapeño. Tear the basil leaves and drop them in while the broth is still steaming so the heat releases their aroma. Add sprouts a handful at a time to keep their crunch. Squeeze the lime over everything.
          </p>

          <h2 className="font-serif text-3xl text-foreground pt-4">Step three: sauces on the side, not in the bowl</h2>
          <p>
            Here is the one place we will gently take a stand. Squirting hoisin and sriracha straight into the broth covers up those eight hours of simmering. Instead, pour a little of each into the small dish on your table and dip your beef as you go. You get the sweet-spicy hit and the clean broth.
          </p>

          <h2 className="font-serif text-3xl text-foreground pt-4">Step four: chopsticks and spoon work together</h2>
          <p>
            Chopsticks in your dominant hand for noodles and beef, spoon in the other for broth. The rhythm is noodles, broth, noodles, broth. Slurping is not rude here. It cools the noodles and is the universal signal of a good bowl.
          </p>

          <h2 className="font-serif text-3xl text-foreground pt-4">Choosing your bowl</h2>
          <p>
            Our <Link href="/pho-kansas-city" className="text-primary hover:underline">Phở Bò</Link> ($17.99) comes with thin-sliced ribeye and beef meatballs in beef-bone broth. Prefer poultry? <strong>Phở Gà</strong> ($16.99) uses our signature poached chicken and a lighter, crystal-clear chicken broth. Both come with the full herb plate.
          </p>
          <p>
            Still deciding? Browse the <Link href="/menu" className="text-primary hover:underline">full menu</Link>, or just come hungry and ask. We love converting first-timers.
          </p>
        </div>

        <div className="mt-14 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl text-foreground mb-3">Ready for a bowl?</h2>
          <p className="text-muted-foreground mb-6">15204 W 119th St, Olathe, KS 66062</p>
          <a
            href="https://comgahoustonolathe.toast.site/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover transition-colors"
          >
            Order Pho for Pickup
          </a>
        </div>
      </article>
    </main>
  )
}
