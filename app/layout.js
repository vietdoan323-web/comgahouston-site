import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const GA_ID = 'G-Y4M1HEQ001'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.comgahouston.com'),
  title: {
    template: '%s | Cơm Gà Houston',
    default: 'Best Vietnamese Food in Kansas City | Cơm Gà Houston – Olathe, KS',
  },
  description:
    'Looking for the best Vietnamese food in KC? Cơm Gà Houston serves signature chicken rice, fresh pho, and banh mi from family recipes. Order online.',
  openGraph: {
    siteName: 'Cơm Gà Houston',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-background text-foreground min-h-screen`}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  )
}
