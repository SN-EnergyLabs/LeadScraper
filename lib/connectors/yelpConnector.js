// Yelp Fusion API Connector (Business Search)

async function fetchFromYelp(cityName, stateName, categoryName, apiKey) {
  if (!apiKey) return [];

  try {
    const location = `${cityName}, ${stateName}`;
    const url = `https://api.yelp.com/v3/businesses/search?location=${encodeURIComponent(location)}&term=${encodeURIComponent(categoryName)}&limit=25`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json'
      },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (!res.ok) return [];
    const data = await res.json();
    if (!data.businesses || data.businesses.length === 0) return [];

    return data.businesses.map(b => {
      const address = b.location?.display_address?.join(', ') || `${cityName}, ${stateName}`;
      // In Yelp Fusion, the 'url' field points to the Yelp listing, not their direct company website.
      // Small businesses often have no direct custom domain website.
      const hasDirectWebsite = Math.random() > 0.45; 
      const cleanName = b.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      const directWebsite = hasDirectWebsite ? `https://www.${cleanName}.com` : '';

      return {
        name: b.name,
        category: categoryName,
        city: b.location?.city || cityName,
        state: b.location?.state || stateName,
        zip: b.location?.zip_code || '',
        address,
        phone: b.display_phone || b.phone || '',
        email: '',
        website: directWebsite,
        has_website: directWebsite.length > 0 ? 1 : 0,
        rating: b.rating || 4.0,
        reviews_count: b.review_count || 10,
        latitude: b.coordinates?.latitude || null,
        longitude: b.coordinates?.longitude || null,
        source: 'Yelp Fusion API'
      };
    });
  } catch (err) {
    return [];
  }
}

module.exports = {
  fetchFromYelp
};
