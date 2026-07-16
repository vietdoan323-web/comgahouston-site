'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Star, MapPin, Clock, ChevronRight, Phone } from 'lucide-react'

const HOURS = [
  { day: 1, name: 'Monday',    hours: '11:00 AM – 9:00 PM' },
  { day: 2, name: 'Tuesday',   hours: 'CLOSED', muted: true },
  { day: 3, name: 'Wednesday', hours: '11:00 AM – 9:00 PM' },
  { day: 4, name: 'Thursday',  hours: '11:00 AM – 9:00 PM' },
  { day: 5, name: 'Friday',    hours: '11:00 AM – 9:00 PM' },
  { day: 6, name: 'Saturday',  hours: '11:00 AM – 9:00 PM' },
  { day: 0, name: 'Sunday',    hours: '11:00 AM – 8:00 PM' },
]

export default function HomeContent({ googleRating = { rating: 4.5, count: 143 } }) {
  const [activeMenuTab, setActiveMenuTab] = useState('chicken')
  const [today, setToday] = useState(-1)

  useEffect(() => {
    setToday(new Date().getDay())
  }, [])

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-background focus:text-primary"
      >
        Skip to content
      </a>

      <main id="main-content" className="pb-20 md:pb-0">
        {/* HERO */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 hero-ken-burns">
            <img
              src="/images/hero-vietnamese-food-spread.jpg"
              alt="A spread of Cơm Gà Houston dishes: phở, bánh mì, cơm gà, and more"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
          </div>

          <div className="container relative z-10 mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
              <MapPin size={14} className="text-primary" />
              <span>Olathe, KS · Kansas City Metro</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-tight mb-6 max-w-5xl [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              Authentic Vietnamese Comfort Food in{' '}
              <br className="hidden md:block" />
              <span className="text-gold">Kansas City</span>.
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-10 [text-shadow:_0_1px_3px_rgba(0,0,0,0.5)]">
              Our broth starts before sunrise. Our recipes started three generations ago.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6">
              <a
                href="https://comgahoustonolathe.toast.site/order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover transition-all hover:scale-105 shadow-lg shadow-primary/30"
              >
                Order Now
              </a>
              <Link
                href="/menu"
                className="inline-flex h-14 items-center justify-center rounded-md bg-white/10 backdrop-blur-sm border border-white/20 px-8 text-base font-semibold text-white hover:bg-white/20 transition-colors"
              >
                View Menu
              </Link>
            </div>

            {/* Proof line at the decision point */}
            <div className="flex items-center gap-2 text-white/90 text-sm font-medium mb-10">
              <div className="flex items-center gap-0.5 text-gold">
                <span className="font-bold mr-1">{googleRating.rating.toFixed(1)}</span>
                {[...Array(5)].map((_, i) => {
                  const fill = Math.min(1, Math.max(0, googleRating.rating - i))
                  if (fill >= 1) return <Star key={i} size={14} className="fill-gold" />
                  if (fill <= 0) return <Star key={i} size={14} className="text-gold" />
                  return (
                    <div key={i} className="relative flex">
                      <Star size={14} className="text-gold" />
                      <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                        <Star size={14} className="fill-gold text-gold" />
                      </div>
                    </div>
                  )
                })}
              </div>
              <span className="italic">"Real Vietnamese taste... reminds me of home." – Thien N.</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 text-white/90 text-sm font-medium bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Clock size={16} className="text-gold" />
                <span>Family-owned</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm font-medium bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <MapPin size={16} className="text-gold" />
                <span>Fast Take-out</span>
              </div>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="bg-dark text-white py-12 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
              {[
                { stat: `${googleRating.rating.toFixed(1)}★`, label: 'Google Reviews', sub: `${googleRating.count}+ ratings from KC diners` },
                { stat: '5 AM', label: 'Broth O\'Clock', sub: 'When our phở starts simmering every day' },
                { stat: '3', label: 'Generations', sub: 'Of family recipes on the menu' },
                { stat: '~15 min', label: 'Pickup Time', sub: 'Order online, we\'ll have it ready' },
              ].map(({ stat, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center px-4">
                  <span className="font-serif text-4xl text-gold mb-2">{stat}</span>
                  <h3 className="font-semibold text-lg mb-1">{label}</h3>
                  <p className="text-sm text-white/70">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LUNCH SPECIALS */}
        <section id="specials" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Dine-In Lunch Specials</h2>
              <p className="text-muted-foreground text-lg">Mon–Sat 11AM–3PM, dine-in only. Includes a free drink.</p>
            </div>

            <div className="max-w-sm mx-auto mb-12">
              <img
                src="/images/lunch-specials-flyer.jpg"
                alt="Cơm Gà Houston lunch specials: dine-in only, 11AM to 3PM, includes a free drink, starting at $11.99"
                width={1080}
                height={1350}
                className="w-full rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {[
                {
                  img: '/images/ga-chien-fried-chicken-bowl.jpg',
                  alt: 'Gà Chiên (Fried Chicken Bowl)',
                  price: '$11.99',
                  title: 'Gà Chiên',
                  sub: 'Fried Chicken Bowl',
                  desc: 'Crispy fried chicken served over fragrant rice with fresh vegetables and our signature house sauce.',
                },
                {
                  img: '/images/bun-thit-nuong-grilled-pork-vermicelli.jpg',
                  alt: 'Bún Thịt Nướng (Grilled Pork)',
                  price: '$12.99',
                  title: 'Bún Thịt Nướng',
                  sub: 'Grilled Pork Vermicelli',
                  desc: 'Char-grilled pork served over cool vermicelli noodles, fresh herbs, and crushed peanuts.',
                },
                {
                  img: '/images/banh-mi-vietnamese-sandwich.jpg',
                  alt: 'Bánh Mì Combo (Vietnamese Sub)',
                  price: '$13.99',
                  title: 'Bánh Mì Combo',
                  sub: 'Vietnamese Sub',
                  desc: 'Crispy baguette filled with savory meats, pâté, pickled daikon, and fresh jalapeños. Includes a side.',
                },
              ].map(({ img, alt, price, title, sub, desc }) => (
                <div key={title} className="bg-card rounded-xl overflow-hidden shadow-md border border-border group hover:shadow-lg transition-all">
                  <div className="relative h-56 overflow-hidden">
                    <img src={img} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-50" loading="lazy" />
                    <img src={img} alt={alt} className="relative w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground font-bold px-3 py-1 rounded-full shadow-md">{price}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{sub}</p>
                    <p className="text-muted-foreground text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground mb-6">Full menu available for online pickup via Toast at any time.</p>
              <a
                href="https://comgahoustonolathe.toast.site/order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-8 text-base font-semibold text-secondary-foreground hover:bg-secondary/90 transition-colors shadow-md"
              >
                Order Pickup Online
              </a>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section id="story" className="py-24 bg-surface relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 relative">
                <div className="absolute inset-0 bg-gold/20 rounded-2xl transform translate-x-4 translate-y-4" />
                <img
                  src="/images/family-kitchen-story.png"
                  alt="Vietnamese family kitchen"
                  className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
                  In Vietnamese culture, food is how we show love.
                </h2>
                <div className="pl-6 border-l-4 border-primary mb-8">
                  <p className="font-serif italic text-2xl text-muted-foreground">
                    "Every bowl is simmered with the patience of generations. Made fresh every morning, the same way it's always been made."
                  </p>
                </div>
                <div className="space-y-6 text-lg text-foreground/80 mb-10">
                  <p>
                    At Cơm Gà Houston, we believe that the best meals aren't just cooked, they're crafted with memories. Our recipes have been passed down through our family, preserving the authentic flavors of Vietnam right here in Olathe, in the Kansas City metro.
                  </p>
                  <p>
                    From our signature cold-poached chicken rice infused with fragrant ginger oil, to our deeply comforting pho broths that simmer for hours, every dish is an invitation to our family table. We don't take shortcuts, because true flavor takes time.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#specials"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-white hover:bg-primary-hover transition-colors"
                  >
                    Try Our Signature Dishes
                  </a>
                  <a
                    href="#menu"
                    className="inline-flex h-12 items-center justify-center rounded-md bg-transparent border-2 border-primary px-6 text-base font-medium text-primary hover:bg-primary/5 transition-colors"
                  >
                    View Full Menu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MENU */}
        <section id="menu" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our Menu</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Authentic Vietnamese dishes prepared fresh daily. Order online for quick and easy pickup.
              </p>
            </div>

            <div className="flex overflow-x-auto hide-scrollbar mb-12 border-b border-border" role="tablist">
              <div className="flex space-x-8 mx-auto px-4 whitespace-nowrap">
                {[
                  { id: 'chicken',  label: '🍚 Chicken Rice' },
                  { id: 'soups',    label: '🍜 Soups & Noodles' },
                  { id: 'starters', label: '🥢 Starters & Salads' },
                  { id: 'beef',     label: '🥩 Beef & Steak' },
                  { id: 'drinks',   label: '🧋 Drinks & Desserts' },
                ].map(({ id, label }) => (
                  <button
                    key={id}
                    role="tab"
                    aria-selected={activeMenuTab === id}
                    onClick={() => setActiveMenuTab(id)}
                    className={`pb-4 text-lg font-medium border-b-2 transition-colors ${
                      activeMenuTab === id
                        ? 'border-primary text-primary'
                        : 'border-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div role="tabpanel" className="max-w-4xl mx-auto animate-in fade-in duration-500">
              {activeMenuTab === 'chicken' && (
                <div className="grid gap-6">
                  <MenuItem img="/images/com-ga-dark-white-chicken-rice.png" alt="Cơm Gà Dark & White" title="Cơm Gà Dark &amp; White" sub="Signature Chicken Rice" desc="Signature cold-poached chicken over fragrant jasmine rice with ginger oil, fresh herbs, and house dipping sauce." price="$16.95" />
                  <MenuItem img="/images/com-ga-white-chicken-rice.png" alt="Cơm Gà White Chicken" title="Cơm Gà White Chicken" sub="White Meat Chicken Rice" desc="Tender white meat, served cold over rice with house sauce." price="$15.95" />
                  <MenuItem img="/images/com-ga-dark-chicken-rice.png" alt="Cơm Gà Dark Chicken" title="Cơm Gà Dark Chicken" sub="Dark Meat Chicken Rice" desc="Flavorful dark meat, cold-poached, with ginger oil and jasmine rice." price="$17.95" />
                  <MenuItem img="/images/houston-special-half-chicken.jpg" alt="Houston Special 1/2 Gà" title="Houston Special ½ Gà" sub="Half Chicken Special" desc="Half Houston-style chicken with rice, herbs, and house sauce." price="$24.99" />
                  <MenuItem img="/images/houston-special-whole-chicken.jpg" alt="Houston Special Whole" title="Houston Special Whole" sub="Whole Chicken Special" desc="Whole chicken for sharing with rice and all the fixings." price="$45.99" />
                </div>
              )}

              {activeMenuTab === 'soups' && (
                <div className="grid gap-6">
                  <MenuItem img="/images/pho-ga-chicken-pho.png" alt="Phở Gà" title="Phở Gà" sub="Chicken Pho" desc="Clear aromatic chicken broth, rice noodles, fresh herbs." price="$16.99" />
                  <MenuItem img="/images/bun-mang-ga-chicken-bamboo-soup.png" alt="Bún Măng Gà" title="Bún Măng Gà" sub="Chicken Bamboo Noodle Soup" desc="Chicken broth with bamboo shoots and vermicelli." price="$15.99" />
                  <MenuItem img="/images/bun-mang-vit-duck-bamboo-soup.png" alt="Bún Măng Vịt" title="Bún Măng Vịt" sub="Duck Bamboo Noodle Soup" desc="Duck simmered with bamboo shoots in fragrant broth." price="$17.95" />
                  <MenuItem img="/images/banh-canh-ga-chicken-udon.jpg" alt="Bánh Canh Gà" title="Bánh Canh Gà" sub="Chicken Udon Soup" desc="Thick udon noodles in comforting chicken broth." price="$15.99" />
                  <MenuItem img="/images/pho-bo.jpg" alt="Phở Bò" title="Phở Bò" sub="Beef Pho" desc="Beef broth, rice noodles, ribeye, and meatballs." price="$17.99" />
                  <MenuItem img="/images/ca-ri-ga-chicken-curry.png" alt="Cà Ri Gà" title="Cà Ri Gà" sub="Chicken Curry" desc="Vietnamese chicken curry, served with rice or baguette." price="$15.99" />
                </div>
              )}

              {activeMenuTab === 'starters' && (
                <div className="grid gap-6">
                  <MenuItem img="/images/cha-gio-egg-rolls.jpg" alt="Chả Giò" title="Chả Giò (4)" sub="Egg Rolls" desc="Crispy rolls with pork, shrimp, veggies. Herbs & dipping sauce." price="$6.99" />
                  <MenuItem img="/images/goi-cuon-spring-rolls.jpg" alt="Gỏi Cuốn" title="Gỏi Cuốn (2)" sub="Spring Rolls" desc="Fresh rice paper rolls with pork, shrimp, vermicelli." price="$6.99" />
                  <MenuItem img="/images/banh-mi-vietnamese-sandwich.jpg" alt="Combo Bánh Mì" title="Combo Bánh Mì" sub="Vietnamese Sub" desc="Crispy baguette, house meats, pâté, pickled daikon, jalapeños." price="$7.99" />
                  <MenuItem img="/images/banh-xeo-crispy-crepe.png" alt="Bánh Xèo" title="Bánh Xèo" sub='16" Crispy Crepe' desc="Coconut milk rice flour crepe with pork, shrimp, squid, veggies." price="$24.99" />
                  <MenuItem img="/images/goi-ga-chicken-salad.png" alt="Gỏi Gà" title="Gỏi Gà" sub="Chicken Cabbage Salad" desc="Chicken, cabbage, peanuts, fried shallots, vinaigrette." price="Sm $15.95 / Lg $21.95" />
                  <MenuItem img="/images/bun-thit-nuong-cha-gio.jpg" alt="Bún Thịt Nướng Chả Giò" title="Bún Thịt Nướng Chả Giò" sub="Grilled Pork & Egg Rolls Vermicelli" desc="Grilled pork, egg rolls, vermicelli, herbs, crushed peanuts." price="$15.95" />
                </div>
              )}

              {activeMenuTab === 'beef' && (
                <div className="grid gap-6">
                  <MenuItem img="/images/bo-ne-sizzling-steak.jpg" alt="Bò Né" title="Bò Né" sub="Sizzling Steak & Egg" desc="6oz ribeye, sizzling skillet, egg, pâté, baguette." price="$21.99" />
                  <MenuItem img="/images/hu-tieu-bo-kho-beef-stew-noodles.png" alt="Hủ Tiếu Bò Kho" title="Hủ Tiếu Bò Kho" sub="Beef Stew with Noodles" desc="Slow-simmered beef stew with rice noodles." price="$16.99" />
                  <MenuItem img="/images/banh-mi-bo-kho-beef-stew-bread.png" alt="Bánh Mì Bò Kho" title="Bánh Mì Bò Kho" sub="Beef Stew with Bread" desc="Beef stew with crispy baguette." price="$15.99" />
                </div>
              )}

              {activeMenuTab === 'drinks' && (
                <div className="grid gap-6">
                  <MenuItem img="/images/ca-phe-sua-da-iced-coffee.png" alt="Cà Phê Sữa Đá" title="Cà Phê Sữa Đá" sub="Iced Coffee" desc="Vietnamese drip coffee with condensed milk over ice." price="$5.99" />
                  <MenuItem img="/images/ca-phe-den-black-coffee.png" alt="Cà Phê Đen" title="Cà Phê Đen" sub="Black Coffee" desc="Pure dark Vietnamese drip coffee over ice." price="$4.99" />
                  <MenuItem img="/images/tra-la-dua-pandan-tea.png" alt="Trà Lá Dứa" title="Trà Lá Dứa" sub="Pandan Tea + Jelly" desc="Pandan leaf tea with boba jelly." price="$5.25" />
                  <MenuItem img="/images/sua-dau-nanh-soy-milk.png" alt="Sữa Đậu Nành" title="Sữa Đậu Nành" sub="Soy Milk" desc="Lightly sweetened Vietnamese soy milk, iced or hot." price="$4.99" />
                  <MenuItem img="/images/thach-dua-coconut-jelly.png" alt="Thạch Dừa" title="Thạch Dừa" sub="Coconut Jelly" desc="Light, refreshing coconut jelly dessert." price="$6.99" />
                  <MenuItem img="/images/kem-bo-avocado-ice-cream.png" alt="Kem Bơ" title="Kem Bơ" sub="Avocado Coconut Ice Cream" desc="Creamy avocado and coconut ice cream." price="$5.50" />
                </div>
              )}
            </div>

            <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://comgahoustonolathe.toast.site/order"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover transition-colors shadow-md w-full sm:w-auto group"
              >
                Start your pickup order <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="tel:9132328306" className="inline-flex h-12 items-center justify-center text-foreground hover:text-primary transition-colors font-medium">
                Call (913) 232-8306
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Some of the Best Vietnamese Food in KC</h2>
            <p className="text-muted-foreground text-lg">{"Don't just take our word for it."} {googleRating.rating.toFixed(1)} stars from Kansas City diners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              { quote: '"10000/10!!! Highly recommended! Cơm Gà, Chicken Salad, Chicken Porridge and Egg Rolls are my absolutely favorites!!"', name: 'Hannah H.' },
              { quote: '"So yummy! I highly recommend! All the drinks were not too sweet, just the perfect amount! The staff is super friendly as well."', name: 'Destiny S.' },
              { quote: '"Real Vietnamese taste. This is the authentic flavor I\'ve been looking for. Reminds me of home."', name: 'Thien N.' },
            ].map(({ quote, name }) => (
              <div key={name} className="bg-card p-8 rounded-2xl shadow-sm border border-border flex flex-col h-full">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => {
                    const fill = Math.min(1, Math.max(0, googleRating.rating - i))
                    if (fill >= 1) return <Star key={i} size={20} className="text-gold fill-gold" />
                    if (fill <= 0) return <Star key={i} size={20} className="text-gold" />
                    return (
                      <div key={i} className="relative flex">
                        <Star size={20} className="text-gold" />
                        <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                          <Star size={20} className="text-gold fill-gold" />
                        </div>
                      </div>
                    )
                  })}
                </div>
                <p className="font-serif italic text-xl text-foreground/90 mb-8 flex-grow">{quote}</p>
                <div>
                  <p className="font-bold text-foreground">{name}</p>
                  <p className="text-sm text-muted-foreground">Google Review</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/search/Com+Ga+Houston+Olathe+KS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-transparent border border-border px-6 text-base font-medium text-foreground hover:bg-muted transition-colors group"
            >
              Read More Reviews on Google <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* FROM THE BLOG */}
      <section id="blog" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">From Our Kitchen</h2>
            <p className="text-muted-foreground text-lg">Stories, guides, and Vietnamese food culture.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
            {[
              {
                title: 'What Is Cơm Gà? The Story Behind Vietnamese Chicken Rice',
                category: 'Food Culture',
                img: '/images/com-ga-dark-white-chicken-rice.png',
                href: '/blog/what-is-com-ga',
              },
              {
                title: 'How to Eat Pho Like You Grew Up With It',
                category: 'Guides',
                img: '/images/pho-bo.jpg',
                href: '/blog/how-to-eat-pho',
              },
              {
                title: 'Cà Phê Sữa Đá: Why Vietnamese Coffee Hits Different',
                category: 'Drinks',
                img: '/images/ca-phe-sua-da-iced-coffee.png',
                href: '/blog/vietnamese-coffee-guide',
              },
            ].map(({ title, category, img, href }) => (
              <Link key={title} href={href} className="bg-card rounded-xl overflow-hidden shadow-md border border-border group hover:shadow-lg transition-all block">
                <div className="relative h-44 overflow-hidden">
                  <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className="absolute top-4 left-4 bg-dark/80 text-gold text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full">
                    {category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-foreground leading-snug group-hover:text-primary transition-colors">{title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex h-12 items-center justify-center rounded-md bg-transparent border border-border px-6 text-base font-medium text-foreground hover:bg-muted transition-colors group"
            >
              Visit the Blog <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-primary py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Hungry? Order Now.</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Freshly made and ready for quick pickup.</p>
          <a
            href="https://comgahoustonolathe.toast.site/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-md bg-white px-8 text-base font-bold text-primary hover:bg-white/90 transition-all hover:scale-105 shadow-lg group"
          >
            Get dinner going <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* VIP FORM */}
      <section className="py-24 bg-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-gold font-bold tracking-wider uppercase text-sm mb-4 block">VIP Insider List</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Join the family list. Your first egg roll is on us.</h2>
              <p className="text-lg text-white/70 mb-8 max-w-lg">
                Sign up and we'll treat you to a free Chả Giò egg roll on your next pickup, plus early word on seasonal specials, family deals, and secret menu items.
              </p>
            </div>

            <div className="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
              <div className="bg-white rounded-2xl p-8 shadow-2xl text-foreground">
                <h3 className="font-serif text-2xl mb-6 text-center">Join the Family</h3>
                <VipForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Everything you need to know about dining with us.</p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: 'Where is Cơm Gà Houston located and what are your hours?',
                a: 'Cơm Gà Houston is located at 15204 W 119th St, Olathe, KS 66062. We are open Mon, Wed–Sat 11AM–9PM and Sunday 11AM–8PM. Closed Tuesdays.',
              },
              {
                q: 'Can I order online for carry-out?',
                a: 'Yes! Order directly through our website via Toast. We offer fast carry-out pickup. During peak hours carry-out may take slightly longer as we prepare each dish fresh.',
              },
              {
                q: 'Can I customize my order at Cơm Gà Houston?',
                a: 'Absolutely. Most menu items can be customized: spice level, protein choices, and side selections. Add special requests in the notes section when ordering online.',
              },
              {
                q: 'What is your signature dish?',
                a: 'Our signature dish is Cơm Gà, cold-poached chicken served over fragrant jasmine rice infused with ginger oil, with fresh herbs and our house dipping sauce.',
              },
              {
                q: 'Do you offer vegetarian or dietary-friendly options?',
                a: 'We do our best to accommodate dietary preferences. Let us know any dietary restrictions when you visit or order and our staff will guide you.',
              },
              {
                q: 'Where can I find the best Vietnamese food in Kansas City?',
                a: `Kansas City locals consistently rate Cơm Gà Houston among the best Vietnamese food in KC, with ${googleRating.rating.toFixed(1)} stars on Google. Our signature cơm gà chicken rice, slow-simmered pho, and fresh bánh mì are made daily from family recipes at 15204 W 119th St in Olathe.`,
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-card p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-serif text-xl font-bold mb-2">{q}</h3>
                <p className="text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="visit" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Visit Us</h2>
            <p className="text-muted-foreground text-lg">We can't wait to serve you.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
            <div className="w-full lg:w-1/2 h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-md border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.5822369408483!2d-94.76742568465134!3d38.91060997956842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0be16757b4279%3A0xc66512ebc2e71f92!2s15204%20W%20119th%20St%2C%20Olathe%2C%20KS%2066062!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cơm Gà Houston Location Map"
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="bg-card p-8 rounded-2xl shadow-md border border-border">
                <h3 className="font-serif text-2xl mb-6 flex items-center gap-2">
                  <Clock className="text-primary" /> Hours
                </h3>
                <ul className="space-y-3 mb-6">
                  {HOURS.map(({ day, name, hours, muted }) => (
                    <li
                      key={day}
                      className={`flex justify-between border-b border-border pb-2 ${
                        day === today ? 'text-primary font-bold' : muted ? 'text-muted-foreground' : ''
                      }`}
                    >
                      <span className="font-medium">
                        {name}
                        {day === today && (
                          <span className="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full font-normal inline-block">
                            Today
                          </span>
                        )}
                      </span>
                      <span>{hours}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-sm text-foreground/80">
                  <span className="font-semibold text-primary block mb-1">Lunch Specials</span>
                  Dine-in specials available Mon–Sat 11AM–3PM
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-md border border-border">
                <h3 className="font-serif text-2xl mb-6 flex items-center gap-2">
                  <MapPin className="text-primary" /> Contact
                </h3>
                <div className="space-y-4">
                  <a href="https://maps.google.com/?q=15204+W+119th+St,+Olathe,+KS+66062" target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                    <span className="font-semibold block">Address</span>
                    <span className="text-muted-foreground">15204 W 119th St<br />Olathe, KS 66062</span>
                  </a>
                  <a href="tel:9132328306" className="block hover:text-primary transition-colors">
                    <span className="font-semibold block">Phone</span>
                    <span className="text-muted-foreground">(913) 232-8306</span>
                  </a>
                  <a
                    href="https://comgahoustonolathe.toast.site/order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-white hover:bg-primary-hover transition-colors w-full mt-2"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Order Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-dark text-white p-4 flex items-center justify-between border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col">
          <span className="text-sm font-medium">Ready to order?</span>
          <span className="text-xs text-white/70">Order for Pickup</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:9132328306"
            aria-label="Call Cơm Gà Houston at (913) 232-8306"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/25 text-white hover:bg-white/10 transition-colors"
          >
            <Phone size={18} />
          </a>
          <a
            href="https://comgahoustonolathe.toast.site/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white hover:bg-primary-hover transition-colors"
          >
            Order Now
          </a>
        </div>
      </div>
    </>
  )
}

/* ── Reusable menu item card ── */
function MenuItem({ img, alt, title, sub, desc, price }) {
  return (
    <div className="flex justify-between items-start p-4 sm:p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors shadow-sm">
      <div className="flex gap-4">
        <img src={img} alt={alt} className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover shrink-0" loading="lazy" />
        <div className="pr-2 sm:pr-4">
          <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-1">{title}</h3>
          <p className="text-xs sm:text-sm text-primary font-medium mb-2">{sub}</p>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
      <div className="font-serif text-xl sm:text-2xl text-gold shrink-0 mt-1 sm:mt-0 text-right">{price}</div>
    </div>
  )
}

/* ── VIP lead-capture form ── */
function VipForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    fetch('https://backend.leadconnectorhq.com/external-tracking/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', version: '2021-07-28' },
      body: JSON.stringify({
        type: 'external_form_submission',
        timestamp: Date.now(),
        formId: 'VIP Insider List Form',
        formData: {
          first_name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
        },
        url: window.location.href,
        title: document.title,
        trackingId: 'tk_91ba2650743c4e399bed738bded23467',
        locationId: 'T6k7EBLiBtykCPUP88bf',
        sessionId: crypto.randomUUID(),
      }),
    }).catch(() => {})

    form.reset()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {[
        { id: 'name',  label: 'Full Name',     type: 'text',  placeholder: 'John Doe' },
        { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
        { id: 'phone', label: 'Phone Number',  type: 'tel',   placeholder: '(913) 555-0123', required: false },
      ].map(({ id, label, type, placeholder, required = true }) => (
        <div key={id}>
          <label htmlFor={id} className="block text-sm font-medium text-foreground mb-1">{label}</label>
          <input
            type={type}
            id={id}
            name={id}
            required={required}
            placeholder={placeholder}
            className="w-full h-12 px-4 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
          />
        </div>
      ))}

      <button type="submit" className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-medium rounded-md transition-colors mt-2">
        Claim my free egg roll
      </button>

      <p className="text-[11px] text-muted-foreground text-center mt-4 leading-tight">
        By submitting, you agree to receive email and/or SMS promotions from Cơm Gà Houston. Reply STOP to unsubscribe.
      </p>

      {submitted && (
        <div className="mt-4 p-3 bg-green-100 text-green-800 text-sm rounded-md text-center" aria-live="polite">
          You're in! Mention the VIP list at the register for your free egg roll on your next pickup.
        </div>
      )}
    </form>
  )
}
