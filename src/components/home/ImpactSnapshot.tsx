"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarRange,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

const impactItems = [
  {
    icon: BriefcaseBusiness,
    label: { en: "Role at BE-AM", ja: "BE-AMで担っていること" },
    title: {
      en: "Internal systems development and operations improvement",
      ja: "社内システム開発と業務改善",
    },
    description: {
      en: "I work end-to-end from problem discovery and requirements definition to implementation, infrastructure setup, and post-release improvement.",
      ja: "社内課題の発見から要件定義、実装、インフラ構築、リリース後の改善まで一貫して担当しています。",
    },
  },
  {
    icon: CalendarRange,
    label: { en: "Representative project", ja: "代表的な取り組み" },
    title: {
      en: "MeetingRoomBooker",
      ja: "MeetingRoomBooker",
    },
    description: {
      en: "Planned and developed a dedicated conference-room booking system to solve repeated scheduling conflicts that had continued under the TimeTree-based workflow.",
      ja: "TimeTreeでの運用で繰り返し発生していた予約バッティングを解消するため、会議室予約に特化した専用システムを企画・開発しました。",
    },
  },
  {
    icon: ShieldCheck,
    label: { en: "Design decisions", ja: "設計で意識したこと" },
    title: {
      en: "Design for actual operations, not only the UI",
      ja: "UIだけでなく、実運用まで設計する",
    },
    description: {
      en: "I organized roles, notifications, permissions, and exception handling, and placed final conflict validation on the API side so the system stays consistent in real operation.",
      ja: "予約者・参加者・管理者の役割、通知、権限、例外時の流れを整理し、最終的な重複検証はAPI側で行う設計にしました。",
    },
  },
  {
    icon: TrendingUp,
    label: { en: "Result", ja: "結果" },
    title: {
      en: "Conflicts reduced from 5–6 per month to zero",
      ja: "月5〜6回の重複予約をゼロに改善",
    },
    description: {
      en: "After release, I continued improving the product with on-site feedback and reached zero booking conflicts within two months.",
      ja: "導入後も現場のフィードバックをもとに改善を続け、2か月で重複予約ゼロを実現しました。",
    },
  },
] as const;

export const ImpactSnapshot = () => {
  const { lang } = useLanguage();

  return (
    <section id="impact" className="px-4 py-14 md:px-6 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-400">
            {lang === "en" ? "At BE-AM" : "AT BE-AM"}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
            {lang === "en"
              ? "From internal issues to operational adoption"
              : "社内課題の解決から、運用定着まで"}
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-600 md:text-base">
            {lang === "en"
              ? "At BE-AM, I work on internal products and operational improvement. Among them, MeetingRoomBooker is the clearest example of how I frame a problem, design the system, and improve it until it becomes part of day-to-day operations."
              : "BE-AMでは、社内プロダクト開発と業務改善に取り組んでいます。その中でもMeetingRoomBookerは、課題の整理から設計・実装・運用定着までを一貫して担当した代表的な取り組みです。"}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {impactItems.map((item, index) => (
            <motion.article
              key={item.label.en}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="interactive-card glass-panel rounded-[1.75rem] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/10">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                {item.label[lang]}
              </p>
              <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-900">{item.title[lang]}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description[lang]}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
