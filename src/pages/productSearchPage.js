import { SearchForm } from "../components/searchForm";
import { ProductList } from "../components/productList";
import { useState } from "react";

export default function ProductSearchPage({ initialSearch }) {
  const [search, setSearch] = useState(initialSearch);

  return (
    <div>
      <SearchForm onSubmit={setSearch} />
      {Array.isArray(search) && <ProductList search={search} />}
    </div>
  );
}

export async function getServerSideProps() {
  const initialSearch = "";

  return {
    props: {
      initialSearch,
    },
  };
}
