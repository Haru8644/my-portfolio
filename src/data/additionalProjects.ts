import type { Project } from "./types";

export const MERPAY_PROJECT: Project = {
  id: "merpay",
  title: {
    ja: "メルペイ / メルカードの利用体験改善",
    en: "Merpay / Improving the Mercard experience",
  },
  status: "Proposal & Prototype",
  stage: {
    ja: "企画・プロトタイプ・最終提案",
    en: "Proposal & prototype",
  },
  role: {
    ja: "PdMインターン",
    en: "Product Manager Intern",
  },
  tags: ["Product Planning", "Data Analysis", "Prototyping"],
  description: {
    ja: "メルカードの利用体験を対象に、データ分析や仕様調査、社内関係者へのヒアリングを通じて改善に取り組みました。決済エラーの改善企画では、失敗後の案内だけでなく、利用者が自分で確認・対処する負担まで捉え、代替案の比較からプロトタイプ・最終提案まで進めました。",
    en: "Worked on the Mercard experience through data analysis, specification research, and discussions with internal stakeholders. For a payment-failure improvement proposal, I examined the effort users face after a failure and developed alternatives, a prototype, and a final proposal.",
  },
  longDescription: {
    ja: "株式会社メルペイ。失敗した理由を伝えるだけでなく、買い物を終えるまでの負担を考える。",
    en: "Merpay, Inc. Consider the effort of completing a purchase, beyond explaining why a payment failed.",
  },
  links: {},
  highlights: [
    {
      label: "Stage",
      text: {
        ja: "企画・プロトタイプ・最終提案",
        en: "Proposal & prototype",
      },
    },
    {
      label: "Role",
      text: {
        ja: "PdMインターン",
        en: "Product Manager Intern",
      },
    },
    {
      label: "Period",
      text: {
        ja: "2026年7月16日–10月15日",
        en: "July 16–October 15, 2026",
      },
    },
  ],
  detailSections: [
    {
      title: {
        ja: "背景・判断・到達点",
        en: "Context, decisions & stage",
      },
      items: [
        {
          title: {
            ja: "支払いの完了までを、課題の範囲にする",
            en: "Start with completing the purchase",
          },
          description: {
            ja: "中心に取り組んだのは、与信枠不足に伴う決済エラーの改善企画です。狙いは、利用者が使いたい場面で支払いを完了できる状態に近づけることでした。\n\nネットで買い物をする場面を想定し、失敗後に理由を調べ、アプリ内で対処し、購入画面へ戻るまでを整理しました。",
            en: "The central project was an improvement proposal for payment failures caused by insufficient credit availability. The aim was to help people complete a payment when they needed to use the card.\n\nI mapped an assumed online-shopping journey: investigating a failed payment, taking action in the app, and returning to checkout.",
          },
        },
        {
          title: {
            ja: "データ・仕様・関係者の知見をつなぐ",
            en: "Connect data, specifications, and stakeholder knowledge",
          },
          description: {
            ja: "データ分析と仕様調査、社内関係者へのヒアリングを通じて、決済エラーが起きる状況と、利用者が取れる対応を整理しました。発生状況によって必要な対応は異なると考え、ひとつの案内だけで解決できると決めつけずに検討しました。",
            en: "Through data analysis, specification research, and discussions with internal stakeholders, I organized failure scenarios and the actions available to users. I considered how different situations could require different responses, rather than assuming one explanation would address them all.",
          },
        },
        {
          title: {
            ja: "案内の分かりやすさから、対処の負担まで",
            en: "Explore clarity, awareness, and effort",
          },
          description: {
            ja: "『分かりやすい案内』『事前の気づき』『対処負担の軽減』という方向から選択肢を比較しました。案内の改善は次の行動を理解する助けになり、事前の気づきは失敗する前の判断を支えます。一方で、確認や判断を利用者に委ねる負担も考える必要があります。\n\n顧客への価値、既存プロダクトとの整合、技術・運用上の制約を踏まえて検討しました。対処の負担を減らす方向にも、実現可能性や運用の検討が必要です。ここでは内部の施策や採否ではなく、比較に使った観点を示しています。",
            en: "I compared directions including clearer guidance, earlier awareness, and less effort to resolve a problem. Guidance can clarify the next step, while earlier awareness can support decisions before a failure. Both also require considering how much checking and judgment remain with the user.\n\nI considered customer value, fit with the existing product, and technical and operational constraints. Reducing resolution effort also requires assessing feasibility and operations. These are general comparison criteria, rather than a description of internal proposals or decisions.",
          },
        },
        {
          title: {
            ja: "提案する体験を具体化する",
            en: "Make the proposed experience tangible",
          },
          description: {
            ja: "関係者への相談とプロトタイプを通じて、利用者がどの場面で何を理解し、どう行動するかを具体化し、最終提案まで進めました。企画段階で体験を形にすることで、価値と実現上の論点を同じ対象を見ながら議論しました。",
            en: "Through stakeholder discussions and a prototype, I made the proposed understanding and actions at each step more concrete and reached a final proposal. A tangible experience helped discussions of both user value and feasibility.",
          },
        },
        {
          title: {
            ja: "中心企画の到達点と、別にリリースした改善",
            en: "Separate proposal work from released improvements",
          },
          description: {
            ja: "決済エラーの中心企画は、企画・プロトタイプ・最終提案までです。\n\n別の改善として、カードがまだ届いていない利用者が発行状況を確認するための導線改善と、問い合わせを起点とする支払いの説明・履歴表示の改善に、リリースまで関わりました。調査・企画・仕様整理・関係者調整などを担当し、実装や承認は関係者と分担しました。\n\nカード発行状況への導線改善はリリース済みで、支払いの説明・履歴表示の改善は一部リリースの段階です。効果の評価は表示範囲や評価時期に左右されます。リリースしたことと、改善効果を測定できたことは分けて捉えています。",
            en: "The payment-failure project reached the proposal and prototype stage.\n\nSeparately, I contributed through release to improving access to card-issuance status for people awaiting their card, and to payment explanations and history displays informed by inquiries. My work included research, planning, specifications, and coordination; implementation and approvals were shared with stakeholders.\n\nThe card-issuance status navigation was released, while the payment explanation and history improvements are partially released. Impact evaluation depends on exposure and timing. Release status and measured improvement are treated separately.",
          },
        },
        {
          title: {
            ja: "持ち帰った視点",
            en: "What I took forward",
          },
          description: {
            ja: "エラー画面の分かりやすさだけを見ていると、利用者が本来の目的に戻るまでの手間を見落とします。目的の達成までをたどり、利用者自身にどこまで確認・判断・対処を求めるかを考える視点を、次の企画にもつなげています。",
            en: "Focusing only on the clarity of an error screen can overlook the work required to resume the original task. I carry forward the habit of tracing the journey to completion and considering how much checking, judgment, and recovery a product asks of its users.",
          },
        },
      ],
    },
    {
      title: {
        ja: "協働・分担",
        en: "Collaboration",
      },
      items: [
        {
          title: {
            ja: "PdMインターン / 調査・企画・仕様整理・関係者調整",
            en: "Product Manager Intern / Research, planning, specifications & coordination",
          },
          description: {
            ja: "社内関係者に相談しながら企画を具体化。実装・承認は関係者と分担。",
            en: "Developed proposals with internal stakeholders; implementation and approvals were shared responsibilities.",
          },
        },
      ],
    },
  ],
};

