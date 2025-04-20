import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchInputContext = createContext();

export function SearchInputProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [onFocused, setOnFocused] = useState(false);
  const navigate = useNavigate();

 
  useEffect(() => {
    const savedSearches = JSON.parse(localStorage.getItem("allSearches")) || {};
    const formattedSearches = Object.keys(savedSearches); 
    setRecentSearches(formattedSearches);
  }, []);

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim().toLowerCase();
    if (trimmedQuery.length < 3) return;
    navigate(`/search/${trimmedQuery}`);
  };

  const deleteSearchQuery = (queryToDelete) => {
    const savedSearches = JSON.parse(localStorage.getItem("allSearches")) || {};
    delete savedSearches[queryToDelete];
    localStorage.setItem("allSearches", JSON.stringify(savedSearches));

    setRecentSearches((prevSearches) =>
      prevSearches.filter((search) => search !== queryToDelete)
    );
  };

  const clearAllSearches = () => {
    localStorage.removeItem("allSearches");
    setRecentSearches([]);
  };

  return (
    <SearchInputContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        setOnFocused,
        onFocused,
        recentSearches,
        handleSubmitSearch,
        deleteSearchQuery,
        clearAllSearches,
      }}
    >
      {children}
    </SearchInputContext.Provider>
  );
}

export default SearchInputContext;
