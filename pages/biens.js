import useSWR from 'swr';

export default function Biens() {
  const { data, error } = useSWR('/api/properties', fetcher);

  if (error) return <div>Erreur de chargement</div>;
  if (!data) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Nos biens immobiliers</h1>
      {data.map(bien => (
        <div key={bien.id}>
          <h2>{bien.title}</h2>
          <p>Prix: {bien.price} CHF</p>
        </div>
      ))}
    </div>
  );
}
