import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

/** Normalize a frontmatter date (string or YAML Date) to 'YYYY-MM-DD'. */
function toIsoDate(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  return String(value).slice(0, 10)
}

function parsePost(filename) {
  const slug = filename.replace(/\.md$/, '')
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf8')
  const { data, content } = matter(raw)
  const date = toIsoDate(data.date)
  return {
    slug,
    title: data.title,
    description: data.description,
    excerpt: data.excerpt || data.description,
    date,
    dateModified: data.dateModified ? toIsoDate(data.dateModified) : date,
    category: data.category || 'Stories',
    image: data.image,
    imageAlt: data.imageAlt || data.title,
    ctaTitle: data.ctaTitle || 'Come taste it for yourself',
    html: marked.parse(content),
  }
}

/** All posts, newest first. Skips README and non-markdown files. */
export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.md') && f.toLowerCase() !== 'readme.md')
    .map(parsePost)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

/** A single post by slug, or null. */
export function getPost(slug) {
  const file = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(file)) return null
  return parsePost(`${slug}.md`)
}

/** 'YYYY-MM-DD' -> 'April 21, 2026' */
export function formatDate(iso) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}
