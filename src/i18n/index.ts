import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import et from "./locales/et.json";
import en from "./locales/en.json";
import fi from "./locales/fi.json";

export const SUPPORTED_LANGS = ["et", "en", "fi"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

const STORAGE_KEY = "heilares.lang";

export function getSupportedLang(language?: string): Lang {
  const lang = language?.slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(lang as Lang) ? (lang as Lang) : "et";
}

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "et";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && (SUPPORTED_LANGS as readonly string[]).includes(stored)) {
      return stored as Lang;
    }
    const nav = window.navigator.language?.slice(0, 2).toLowerCase();
    if (nav && (SUPPORTED_LANGS as readonly string[]).includes(nav)) {
      return nav as Lang;
    }
  } catch {
    // ignore
  }
  return "et";
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      et: { translation: et },
      en: { translation: en },
      fi: { translation: fi },
    },
    lng: detectInitialLang(),
    fallbackLng: "et",
    supportedLngs: SUPPORTED_LANGS as unknown as string[],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

  if (typeof window !== "undefined") {
    i18n.on("languageChanged", (lng) => {
      try {
        window.localStorage.setItem(STORAGE_KEY, lng);
      } catch {
        // ignore
      }
    });
  }
}

export default i18n;

