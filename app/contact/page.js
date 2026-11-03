import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Contact | Olathe, KS Vietnamese Restaurant',
  description:
    'Contact Cơm Gà Houston in Olathe, KS. Address: 15204 W 119th St, Olathe KS 66062. Phone: (913) 232-8306. Open Mon, Wed–Sat 11AM–9PM, Sun 11AM–8PM. Closed Tuesdays.',
  alternates: { canonical: 'https://www.comgahouston.com/contact' },
}

export default function ContactPage() {
  return (
    <main className="py-20 bg-background">
      <BreadcrumbSchema name="Contact" path="/contact" />
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">Contact &amp; Visit</h1>
        <p className="text-xl text-muted-foreground mb-12">We'd love to see you. Here's everything you need to find us.</p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="h-[400px] rounded-2xl overflow-hidden border border-border shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.5822369408483!2d-94.76742568465134!3d38.91060997956842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0be16757b4279%3A0xc66512ebc2e71f92!2s15204%20W%20119th%20St%2C%20Olathe%2C%20KS%2066062!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cơm Gà Houston Location"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <h2 className="font-serif text-2xl text-foreground mb-4">Location</h2>
              <a href="https://maps.google.com/?q=15204+W+119th+St,+Olathe,+KS+66062" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors block">
                15204 W 119th St<br />Olathe, KS 66062
              </a>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <h2 className="font-serif text-2xl text-foreground mb-4">Phone</h2>
              <a href="tel:9132328306" className="text-muted-foreground hover:text-primary transition-colors text-lg">(913) 232-8306</a>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <h2 className="font-serif text-2xl text-foreground mb-4">Hours</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between"><span>Monday</span><span>11 AM – 9 PM</span></li>
                <li className="flex justify-between text-red-500/80"><span>Tuesday</span><span>CLOSED</span></li>
                <li className="flex justify-between"><span>Wednesday – Saturday</span><span>11 AM – 9 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span>11 AM – 8 PM</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://comgahoustonolathe.toast.site/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-10 text-base font-semibold text-white hover:bg-primary-hover transition-colors"
          >
            Order Online for Pickup
          </a>
        </div>

        <section className="mt-16">
          <h2 className="font-serif text-3xl text-foreground mb-6">Other Ways to Reach Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <h3 className="font-serif text-xl text-foreground mb-3">Order Online</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Pickup orders go through Toast and are typically ready in about 15 minutes. The
                full menu is available online, including lunch specials during weekday hours.
              </p>
              <a
                href="https://comgahoustonolathe.toast.site/order"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Order on Toast
              </a>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <h3 className="font-serif text-xl text-foreground mb-3">Follow Us</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Daily specials and behind-the-scenes posts from the kitchen on Facebook, Instagram,
                and TikTok.
              </p>
              <div className="flex flex-col gap-1 text-sm">
                <a href="https://www.facebook.com/ComGaHoustonKansas/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook</a>
                <a href="https://www.instagram.com/comgahouston_ks/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Instagram</a>
                <a href="https://www.tiktok.com/@comgakansas" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">TikTok</a>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <h3 className="font-serif text-xl text-foreground mb-3">Large Groups</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Feeding an office or a family gathering? We scale our regular menu to your
                headcount and budget.
              </p>
              <a href="/catering" className="text-primary font-medium hover:underline">
                See catering options
              </a>
            </div>
          </div>
        </section>

        <section className="mt-16 bg-surface rounded-2xl p-8 border border-border">
          <h2 className="font-serif text-3xl text-foreground mb-6">Finding Us</h2>
          <div className="space-y-4 text-lg text-foreground/80">
            <p>
              We are at 15204 W 119th St in Olathe, Kansas, in the Kansas City metro. The
              restaurant is easy to reach from Overland Park and the surrounding Johnson County
              communities. If you are coming from out of town, the interactive map above will
              get you to our door.
            </p>
            <p>
              A few notes for your visit: we are closed Tuesdays, and our dine-in lunch specials
              with a free drink run Monday and Wednesday through Saturday, 11 AM to 3 PM. Sunday
              hours are slightly shorter, 11 AM to 8 PM. If you want food fast, online pickup
              orders are usually ready in about 15 minutes.
            </p>
            <p>
              Questions about the menu, allergens, or what to order first? Call us at{' '}
              <a href="tel:9132328306" className="text-primary hover:underline">(913) 232-8306</a> during
              open hours and our staff will happily point you in the right direction. First time
              eating Vietnamese food? Tell us — recommending dishes is the best part of the job.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
