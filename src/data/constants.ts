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
    period: "2026.02 - Present",
    title: {
      en: "Backend Curriculum Development / Marketing Operations",
      ja: "バックエンド教材開発 / マーケティング施策運用",
    },
    organization: {
      en: "Howtelevision, Inc.",
      ja: "株式会社ハウテレビジョン",
    },
    description: {
      en:
        "Contributing across both engineering and business functions. On the engineering side, I develop backend curriculum for engineer-focused startup events, designing content that helps participants understand and apply technical concepts in practice. On the business side, I support outreach initiatives for 'GaishiShukatsu' by analyzing response data such as open and click-through rates and improving execution quality through a rapid hypothesis–execution–review cycle.",
      ja:
        "技術とビジネスの両面から価値提供に取り組んでいます。技術面では、エンジニア向けスタートアップイベントのバックエンド教材開発を担当し、参加者が技術を実践的に理解できるコンテンツ設計に取り組んでいます。ビジネス面では、「外資就活ドットコム」の集客施策において、開封率・クリック率などの反応データを分析しながら、仮説立案→実行→振り返りのサイクルを高速で回し、施策精度の向上に貢献しています。",
    },
  },
  {
    period: "2024.09 - Present",
    title: {
      en: "Internal Systems Development / Operations Improvement",
      ja: "社内システム開発 / 業務改善",
    },
    organization: {
      en: "BE-AM Co., Ltd.",
      ja: "株式会社BE-AM",
    },
    description: {
      en:
        "Engaged in internal systems development and operational improvement from problem discovery and requirements definition to infrastructure setup, implementation, and post-release refinement. Worked on planning and developing a conference-room booking system to resolve scheduling conflicts, building and operating an SFTP server with clearly designed permission management, automating internal workflows with VBA, and supporting requirements definition and UI/UX design for a tablet-based reception system. Focused not only on implementation, but also on real-world adoption and continuous improvement based on on-site feedback.",
      ja:
        "社内課題の発見から要件定義、インフラ構築、実装、リリース後の改善まで一貫して取り組んでいます。予約バッティングの解消を目的とした会議室予約システムの企画・開発、権限設計を含むSFTPサーバーの構築・運用、VBAによる社内業務の自動化、タブレット受付システムの要件定義・UI/UX設計などを担当してきました。実装だけでなく、現場で実際に使われることを前提に、運用定着と継続的な改善まで意識して進めています。",
    },
  },
  {
    period: "2025.11",
    title: {
      en: "0→1 Product Development Program",
      ja: "0→1プロダクト開発プログラム",
    },
    organization: {
      en: "Howtelevision, Inc. / 4days Internship",
      ja: "株式会社ハウテレビジョン / 4daysインターン",
    },
    description: {
      en:
        "Experienced rapid team-based product development in a four-day on-site program. Worked on persona definition, service concept alignment, and front-end implementation through pair development, while also participating in discussions on what user problem the team should solve and why. This experience strengthened my customer-centric thinking, communication under ambiguity, and ability to connect implementation decisions with product value.",
      ja:
        "4日間の対面プログラムで、短期間のチーム開発による0→1プロダクト開発を経験しました。顧客ペルソナの定義、サービスの方向性の合意形成、フロント実装のペア開発に取り組みながら、「誰のどんな課題を解くのか」をチームで議論し、実装と最終発表につなげました。この経験を通して、顧客視点で課題を捉える力、曖昧な状況で合意形成する力、実装を価値に結びつけて説明する力を伸ばしました。",
    },
  },
  {
    period: "2025.09",
    title: {
      en: "Hackathon Participant / Product Development",
      ja: "ハッカソン参加 / プロダクト開発",
    },
    organization: {
      en: "Engineer Guild Hackathon",
      ja: "Engineer Guild Hackathon",
    },
    description: {
      en:
        "Completed a one-week 0→1 development cycle in a four-member team, covering persona definition, technology selection, implementation, and final presentation. In addition to development, I mainly led the structure and delivery of the pitch, focusing on explaining how each technical decision solved concrete user problems rather than simply listing features. Through this experience, I learned how to translate engineering choices into business value and communicate them clearly to both technical and non-technical audiences.",
      ja:
        "4人チームで、ペルソナ定義・技術選定・実装・発表までを1週間でやり切る0→1開発を経験しました。開発に関わりつつ、主にプレゼン資料の構成と発表を主導し、機能の羅列ではなく「その技術がユーザーのどんな課題をどう解決するのか」を軸に価値を伝えることを意識しました。この経験を通して、技術的な判断をビジネス価値へ翻訳し、非エンジニアにも伝わる形で表現する力を実践的に学びました。",
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