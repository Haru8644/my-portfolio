import type { LocalizedString, Project } from "./types";

const l = (ja: string, en: string): LocalizedString => ({ ja, en });

interface FeaturedWorkCard {
  title: LocalizedString;
  summary: LocalizedString;
  button: LocalizedString;
  stage: LocalizedString;
  heading?: LocalizedString;
  keywords: LocalizedString[];
  illustration?: string;
  illustrationAlt?: LocalizedString;
}

export const FEATURED_WORK: Record<
  NonNullable<Project["id"]>,
  FeaturedWorkCard
> = {
  merpay: {
    title: l(
      "メルペイ｜利用体験の改善",
      "Merpay | Improving the user experience",
    ),
    summary: l(
      "利用者の確認・対処の負担まで捉え、調査・比較から最終提案へ。",
      "From research and comparison to a final proposal, considering users’ effort to check and resolve a problem.",
    ),
    button: l("判断の背景を見る", "Explore the decisions"),
    stage: l("企画・プロトタイプ", "Proposal & prototype"),
    heading: l(
      "決済に失敗した、\nその先まで。",
      "A payment failed.\nWhat happens next?",
    ),
    keywords: [
      l("課題整理", "Problem framing"),
      l("案の比較", "Comparing options"),
      l("体験設計", "Experience design"),
    ],
    illustration: "/images/projects/merpay-summary.svg",
    illustrationAlt: l(
      "決済カードと書類を表した説明用イラスト",
      "An explanatory illustration of a payment card and a document",
    ),
  },
  meetingroombooker: {
    title: l("MeetingRoomBooker", "MeetingRoomBooker"),
    summary: l(
      "会議室の空きと予定の重なりを見渡せる、社内予約システム。",
      "An internal booking system that makes room availability and schedule overlaps easier to see.",
    ),
    button: l("工夫と運用を見る", "Explore design & operation"),
    stage: l("社内運用中", "In internal use"),
    keywords: [
      l("要件整理", "Requirements"),
      l("開発・運用", "Development & operation"),
    ],
  },
  howtelevision: {
    title: l(
      "Howtelevision｜スカウトUX改善",
      "Howtelevision | Scout UX improvement",
    ),
    summary: l(
      "承諾から選考参加までの体験を比較し、迷いや負担の仮説を整理。",
      "Comparing the journey from scout acceptance to selection participation to explore possible confusion and effort.",
    ),
    button: l("調査の視点を見る", "Explore the research focus"),
    stage: l("仮説整理中", "Hypothesis exploration"),
    heading: l("承諾した。\nその次は？", "Accepted.\nWhat’s next?"),
    keywords: [
      l("現在の状況", "Current status"),
      l("次の行動", "Next action"),
      l("期限", "Deadlines"),
    ],
    illustration: "/images/projects/scout-summary.svg",
    illustrationAlt: l(
      "会話・メッセージとチェック項目を表した説明用イラスト",
      "An explanatory illustration of messages and a checklist",
    ),
  },
  speee: {
    title: l("Speee｜不動産SaaSの企画", "Speee | Real estate SaaS planning"),
    summary: l(
      "不動産会社と売主の双方を考え、検証する価値とMVPを絞り込む。",
      "Considering agencies and sellers to focus the value to validate and define an MVP.",
    ),
    button: l("企画の考え方を見る", "Explore the product thinking"),
    stage: l("チーム企画", "Team proposal"),
    heading: l(
      "査定の先の、\n意思決定へ。",
      "Beyond valuation.\nToward a decision.",
    ),
    keywords: [
      l("売主の納得", "Seller confidence"),
      l("業務の負担", "Operational effort"),
      l("MVPの範囲", "MVP scope"),
    ],
    illustration: "/images/projects/speee-summary.svg",
    illustrationAlt: l(
      "住まい・書類・利用者を表した説明用イラスト",
      "An explanatory illustration of a home, documents, and a person",
    ),
  },
};
