import useSWR from 'swr';
import { useState } from 'react';

const fetcher = url => fetch(url).then(res => res.json());

export default function productList() {
  const [search, setSearch] = useState('');
  const { data, error } = useSWR(search ? `/api/${search}` : null, fetcher);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.elements.searchInput;
    setSearch(value);
  };

  if (error) return <div>Failed to load</div>;
  
  if (!data) return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="searchInput" type="text" />
        <button type="submit">검색</button>
      </form>
    </div>
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="searchInput" type="text" />
        <button type="submit">검색</button>
      </form>
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




    
