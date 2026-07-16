export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Cơm Gà Houston.',
  alternates: { canonical: 'https://www.comgahouston.com/terms' },
  robots: { index: false },
}

export default function TermsPage() {
  return (
    <main className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl text-foreground mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: {new Date().getFullYear()}</p>

        <div className="space-y-8 text-foreground/80">
          {[
            {
              title: '1. Use of Website',
              content: 'By accessing comgahouston.com, you agree to these terms. The website and its content are provided for informational and ordering purposes only.',
            },
            {
              title: '2. Online Orders',
              content: 'Online orders are processed through Toast, a third-party platform. By placing an order, you agree to Toast\'s terms of service in addition to ours. All sales are final once an order is confirmed.',
            },
            {
              title: '3. VIP List & Marketing',
              content: 'By joining our VIP list, you consent to receive marketing communications. You may unsubscribe at any time by replying STOP to any SMS or clicking unsubscribe in any email.',
            },
            {
              title: '4. Intellectual Property',
              content: 'All content on this website, including text, images, and branding, is the property of Cơm Gà Houston and may not be reproduced without written permission.',
            },
            {
              title: '5. Limitation of Liability',
              content: 'Cơm Gà Houston is not liable for any indirect, incidental, or consequential damages arising from use of this website or our services.',
            },
            {
              title: '6. Contact',
              content: 'Questions about these terms? Contact us at (913) 232-8306 or 15204 W 119th St, Olathe, KS 66062.',
            },
          ].map(({ title, content }) => (
            <section key={title}>
              <h2 className="font-serif text-2xl text-foreground mb-3">{title}</h2>
              <p>{content}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
