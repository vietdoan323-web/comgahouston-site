import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'What Is Cơm Gà? The Story Behind Vietnamese Chicken Rice',
  description:
    'Cơm Gà is Vietnamese chicken rice: gently poached chicken over rice cooked in the poaching broth. Learn its Hội An roots and where to try it in Kansas City.',
  alternates: { canonical: 'https://www.comgahouston.com/blog/what-is-com-ga' },
  openGraph: {
    title: 'What Is Cơm Gà? The Story Behind Vietnamese Chicken Rice',
    description:
      'The history and craft behind Vietnamese chicken rice, from Hội An to Kansas City.',
    type: 'article',
    images: [{ url: '/images/com-ga-dark-white-chicken-rice.png' }],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Cơm Gà? The Story Behind Vietnamese Chicken Rice',
  description:
    'The history and craft behind Vietnamese chicken rice, from Hội An to Kansas City.',
  image: 'https://www.comgahouston.com/images/com-ga-dark-white-chicken-rice.png',
  datePublished: '2026-04-21',
  dateModified: '2026-05-30',
  author: { '@type': 'Organization', name: 'Cơm Gà Houston' },
  publisher: {
    '@type': 'Organization',
    name: 'Cơm Gà Houston',
    logo: { '@type': 'ImageObject', url: 'https://www.comgahouston.com/images/logo.png' },
  },
  mainEntityOfPage: 'https://www.comgahouston.com/blog/what-is-com-ga',
}

export default function Post() {
  return (
    <main className="py-20 bg-background">
      <BreadcrumbSchema
        trail={[
          { name: 'Blog', path: '/blog' },
          { name: 'What Is Cơm Gà?', path: '/blog/what-is-com-ga' },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article className="container mx-auto px-4 max-w-3xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {' / '}
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          {' / '}
          <span>What Is Cơm Gà?</span>
        </nav>

        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-3">Food Culture · April 21, 2026</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          What Is Cơm Gà? The Story Behind Vietnamese Chicken Rice
        </h1>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          Ask anyone from central Vietnam what dish tastes like home and there is a good chance the answer is cơm gà: golden rice cooked in chicken broth, topped with tender poached chicken. Here is the story of the dish we named our restaurant after.
        </p>

        <img
          src="/images/com-ga-dark-white-chicken-rice.png"
          alt="Cơm Gà Dark and White, Vietnamese chicken rice at Cơm Gà Houston"
          width={720}
          height={540}
          className="w-full rounded-2xl shadow-md mb-12 object-cover"
          loading="eager"
        />

        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <h2 className="font-serif text-3xl text-foreground pt-4">A dish born in Hội An</h2>
          <p>
            Cơm gà, which simply means "chicken rice" in Vietnamese, traces its most famous form to Hội An, a lantern-lit trading port on Vietnam's central coast. Cooks there developed a version so beloved that "cơm gà Hội An" became a destination dish. Travelers plan entire stops around it.
          </p>
          <p>
            The idea likely arrived with Hainanese immigrants, whose chicken rice is famous across Southeast Asia. Vietnamese cooks made it their own: brighter herbs, a punchier dipping sauce, pickled onions, and rice stained gold with turmeric or rich chicken fat.
          </p>

          <h2 className="font-serif text-3xl text-foreground pt-4">Why the chicken is poached, never boiled</h2>
          <p>
            The heart of cơm gà is restraint. The chicken is submerged in an aromatic bath of ginger, lemongrass, and scallion, then held at a gentle temperature until it is just cooked through. Boiling would tighten the meat and cloud the broth. Gentle poaching keeps every slice juicy and leaves the skin silky.
          </p>
          <p>
            At <Link href="/com-ga-kansas-city" className="text-primary hover:underline">Cơm Gà Houston</Link>, we serve the chicken cool over warm rice, the traditional way. The contrast is the point: cool, clean-tasting chicken against fragrant, savory rice.
          </p>

          <h2 className="font-serif text-3xl text-foreground pt-4">The rice does the heavy lifting</h2>
          <p>
            Here is the secret most first-timers miss: the star of chicken rice is the rice. After the chicken is poached, the broth goes right back to work as the cooking liquid for jasmine rice. Every grain absorbs that deep chicken flavor, then gets finished with ginger oil and fried shallots.
          </p>
          <p>
            Nothing is wasted. One pot of broth becomes the poaching bath, the rice liquid, and often a small bowl of soup served alongside. It is thrifty, resourceful cooking that turns humble ingredients into something memorable.
          </p>

          <h2 className="font-serif text-3xl text-foreground pt-4">How to order it in Kansas City</h2>
          <p>
            Our menu offers cơm gà a few ways. <strong>Dark &amp; White</strong> ($16.95) is the classic mix and the best first order. Prefer leaner meat? Choose <strong>White Chicken</strong>. Want maximum flavor? <strong>Dark Chicken</strong> is all thigh and drumstick. Feeding a table? The <strong>Houston Special</strong> brings a half or whole bird with all the fixings.
          </p>
          <p>
            Every plate comes with fresh herbs, pickles, and our house dipping sauce. Add a plate of <Link href="/menu" className="text-primary hover:underline">chả giò egg rolls</Link> and you have the meal our family grew up on.
          </p>
        </div>

        <div className="mt-14 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl text-foreground mb-3">Taste it for yourself</h2>
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
      </article>
    </main>
  )
}
