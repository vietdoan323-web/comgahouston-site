/**
 * Finds the Google Place ID for Com Ga Houston.
 * Usage: GOOGLE_PLACES_API_KEY=your_key node scripts/find-place-id.js
 */
async function main() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) {
    console.error('Set GOOGLE_PLACES_API_KEY env var first')
    process.exit(1)
  }

  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': apiKey,
      'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount',
    },
    body: JSON.stringify({
      textQuery: 'Com Ga Houston 15204 W 119th St Olathe KS',
    }),
  })

  if (!res.ok) {
    console.error(`API error ${res.status}:`, await res.text())
    process.exit(1)
  }

  const data = await res.json()
  if (!data.places?.length) {
    console.error('No results found')
    process.exit(1)
  }

  const place = data.places[0]
  console.log('Place ID:', place.id)
  console.log('Name:', place.displayName?.text)
  console.log('Address:', place.formattedAddress)
  console.log('Rating:', place.rating, `(${place.userRatingCount} reviews)`)
  console.log('')
  console.log('Add to .env.local and Vercel:')
  console.log(`  GOOGLE_PLACE_ID=${place.id}`)
  console.log(`  GOOGLE_PLACES_API_KEY=${apiKey}`)
}

main()
