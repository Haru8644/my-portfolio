import {
  Profile,
  Project,
  SkillCategory,
  Account,
  TimelineItem,
} from "./types";
import {
  SiTypescript,
  SiCplusplus,
  SiC,
  SiNodedotjs,
  SiDotnet,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiTailwindcss,
  SiJavascript,
  SiBlazor,
  SiGithub,
  SiLinkedin,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiGo,
} from "react-icons/si";
import {
  VscAzure,
  VscCode,
  VscDatabase,
} from "react-icons/vsc";
import { TbTrophy } from "react-icons/tb";

export const PROFILE: Profile = {
  name: { en: "Haruki Ino", ja: "稲生 遥希" },
  title: { en: "", ja: "" },
  university: { en: "Tokyo University of Science", ja: "東京理科大学" },
  department: {
    en: "Dept. of Physical Engineering / Class of 2028",
    ja: "先進工学部 物理工学科 / 2028年卒",
  },

  catchphrase: {
    en: "TURN AMBIGUOUS PRODUCT PROBLEMS INTO SYSTEMS THAT TEAMS CAN KEEP USING.",
    ja: "曖昧な課題を、現場で使われ続ける仕組みに落とし込む。",
  },
  description: {
    en:
      "I connect product thinking with full-stack implementation. My focus is not only shipping features, but also clarifying user behavior, responsibilities, notifications, permissions, and operational rules so the product keeps creating value after release.\n\n" +
      "In MeetingRoomBooker, I led requirements, UI/UX, API/DB design, authentication, notifications, and post-release improvement, reducing 5-6 monthly booking conflicts to zero within two months.",
    ja:
      "プロダクト視点とフルスタック実装を接続し、機能を作るだけでなく、ユーザー行動・責任分界・通知・権限・運用ルールまで整理して、リリース後も価値が続く仕組みを設計します。\n\n" +
      "MeetingRoomBookerでは、要件定義、UI/UX、API/DB、認証・認可、通知、リリース後改善まで担当し、月5〜6回発生していた重複予約を導入後2か月でゼロにしました。",
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
    organization: {
      en: "Tokyo University of Science",
      ja: "東京理科大学 先進工学部 物理工学科",
    },
    description: {
      en: "Physical Engineering foundation with a focus on structural thinking, modeling, and software implementation.",
      ja: "物理工学を通じて、構造的に考える力・モデル化する力・実装へ落とし込む力を磨いています。",
    },
  },
];

export const EXPERIENCE: TimelineItem[] = [
  {
    period: "2026.02 - Present",
    title: {
      en: "Marketing Operations / Growth Initiatives",
      ja: "マーケティング施策運用 / グロース施策",
    },
    organization: {
      en: "Howtelevision, Inc.",
      ja: "株式会社ハウテレビジョン",
    },
    description: {
      en: "Involved in marketing initiatives for 'GaishiShukatsu', where I help improve outreach quality through a fast hypothesis–execution–review cycle. I analyze user response data such as open and click-through rates, organize which messages resonate with which audience segments, and connect those findings to the next action. Rather than just sending campaigns, I focus on understanding user behavior and improving the relevance of each communication.",
      ja: "『外資就活ドットコム』のマーケティング施策運用に取り組んでいます。開封率・クリック率などの行動データをもとに、どのユーザー層にどの訴求が反応されたのかを整理し、次回施策の仮説につなげています。単に配信を回すのではなく、ユーザーがどの情報で興味を持ち、どこで反応し、次にどう動くのかを捉えながら、仮説立案→実行→振り返りのサイクルを高速で回し、施策精度の向上に貢献しています。",
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
      en: "Engaged in internal systems development and operational improvement from problem discovery and requirements definition to infrastructure setup, implementation, and post-release refinement. Worked on planning and developing a conference-room booking system to resolve scheduling conflicts, building and operating an SFTP server with clearly designed permission management, automating internal workflows with VBA, and supporting requirements definition and UI/UX design for a tablet-based reception system. Focused not only on implementation, but also on real-world adoption and continuous improvement based on on-site feedback.",
      ja: "社内課題の発見から要件定義、インフラ構築、実装、リリース後の改善まで一貫して取り組んでいます。予約バッティングの解消を目的とした会議室予約システムの企画・開発、権限設計を含むSFTPサーバーの構築・運用、VBAによる社内業務の自動化、タブレット受付システムの要件定義・UI/UX設計などを担当してきました。実装だけでなく、現場で実際に使われることを前提に、運用定着と継続的な改善まで意識して進めています。",
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
      en: "Experienced rapid team-based product development in a four-day on-site program. Worked on persona definition, service concept alignment, and front-end implementation through pair development, while also participating in discussions on what user problem the team should solve and why. This experience strengthened my customer-centric thinking, communication under ambiguity, and ability to connect implementation decisions with product value.",
      ja: "4日間の対面プログラムで、短期間のチーム開発による0→1プロダクト開発を経験しました。顧客ペルソナの定義、サービスの方向性の合意形成、フロント実装のペア開発に取り組みながら、「誰のどんな課題を解くのか」をチームで議論し、実装と最終発表につなげました。この経験を通して、顧客視点で課題を捉える力、曖昧な状況で合意形成する力、実装を価値に結びつけて説明する力を伸ばしました。",
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
      en: "Completed a one-week 0→1 development cycle in a four-member team, covering persona definition, technology selection, implementation, and final presentation. In addition to development, I mainly led the structure and delivery of the pitch, focusing on explaining how each technical decision solved concrete user problems rather than simply listing features. Through this experience, I learned how to translate engineering choices into business value and communicate them clearly to both technical and non-technical audiences.",
      ja: "4人チームで、ペルソナ定義・技術選定・実装・発表までを1週間でやり切る0→1開発を経験しました。開発に関わりつつ、主にプレゼン資料の構成と発表を主導し、機能の羅列ではなく「その技術がユーザーのどんな課題をどう解決するのか」を軸に価値を伝えることを意識しました。この経験を通して、技術的な判断をビジネス価値へ翻訳し、非エンジニアにも伝わる形で表現する力を実践的に学びました。",
    },
  },
];

