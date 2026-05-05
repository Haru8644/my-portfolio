"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Language } from "@/data/types";

const LANGUAGE_STORAGE_KEY = "haruki-portfolio-language";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const isLanguage = (value: string | null): value is Language => value === "ja" || value === "en";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "ja";
    }

    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isLanguage(storedLanguage) ? storedLanguage : "ja";
  });

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLanguage = (nextLanguage: Language) => setLang(nextLanguage);
  const toggleLang = () => setLang((currentLanguage) => (currentLanguage === "en" ? "ja" : "en"));

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
