"use client";

import { motion } from "framer-motion";
import { GraduationCap, BriefcaseBusiness } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { EDUCATION, EXPERIENCE } from "@/data/constants";
import type { TimelineItem } from "@/data/types";

const EducationCard = ({ item }: { item: TimelineItem }) => {
  const { lang } = useLanguage();

  return (
    <article className="interactive-card glass-panel overflow-hidden rounded-[2rem] p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            {lang === "en" ? "Education" : "学歴"}
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
            {item.organization[lang]}
          </h3>
          <p className="mt-2 text-base font-semibold text-slate-600">{item.title[lang]}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/20">
          <GraduationCap className="h-6 w-6" />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-semibold text-sky-700">
          {item.period}
        </span>
        <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-600">
          {lang === "en" ? "Physical Engineering" : "物理工学"}
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">{item.description?.[lang]}</p>
    </article>
  );
};

const ExperienceCard = ({
  item,
  index,
}: {
  item: TimelineItem;
  index: number;
}) => {
  const { lang } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="interactive-card glass-panel overflow-hidden rounded-[2rem] border border-white/80 p-6 md:p-7"
    >
      <div className="space-y-3">
        <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm font-semibold text-sky-700">
          {item.period}
        </span>
        <div>
          <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
            {item.organization[lang]}
          </h3>
          <p className="mt-2 text-base font-semibold text-slate-600">{item.title[lang]}</p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">{item.description?.[lang]}</p>
    </motion.article>
  );
};

export const Timeline = () => {
  const { lang } = useLanguage();

  return (
    <section id="journey" className="px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">Journey</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            {lang === "en" ? "Education & Experience" : "学歴と経歴"}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">
            {lang === "en"
              ? "Education is kept compact, while work experience is presented in a balanced two-column layout so the section stays readable even with denser content."
              : "学歴はコンパクトに、経歴は情報量が増えても見た目が崩れにくい2カラム構成で整理しています。"}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 px-1 text-slate-900">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
                <GraduationCap className="h-5 w-5 text-sky-700" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  {lang === "en" ? "Education" : "学歴"}
                </p>
                <p className="text-lg font-bold">
                  {lang === "en" ? "Academic Foundation" : "学術的な土台"}
                </p>
              </div>
            </div>
            {EDUCATION.map((item, index) => (
              <EducationCard key={`${item.period}-${index}`} item={item} />
            ))}
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3 px-1 text-slate-900">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/80 shadow-sm">
                <BriefcaseBusiness className="h-5 w-5 text-indigo-700" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                  {lang === "en" ? "Experience" : "経歴"}
                </p>
                <p className="text-lg font-bold">
                  {lang === "en" ? "Hands-on Delivery" : "実務・開発経験"}
                </p>
              </div>
            </div>
            {EXPERIENCE.map((item, index) => (
              <ExperienceCard key={`${item.period}-${index}`} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