export const HOWTELEVISION_PROJECT: Project = {
  id: "howtelevision",
  title: {
    ja: "Howtelevision / スカウトUX改善",
    en: "Howtelevision / Scout UX improvement",
  },
  status: "Research Preparation",
  stage: {
    ja: "課題仮説の整理・調査準備",
    en: "Problem hypotheses & research preparation",
  },
  role: {
    ja: "課題仮説の整理・競合比較",
    en: "Problem hypotheses & comparative research",
  },
  tags: ["Problem Hypotheses", "Comparative Research", "Research Preparation"],
  description: {
    ja: "スカウト承諾後の選考参加率を高めるため、自社と競合の体験を比較し、学生が迷う場面やその原因仮説を整理しています。今後のデータ分析・インタビューで検証する準備を進めています。",
    en: "Comparing student journeys across services to identify possible barriers between scout acceptance and selection participation, with data analysis and interviews planned as the next step.",
  },
  longDescription: {
    ja: "株式会社ハウテレビジョン / 外資就活ドットコム。承諾をゴールにせず、その先の選考参加までを見る。",
    en: "Howtelevision, Inc. / GaishiShukatsu. Look beyond acceptance to participation in the selection process.",
  },
  links: {},
  highlights: [
    {
      label: "Stage",
      text: {
        ja: "課題仮説の整理・調査準備",
        en: "Problem hypotheses & research preparation",
      },
    },
    {
      label: "Role",
      text: {
        ja: "課題仮説の整理・競合比較",
        en: "Problem hypotheses & comparative research",
      },
    },
    {
      label: "Period",
      text: {
        ja: "2026年10月–現在",
        en: "October 2026–present",
      },
    },
  ],
  detailSections: [
    {
      title: {
        ja: "背景・判断・到達点",
        en: "Context, decisions & stage",
      },
      items: [
        {
          title: {
            ja: "承諾の先にある、学生の行動を見る",
            en: "Look at what happens after acceptance",
          },
          description: {
            ja: "外資就活ドットコムで、スカウトを承諾した学生が実際の選考参加へ進む割合を高めるため、UX改善に取り組んでいます。中心に置くのは承諾率ではなく、承諾から選考参加への移行です。",
            en: "Working on the scout experience at GaishiShukatsu to increase the share of students who take part in the selection process after accepting a scout invitation. The focus is the transition from acceptance to participation, rather than the acceptance rate.",
          },
        },
        {
          title: {
            ja: "目的・状態・次の行動を軸に比較する",
            en: "Compare goals, status, and next actions",
          },
          description: {
            ja: "現在は、学生の立場でスカウトの確認・承諾から、その後のやり取りまでの体験をたどり、どこで迷いや負担が生じるかを整理しています。競合の就活サービスに加え、他分野のプロダクトも比較しながら、画面上の使いにくさと、その背景にある原因を探っています。\n\n利用者が何をしたいか、現在の状態が伝わるか、次に何をすればよいかという観点を使っています。会話や情報確認をしやすくする他分野の体験も参考にし、今後の調査設計ではPCとスマホの違いを考慮する方針です。",
            en: "I am currently tracing the student journey from reviewing and accepting an invitation to the conversations that follow, identifying where confusion or effort may arise. I compare the experience with other recruiting services and products from other fields to explore both usability issues and their possible underlying causes.\n\nThe comparison considers what users want to achieve, whether their current status is clear, and whether they can identify the next action. Products that make conversations and information easier to follow also inform the exploration. Future research will account for desktop and mobile differences.",
          },
        },
        {
          title: {
            ja: "今あるのは、検証前の仮説",
            en: "Current hypotheses remain unvalidated",
          },
          description: {
            ja: "特に、現在の状況や次に必要な行動が伝わっているか、期限やメッセージを無理なく確認できるかに着目しています。これらは現時点の仮説として整理し、今後、データ分析とインタビューを通じて検証する予定です。",
            en: "My current hypotheses concern whether students can understand their status, identify their next action, and keep track of deadlines and messages. These hypotheses have yet to be validated; the next step is research using data analysis and interviews.",
          },
        },
        {
          title: {
            ja: "調査から設計・計測へつなげる",
            en: "Connect research with design and measurement",
          },
          description: {
            ja: "検証結果をもとに改善策を設計し、実装後の計測・評価までつなげることを目指しています。その結果から仮説を見直す予定です。現段階では、原因の特定やCVR改善を成果として報告できる状態にはありません。\n\n既存のtoCマーケティング・配信分析の経験とは別の取り組みです。過去の配信施策の反応や成果を、このPJの検証結果として扱っていません。",
            en: "The aim is to use the findings to design improvements, implement them with measurement in place, and evaluate the results, then revisit the hypotheses. The project has not yet established causes or demonstrated a CVR improvement.\n\nThis is separate from my existing consumer marketing and campaign analysis work. Past campaign responses and outcomes are not presented as validation results for this project.",
          },
        },
      ],
    },
    {
      title: {
        ja: "協働・分担",
        en: "Collaboration",
      },
      items: [
        {
          title: {
            ja: "課題仮説の整理・競合比較",
            en: "Problem hypotheses & comparative research",
          },
          description: {
            ja: "PJの中で、学生側の体験に関する仮説整理と比較を担当。今後、調査・検証へ進む予定。",
            en: "Contributing student-side hypotheses and experience comparisons within the project, with research and validation planned next.",
          },
        },
      ],
    },
  ],
};

