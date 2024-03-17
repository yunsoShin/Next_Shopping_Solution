import useSWR from "swr";
import { useState, useEffect } from "react";
import { ProductItem } from "./productItem";
import Loading from "./loading";
import styled from "styled-components";

const StyledPageButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  width: 150px;
`; 

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
      <StyledPageButton onClick={handlePrevBTN}>이전페이지</StyledPageButton>
      <StyledPageButton onClick={handleNextBTN}>다음페이지</StyledPageButton>
    </div>
  );
}
