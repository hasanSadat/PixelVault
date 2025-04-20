import { useContext } from "react";
import { IoMdSearch } from "react-icons/io";
import SearchInputContext from "../../context/SearchInputContext";
import RecentSearches from "./RecentSearches";
import { useTranslation } from "react-i18next";

function SearchForm() {
  const { searchQuery, setSearchQuery , handleSubmitSearch  ,setOnFocused } = useContext(SearchInputContext);

  const { t } = useTranslation();


  return (
    <div className="relative w-full md:w-[24rem]">
      <form
        onSubmit={handleSubmitSearch}
        className="flex items-center bg-zinc-800 border border-zinc-700 rounded-lg shadow-lg text-white text-sm px-3 py-2 transition-all duration-300 focus-within:border-yellow-400"
      >

        <button
          type="submit"
          className="text-white grid place-content-center hover:text-yellow-400 transition-colors"
        >
          <IoMdSearch size={25} />
        </button>

        <input
        onFocus={() => setOnFocused(true)}
        onBlur={() => setOnFocused(false)}
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          spellCheck="false"
          className="bg-transparent py-1.5 outline-none placeholder:text-zinc-400 flex-1 mx-3 text-lg"
          placeholder={t("search.placeholder")}
        />

        {searchQuery && (
          <button
            className="text-zinc-400 hover:text-red-400 transition-colors"
            onClick={() => setSearchQuery("")}
          >
            ✖
          </button>
        )}
      </form>
      <RecentSearches />
    </div>
  );
}

export default SearchForm;
