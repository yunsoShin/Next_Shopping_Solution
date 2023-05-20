import useSWR from 'swr';
import { useState } from 'react';
import { ProductItem } from './productItem';
import { SearchForm } from './searchForm';

const fetcher = url => fetch(url).then(res => res.json());




function ProductList({ search }) {
  const { data, error } = useSWR(search ? `/api/${search}` : null, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((item, index) => (
        <ProductItem key={index} item={item} />
      ))}
    </div>
  );
}

export default function ProductSearchPage() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <SearchForm onSubmit={setSearch} />
      <ProductList search={search} />
    </div>
  );
}
