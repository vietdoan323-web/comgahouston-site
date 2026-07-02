import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

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
    default: 'Cơm Gà Houston | Authentic Vietnamese Cuisine – Kansas City, KS',
  },
  description:
    'Authentic Vietnamese restaurant in Kansas City KS. Experience our signature chicken rice, fresh pho, and traditional family recipes. Order online.',
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
      </body>
    </html>
  )
}
