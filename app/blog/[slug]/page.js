import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { getAllPosts, getPost, formatDate } from '@/lib/blog'

const BASE = 'https://www.comgahouston.com'

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      images: [{ url: post.image }],
    },
  }
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `${BASE}${post.image}`,
    datePublished: post.date,
    dateModified: post.dateModified,
    author: { '@type': 'Organization', name: 'Cơm Gà Houston' },
    publisher: {
      '@type': 'Organization',
      name: 'Cơm Gà Houston',
      logo: { '@type': 'ImageObject', url: `${BASE}/images/logo.png` },
    },
    mainEntityOfPage: `${BASE}/blog/${post.slug}`,
  }

  return (
    <main className="py-20 bg-background">
      <BreadcrumbSchema
        trail={[
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="container mx-auto px-4 max-w-3xl">
        <nav className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {' / '}
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          {' / '}
          <span>{post.title}</span>
        </nav>

        <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-3">
          {post.category} · {formatDate(post.date)}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          {post.title}
        </h1>

        <Image
          src={post.image}
          alt={post.imageAlt}
          width={1200}
          height={480}
          className="w-full rounded-2xl shadow-md mb-12 object-cover max-h-[480px]"
          priority
        />

        <div
          className="blog-prose"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-14 bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h2 className="font-serif text-2xl text-foreground mb-3">{post.ctaTitle}</h2>
          <p className="text-muted-foreground mb-6">15204 W 119th St, Olathe, KS 66062</p>
          <a
            href="https://comgahoustonolathe.toast.site/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-semibold text-white hover:bg-primary-hover transition-colors"
          >
            Order Online
          </a>
        </div>
      </article>
    </main>
  )
}
