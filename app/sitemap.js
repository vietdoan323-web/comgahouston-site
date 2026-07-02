export default function sitemap() {
  const base = 'https://www.comgahouston.com'
  const now = new Date().toISOString()

  return [
    { url: base,                              lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/menu`,                    lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/pho-kansas-city`,         lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/banh-mi-kansas-city`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/com-ga-kansas-city`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/catering`,                lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`,                    lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/blog/what-is-com-ga`,     lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/how-to-eat-pho`,     lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/blog/vietnamese-coffee-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/about`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`,                 lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/privacy-policy`,          lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
    { url: `${base}/terms`,                   lastModified: now, changeFrequency: 'yearly',  priority: 0.2 },
  ]
}
