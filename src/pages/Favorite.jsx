import Gallery from "../components/gallery/Gallery";
import { useNavigate } from "react-router-dom";
import useTitle from "../hook/useTitle";
import { useLikedImages } from "../hook/useLikedImages";

import { useTranslation } from "react-i18next";

function Favorite() {
  useTitle("Favorite");

  const navigate = useNavigate();

  const likeImages = useLikedImages();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center px-4">
      <div className="text-center mt-10 md:mt-16">
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          {t("favorites.title")}
        </h1>
        <p className="text-lg text-gray-300 mt-2">
          {t("favorites.description")}
        </p>
      </div>

      {likeImages.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-xl text-gray-400">No favorite images yet! 😢</p>
          <button
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => navigate("/explore")}
          >
            Explore & Add Favorites 🚀
          </button>
        </div>
      ) : (
        <div className="mt-10 w-full">
          <Gallery source={"favorite"} favData={likeImages.reverse()} />
        </div>
      )}
    </div>
  );
}

export default Favorite;
