export default function manifest() {
  return {
    name: 'Cơm Gà Houston',
    short_name: 'Cơm Gà Houston',
    description:
      'Authentic Vietnamese restaurant in Olathe, KS. Signature chicken rice, pho, and banh mi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf8f5',
    theme_color: '#0E0B08',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
