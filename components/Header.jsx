'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'

export default function Header() {
  const [theme, setTheme] = useState('light')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-background/80 border-b border-border transition-colors">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group" aria-label="Cơm Gà Houston Home">
            <img
              src="/images/logo.png"
              alt="Cơm Gà Houston Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight group-hover:text-primary transition-colors">
                Cơm Gà Houston
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                Olathe, KS · Kansas City Metro
              </span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#menu" className="text-sm font-medium hover:text-primary transition-colors">Menu</Link>
          <Link href="/pho-kansas-city" className="text-sm font-medium hover:text-primary transition-colors">Pho</Link>
          <Link href="/banh-mi-kansas-city" className="text-sm font-medium hover:text-primary transition-colors">Banh Mi</Link>
          <Link href="/com-ga-kansas-city" className="text-sm font-medium hover:text-primary transition-colors">Cơm Gà</Link>
          <Link href="/catering" className="text-sm font-medium hover:text-primary transition-colors">Catering</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a
            href="https://comgahoustonolathe.toast.site/order"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Order Online
          </a>
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border shadow-lg animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-muted rounded-md">Menu</Link>
            <Link href="/pho-kansas-city" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-muted rounded-md">Pho</Link>
            <Link href="/banh-mi-kansas-city" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-muted rounded-md">Banh Mi</Link>
            <Link href="/com-ga-kansas-city" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-muted rounded-md">Cơm Gà</Link>
            <Link href="/catering" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-muted rounded-md">Catering</Link>
            <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-muted rounded-md">Blog</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-muted rounded-md">About</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-muted rounded-md">Contact</Link>
            <a
              href="https://comgahoustonolathe.toast.site/order"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-primary-foreground hover:bg-primary-hover transition-colors mt-4"
            >
              Order Online via Toast
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
