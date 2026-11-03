import { getAllPosts } from '@/lib/blog'

// lastModified dates reflect the last meaningful content change per page.
// Update these when you make substantive edits (git log -1 --format=%as -- <file>).
const LAST_UPDATED = {
  home: '2026-11-02',
  menu: '2026-07-16',
  pho: '2026-07-17',
  banhMi: '2026-07-17',
  comGa: '2026-11-02',
  overlandPark: '2026-07-17',
  olathe: '2026-11-02',
  catering: '2026-11-02',
  blog: '2026-07-17',
  about: '2026-11-02',
  contact: '2026-11-02',
}

export default function sitemap() {
  const base = 'https://www.comgahouston.com'

  const blogPosts = getAllPosts().map(post => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.dateModified,
  }))

  return [
    { url: base, lastModified: LAST_UPDATED.home },
    { url: `${base}/menu`, lastModified: LAST_UPDATED.menu },
    { url: `${base}/pho-kansas-city`, lastModified: LAST_UPDATED.pho },
    { url: `${base}/banh-mi-kansas-city`, lastModified: LAST_UPDATED.banhMi },
    { url: `${base}/com-ga-kansas-city`, lastModified: LAST_UPDATED.comGa },
    { url: `${base}/vietnamese-food-overland-park`, lastModified: LAST_UPDATED.overlandPark },
    { url: `${base}/vietnamese-food-olathe`, lastModified: LAST_UPDATED.olathe },
    { url: `${base}/catering`, lastModified: LAST_UPDATED.catering },
    { url: `${base}/blog`, lastModified: LAST_UPDATED.blog },
    ...blogPosts,
    { url: `${base}/about`, lastModified: LAST_UPDATED.about },
    { url: `${base}/contact`, lastModified: LAST_UPDATED.contact },
    // /privacy-policy and /terms are noindex and intentionally excluded.
  ]
}
