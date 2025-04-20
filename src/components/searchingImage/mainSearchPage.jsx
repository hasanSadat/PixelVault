import { useContext } from "react";
import { GalleryContext } from "../../context/galleryContext";
import Gallery from "../gallery/Gallery";
import { useTranslation } from "react-i18next";
import ErrorMsg from "../layout/ErrorMsg";

function MainSearchPage({ SearchQuery }) {
  const { loading, error, images, showError, setShowError } =
    useContext(GalleryContext);
  const { t } = useTranslation();
  if (!loading && showError)
    return (
      <div className="text-red-500 text-lg font-semibold mt-16">
        <ErrorMsg error={error} setShowError={setShowError} />
      </div>
    );
  if (!loading && images.length === 0 && !error)
    return (
      <div className="text-gray-400 text-lg font-medium mt-16">
        {t("search.noImages")}
      </div>
    );

  if (!error) return <Gallery source={`search/${SearchQuery}`} />;
}

export default MainSearchPage;
