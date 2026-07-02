import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center py-20 bg-background">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <p className="font-serif text-7xl text-gold mb-4">404</p>
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          This page wandered off the menu.
        </h1>
        <p className="text-muted-foreground text-lg mb-10">
          The page you are looking for does not exist or has moved. The good stuff is still right here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/menu"
            className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary px-8 text-base font-semibold text-primary hover:bg-primary/5 transition-colors"
          >
            See the Menu
          </Link>
        </div>
      </div>
    </main>
  )
}
