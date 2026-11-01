"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { PROFILE } from "@/data/constants";
import { Accounts } from "./Accounts";

export const Hero = () => {
  const { lang } = useLanguage();

  return (
    <section id="top" className="relative px-4 pb-10 pt-8 md:px-6 md:pt-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel-strong relative overflow-hidden rounded-[2rem] p-7 md:p-10 lg:p-12"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
          <div className="absolute -right-20 top-10 h-44 w-44 rounded-full bg-sky-300/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-indigo-300/15 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
                {PROFILE.university[lang]} / {PROFILE.title[lang]}
              </span>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-slate-900 md:text-6xl xl:text-7xl">
                  {lang === "ja" ? (
                    <>
                      <span className="block">使いたいときに、</span>
                      <span className="block text-gradient-azure"><span className="inline-block">迷わず目的を</span><span className="inline-block">果たせる</span></span>
                      <span className="block">体験をつくる。</span>
                    </>
                  ) : (
                    <>
                      <span className="block">Make it easier</span>
                      <span className="block text-gradient-azure">for people to do</span>
                      <span className="block">what they came to do.</span>
                    </>
                  )}
                </h1>
              </div>

              <p className="max-w-3xl whitespace-pre-line text-base leading-8 text-slate-600 md:text-lg">
                {PROFILE.description[lang]}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_36px_-20px_rgba(37,99,235,0.72)] transition hover:translate-y-[-1px]"
              >
                {lang === "en" ? "View Featured Work" : "Featured Workを見る"}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-sky-200 hover:text-sky-700"
              >
                {lang === "en" ? "Browse Product Screens" : "プロダクト画面を見る"}
              </a>
            </div>

            <div className="mt-10 border-t border-slate-200/80 pt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                {lang === "en" ? "Accounts & Links" : "アカウント / リンク"}
              </p>
              <Accounts />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-4"
        >
          <div className="interactive-card glass-panel overflow-hidden rounded-[2rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              {lang === "en" ? "Strength" : "強み"}
            </p>
            <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
              {lang === "en"
                ? "Trace user journeys and make choices tangible"
                : "利用者の行動から課題を捉え、選択肢を形にする"}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {lang === "en"
                ? "At Merpay, I developed proposals from data and specification research. For internal software, I also work through implementation and operation, learning from feedback on how people use it."
                : "メルペイではデータや仕様の調査から改善企画を具体化し、社内システムでは実装・運用も担当。利用者が目的を果たすまでの行動と負担に着目しています。"}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="interactive-card glass-panel rounded-[1.75rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                {lang === "en" ? "Mindset" : "マインドセット"}
              </p>
              <p className="mt-3 text-lg font-bold text-slate-900">
                {lang === "en"
                  ? "Aspiring Product Manager"
                  : "PdM志望 / 2028年卒"}
              </p>
            </div>
            <div className="interactive-card glass-panel rounded-[1.75rem] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                {lang === "en" ? "Focus" : "重視点"}
              </p>
              <p className="mt-3 text-lg font-bold text-slate-900">
                {lang === "en"
                  ? "Goal completion and user effort"
                  : "目的の達成と対処の負担"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
