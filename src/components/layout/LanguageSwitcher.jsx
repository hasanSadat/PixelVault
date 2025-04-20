// components/LanguageSwitcher.jsx
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { PiTranslateBold } from "react-icons/pi";
import Loading from "./Loading";
import useIsRTL from "../../hook/useIsRTL";

const languages = [
  { code: "fa", label: "فارسی" },
  { code: "ar", label: "العربية" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
  { code: "ru", label: "Русский" }
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const currentLang = i18n.language;
  const IsRTL = useIsRTL()
  const filteredLangs = languages.filter((lang) => lang.code !== currentLang);
  
  const loadingTime = () =>
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  const handleChangeLanguage = (code) => {
    setLoading(true);
    localStorage.setItem("selectedLanguage", code);
    i18n.changeLanguage(code);
    setOpen(false);
    loadingTime();
  };

  useEffect(() => {
    // در زمان mount، زبان ذخیره‌شده را بازیابی و اعمال کن
    const storedLanguage = localStorage.getItem("selectedLanguage");

    if (storedLanguage && storedLanguage !== i18n.language) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  return (
    <>
      {/* نمایش لایه پوشاننده با افکت بلور وقتی لودینگ فعال است */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="min-h-screen fixed inset-0 z-50 backdrop-blur-lg bg-black bg-opacity-90 flex items-center justify-center"
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex">
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-xl hover:text-gray-300 transition"
          title="Change Language"
        >
          <PiTranslateBold />
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className={`absolute ${
                IsRTL ? "left-0" : "right-0"
              } top-10 bg-white shadow-lg rounded-md text-sm text-black w-28 z-50`}
            >
              {filteredLangs.map((lang) => (
                <li
                  key={lang.code}
                  className="px-3 py-2 hover:bg-gray-300 cursor-pointer rounded-md"
                  onClick={() => handleChangeLanguage(lang.code)}
                >
                  {lang.label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default LanguageSwitcher;
