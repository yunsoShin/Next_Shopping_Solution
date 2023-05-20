import { SearchForm } from "../components/searchForm";
import { ProductList } from "../components/productList";

export default function ProductsPage() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <SearchForm onSubmit={setSearch} />
      <ProductList search={search} />
    </div>
  );
}