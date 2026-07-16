export const metadata = {
  title: 'Contact | Olathe, KS Vietnamese Restaurant',
  description:
    'Contact Cơm Gà Houston in Olathe, KS. Address: 15204 W 119th St, Olathe KS 66062. Phone: (913) 232-8306. Open Mon, Wed–Sat 11AM–9PM, Sun 11AM–8PM. Closed Tuesdays.',
  alternates: { canonical: 'https://www.comgahouston.com/contact' },
}

export default function ContactPage() {
  return (
    <main className="py-20 bg-background">
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
      </div>
    </main>
  )
}
