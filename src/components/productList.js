import useSWR from "swr";
import { useState, useEffect } from "react";
import { ProductItem } from "./productItem";
import Loading from "./loading";

const fetcher = (url) => fetch(url).then((res) => res.json());

export function ProductList({ search }) {
  const [pageIndex, setPageIndex] = useState(1);
  const { data, error, mutate } = useSWR(
    search ? `/api/${search}?pageIndex=${pageIndex}` : null,
    fetcher
  );

  if (error) return <div>Failed to load</div>;

  if (!data) {
    if (!search) {
      return <div>Start your search!</div>; // Prompt the user to start a search
    } else {
      return (
        <div>
          <Loading />
        </div>
      ); // Show loading message
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
