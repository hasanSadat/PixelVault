import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SearchInputContext from "../../context/SearchInputContext";
import { useTranslation } from "react-i18next";

function RecentSearches() {
  const { recentSearches, deleteSearchQuery, clearAllSearches, setSearchQuery , onFocused } = useContext(SearchInputContext);
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      { onFocused &&recentSearches.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 w-full z-20 bg-zinc-700 border border-zinc-600 rounded-lg shadow-lg text-white text-sm mt-2 mb-[3rem]"
        >
          <ul>
            {recentSearches.map((search, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className=" flex items-center justify-between hover:bg-zinc-600 cursor-pointer rounded-lg"
             
             >
                <span
                  className="flex-1 px-2 py-2"
                onClick={() => setSearchQuery(search)}

                >
                  {search}
                </span>
                <button
                  onClick={() => deleteSearchQuery(search)}
                  className="pr-2 text-red-400 hover:text-red-600 transition-colors text-lg ml-4"
                >
                  ✖
                </button>
              </motion.li>
            ))}
          </ul>
          <button
            onClick={clearAllSearches}
            className="px-2 py-1 md:px-4 md:py-2 text-sm w-full bg-red-600 hover:bg-red-700 transition-all text-white rounded-b-lg"
          >
            {t("search.clearHistory")}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default RecentSearches;
