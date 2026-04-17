"use client";

import { Github, Trophy } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { PROFILE, ACCOUNTS } from "@/data/constants";

export const Footer = () => {
  const { lang } = useLanguage();

  const githubUrl = ACCOUNTS.find((account) => account.platform === "GitHub")?.url;
  const atcoderUrl = ACCOUNTS.find((account) => account.platform === "AtCoder")?.url;

  return (
    <footer className="px-4 pb-10 pt-6 md:px-6 md:pb-14">
      <div className="glass-panel mx-auto flex w-full max-w-7xl flex-col gap-6 rounded-[2rem] px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">HARUKI INO</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">{PROFILE.name[lang]}</h2>
          <p className="mt-2 text-sm text-slate-600">{PROFILE.university[lang]}</p>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            {lang === "en"
              ? "Built with Next.js, Tailwind CSS, Framer Motion, and Azure Static Web Apps."
              : "Next.js / Tailwind CSS / Framer Motion / Azure Static Web Apps で構築。"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-slate-600 transition hover:text-sky-700"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={atcoderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-slate-600 transition hover:text-cyan-600"
          >
            <Trophy className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
