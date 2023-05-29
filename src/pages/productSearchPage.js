import { SearchForm } from "../components/searchForm";
import { ProductItem } from "../components/productItem";
import Loading from "../components/loading";
import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductSearchPage({ initialSearch }) {
  const [search, setSearch] = useState(initialSearch);
  const [pageIndex, setPageIndex] = useState(1);

  const { data, error, mutate } = useSWR(
    search ? `/api/${search}?pageIndex=${pageIndex}` : null,
    fetcher
  );

  const handleNextBTN = () => {
    setPageIndex(pageIndex + 1);
  };
  useEffect(() => {
    if (search) {
      mutate();
    }
  }, [pageIndex, mutate, search]);

  const handlePrevBTN = () => {
    if (pageIndex > 1) {
      setPageIndex(pageIndex - 1);
    }
  };

  if (error) return <div>Failed to load</div>;

  if (!data) {
    if (!search) {
      return <SearchForm onSubmit={setSearch} />;
    } else {
      return (
        <div>
          <Loading />
        </div>
      ); // Show loading message
    }
  }
  if (data) {
    console.log(data);
  }
  return (
    <div>
      <SearchForm onSubmit={setSearch} />
      {data.map((item, index) => (
        <ProductItem key={index} item={item} />
      ))}
      <button onClick={handlePrevBTN}>이전페이지</button>
      <button onClick={handleNextBTN}>다음페이지</button>
    </div>
  );
}

export async function getServerSideProps() {
  const initialSearch = "무드등";

  return {
    props: {
      initialSearch,
    },
  };
}
