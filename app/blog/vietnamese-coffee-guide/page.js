import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Cà Phê Sữa Đá: Why Vietnamese Coffee Hits Different',
  description:
    'Slow-drip phin filters, dark roast robusta, and sweetened condensed milk. What makes Vietnamese iced coffee special, and where to get it in Kansas City.',
  alternates: { canonical: 'https://www.comgahouston.com/blog/vietnamese-coffee-guide' },
  openGraph: {
    title: 'Cà Phê Sữa Đá: Why Vietnamese Coffee Hits Different',
    description: 'What makes Vietnamese iced coffee special, and where to get it in Kansas City.',
    type: 'article',
    images: [{ url: '/images/ca-phe-sua-da-iced-coffee.png' }],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Cà Phê Sữa Đá: Why Vietnamese Coffee Hits Different',
  description: 'What makes Vietnamese iced coffee special, and where to get it in Kansas City.',
  image: 'https://www.comgahouston.com/images/ca-phe-sua-da-iced-coffee.png',
  datePublished: '2026-05-19',
  dateModified: '2026-05-30',
  author: { '@type': 'Organization', name: 'Cơm Gà Houston' },
  publisher: {
    '@type': 'Organization',
    name: 'Cơm Gà Houston',
    logo: { '@type': 'ImageObject', url: 'https://www.comgahouston.com/images/logo.png' },
  },
  mainEntityOfPage: 'https://www.comgahouston.com/blog/vietnamese-coffee-guide',
}

export default function Post() {
  return (
    <main className="py-20 bg-background">
      <BreadcrumbSchema
        trail={[
          { name: 'Blog', path: '/blog' },
          { name: 'Vietnamese Coffee Guide', path: '/blog/vietnamese-coffee-guide' },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article className="container mx-auto px-4 max-w-3xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {' / '}
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          {' / '}
          <span>Vietnamese Coffee Guide</span>
        </nav>

        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-3">Drinks · May 19, 2026</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          Cà Phê Sữa Đá: Why Vietnamese Coffee Hits Different
        </h1>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          Vietnam is the world's second-largest coffee producer, and it built an entire coffee culture around slow afternoons and strong brews. One glass of cà phê sữa đá explains why.
        </p>

        <img
          src="/images/ca-phe-sua-da-iced-coffee.png"
          alt="Cà Phê Sữa Đá, Vietnamese iced coffee with condensed milk"
          width={720}
          height={720}
          className="w-full rounded-2xl shadow-md mb-12 object-cover max-h-[480px]"
          loading="eager"
        />

        <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
          <h2 className="font-serif text-3xl text-foreground pt-4">It starts with robusta</h2>
          <p>
            Most American cafes brew arabica beans. Vietnamese coffee traditionally uses robusta, a hardier bean with nearly double the caffeine and a bold, chocolatey bitterness. It is a coffee with a spine, built to stand up to ice and sweetened milk without disappearing.
          </p>

          <h2 className="font-serif text-3xl text-foreground pt-4">The phin filter takes its time</h2>
          <p>
            Instead of an espresso machine, Vietnamese coffee drips through a phin: a small metal filter that sits right on top of the glass. Hot water works through the grounds drop by drop, taking four or five minutes. The slow extraction pulls out deep flavor without the acidity of fast brewing methods.
          </p>
          <p>
            That wait is part of the experience. In Vietnam, coffee is not grabbed on the way to somewhere else. You sit, you watch it drip, you talk.
          </p>

          <h2 className="font-serif text-3xl text-foreground pt-4">Condensed milk, the stroke of genius</h2>
          <p>
            Fresh milk spoiled quickly in Vietnam's tropical heat, so French-era cafes reached for sweetened condensed milk instead. It turned out to be the perfect partner: thick, caramel-sweet, and strong enough to meet robusta head-on. Poured over ice, the layers of dark coffee and ivory milk are half the pleasure.
          </p>

          <h2 className="font-serif text-3xl text-foreground pt-4">What to order at Cơm Gà Houston</h2>
          <p>
            <strong>Cà Phê Sữa Đá</strong> ($5.99) is the classic: dark drip coffee and condensed milk over ice. Purists can order <strong>Cà Phê Đen</strong> ($4.99), the same slow-dripped coffee served black. Not a coffee drinker? Our <strong>Trà Lá Dứa</strong> pandan tea with boba jelly and house-made <strong>Sữa Đậu Nành</strong> soy milk round out the drink list.
          </p>
          <p>
            The best pairing we know: an iced coffee alongside a plate of <Link href="/com-ga-kansas-city" className="text-primary hover:underline">cơm gà</Link>, with a <Link href="/menu" className="text-primary hover:underline">Kem Bơ avocado ice cream</Link> to finish. That is a proper Vietnamese afternoon.
          </p>
        </div>

        <div className="mt-14 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl text-foreground mb-3">Come sip with us</h2>
          <p className="text-muted-foreground mb-6">15204 W 119th St, Olathe, KS 66062</p>
          <a
            href="https://comgahoustonolathe.toast.site/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover transition-colors"
          >
            Order Online
          </a>
        </div>
      </article>
    </main>
  )
}
