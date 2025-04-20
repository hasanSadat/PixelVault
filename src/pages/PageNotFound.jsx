import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useTitle from "../hook/useTitle";

function PageNotFound() {
  const { t } = useTranslation();
  useTitle("Page Not Found")
  return (
    <div className="relative flex flex-col items-center justify-center h-screen  text-white">

      <h1 className="text-8xl font-bold mb-4 animate-bounce">404</h1>
      <h2 className=" text-xl md:text-4xl font-semibold mb-6"> {t("notFound.title")}</h2>
      <p className="text-lg md:text-xl text-center max-w-md mb-10">
        {t("notFound.description")}
      </p>

      <Link
        to="/"
        className="z-10 px-8 py-4 bg-white text-gray-800 rounded-lg font-medium text-lg shadow-lg hover:shadow-2xl hover:bg-gray-200 transition-all duration-300"
      >
             {t("notFound.goBack")}
 
      </Link>
    </div>
  );
}

export default PageNotFound;
