import { createContext, useState } from "react";
import { RandomImages, searchImages } from "../services/api";
import { handleError } from "../utils/handleError";
import { useTranslation } from "react-i18next";

export const GalleryContext = createContext();

export function GalleryContextProvider({ children }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showError, setShowError] = useState(false);
  const { t } = useTranslation();

  async function searchImagesHandler(SearchQuery) {
    try {
      setImages([]);
      setLoading(true);
      setError(null);
      setShowError(false);

      const cachedSearches =
        JSON.parse(localStorage.getItem("allSearches")) || {};

      if (cachedSearches[SearchQuery]) {
        setImages(cachedSearches[SearchQuery]);
        setLoading(false);
        return;
      } else {
        const data = await searchImages(SearchQuery);
        if (data.error) {
          console.error(data.error.code, data.error);
          throw new Error(handleError(t, data.error.code));
        }

        cachedSearches[SearchQuery] = data;
        const MAX_CACHE_SIZE = 7;
        const searchKeys = Object.keys(cachedSearches);
        if (searchKeys.length > MAX_CACHE_SIZE) {
          delete cachedSearches[searchKeys[0]];
        }

        localStorage.setItem("allSearches", JSON.stringify(cachedSearches));
        setImages(data);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  }

  const exploreImagesHandler = async (fromExplore, numOfImg) => {
    try {
      setImages([]);
      setLoading(true);
      setError(null);
      setShowError(false);

      const cachedData = fromExplore
        ? localStorage.getItem("exploreImages")
        : localStorage.getItem("homeExploreImages");

      if (cachedData) {
        setImages(JSON.parse(cachedData));
        setLoading(false);
        return;
      } else {
        const data = await RandomImages(numOfImg);

        if (data.error) {
          const errorMassage = handleError(t, data.error.code);
          throw new Error(errorMassage);
        }

        if (Array.isArray(data)) {
          setImages(data);
          localStorage.setItem(
            fromExplore ? "exploreImages" : "homeExploreImages",
            JSON.stringify(data)
          );
        }
      }
    } catch (err) {
      console.error(err.message);
      setError(err.message);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  const updateExploreImages = async (numOfImg) => {
    try {
      setLoading(true);
      setError(null);
      setShowError(false);

      const newImages = await RandomImages(numOfImg);

      if (
        newImages.error ||
        !Array.isArray(newImages) ||
        newImages.length === 0
      ) {
        const errorMassage = handleError(t, newImages.error.code);
        throw new Error(errorMassage);
      }

      setImages(newImages);

      localStorage.setItem("exploreImages", JSON.stringify(newImages));
    } catch (err) {
      console.error(err);
      setError(err.message || "Failed to update images.");
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <GalleryContext.Provider
      value={{
        images,
        loading,
        error,
        showError,
        setShowError,
        updateExploreImages,
        exploreImagesHandler,
        searchImagesHandler,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}