export const SPEEE_PROJECT: Project = {
  id: "speee",
  title: {
    ja: "Speee / 不動産SaaSの企画",
    en: "Speee / Real estate SaaS planning",
  },
  status: "Team Proposal",
  stage: {
    ja: "企画・開発計画の提案",
    en: "Product & development plan proposal",
  },
  role: {
    ja: "3days Engineer Internship / チーム演習",
    en: "3days Engineer Internship / Team exercise",
  },
  tags: ["Team Proposal", "MVP", "Validation Planning"],
  description: {
    ja: "不動産会社向けSaaSを題材に、チームで提供価値と開発計画を検討しました。査定書を作る効率だけでなく、売主が結果に納得して相談や訪問査定へ進めるかに着目し、MVPの範囲と検証する指標を整理しました。",
    en: "Worked with a team to define the value and development plan for a SaaS product serving real estate agencies. We looked beyond document-production efficiency to how sellers could understand a valuation and choose their next step, then defined an MVP scope and measures for validation.",
  },
  longDescription: {
    ja: "株式会社Speee。資料をつくる効率と、受け取った人が行動できることをつなぐ。",
    en: "Speee, Inc.. Connect efficient document creation with the recipient's ability to act.",
  },
  links: {},
  highlights: [
    {
      label: "Stage",
      text: {
        ja: "企画・開発計画の提案",
        en: "Product & development plan proposal",
      },
    },
    {
      label: "Role",
      text: {
        ja: "3days Engineer Internship / チーム演習",
        en: "3days Engineer Internship / Team exercise",
      },
    },
    {
      label: "Period",
      text: {
        ja: "2026年9月 · 3日間",
        en: "September 2026 · 3 days",
      },
    },
  ],
  detailSections: [
    {
      title: {
        ja: "背景・判断・到達点",
        en: "Context, decisions & stage",
      },
      items: [
        {
          title: {
            ja: "不動産会社と売主、両側の課題をつなぐ",
            en: "Connect agency and seller needs",
          },
          description: {
            ja: "不動産会社向けSaaSのチーム演習で、不動産会社の初動・資料作成の負担と、売主が査定結果を理解し、納得・信頼するまでの課題をつないで考えました。査定書が完成するだけでは、売主の次の行動につながるとは限らないという視点を置きました。",
            en: "In a team exercise on real estate SaaS, we connected agencies' initial-response and document-preparation burden with sellers' needs for understanding, confidence, and trust. We considered how completing a valuation document alone might not help a seller take the next step.",
          },
        },
        {
          title: {
            ja: "次の行動につながるかに、MVPを絞る",
            en: "Focus the MVP on the next step",
          },
          description: {
            ja: "査定結果を届けるだけでなく、売主が希望する対応を選べる体験を検討しました。相談や訪問査定への移行につながるかを中心に、MVPの範囲と検証する指標を整理し、初期段階で作らない機能も決めました。",
            en: "We explored an experience where sellers could choose their preferred response after receiving a valuation. We defined the MVP scope and measures around progression to a consultation or an in-person valuation, including which features to leave out initially.",
          },
        },
        {
          title: {
            ja: "価値の検証と、開発の実現可能性を分ける",
            en: "Separate value validation from technical investment",
          },
          description: {
            ja: "自動化を広げる前に、データ条件や実現可能性を確かめる必要があると整理しました。短期で確かめる価値と、その後の機能拡張・技術投資を分け、何を作るかだけでなく、何を先に確かめるかを開発計画に組み込みました。",
            en: "We identified the need to check data conditions and feasibility before expanding automation. We separated short-term value validation from later feature expansion and technical investment, planning not only what to build but what to establish first.",
          },
        },
        {
          title: {
            ja: "到達点は、チームとしての提案",
            en: "The outcome was a team proposal",
          },
          description: {
            ja: "到達段階は企画・開発計画の提案です。実サービスの開発・リリース、売主への提供、指標改善の実測は行っていません。この事例はチームで検討した成果物として紹介しています。\n\n機能を増やすことより、利用者の次の行動と、価値を確かめる順番から開発範囲を考える経験になりました。",
            en: "The team reached a product and development plan proposal. We did not build or release a live service, deliver it to sellers, or measure an improvement. This case represents the team's work.\n\nThe exercise helped me think about development scope through users' next actions and the order of validation, rather than the number of features.",
          },
        },
      ],
    },
    {
      title: {
        ja: "協働・分担",
        en: "Collaboration",
      },
      items: [
        {
          title: {
            ja: "3days Engineer Internship / チーム演習",
            en: "3days Engineer Internship / Team exercise",
          },
          description: {
            ja: "提供価値・MVP・開発検証計画をチームで検討。以下はチーム成果物の説明。",
            en: "Product value, MVP scope, and validation planning were explored as a team. The case describes the team's proposal.",
          },
        },
      ],
    },
  ],
};

