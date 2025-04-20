import Gallery from "../components/gallery/Gallery";
import useTitle from "../hook/useTitle";
import { useTranslation } from "react-i18next";

function Explore() {

  useTitle("Explore");

  const { t } = useTranslation();

  const categories = (t("explore.categories", { returnObjects: true }));
  
  return (
    <div className="flex flex-col items-center min-h-screen px-4">
      <div className="text-center mt-10 md:mt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
        {t("explore.title")}

        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        {t("explore.description")}
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-stretch gap-4 mt-8 w-full max-w-4xl">
        {categories.map((category) => (
          <div
            key={category}
            className="flex-1 px-4 py-3 md:min-w-32 rounded-lg text-white text-center font-medium transition bg-gray-700 md:hover:bg-gray-600 shadow-md "
          >
            {category}
          </div>
        ))}
      </div>

      <div className="mt-12 w-full">
        <Gallery numOfImg={24} fromExplore={true} />
      </div>
    </div>
  );
}

export default Explore;
