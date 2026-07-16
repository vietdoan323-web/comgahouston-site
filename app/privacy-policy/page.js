export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Cơm Gà Houston, how we collect, use, and protect your information.',
  alternates: { canonical: 'https://www.comgahouston.com/privacy-policy' },
  robots: { index: false },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-serif text-4xl text-foreground mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: {new Date().getFullYear()}</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-foreground/80">
          {[
            {
              title: '1. Information We Collect',
              content: 'We collect information you provide directly to us, such as your name, email address, and phone number when you sign up for our VIP list or contact us. We also collect usage data through standard web analytics.',
            },
            {
              title: '2. How We Use Your Information',
              content: 'We use the information we collect to send you promotional offers, menu updates, and special announcements. We do not sell your personal information to third parties.',
            },
            {
              title: '3. SMS and Email Communications',
              content: 'By submitting your phone number, you consent to receive SMS marketing messages from Cơm Gà Houston. Reply STOP at any time to unsubscribe. Message and data rates may apply.',
            },
            {
              title: '4. Cookies',
              content: 'Our website uses cookies to improve your browsing experience. You can instruct your browser to refuse cookies, though some features may not function correctly.',
            },
            {
              title: '5. Third-Party Services',
              content: 'We use Toast for online ordering and GoHighLevel (LeadConnector) for CRM and marketing automation. These services have their own privacy policies.',
            },
            {
              title: '6. Contact',
              content: 'For privacy-related questions, contact us at (913) 232-8306 or visit us at 15204 W 119th St, Olathe, KS 66062.',
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
