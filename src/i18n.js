import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./locales/en.json";
import fa from "./locales/fa.json";
import ar from "./locales/ar.json";
import es from "./locales/es.json";
import de from "./locales/de.json";
import fr from "./locales/fr.json";
import pt from "./locales/pt.json";
import ru from "./locales/ru.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fa: { translation: fa },
    ar: { translation: ar },
    es: { translation: es },
    de: { translation: de },
    fr: { translation: fr },
    pt: { translation: pt },
    ru: { translation: ru }
  },
  lng:  localStorage.getItem("selectedLanguage") || "en",
  fallbackLng: 'en', 
  interpolation: { escapeValue: false },
});

export default i18n;
