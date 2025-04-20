import { SearchInputProvider } from "../../context/SearchInputContext";
import SearchForm from "./SearchForm";

function SearchInput() {
  return (
    <SearchInputProvider>
      <SearchForm />
    </SearchInputProvider>
  );
}

export default SearchInput;
