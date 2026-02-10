import { Profile, Project, SkillCategory } from './types';
import { 
  SiGo, SiTypescript, SiCplusplus, 
  SiDotnet, SiReact, SiNextdotjs, SiDocker, SiTailwindcss, SiJavascript
} from "react-icons/si";
import { VscVscode, VscAzure, VscCloud } from "react-icons/vsc";

export const PROFILE: Profile = {
  name: { en: "Haruki Ino", ja: "稲生 遥希" }, 
  title: { en: "Aspiring Technical Specialist", ja: "テクニカルスペシャリスト志望" }, // ターゲット職種に合わせる
  university: { en: "Tokyo University of Science", ja: "東京理科大学" },
  department: { en: "Dept. of Physical Engineering (B2)", ja: "先進工学部 物理工学科 (B2)" },
  catchphrase: {
    en: "Bridging Physics, Business, and Azure Cloud.",
    ja: "物理とビジネス、そしてAzureクラウドの架け橋に。"
  },
  description: {
    en: "Combining mathematical rigor from Physics with hands-on C#/.NET engineering skills to solve real-world business problems. Passionate about leveraging Azure to deliver scalable value, embodying Microsoft's Customer Obsession.",
    ja: "物理工学由来の数理的思考と、C#/.NETによる実装力を武器に、ビジネス課題を解決します。現場の泥臭い課題からモダンなクラウドアーキテクチャまで、Customer Obsession（顧客第一）で価値を届けます。"
  },
  atcoder: {
    rating: 1467,
    rank: { en: "Cyan (Top 15%)", ja: "水色 (上位15%)" },
  },
  socials: {
    github: "https://github.com/Haru8644",
    atcoder: "https://atcoder.jp/users/Haru44",
    email: "mailto:haru.dev8644@gmail.com"
  }
} as const;

export const SKILLS: SkillCategory[] = [
  {
    category: { en: "Languages", ja: "プログラミング言語" },
    items: [
      { name: "C# (.NET)", icon: SiDotnet },
      { name: "Go", icon: SiGo },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C++", icon: SiCplusplus },
    ]
  },
  {
    category: { en: "Cloud & Infrastructure", ja: "クラウド・インフラ" },
    items: [
      { name: "Microsoft Azure", icon: VscAzure }, 
      { name: "App Service", icon: VscCloud },
      { name: "Docker", icon: SiDocker },
    ]
  },
  {
    category: { en: "Web Technologies", ja: "Web技術" },
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: { en: "Conference Room Reservation System", ja: "社内会議室予約システム" },
    status: "In Development",
    tags: ["C#", "ASP.NET Core", "Azure SQL", "Entra ID", "React"],
    description: {
      en: "A modern reservation platform solving double-booking issues.",
      ja: "ダブルブッキング問題を解決する、モダンな予約管理プラットフォーム。"
    },
    longDescription: {
      en: "Developed to resolve chronic double-booking conflicts. Integrated with Microsoft Entra ID for secure SSO and utilized Azure SQL for reliable transaction handling. The architecture prioritizes data consistency and user experience.",
      ja: "社内の「ダブルブッキング」課題を解決するために開発。Microsoft Entra IDによるSSO連携とAzure SQLによる堅牢なトランザクション管理を実装。UXとデータ整合性を最優先したアーキテクチャを採用。"
    },
    links: {
      github: "https://github.com/Haru8644/project-repo",
    },
    highlights: [
      { 
        label: "Impact", 
        text: { en: "Eliminated scheduling conflicts via ACID compliant transactions.", ja: "ACID特性を意識したトランザクション処理で重複を根絶。" } 
      }
    ],
  },
  {
    title: { en: "Workflow Automation Tool", ja: "業務効率化・自動化ツール" },
    status: "Production Used",
    tags: ["Excel VBA", "Automation", "WinUI"],
    description: {
      en: "Automating man-hour management and document creation.",
      ja: "現場の工数管理・書類作成を完全自動化するツール。"
    },
    longDescription: {
      en: "Automated staff hour calculations and daily reporting for an amusement company. Reduced monthly overtime by 20+ hours and eliminated manual calculation errors, allowing staff to focus on core customer service.",
      ja: "アミューズメント企業の現場向けに、工数計算と日報作成を自動化。月間20時間以上の残業削減と計算ミスゼロを達成し、スタッフが接客という本質的業務に集中できる環境を構築。"
    },
    links: {
      github: "https://github.com/Haru8644/vba-tool",
    },
    highlights: [
      { 
        label: "Impact", 
        text: { en: "Reduced 20+ hours of monthly work.", ja: "月間20時間以上の工数削減を達成。" } 
      }
    ],
  }
];