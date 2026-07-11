import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { tr, type Lang } from "./translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };
const I18nContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "abm.lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "en" || saved === "de" || saved === "fr") {
        setLangState(saved);
        return;
      }
      const nav = navigator.language.slice(0, 2).toLowerCase();
      if (nav === "de" || nav === "fr") setLangState(nav);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch { /* ignore */ }
  };

  const t = (key: string) => tr(lang, key);

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}