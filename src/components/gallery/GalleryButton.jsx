import { useContext } from "react";
import { useTranslation } from "react-i18next";

import ClearAllFav from "../favorite/ClearAllFav";
import Button from "../layout/Button";

import { GalleryContext } from "../../context/galleryContext";

import { handleScrollTop } from "../../utils/handleScroll";

function GalleryButton({ source, numOfImg }) {
  const { fromExplore, loading, updateExploreImages } =
    useContext(GalleryContext);
    const { t } = useTranslation();


 

  if (!["favorite", "home", "explore"].includes(source)) return;

  if (source === "favorite")

    return <ClearAllFav/>

  return (
    <>
      <div className="text-center mt-4">
        {source === "home" && !fromExplore ? (
          <Button IsLink={true} path={"./explore"} onClick={handleScrollTop}>
            {t("gallery.seeMore")}
          </Button>
        ) : (
          <Button
            onClick={() =>{ updateExploreImages(numOfImg, source)}}
            disabled={loading}
          >
            {loading ? t("gallery.loading") : t("gallery.newImages")}
          </Button>
        )}
      </div>
    </>
  );
}

export default GalleryButton;
