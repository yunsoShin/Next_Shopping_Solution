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
      return <div>Start your search!</div>;
    } else {
      return <div>로딩컴포넌트</div>;
    }
  }

  return (
    <div>
      {data.map((item, index) => (
        <ProductItem key={index} item={item} />
      ))}
      <button onClick={handlePrevBTN}>테스트용 이전페이지 버튼</button>
      <button onClick={handleNextBTN}>테스트용 다음페이지 버튼</button>
    </div>
  );
}