export const SKILLS: SkillCategory[] = [
  {
    category: { en: "Languages / Query", ja: "言語・クエリ" },
    items: [
      { name: "C#", icon: SiDotnet },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "C++", icon: SiCplusplus },
      { name: "C", icon: SiC },
      { name: "VBA", icon: VscCode },
      { name: "SQL", icon: VscDatabase },
    ],
  },
  {
    category: { en: "Frontend / Backend", ja: "フロントエンド・バックエンド" },
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Blazor WebAssembly", icon: SiBlazor },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "ASP.NET Core", icon: SiDotnet },
      { name: "EF Core", icon: SiDotnet },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "SQLite", icon: VscDatabase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Linux / Nginx", icon: VscCode },
      { name: "Git / GitHub", icon: SiGithub },
    ],
  },
  {
    category: { en: "Learning / Exploring", ja: "学習・検証中" },
    items: [
      { name: "Microsoft Azure", icon: VscAzure },
      { name: "Docker", icon: SiDocker },
      { name: "Go", icon: SiGo },
      { name: ".NET Aspire", icon: SiDotnet },
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
      en: "An internal booking system that reduced 5-6 monthly room conflicts to zero through operations design and API-side validation.",
      ja: "運用設計とAPI側検証により、月5〜6回の会議室重複予約をゼロにした社内予約システム。",
    },
    longDescription: {
      en: "Planned and developed an internal booking product for BE-AM after identifying that double bookings were caused by mixed-use calendars, unclear responsibility boundaries, and insufficient notifications. I led requirements, UI/UX, frontend, backend, DB/API design, authentication/authorization, Chatwork notifications, and post-release improvement. The system validates conflicts on the API side instead of relying only on UI warnings, and reduced 5-6 monthly conflicts to zero within two months.",
      ja: "株式会社BE-AMで、会議室予約の重複が用途混在・責任分界の曖昧さ・通知不足から発生していると捉え、社内予約プロダクトを企画・開発しました。要件定義、UI/UX、フロントエンド、バックエンド、DB/API設計、認証・認可、Chatwork通知、リリース後改善まで担当。UIの警告だけに頼らずAPI側で重複検証を担保し、月5〜6回発生していた重複予約を導入後2か月でゼロにしました。",
    },
    links: {
      github: "https://github.com/Haru8644/MeetingRoomBooker",
    },

    images: [
      {
        src: "/images/projects/meetingroombooker-1.png",
        alt: {
          en: "MeetingRoomBooker home screen",
          ja: "MeetingRoomBooker ホーム画面",
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
        label: "Impact",
        text: {
          en: "Reduced 5-6 monthly booking conflicts to zero within two months.",
          ja: "月5〜6回の重複予約を、導入後2か月でゼロに改善。",
        },
      },
      {
        label: "Product Decision",
        text: {
          en: "Separated user roles, notifications, permissions, and exception handling instead of treating it as a UI-only issue.",
          ja: "UI課題として終わらせず、利用者ごとの役割・通知・権限・例外運用を分解。",
        },
      },
      {
        label: "Engineering",
        text: {
          en: "API-side conflict validation, authorization, Chatwork notifications, and Linux VPS operation.",
          ja: "API側重複検証、認可、Chatwork通知、Linux VPS運用まで実装。",
        },
      },
    ],

    detailSections: [
      {
        title: { en: "Product Decisions", ja: "Product Decisions" },
        items: [
          {
            title: {
              en: "Dedicated system instead of extending TimeTree",
              ja: "TimeTree改善ではなく専用システム化",
            },
            description: {
              en: "Because room reservations were mixed with other schedules, I chose to build a dedicated booking flow rather than only improving the existing calendar operation.",
              ja: "会議室予約以外の予定も混在し、空き状況や変更責任が曖昧だったため、既存運用の改善だけでなく専用システム化を選択しました。",
            },
          },
          {
            title: {
              en: "Validate conflicts on the API side",
              ja: "重複検証をAPI側に置く",
            },
            description: {
              en: "UI warnings alone can be bypassed by timing or implementation gaps, so final conflict detection is handled by the API to protect data consistency.",
              ja: "画面上の警告だけでは通信タイミングや実装漏れで破綻するため、最終的な重複検証はAPI側で担保しました。",
            },
          },
          {
            title: {
              en: "Separate roles and permissions",
              ja: "役割と権限を分ける",
            },
            description: {
              en: "I separated what organizers, participants, and administrators need to know and who can update or delete reservations.",
              ja: "予約者・参加者・管理者で必要な情報と責任範囲を分け、誰が予約を更新・削除できるかを明確にしました。",
            },
          },
          {
            title: {
              en: "Make notifications part of the workflow",
              ja: "通知を業務フローに組み込む",
            },
            description: {
              en: "Reservation data alone does not prevent confusion, so create, update, delete, and reminder notifications are delivered through in-app and Chatwork flows.",
              ja: "データが正しくても変更が伝わらなければ混乱は減らないため、作成・変更・削除・リマインド通知をアプリ内通知とChatwork通知に組み込みました。",
            },
          },
        ],
      },
      {
        title: { en: "Technical Highlights", ja: "Technical Highlights" },
        items: [
          {
            title: {
              en: "Blazor WebAssembly + ASP.NET Core Web API",
              ja: "Blazor WebAssembly + ASP.NET Core Web API",
            },
            description: {
              en: "Built a separated frontend/backend architecture with RESTful API boundaries for maintainability.",
              ja: "フロントエンドとバックエンドを分離し、RESTful APIを境界にした保守しやすい構成にしました。",
            },
          },
          {
            title: {
              en: "Authorization for reservation operations",
              ja: "予約操作の認可設計",
            },
            description: {
              en: "Update and delete operations are limited based on organizer/admin responsibility, not left to the UI alone.",
              ja: "更新・削除をUI表示だけに任せず、予約者・管理者の責任範囲に応じてAPI側でも制御しました。",
            },
          },
          {
            title: {
              en: "EF Core + SQLite for small internal operation",
              ja: "EF Core + SQLiteによる小規模社内運用",
            },
            description: {
              en: "Used EF Core and SQLite for a small internal deployment where simplicity, portability, and maintainability matter.",
              ja: "小規模な社内運用に合わせ、シンプルさ・移植性・保守性を重視してEF CoreとSQLiteを採用しました。",
            },
          },
          {
            title: {
              en: "Chatwork API notifications and reminders",
              ja: "Chatwork API通知とリマインド",
            },
            description: {
              en: "Integrated Chatwork notifications for reservation creation, changes, deletion, and reminders so updates reach participants outside the app.",
              ja: "予約作成・変更・削除・リマインドをChatwork通知に連携し、アプリ外でも関係者に変更が届くようにしました。",
            },
          },
          {
            title: {
              en: "Linux VPS operation with Nginx and systemd",
              ja: "Nginx / systemd を用いたLinux VPS運用",
            },
            description: {
              en: "Operated the system on a Linux VPS using Nginx and systemd, considering small-scale internal reliability and maintainability.",
              ja: "Linux VPS上でNginxとsystemdを用いて運用し、小規模社内システムとしての安定性と保守性を意識しました。",
            },
          },
        ],
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
