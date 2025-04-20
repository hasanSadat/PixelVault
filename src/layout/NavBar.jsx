import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import LanguageSwitcher from "../components/layout/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import useIsRTL from "../hook/useIsRTL";

function NavBar() {
  const route = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isRTL = useIsRTL();

  return (
    <nav
      className={` flex justify-between items-center py-4 px-6 bg-black bg-opacity-50    backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-10 transition-all duration-500`}
    >
      {route.pathname !== "/" ? (
        <button
          onClick={() => navigate(-1)}
          className={`text-white text-2xl hover:text-gray-400 transition ${
            isRTL ? "md:mr-[4.5rem] rotate-180" : "md:ml-[4.5rem]"
          }`}
          title="Go Back"
        >
          <IoIosArrowBack />
        </button>
      ) : (
        <div className={`${isRTL ? "md:mr-[4.5rem]" : "md:ml-[4.5rem]"}`}></div>
      )}

      <Link to="/" className="text-white  md:text-2xl font-bold tracking-wide">
        PixelVault
      </Link>

      <div className="flex gap-4 items-center jusrify-center">
        <Link
          to="/search"
          className="text-white hover:text-gray-400 transition"
        >
          {t("search.search")} 🔎
        </Link>

        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default NavBar;
