import useSWR from 'swr';
import { useState } from 'react';
import { ProductItem } from './productItem';
import { SearchForm } from './searchForm';

const fetcher = url => fetch(url).then(res => res.json());


export function ProductList({ search }) {
  const { data, error } = useSWR(search ? `/api/${search}` : null, fetcher);

  if (error) return <div>Failed to load</div>;
    
  if (!data){
    if (!search) {
      return <div>Start your search!</div> // Prompt the user to start a search
    } else {
      return <div>Loading...</div> // Show loading message
    }
  }
  

  return (
    <div>
      {data.map((item, index) => (
        <ProductItem key={index} item={item} />
      ))}
    </div>
  );
}
