import { Profile, Project, SkillCategory, Account, TimelineItem } from "./types";
import {
  SiGo,
  SiTypescript,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiArduino,
  SiDotnet,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiTailwindcss,
  SiJavascript,
  SiBlazor,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import { VscAzure, VscCloud, VscCode, VscDatabase } from "react-icons/vsc";
import { TbTrophy } from "react-icons/tb";

export const PROFILE: Profile = {
  name: { en: "Haruki Ino", ja: "稲生 遥希" },
  title: { en: "Aspiring Technical Specialist", ja: "テクニカルスペシャリスト志望" },
  university: { en: "Tokyo University of Science", ja: "東京理科大学" },
  department: { en: "Dept. of Physical Engineering (B2)", ja: "先進工学部 物理工学科 (B2)" },

  catchphrase: {
    en: 'UNRAVEL COMPLEX TECHNOLOGY, AND BUILD THE "OBVIOUS" THAT TEAMS CAN TRULY USE.',
    ja: "複雑な技術を紐解き、現場が使いこなせる「当たり前」を創る。",
  },
  description: {
    en:
      'With structural thinking rooted in physical engineering, and hands-on experience across full-stack development and infrastructure, I solve business problems.\n\n' +
      'My strength is not "build and done." I go further—designing operations that fit real workflows and driving stakeholder alignment—to build systems where technology maximizes an organization\'s potential.',
    ja:
      "物理工学由来の構造的な思考力と、フルスタックな開発・インフラ構築経験を武器に、ビジネス課題を解決します。\n\n" +
      "強みは「システムを作って終わり」にしないこと。現場に徹底して寄り添う運用設計から関係者の合意形成まで踏み込み、技術が組織のポテンシャルを最大限に引き出す仕組みを構築します。",
  },

  socials: {
    email: "mailto:haru.dev8644@gmail.com",
  },
} as const;

export const ACCOUNTS: Account[] = [
  {
    platform: "GitHub",
    username: "Haru8644",
    url: "https://github.com/Haru8644",
    icon: SiGithub,
    color: "hover:text-gray-900",
  },
  {
    platform: "AtCoder",
    username: "Haru44 (Cyan)",
    url: "https://atcoder.jp/users/Haru44",
    icon: TbTrophy,
    color: "hover:text-[#00C0C0]",
  },
  {
    platform: "LinkedIn",
    username: "Haruki Ino",
    url: "https://www.linkedin.com/in/haruki-ino-b82632384/",
    icon: SiLinkedin,
    color: "hover:text-[#0077B5]",
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    period: "2024 - Present",
    title: { en: "Bachelor of Engineering", ja: "学士（工学）" },
    organization: { en: "Tokyo University of Science", ja: "東京理科大学 先進工学部 物理工学科" },
    description: {
      en: "GPA: 3.x / Focus on Quantum Mechanics and Statistical Physics",
      ja: "物理学（量子力学・統計力学）を専攻しつつ、情報科学への応用を研究",
    },
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    period: "2025 - Present",
    title: { en: "Backend Engineer Intern", ja: "バックエンドエンジニア (長期インターン)" },
    organization: { en: "Howtelevision, Inc.", ja: "株式会社ハウテレビジョン" },
    description: {
      en: "Developing backend curriculum for an engineering bootcamp and automating direct messaging for the 'Gaishi Shukatsu' platform.",
      ja: "エンジニアブートキャンプ向けのバックエンド教材の開発と、「外資就活ドットコム」のスカウトDM配信システムの構築・運用を担当。",
    },
  },
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
    ],
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
    ],
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
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: { en: "MeetingRoomBooker", ja: "MeetingRoomBooker" },
    status: "Production Used",
    tags: [
      "Blazor WebAssembly",
      "Fluent UI",
      "CSS Animations",
      "RESTful API",
      "ASP.NET Core Web API",
      "SQLite",
      "EF Core",
      "Kestrel",
      "Nginx",
      "ConoHa VPS",
      "Linux",
      "systemd",
      "GitHub",
    ],
    description: {
      en: "A modern SPA with a Cyberpunk-inspired UI to completely eliminate double bookings.",
      ja: "サイバーパンク風UIを採用した、会議室の重複予約を完全に防ぐモダンSPA。",
    },
    longDescription: {
      en: "Developed to resolve chronic double-booking conflicts with a sleek Cyberpunk-inspired UI utilizing neon glows and glassmorphism. Features strict conflict prevention, a real-time notification center, and an intuitive daily timeline. The backend is robustly built with ASP.NET Core Web API and EF Core, deployed on a Linux VPS.",
      ja: "社内の「ダブルブッキング」課題を解決するモダンSPA。Fluent UIにグラスモーフィズムやネオン光彩を取り入れたサイバーパンク風UIを採用。予約時の重複ブロックやリアルタイム通知機能を備え、バックエンドはASP.NET Core Web APIとEF Coreで構築。Linux VPS上で運用しています。",
    },
    links: {
      github: "https://github.com/Haru8644/MeetingRoomBooker",
    },

    images: [
      {
        src: "/images/projects/meetingroombooker-1.png",
        alt: {
          en: "MeetingRoomBooker home screen (cyberpunk-inspired landing)",
          ja: "MeetingRoomBooker ホーム画面（サイバーパンク風ランディング）",
        },
      },
      {
        src: "/images/projects/meetingroombooker-2.png",
        alt: {
          en: "MeetingRoomBooker calendar view (daily timeline)",
          ja: "MeetingRoomBooker カレンダー画面（日次タイムライン）",
        },
      },
      {
        src: "/images/projects/meetingroombooker-3.png",
        alt: {
          en: "MeetingRoomBooker new reservation form",
          ja: "MeetingRoomBooker 新規予約フォーム",
        },
      },
    ],

    highlights: [
      {
        label: "Architecture",
        text: {
          en: "Decoupled Client-Server Model with RESTful API.",
          ja: "Blazor WebAssemblyとWeb APIによる完全分離アーキテクチャ。",
        },
      },
      {
        label: "UI / UX",
        text: {
          en: "Cyberpunk-inspired UI using Fluent UI and custom CSS.",
          ja: "Fluent UIとカスタムCSSによるサイバーパンク風の洗練されたUI設計。",
        },
      },
      {
        label: "Infrastructure",
        text: {
          en: "Reverse-proxied by Nginx and served by Kestrel; daemonized with systemd on a Linux VPS.",
          ja: "Linux VPS上で Nginx + Kestrel を運用し、systemdで自動復旧まで担保。",
        },
      },
    ],
  },

  {
    title: { en: "AtCoderRevManager", ja: "AtCoderRevManager" },
    status: "In Development",
    tags: [
      ".NET 10",
      "Blazor Web App",
      "Fluent UI",
      "ASP.NET Core Web API",
      "EF Core",
      "SQL Server (Docker/Aspire)",
      ".NET Aspire",
      "Docker",
      "GitHub",
    ],
    description: {
      en: "A learning management SPA designed to maximize algorithmic skill retention.",
      ja: "忘却曲線に基づきアルゴリズム知識の定着を最大化する学習管理SPA。",
    },
    longDescription: {
      en: "A full-stack .NET 10 application that operationalizes spaced repetition for competitive programming. Built as a Blazor Web App with a cleanly layered design and a RESTful backend, with data persisted in SQL Server (Docker/.NET Aspire). Roadmap: review-recommendation engine, richer analytics, and cloud-native deployment orchestrated by .NET Aspire.",
      ja: "競技プログラミングの復習（間隔反復）を運用に落とし込むフルスタック.NET 10アプリ。Blazor Web App + RESTful backend の構成で、データは SQL Server（Docker/.NET Aspire）で管理。今後は復習レコメンドや分析機能を拡張し、.NET Aspireでクラウドネイティブ展開を目指します。",
    },
    links: {
      github: "https://github.com/Haru8644/AtCoderRevManager",
    },

    images: [
      {
        src: "/images/projects/atcoderrevmanager-1.png",
        alt: {
          en: "AtCoderRevManager dashboard (review KPIs and task list)",
          ja: "AtCoderRevManager ダッシュボード（KPIと復習タスク一覧）",
        },
      },
    ],

    highlights: [
      {
        label: "Architecture",
        text: {
          en: "Layered architecture with a RESTful API boundary for long-term maintainability.",
          ja: "RESTful API を境界にしたレイヤード設計で、変更に強い保守性を重視。",
        },
      },
      {
        label: "Frontend",
        text: {
          en: "Blazor Web App UI designed for fast daily review flow (keyboard-first, minimal friction).",
          ja: "毎日の復習が続く導線を意識し、操作コストを最小化したUI/UX。",
        },
      },
      {
        label: "Cloud Native",
        text: {
          en: "Local development standardized with Docker + .NET Aspire; deploy-ready composition.",
          ja: "Docker + .NET Aspire で開発環境を標準化し、デプロイを見据えた構成管理。",
        },
      },
    ],
  },
];