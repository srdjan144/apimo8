export default async function handler(req, res) {
  const response = await fetch("https://api.apimo.pro/agencies/2188/properties", {
    headers: {
      Authorization: "4279:21217b006c066cd3800e5d44da62ad22f5c5a74a"
    }
  });

  if (!response.ok) {
    return res.status(response.status).json({ error: "Erreur lors de la récupération des biens" });
  }

  const data = await response.json();
  res.status(200).json(data);
}