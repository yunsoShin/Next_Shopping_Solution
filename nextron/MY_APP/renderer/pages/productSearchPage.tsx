import { SearchForm } from "../component/serchForm";
import { ProductList } from "../component/productList";
import { useState } from "react";

export default function ProductSearchPage({ initialSearch }) {
  const [search, setSearch] = useState(initialSearch);

  return (
    <div>
      <SearchForm onSubmit={setSearch} />
      <ProductList search={search} />
    </div>
  );
}
