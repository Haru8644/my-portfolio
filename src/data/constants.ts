import { Profile, Project, SkillCategory, Account, TimelineItem } from './types';
import { 
  SiGo, SiTypescript, SiCplusplus, SiC, SiHtml5, SiCss3, SiNodedotjs, SiArduino,
  SiDotnet, SiReact, SiNextdotjs, SiDocker, SiTailwindcss, SiJavascript, SiBlazor,
  SiGithub, SiLinkedin
} from "react-icons/si";
import { VscVscode, VscAzure, VscCloud, VscCode, VscServer, VscDatabase } from "react-icons/vsc";
import { TbTrophy } from "react-icons/tb";

export const PROFILE: Profile = {
  name: { en: "Haruki Ino", ja: "稲生 遥希" }, 
  title: { en: "Aspiring Technical Specialist", ja: "テクニカルスペシャリスト志望" },
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
  socials: {
    email: "mailto:haru.dev8644@gmail.com"
  }
} as const;

export const ACCOUNTS: Account[] = [
  {
    platform: "GitHub",
    username: "Haru8644",
    url: "https://github.com/Haru8644",
    icon: SiGithub,
    color: "hover:text-gray-900"
  },
  {
    platform: "AtCoder",
    username: "Haru44 (Cyan)",
    url: "https://atcoder.jp/users/Haru44",
    icon: TbTrophy,
    color: "hover:text-[#00C0C0]"
  },
  {
    platform: "LinkedIn",
    username: "Haruki Ino", 
    url: "https://www.linkedin.com/", 
    icon: SiLinkedin,
    color: "hover:text-[#0077B5]"
  }
];

export const EDUCATION: TimelineItem[] = [
  {
    period: "2024 - Present",
    title: { en: "Bachelor of Engineering", ja: "学士（工学）" },
    organization: { en: "Tokyo University of Science", ja: "東京理科大学 先進工学部 物理工学科" },
    description: { en: "GPA: 3.x / Focus on Quantum Mechanics and Statistical Physics", ja: "物理学（量子力学・統計力学）を専攻しつつ、情報科学への応用を研究" }
  }
];

