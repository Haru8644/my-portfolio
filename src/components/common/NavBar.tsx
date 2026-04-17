"use client";

import { Globe, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const navItems = {
  en: [
    { label: "Screens", href: "#showcase" },
    { label: "Journey", href: "#journey" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ],
  ja: [
    { label: "画面", href: "#showcase" },
    { label: "学歴・経歴", href: "#journey" },
    { label: "スキル", href: "#skills" },
    { label: "プロジェクト", href: "#projects" },
  ],
} as const;

export const NavBar = () => {
  const { lang, setLanguage } = useLanguage();

  return (
    <div className="sticky top-0 z-50 px-4 pb-3 pt-4 md:px-6">
      <nav className="glass-panel mx-auto flex w-full max-w-7xl items-center justify-between rounded-[1.75rem] px-4 py-3 md:px-6">
        <a href="#top" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-slate-400">PORTFOLIO</p>
            <p className="text-base font-bold tracking-tight text-slate-900">
              Haruki Ino<span className="text-gradient-azure">.dev</span>
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems[lang].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white/80 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-white/70 bg-white/70 p-1 shadow-sm">
            <span className="hidden pl-2 text-slate-500 sm:inline-flex">
              <Globe className="h-4 w-4" />
            </span>
            <button
              type="button"
              onClick={() => setLanguage("ja")}
              className={[
                "rounded-full px-3 py-1.5 text-sm font-semibold transition",
                lang === "ja"
                  ? "bg-slate-900 text-white shadow"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900",
              ].join(" ")}
            >
              JA
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={[
                "rounded-full px-3 py-1.5 text-sm font-semibold transition",
                lang === "en"
                  ? "bg-slate-900 text-white shadow"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900",
              ].join(" ")}
            >
              EN
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
