"use client";

import {
  BriefcaseBusiness,
  CalendarRange,
  ShieldCheck,
  TrendingUp,
  Search,
  CreditCard,
  FileText,
  Share2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { useProjectModal } from "@/components/ui/ProjectModalProvider";
import { PROJECTS } from "@/data/constants";
import type { Language, LocalizedString } from "@/data/types";
import styles from "./ReferenceSections.module.css";

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
      en: "Resolve unexpected clashes before the meeting day",
      ja: "当日初めて発覚する想定外のバッティングを解消",
    },
    description: {
      en: "A clearer schedule view, Chatwork notifications, and ongoing feedback helped people spot overlaps and coordinate in advance. This does not mean that every overlap disappeared.",
      ja: "予定を見渡せる表示とChatwork通知、導入後の聞き取りを通じ、重なりを事前に把握・調整できる運用へ。すべての重複そのものがなくなったという意味ではありません。",
    },
  },
] as const;

const l = (ja: string, en: string): LocalizedString => ({ ja, en });

interface ImpactCardContent {
  icon: LucideIcon;
  label: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  badge?: LocalizedString | null;
}

const merpayItems: ImpactCardContent[] = [
  {
    icon: Search,
    label: l("課題の捉え方", "Framing the problem"),
    title: l("利用者の行動をたどる", "Trace the user journey"),
    description: l(
      "確認・理解・対処の負担まで整理し、変えるべき体験を考える。",
      "Consider the effort to check, understand, and resolve a problem when deciding what experience to change.",
    ),
  },
  {
    icon: CreditCard,
    label: l("カードが届くまで", "Before the card arrives"),
    title: l("発行状況へ迷わず進める", "Find the card’s issuance status"),
    description: l(
      "カードが手元にない間に、必要な情報へたどり着ける導線を改善。",
      "Improve navigation to the information people need while waiting for their card.",
    ),
    badge: l("リリース済み", "Released"),
  },
  {
    icon: FileText,
    label: l("毎月の支払い", "Monthly payments"),
    title: l("説明と履歴を分かりやすく", "Clearer explanations and history"),
    description: l(
      "問い合わせを起点に、設定時の説明や履歴の表示を見直す。",
      "Revisit setup explanations and history displays, starting from customer inquiries.",
    ),
    badge: l("一部リリース", "Partially released"),
  },
  {
    icon: Share2,
    label: l("お買い物の瞬間", "At the moment of purchase"),
    title: l("決済失敗を予防する体験へ", "Toward preventing payment failures"),
    description: l(
      "データ・仕様を調べ、選択肢を比較。プロトタイプと最終提案へ。",
      "Research data and specifications, compare options, and develop a prototype and final proposal.",
    ),
    badge: l("企画・プロトタイプ", "Proposal & prototype"),
  },
];

function ImpactCard({
  item,
  lang,
}: {
  item: ImpactCardContent;
  lang: Language;
}) {
  return (
    <article className={styles.impactCard}>
      <div className={styles.impactIcon}>
        <item.icon size={22} strokeWidth={1.8} aria-hidden="true" />
      </div>
      <p className={styles.impactCardLabel}>{item.label[lang]}</p>
      <h3>{item.title[lang]}</h3>
      <p className={styles.impactCardBody}>{item.description[lang]}</p>
      {item.badge && (
        <span className={styles.statusBadge}>{item.badge[lang]}</span>
      )}
    </article>
  );
}

export const ImpactSnapshot = () => {
  const { lang } = useLanguage();
  const openProject = useProjectModal();
  const merpay = PROJECTS.find((project) => project.id === "merpay");

  return (
    <section id="impact" className={styles.impactSection}>
      <div className={styles.impactContainer}>
        <div id="merpay-impact">
          <div className={styles.impactHeader}>
            <p className={styles.organizationLabel}>At Merpay</p>
            <h2>
              {lang === "ja"
                ? "お客さまの「困った」から、体験の改善へ"
                : "From customer problems to better experiences"}
            </h2>
            <p>
              {lang === "ja"
                ? "メルカードの利用体験を対象に、調査・企画・仕様設計から関係者との調整まで担当しました。"
                : "Worked on the Mercard experience through research, planning, specification design, and stakeholder coordination."}
            </p>
            <p className={styles.impactPeriod}>2026.07–10 / PdM Intern</p>
          </div>
          <div className={styles.impactGrid}>
            {merpayItems.map((item) => (
              <ImpactCard key={item.label.en} item={item} lang={lang} />
            ))}
          </div>
          {merpay && (
            <div className={styles.impactAction}>
              <button
                type="button"
                className={styles.impactButton}
                onClick={() => openProject(merpay)}
              >
                {lang === "ja"
                  ? "担当したこと・判断の背景を見る"
                  : "Explore my role & decisions"}
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
        <div className={styles.impactDivider} />
        <div id="beam-impact">
          <div className={styles.impactHeader}>
            <p className={styles.organizationLabel}>At BE-AM</p>
            <h2>
              {lang === "en"
                ? "From internal issues to operational adoption"
                : "社内課題の解決から、運用定着まで"}
            </h2>
            <p>
              {lang === "en"
                ? "At BE-AM, I work on internal products and operational improvement. Among them, MeetingRoomBooker is the clearest example of how I frame a problem, design the system, and improve it until it becomes part of day-to-day operations."
                : "BE-AMでは、社内プロダクト開発と業務改善に取り組んでいます。その中でもMeetingRoomBookerは、課題の整理から設計・実装・運用定着までを一貫して担当した代表的な取り組みです。"}
            </p>
          </div>
          <div className={styles.impactGrid}>
            {impactItems.map((item) => (
              <ImpactCard key={item.label.en} item={item} lang={lang} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
