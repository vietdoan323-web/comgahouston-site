import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'About Us | Our Story in Olathe, KS',
  description:
    'Learn the story behind Cơm Gà Houston, a family-owned Vietnamese restaurant in Olathe, KS. Our recipes have been passed down through generations, made fresh every day.',
  alternates: { canonical: 'https://www.comgahouston.com/about' },
}

export default function AboutPage() {
  return (
    <main className="py-20 bg-background">
      <BreadcrumbSchema name="About" path="/about" />
      <div className="container mx-auto px-4 max-w-4xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {' / '}
          <span>About</span>
        </nav>

        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          Our Story
        </h1>

        <div className="relative mb-16">
          <div className="absolute inset-0 bg-gold/20 rounded-2xl transform translate-x-3 translate-y-3" />
          <img
            src="/images/family-kitchen-story.png"
            alt="The Cơm Gà Houston family kitchen"
            className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-lg"
            loading="eager"
          />
        </div>

        <div className="pl-6 border-l-4 border-primary mb-10">
          <p className="font-serif italic text-2xl text-muted-foreground">
            "Every bowl is simmered with the patience of generations. Made fresh every morning, the same way it's always been made."
          </p>
        </div>

        <div className="space-y-6 text-lg text-foreground/80 mb-16">
          <p>
            Cơm Gà Houston was born from a love of Vietnamese home cooking. Our family carried these recipes from Vietnam, perfecting them across decades before sharing them with Kansas City.
          </p>
          <p>
            In Vietnamese culture, food isn't just sustenance, it's how we express love, celebrate milestones, and stay connected to where we come from. Every dish we serve carries that meaning. The broth for our pho simmers for hours because that's the only right way to do it. The chicken for our Cơm Gà is poached gently because that's how it stays impossibly tender.
          </p>
          <p>
            We named our restaurant after our signature dish: <em>Cơm Gà</em>, chicken rice. It's humble, comforting, and endlessly satisfying. Just like home cooking should be.
          </p>
          <p>
            Located in Olathe, KS, we're proud to be part of the Kansas City community. Whether you're Vietnamese-American looking for a taste of home, or you're discovering Vietnamese cuisine for the first time, welcome to our table.
          </p>
        </div>

        <div className="bg-surface rounded-2xl p-8 border border-border text-center">
          <h2 className="font-serif text-3xl text-foreground mb-4">Come Visit Us</h2>
          <p className="text-muted-foreground mb-6">15204 W 119th St, Olathe, KS 66062</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://comgahoustonolathe.toast.site/order" target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover transition-colors">
              Order Online
            </a>
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary px-8 text-base font-semibold text-primary hover:bg-primary/5 transition-colors">
              Get Directions
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
