import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ImageDetailContext = createContext();

export function ImageDetailProvider({ children }) {
  const { imageid } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const savedState = JSON.parse(localStorage.getItem("imageDetailState"));
  const initialState = state || savedState || {};

  const [photo, setPhoto] = useState(initialState.photo || null);
  const [allImages] = useState(initialState.allImages || []);
  const [currentIndex, setCurrentIndex] = useState(
    initialState.currentIndex || 0
  );
  const [loadedImg, setLoadedImg] = useState(true);

  const notLastImg = currentIndex < allImages.length - 1;
  const notFirstImg = currentIndex > 0;

  useEffect(() => {
    if (!state && !savedState) {
      navigate("/");
    }
  }, [state, navigate]);

  useEffect(() => {
    localStorage.setItem(
      "imageDetailState",
      JSON.stringify({
        photo,
        allImages,
        currentIndex,
        source: initialState.source,
      })
    );
  }, [photo, allImages, currentIndex]);

  const handleImageChange = (direction) => {
    const isNext = direction === "next";
    const newIndex = isNext ? currentIndex + 1 : currentIndex - 1;

    if (newIndex >= 0 && newIndex < allImages.length) {
      setLoadedImg(true);

      setTimeout(() => {
        setPhoto(allImages[newIndex]);
        setCurrentIndex(newIndex);

        navigate(`/${initialState.source}/${allImages[newIndex].id}`, {
          state: {
            photo: allImages[newIndex],
            allImages,
            currentIndex: newIndex,
            source: initialState.source,
          },
          replace: true,
        });
      }, 1000);
    }
  };

  const handleLoadingImage = () => {
    setLoadedImg(false);
  };

  useEffect(() => {
    const handlePressKey = (e) => {
      if (e.key === "ArrowRight") {
        handleImageChange("next");
      } else if (e.key === "ArrowLeft") {
        handleImageChange("prev");
      }
    };

    window.addEventListener("keydown", handlePressKey);
    return () => {
      window.removeEventListener("keydown", handlePressKey);
    };
  }, [currentIndex]);
  return (
    <ImageDetailContext.Provider
      value={{
        photo,
        allImages,
        currentIndex,
        loadedImg,
        notFirstImg,
        notLastImg,
        handleImageChange,
        handleLoadingImage,
        imageid,
      }}
    >
      {children}
    </ImageDetailContext.Provider>
  );
}

export default ImageDetailContext;
