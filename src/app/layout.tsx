import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

const siteDescription =
  "Haruki Ino: Class of 2028 aspiring product manager. Product management internship at Merpay, internal software planning and operation, scout UX research preparation, and team SaaS planning.";

export const metadata: Metadata = {
  title: {
    default: "Haruki Ino - Portfolio",
    template: "%s | Haruki Ino",
  },
  description: siteDescription,
  keywords: [
    "Aspiring Product Manager",
    "Class of 2028",
    "Product Planning",
    "Full-stack Development",
    "Product Case Study",
    "C#",
    "ASP.NET Core",
    "Blazor",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Haruki Ino" }],
  creator: "Haruki Ino",

  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://black-mud-02aa94010.6.azurestaticapps.net/",
    title: "Haruki Ino - Portfolio",
    description: siteDescription,
    siteName: "Haruki Ino Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Haruki Ino - Portfolio",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="corporate" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoSansJP.variable} min-h-screen bg-base-100 font-sans text-slate-800 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
