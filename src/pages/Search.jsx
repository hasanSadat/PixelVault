import SearchInput from "../components/searchInput/SearchInput";
import useTitle from "../hook/useTitle";
import { useTranslation } from "react-i18next";

function Search() {
  
  useTitle("search");

  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
     
      <h1 className="text-3xl font-bold mb-6"> {t("search.title")}</h1>
     
      <p className="text-zinc-400 mb-4 text-center">
        {t("search.description")}
      </p>

      <SearchInput />

      <p className="text-amber-500 mt-4 text-center">
        {t("search.correctSearch")}
      </p>

    </div>
  );
}

export default Search;
