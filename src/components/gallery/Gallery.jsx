import { useContext, useEffect } from "react";

import { GalleryContext } from "../../context/galleryContext";

import ImageGalleryGrid from "../imageGalleryGrid/imageGalleryGrid";
import ErrorMsg from "../layout/ErrorMsg";
import GalleryButton from "./GalleryButton";

export default function Gallery({
  numOfImg = 16,
  fromExplore = false,
  favData = [],
  source = "explore",
}) {

  const { images, error, showError, exploreImagesHandler, setShowError } =
    useContext(GalleryContext);

  useEffect(() => {
    if (source === "explore" || source === "home")
      exploreImagesHandler(fromExplore, numOfImg);
  }, []);
  
  return (
    <>
      {showError && <ErrorMsg error={error} setShowError={setShowError} />}

      <ImageGalleryGrid
        data={source === "favorite" ? favData : images}
        source={source}
      />
      <GalleryButton source={source} numOfImg={numOfImg} />
    </>
  );
}
