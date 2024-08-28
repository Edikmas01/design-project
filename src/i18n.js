import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";


import translationEn from "../public/locales/en/translation.json";
import translationRu from "../public/locales/ru/translation.json";
import translationDe from "../public/locales/de/translation.json";
import translationUk from "../public/locales/uk/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEn,
      },
      de: {
        translation: translationDe,
      },
      ru: {
        translation: translationRu,
      },
      uk: {
        translation: translationUk,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
