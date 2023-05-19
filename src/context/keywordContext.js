import { useContext } from "react";
import searchKeyword from "../components/searchKeyword";

const AuthContext = createContext();

export function SearchWordContextProvider({ children }) {
  const [word, setWord] = useState();

  useEffect(() => {
    searchKeyword((word) => setUser(word));
  }, []);

  return (
    <SearchWordContextProvider
      value={{ word }}
    >
      {children}
    </SearchWordContextProvider>
  );
}

export function useSearchWordContext() {
  return useContext(SearchWordContextProviderContext);
}
