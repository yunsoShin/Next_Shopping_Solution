import useSWR from 'swr';


const fetcher = url => fetch(url).then(res => res.json());

export default function productList() {
  const { data, error } = useSWR('/api/naverAPI', fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      {data.map((item, index) => (
        
        <div key={index}>
          
          <a href={item.Link} target='_blank' rel="noopener noreferrer" ><p>Name: {item.name}</p></a>
          <div>
            {Object.entries(item.mallPrice).map(([shop, price]) => (
              <p key={shop}>{shop}: {price} 원</p>
            ))}
          </div>
          <p>Min Price: {item.MinPrice} 원</p>
          <p>-----------------------------------------------</p>
          
        </div>
      ))}
    </div>
  );
}



    
