import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export default function Home() {
  const { data, error } = useSWR('/api/naverAPI', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
          <p>Min Price: {item.minPrice}</p>
        </div>
      ))}
    </div>
  );
}
