import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

// Optimize fonts: Load English and Japanese subsets
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    default: "Haruki Ino | Technical Specialist Portfolio",
    template: "%s | Haruki Ino",
  },
  description: "Aspiring Technical Specialist at Tokyo University of Science. Bridging Physics, Business, and Azure Cloud.",
  keywords: ["Azure", "Microsoft", "Technical Specialist", "Portfolio", "C#", "Next.js"],
  authors: [{ name: "Haruki Ino" }],
  creator: "Haruki Ino",
  
  // Open Graph: Controls how the link looks when shared on Slack/Teams/LinkedIn
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://your-portfolio-url.com", 
    title: "Haruki Ino - Technical Specialist Portfolio",
    description: "Bridging Physics, Business, and Azure Cloud. View my projects and technical stack.",
    siteName: "Haruki Ino.Dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haruki Ino Portfolio",
    description: "Aspiring Technical Specialist | Azure & .NET Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="corporate" className="scroll-smooth">
      <body className={`${inter.variable} ${notoSansJP.variable} font-sans text-slate-800 bg-base-100 min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}