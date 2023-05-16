import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export default function Home() {
  const { data, error } = useSWR('../api/naverAPI', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((productInfo, index) => (
        <div key={index}>
          <p>Store: {productInfo.store}</p>
          <p>Price: {productInfo.price}</p>
          <p>image: {productInfo.image}</p>
          <p>--------------------------------------------------</p>
        </div>
      ))}
    </div>
  );
}