export const ENTRIA_PROJECT: Project = {
  title: {
    ja: "Entria / 来客受付アプリ",
    en: "Entria / Reception app",
  },
  status: "Design Stage",
  stage: {
    ja: "設計段階",
    en: "Design stage",
  },
  role: {
    ja: "構想・画面構成・操作フローの設計",
    en: "Concept, screen structure & interaction flow",
  },
  tags: ["Concept Design", "UI/UX", "Interaction Flow"],
  description: {
    ja: "来客受付アプリの構想、画面構成、操作フローを設計しています。現段階では実装・API連携・リリース・社内利用・効果測定には進んでいません。",
    en: "Designing the concept, screen structure, and interaction flow of a reception app. Implementation, API integration, release, internal use, and impact measurement have not started.",
  },
  longDescription: {
    ja: "来客が受付の目的を果たすための画面構成と操作の流れを検討する取り組みです。使用予定の技術を実装済みの技術としては掲載していません。",
    en: "Exploring screen structure and interaction flows to help visitors complete reception. Planned technologies are not presented as implemented experience.",
  },
  links: {},
  highlights: [
    {
      label: "Stage",
      text: {
        ja: "構想・UI/UX設計",
        en: "Concept & UI/UX design",
      },
    },
    {
      label: "Role",
      text: {
        ja: "画面構成・操作フロー",
        en: "Screen structure & interaction flow",
      },
    },
    {
      label: "Scope",
      text: {
        ja: "実装・導入・効果検証は未実施",
        en: "No implementation, rollout, or impact validation",
      },
    },
  ],
};
