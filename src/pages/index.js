import useSWR from 'swr';
import { normalizeData } from '../utils/normalizeData';

const fetcher = url => fetch(url).then(res => res.json());

export default function Home() {
  const { data, error } = useSWR('/api/naverAPI', fetcher);

  const normalizeData = (text) => {
    let allowedShops = ["쿠팡", "지마켓", "11번가","옥션","11번가","SSG"]; 
    text.split(" ");
    

    return text
        
    
    ;
  }
  
//...



  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  

  
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name}</p>
          <p>Price: {normalizeData(item.price)}</p>
          <p>Min Price: {item.minPrice}</p>
          <p>-----------------------------------------------</p>
        </div>
      ))}
    </div>
  );
}



    
