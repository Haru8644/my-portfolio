"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { Language } from "@/data/types";

const LANGUAGE_STORAGE_KEY = "haruki-portfolio-language";
const LANGUAGE_EVENT = "portfolio-language-change";
let memoryLanguage: Language | undefined;

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const isLanguage = (value: string | null): value is Language =>
  value === "ja" || value === "en";

function getLanguage(): Language {
  if (memoryLanguage) return memoryLanguage;
  try {
    const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isLanguage(stored) ? stored : "ja";
  } catch {
    return "ja";
  }
}

function subscribe(callback: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === LANGUAGE_STORAGE_KEY || event.key === null) {
      memoryLanguage = undefined;
      callback();
    }
  };
  window.addEventListener("storage", onStorage);
  window.addEventListener(LANGUAGE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(LANGUAGE_EVENT, callback);
  };
}

function setLanguage(nextLanguage: Language) {
  memoryLanguage = nextLanguage;
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  } catch {
    // Language switching also works when browser storage is unavailable.
  }
  window.dispatchEvent(new Event(LANGUAGE_EVENT));
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore<Language>(
    subscribe,
    getLanguage,
    () => "ja",
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLanguage(lang === "en" ? "ja" : "en");

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
