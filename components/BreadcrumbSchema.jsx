const BASE = 'https://www.comgahouston.com'

/**
 * Renders BreadcrumbList JSON-LD.
 * Either pass name+path for a Home > [name] trail,
 * or trail={[{ name, path }, ...]} for deeper pages.
 */
export default function BreadcrumbSchema({ name, path, trail }) {
  const crumbs = trail ?? [{ name, path }]
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.name,
        item: `${BASE}${c.path}`,
      })),
    ],
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
