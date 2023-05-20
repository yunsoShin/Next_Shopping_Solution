import { SearchForm } from "../components/searchForm";
import {ProductList} from "../components/productList";
import { useState } from "react";


export default function ProductSearchPage() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <SearchForm onSubmit={setSearch} />
      <ProductList search={search} />
    </div>
  );
}