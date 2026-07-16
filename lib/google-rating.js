const FALLBACK = { rating: 4.5, count: 143 }

export async function getGoogleRating() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    console.warn('[google-rating] Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID, using fallback')
    return FALLBACK
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'rating,userRatingCount',
        },
        next: { revalidate: 86400 },
      }
    )

    if (!res.ok) {
      console.warn(`[google-rating] API returned ${res.status}, using fallback`)
      return FALLBACK
    }

    const data = await res.json()
    return {
      rating: data.rating ?? FALLBACK.rating,
      count: data.userRatingCount ?? FALLBACK.count,
    }
  } catch (err) {
    console.warn('[google-rating] Fetch failed, using fallback:', err.message)
    return FALLBACK
  }
}
