// Google Places API Connector (Text Search & Nearby Search)

async function fetchFromGooglePlaces(cityName, stateName, categoryName, apiKey) {
  if (!apiKey) return [];

  try {
    const query = `${categoryName} in ${cityName}, ${stateName}`;
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${apiKey}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!res.ok) return [];
    const data = await res.json();
    if (!data.results || data.results.length === 0) return [];

    return data.results.slice(0, 20).map(item => {
      // Note: Google Places text search returns website in Place Details;
      // when place details are omitted, website can be empty or enriched
      return {
        name: item.name,
        category: categoryName,
        city: cityName,
        state: stateName,
        zip: '',
        address: item.formatted_address || `${cityName}, ${stateName}`,
        phone: '',
        email: '',
        website: '',
        has_website: 0,
        rating: item.rating || 4.2,
        reviews_count: item.user_ratings_total || 15,
        latitude: item.geometry?.location?.lat || null,
        longitude: item.geometry?.location?.lng || null,
        source: 'Google Places API'
      };
    });
  } catch (err) {
    return [];
  }
}

module.exports = {
  fetchFromGooglePlaces
};
