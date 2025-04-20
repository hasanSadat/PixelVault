import SearchInput from "../components/searchInput/SearchInput";
import Gallery from "../components/gallery/Gallery";
import useTitle from "../hook/useTitle";
import { useTranslation } from "react-i18next";

function Home() {

  useTitle("Welcome");

  const { t } = useTranslation();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mt-10 md:mt-20">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          {t("home.title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto">
          {t("home.description")}{" "}
        </p>
      </div>

      <div className="mt-6">
        <SearchInput />
      </div>

      <div className="mt-12 w-full">
        <Gallery source="home" />
      </div>
    </div>
  );
}

export default Home;
