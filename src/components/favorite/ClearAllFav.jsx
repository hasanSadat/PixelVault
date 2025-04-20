import { useTranslation } from "react-i18next";
import Button from "../layout/Button";

function ClearAllFav() {
  const { t } = useTranslation();

  const clearLikedImages = () => {
    localStorage.removeItem("likedImages");
    window.location.reload();
  };
  return (
    <div className="text-center mt-4">
      <Button
        onClick={clearLikedImages}
        className="px-4 py-3 my-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300"
      >
        {t("favorites.clearAll")}
      </Button>
    </div>
  );
}

export default ClearAllFav;