export const EXPERIENCE: TimelineItem[] = [
  {
    period: "2025 - Present",
    title: { en: "Backend Engineer Intern", ja: "バックエンドエンジニア (長期インターン)" },
    organization: { en: "Howtelevision, Inc.", ja: "株式会社ハウテレビジョン" },
    description: { 
      en: "Developing backend curriculum for an engineering bootcamp and automating direct messaging for the 'Gaishi Shukatsu' platform.", 
      ja: "エンジニアブートキャンプ向けのバックエンド教材の開発と、「外資就活ドットコム」のスカウトDM配信システムの構築・運用を担当。"
    }
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: { en: "Languages", ja: "プログラミング言語" },
    items: [
      { name: "C#", icon: SiDotnet },
      { name: "Go", icon: SiGo },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: SiC },
      { name: "VBA", icon: VscCode },
      { name: "Arduino", icon: SiArduino },
    ]
  },
  {
    category: { en: "Frontend & Mobile", ja: "フロントエンド・モバイル" },
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Blazor", icon: SiBlazor },
      { name: ".NET MAUI", icon: SiDotnet },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ]
  },
  {
    category: { en: "Backend & Cloud", ja: "バックエンド・クラウド" },
    items: [
      { name: "Microsoft Azure", icon: VscAzure }, 
      { name: "ASP.NET Core", icon: SiDotnet },
      { name: "Azure SQL", icon: VscDatabase }, 
      { name: "EF Core", icon: SiDotnet },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "App Service", icon: VscCloud },
      { name: "Docker", icon: SiDocker },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: { en: "MeetingRoomBooker", ja: "MeetingRoomBooker" },
    status: "Production Used",

    tags: [
      "Blazor WebAssembly", "Fluent UI", "CSS Animations", 
      "ASP.NET Core Web API", "SQLite", "EF Core", 
      "ConoHa VPS", "Linux", "systemd"
    ],
    description: {
      en: "A modern SPA with a Cyberpunk-inspired UI to completely eliminate double bookings.",
      ja: "サイバーパンク風UIを採用した、会議室の重複予約を完全に防ぐモダンSPA。"
    },
    longDescription: {
      en: "Developed to resolve chronic double-booking conflicts with a sleek Cyberpunk-inspired UI utilizing neon glows and glassmorphism. Features strict conflict prevention, a real-time notification center, and an intuitive daily timeline. The backend is robustly built with ASP.NET Core Web API and EF Core, deployed on a Linux VPS.",
      ja: "社内の「ダブルブッキング」課題を解決するモダンSPA。Fluent UIにグラスモーフィズムやネオン光彩を取り入れたサイバーパンク風UIを採用。予約時の重複ブロックやリアルタイム通知機能を備え、バックエンドはASP.NET Core Web APIとEF Coreで構築。Linux VPS上で運用しています。"
    },
    links: {
      github: "https://github.com/Haru8644/MeetingRoomBooker",
    },

    highlights: [
      { 
        label: "Architecture", 
        text: { en: "Decoupled Client-Server Model with RESTful API.", ja: "Blazor WebAssemblyとWeb APIによる完全分離アーキテクチャ。" } 
      },
      {
        label: "UI / UX",
        text: { en: "Cyberpunk-inspired UI using Fluent UI and custom CSS.", ja: "Fluent UIとカスタムCSSによるサイバーパンク風の洗練されたUI設計。" }
      },
      {
        label: "Infrastructure",
        text: { en: "Daemonized deployment on Linux (ConoHa VPS) using Kestrel and systemd.", ja: "ConoHa VPS (Linux) 上でKestrelとsystemdを用いた自動復旧・デーモン化運用。" }
      }
    ],
  },
  {
    title: { en: "AtCoderRevManager", ja: "AtCoderRevManager" },
    status: "In Development",

    tags: [
      ".NET 10", "Blazor Server", "Fluent UI", "MVVM", 
      "ASP.NET Core Web API", "EF Core", "Azure SQL", 
      ".NET Aspire", "Docker", "OpenTelemetry", "Clean Architecture"
    ],
    description: {
      en: "A learning management SPA designed to maximize algorithmic skill retention.",
      ja: "忘却曲線に基づきアルゴリズム知識の定着を最大化する学習管理SPA。"
    },
    longDescription: {
      en: "A full-stack .NET 10 application optimizing the competitive programming review cycle. Built on strict Clean Architecture, enabling a seamless database migration from Cosmos DB to SQL Server with zero changes to business logic. Future roadmap includes an automated review-recommendation engine and cloud-native deployment to Azure orchestrated by .NET Aspire.",
      ja: "競技プログラミングの復習サイクルを最適化するフルスタック.NET 10アプリケーション。最大の特長は「Clean Architecture」に基づく堅牢な設計で、ドメイン層とインフラ層を完全に分離し、Cosmos DBからSQL Serverへの移行をロジック無変更で完遂しました。今後は.NET Aspireを用いたAzureへのクラウドネイティブ展開を予定しています。"
    },
    links: {
      github: "https://github.com/Haru8644/AtCoderRevManager",
    },

    highlights: [
      { 
        label: "Architecture", 
        text: { en: "Strict Clean Architecture & Repository Pattern.", ja: "Clean ArchitectureとRepository Patternによる、DB変更に耐えうる堅牢なドメイン設計。" } 
      },
      {
        label: "Frontend",
        text: { en: "Highly maintainable UI using Fluent UI and MVVM pattern.", ja: "Fluent UIとMVVMパターンの統合による、保守性とUXを両立したフロントエンド。" }
      },
      {
        label: "Cloud Native",
        text: { en: "Orchestrated with .NET Aspire, Docker, OpenTelemetry, and Service Discovery.", ja: ".NET Aspire, Docker, OpenTelemetryを用いた高度なコンテナオーケストレーションと分散トレーシング。" }
      }
    ],
  }
];