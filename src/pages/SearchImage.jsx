import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import useTitle from "../hook/useTitle";
import { GalleryContext } from "../context/galleryContext";
import MainSearchPage from "../components/searchingImage/mainSearchPage";
import { useTranslation } from "react-i18next";
function SearchImage() {

 const SearchQuery = useParams()?.SearchQuery;

  useTitle(`Searching for "${SearchQuery}"`);

  const { searchImagesHandler } = useContext(GalleryContext);

  useEffect(() => {
    searchImagesHandler(SearchQuery);
  }, [SearchQuery]);


  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center min-h-screen p-6 md:mt-14">
   
    <div className="text-center mb-10">
   
      <h1 className="text-3xl font-bold animate-bounce">
      {t("search.resultsTitle")} <span className="text-blue-400">{SearchQuery}</span>
      </h1>
     
      <p className="text-lg text-gray-300 mt-4">
      {t("search.resultsDescription")} 
      </p>
      
    </div>

      <MainSearchPage SearchQuery={SearchQuery} />
  </div>
  );
}

export default SearchImage;
