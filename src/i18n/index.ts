import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import et from "./locales/et.json";
import en from "./locales/en.json";
import fi from "./locales/fi.json";

export const SUPPORTED_LANGS = ["et", "en", "fi"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        et: { translation: et },
        en: { translation: en },
        fi: { translation: fi },
      },
      fallbackLng: "et",
      supportedLngs: SUPPORTED_LANGS as unknown as string[],
      interpolation: { escapeValue: false },
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "heilares.lang",
      },
    });
}

export default i18n;
