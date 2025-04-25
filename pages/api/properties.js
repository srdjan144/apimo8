export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://api.apimo.pro/agencies/${process.env.NEXT_PUBLIC_APIMO_AGENCY_ID}/properties`,
      {
        headers: {
          Authorization: `Provider ${process.env.NEXT_PUBLIC_APIMO_PROVIDER_ID}:${process.env.APIMO_SECRET_TOKEN}`
        },
        next: { revalidate: 3600 } // Cache 1h
      }
    );

    if (!response.ok) throw new Error(`APIMO error: ${response.status}`);

    const data = await response.json();
    res.status(200).json(data.properties || data);
  } catch (error) {
    res.status(500).json({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
