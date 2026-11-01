import {
  MERPAY_PROJECT,
  HOWTELEVISION_PROJECT,
  SPEEE_PROJECT,
  ENTRIA_PROJECT,
} from "./additionalProjects";
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
import { VscAzure, VscCode, VscDatabase } from "react-icons/vsc";
import { TbTrophy } from "react-icons/tb";

export const PROFILE: Profile = {
  name: {
    en: "Haruki Ino",
    ja: "稲生 遥希",
  },
  title: {
    ja: "2028年卒 · PdM志望",
    en: "Class of 2028 · Aspiring Product Manager",
  },
  university: {
    en: "Tokyo University of Science",
    ja: "東京理科大学",
  },
  department: {
    en: "Dept. of Physical Engineering / Class of 2028",
    ja: "先進工学部 物理工学科 / 2028年卒",
  },
  catchphrase: {
    ja: "使いたいときに、迷わず目的を果たせる体験をつくる。",
    en: "Make it easier for people to do what they came to do.",
  },
  description: {
    ja: "メルペイのPdMインターンと、社内システムの企画・開発・運用を経験しました。利用者の行動をたどって課題を捉え、データや現場の声をもとに、何をどう変えるかを考えています。",
    en: "My experience includes a product management internship at Merpay and planning, building, and operating internal software. I trace user journeys and use data and feedback to understand problems and decide what to change.",
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
    username: "Haru44",
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
    title: {
      ja: "学士（工学）取得見込み · 2028年3月",
      en: "B.Eng. expected March 2028",
    },
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
    period: "2026.07 - 2026.10",
    title: {
      ja: "PdMインターン",
      en: "Product Manager Intern",
    },
    organization: {
      ja: "株式会社メルペイ",
      en: "Merpay, Inc.",
    },
    description: {
      ja: "メルカードの利用体験を対象に、データ分析・仕様調査・関係者へのヒアリングを通じて改善に取り組みました。決済エラー企画はプロトタイプ・最終提案まで。カード発行状況への導線と問い合わせ起点の支払い体験改善では、関係者と協働してリリースまで関わりました。",
      en: "Worked on Mercard through data analysis, specification research, and stakeholder discussions. The payment-failure project reached a prototype and final proposal. Separately contributed through release to card-issuance status navigation and inquiry-led payment experience improvements.",
    },
  },
  {
    period: "2026.02 - Present",
    title: {
      ja: "toCマーケティング・分析 / スカウトUX改善",
      en: "Consumer Marketing & Analysis / Scout UX Improvement",
    },
    organization: {
      en: "Howtelevision, Inc.",
      ja: "株式会社ハウテレビジョン",
    },
    description: {
      en: "Involved in marketing initiatives for 'GaishiShukatsu', where I help improve outreach quality through a fast hypothesis–execution–review cycle. I analyze user response data such as open and click-through rates, organize which messages resonate with which audience segments, and connect those findings to the next action. Rather than just sending campaigns, I focus on understanding user behavior and improving the relevance of each communication.\n\nSince October 2026, I have also contributed to a separate scout UX project focused on selection participation after scout acceptance. This work is currently at the problem-hypothesis, comparative-research, and research-preparation stage; data analysis and interviews are planned next.",
      ja: "『外資就活ドットコム』のマーケティング施策運用に取り組んでいます。開封率・クリック率などの行動データをもとに、どのユーザー層にどの訴求が反応されたのかを整理し、次回施策の仮説につなげています。単に配信を回すのではなく、ユーザーがどの情報で興味を持ち、どこで反応し、次にどう動くのかを捉えながら、仮説立案→実行→振り返りのサイクルを高速で回し、施策精度の向上に貢献しています。\n\n2026年10月からは、別の取り組みとしてスカウト承諾後の選考参加率を高めるUX改善PJに参加。現在は課題仮説の整理・競合比較・調査準備の段階で、データ分析とインタビューによる検証は今後行う予定です。",
    },
  },
  {
    period: "2024.09 - Present",
    title: {
      ja: "社内システム開発 / 業務改善（アルバイト）",
      en: "Internal Systems Development / Operations Improvement (Part-time)",
    },
    organization: {
      en: "BE-AM Co., Ltd.",
      ja: "株式会社BE-AM",
    },
    description: {
      en: "Engaged in internal systems development and operational improvement from problem discovery and requirements definition to infrastructure setup, implementation, and post-release refinement. Worked on planning and developing a conference-room booking system to resolve scheduling conflicts, building and operating an SFTP server with clearly designed permission management, automating internal workflows with VBA, and supporting requirements definition and UI/UX design for a tablet-based reception system. Focused not only on implementation, but also on real-world adoption and continuous improvement based on on-site feedback. The Entria reception app remains at the design stage, without implementation or internal rollout.",
      ja: "社内課題の発見から要件定義、インフラ構築、実装、リリース後の改善まで一貫して取り組んでいます。予約バッティングの解消を目的とした会議室予約システムの企画・開発、権限設計を含むSFTPサーバーの構築・運用、VBAによる社内業務の自動化、タブレット受付システムの要件定義・UI/UX設計などを担当してきました。実装だけでなく、現場で実際に使われることを前提に、運用定着と継続的な改善まで意識して進めています。 受付アプリEntriaは設計段階であり、実装・社内導入は行っていません。",
    },
  },
  {
    period: "2026.09 / 3 days",
    title: {
      ja: "3days Engineer Internship / チーム企画",
      en: "3days Engineer Internship / Team Product Planning",
    },
    organization: {
      ja: "株式会社Speee",
      en: "Speee, Inc.",
    },
    description: {
      ja: "不動産会社向けSaaSを題材に、チームで提供価値と開発計画を検討しました。査定書を作る効率だけでなく、売主が結果に納得して相談や訪問査定へ進めるかに着目し、MVPの範囲と検証する指標を整理しました。",
      en: "Worked with a team to define the value and development plan for a SaaS product serving real estate agencies. We looked beyond document-production efficiency to how sellers could understand a valuation and choose their next step, then defined an MVP scope and measures for validation.",
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
  MERPAY_PROJECT,
  {
    title: {
      en: "MeetingRoomBooker",
      ja: "MeetingRoomBooker",
    },
    id: "meetingroombooker",
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
      ja: "社員約30名が使う会議室予約システムを自ら提案し、開発から運用改善まで担当しました。予定を見渡せる表示と日常的に使う社内チャットへの通知を整え、当日初めて発覚するバッティングの解消につなげました。",
      en: "Proposed, built, and operated an internal room-booking system used by about 30 employees. A clearer schedule view and notifications through the team's everyday chat helped surface conflicts early, eliminating unexpected room clashes first discovered on the day.",
    },
    longDescription: {
      ja: "社員約30名が使う会議室予約システムを自ら提案し、開発から運用改善まで担当しました。予定を見渡せる表示と日常的に使う社内チャットへの通知を整え、当日初めて発覚するバッティングの解消につなげました。 課題整理、要件定義、UI/UX、実装、インフラ、導入・運用改善まで担当しました。現在のAPIによる同室重複の検証と、当時観察した運用上の成果は区別しています。",
      en: "Proposed, built, and operated an internal room-booking system used by about 30 employees. A clearer schedule view and notifications through the team's everyday chat helped surface conflicts early, eliminating unexpected room clashes first discovered on the day. My work covered requirements, UI/UX, implementation, infrastructure, rollout, and iteration. Current API-side room validation is described separately from the operational outcome observed at the time.",
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
        src: "/images/projects/meetingroombooker-demo-schedule.png",
        alt: {
          ja: "MeetingRoomBooker カレンダー画面（公開READMEのデモデータ）",
          en: "MeetingRoomBooker calendar view (demo data from the public README)",
        },
      },
      {
        src: "/images/projects/meetingroombooker-demo-form.png",
        alt: {
          ja: "MeetingRoomBooker 予約フォーム（公開READMEのデモデータ）",
          en: "MeetingRoomBooker reservation form (demo data from the public README)",
        },
      },
    ],
    highlights: [
      {
        label: "Impact",
        text: {
          ja: "重なりを事前に把握・調整し、当日初めて発覚する想定外のバッティングを解消。",
          en: "Earlier awareness and coordination eliminated unexpected room clashes first discovered on the day.",
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
        title: {
          ja: "背景・導入・運用の振り返り",
          en: "Background, rollout & operation",
        },
        items: [
          {
            title: {
              ja: "予定があっても、空き状況が分からない",
              en: "A calendar that did not make availability clear",
            },
            description: {
              ja: "会議室の予約と社員の予定などが同じカレンダーに混在し、空き状況や予定の重なりを把握しにくい状態でした。月5〜6回ほどバッティングが起きていたという記録があり、会議当日に調整へ追われる負担がありました。\n\n予約画面を用意するだけでなく、重なりを事前に把握し、関係者が調整できる状態を目指して専用システムを提案しました。",
              en: "Room bookings and employee schedules were mixed in one calendar, making availability and overlaps difficult to see. Records described roughly five to six clashes per month, creating the burden of coordinating on the day of a meeting.\n\nI proposed a dedicated system with a goal beyond providing a booking screen: helping people notice overlaps early and coordinate with those involved.",
            },
          },
          {
            title: {
              ja: "試作品を使いながら、現場と要件を詰める",
              en: "Refine requirements with a working prototype",
            },
            description: {
              ja: "現場で話を聞いて要件を整理し、約1週間で試作品を開発しました。これは試作品までの期間であり、導入・運用を含む全工程を1週間で終えたという意味ではありません。\n\n幹部への実演と改善を約5回繰り返し、予定の見え方や操作を調整しました。導入後も週1回の聞き取りを行い、実際の使い方に合わせて継続的に改善しました。",
              en: "I gathered requirements through conversations at the workplace and built a prototype in about a week. That period covered the prototype, not the full development, rollout, and operation cycle.\n\nI repeated demonstrations to management and refinements about five times, adjusting schedule visibility and interactions. After rollout, weekly feedback sessions supported continued improvements around actual usage.",
            },
          },
          {
            title: {
              ja: "見渡せる表示と、いつもの場所に届く通知",
              en: "Visibility and notifications in an everyday workflow",
            },
            description: {
              ja: "タイムライン表示で予定を見渡せるようにし、Chatwork通知で日常的に使う社内チャットへ変更を届ける構成にしました。アプリを自分で何度も確認するだけに頼らず、重なりや変更に気づくきっかけを業務の中に置きました。",
              en: "A timeline made schedules easier to scan, while Chatwork notifications delivered changes through the team's everyday chat. This put opportunities to notice overlaps and changes into the workflow, reducing reliance on repeatedly checking the app.",
            },
          },
          {
            title: {
              ja: "確認できたのは、当日初めて発覚する重なりの解消",
              en: "The observed outcome: fewer surprises on the day",
            },
            description: {
              ja: "予定の重なりを事前に把握して調整できるようになり、当日初めて発覚する想定外のバッティングがなくなりました。成果は『すべての重複そのものがなくなった』ことではなく、気づくタイミングと調整できる運用が変わったことです。\n\n社内運用を続ける中で、実装だけではなく、使われ方を聞き、通知や運用を調整し続けることの大切さを学びました。",
              en: "People could identify overlaps and coordinate in advance, eliminating unexpected clashes first discovered on the day. This describes a change in awareness and coordination, rather than the elimination of every scheduling overlap.\n\nContinuing to operate the system taught me the importance of listening to how it is used and adjusting notifications and routines after implementation.",
            },
          },
        ],
      },
      {
        title: {
          en: "Product Decisions",
          ja: "Product Decisions",
        },
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
              ja: "現在の実装では、同じ会議室の重複予約をAPI側で検証し、参加者の予定の重なりは警告として扱います。この機能上の区別と、当時観察した業務上の成果は別のものです。",
              en: "In the current implementation, the API validates overlapping bookings for the same room, while participant schedule overlaps are warnings. These rules are separate from the operational outcome observed at the time.",
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
        title: {
          en: "Technical Highlights",
          ja: "Technical Highlights",
        },
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
    stage: {
      ja: "社内運用中",
      en: "In internal use",
    },
    role: {
      ja: "課題整理・提案・UI/UX・実装・インフラ・導入・運用改善",
      en: "Problem framing, proposal, UI/UX, implementation, infrastructure, rollout & iteration",
    },
  },
  HOWTELEVISION_PROJECT,
  SPEEE_PROJECT,
  {
    title: {
      en: "AtCoderRevManager",
      ja: "AtCoderRevManager",
    },
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
  ENTRIA_PROJECT,
];
