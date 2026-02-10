// src/app/constants.ts
import { Profile, Project, SkillCategory } from './types';

/**
 * Global user profile configuration.
 */
export const PROFILE: Profile = {
  name: "Haruki Ino", // Change this
  title: "Aspiring Technical Specialist",
  university: "Tokyo University of Science",
  department: "Dept. of Physical Engineering (B2)",
  catchphrase: "Bridging Physics, Business, and Azure Cloud.",
  // Keep the description in Japanese for Japanese HR, but structure it clearly.
  description: "物理工学で培った数理的思考力と、C#/.NETを中心とした開発力を武器に、ビジネス課題を技術で解決する「Technical Specialist」を目指しています。Customer Obsessionを胸に、現場の泥臭い課題からモダンなクラウドアーキテクチャまで対応します。",
  atcoder: {
    rating: 1467,
    rank: "Cyan (水色)",
    text: "Algorithm & Logical Thinking"
  },
  socials: {
    github: "https://github.com/Haru8644",
    atcoder: "https://www.linkedin.com/in/yourusername",
    email: "mailto:haru.dev8644@gmail.com"
  }
} as const;

/**
 * Technical skills categorized for readability.
 * Prioritizing Microsoft technologies to appeal to the target role.
 */
export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    items: ["C# (.NET)", "Go", "TypeScript", "C++", "VBA"]
  },
  {
    category: "Cloud & Infrastructure",
    items: ["Microsoft Azure", "App Service", "SQL Database", "Entra ID", "Docker", "WSL2"]
  },
  {
    category: "Web Technologies",
    items: ["ASP.NET Core", "React", "Next.js", "Blazor", "Tailwind CSS"]
  }
];

/**
 * Project portfolio highlighting problem-solving abilities.
 */
export const PROJECTS: Project[] = [
  {
    title: "Internal Conference Room Reservation System",
    status: "In Development",
    tags: ["C# (ASP.NET Core)", "Azure SQL", "Entra ID", "React"],
    description: "社内の会議室ダブルブッキング問題を解決するために開発された、モダンな予約管理プラットフォーム。",
    highlights: [
      { 
        label: "Challenge", 
        text: "手動管理による重複予約と、外出先からのアクセス不可による機会損失。" 
      },
      { 
        label: "Solution", 
        text: "Azure App Service上に構築し、Entra ID (Azure AD) 認証によるセキュアなSSOを実現。モバイルファーストなUIでどこからでも予約可能に。" 
      }
    ],
  },
  {
    title: "Workflow Automation Tool",
    status: "Production Used",
    tags: ["Excel VBA", "Automation", "Customer Obsession"],
    description: "アミューズメント企業の現場における工数管理・書類作成を完全自動化するツール。",
    highlights: [
      { 
        label: "Challenge", 
        text: "手書き・手入力による計算ミス多発と、締め作業の長時間化（月間20時間以上のロス）。" 
      },
      { 
        label: "Impact", 
        text: "VBAを用いた入力支援と自動集計システムを構築。ミスをゼロにし、業務時間を大幅短縮することで、社員が「接客」というコア業務に集中できる環境を提供。" 
      }
    ],
  }
];