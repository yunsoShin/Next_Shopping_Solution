import useSWR from 'swr';
import { normalizeData } from '../utils/normalizeData';
import Link from 'next/link';
const fetcher = url => fetch(url).then(res => res.json());

export default function Home() {
  const { data, error } = useSWR('/api/naverAPI', fetcher);


  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  

  
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <a href={item.Link} target='_blank' rel="noopener noreferrer" ><p>Name: {item.name}</p></a>
          <div>
            {Object.entries(normalizeData(item.price)).map(([shop, price]) => (
              <p key={shop}>{shop}: {price}</p>
            ))}
          </div>
          <p>Min Price: {item.minPrice}</p>
          <p>-----------------------------------------------</p>
          
        </div>
      ))}
    </div>
  );
}



    
