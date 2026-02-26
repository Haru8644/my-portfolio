import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: {
    default: "Haruki - Portfolio",
    template: "%s | Haruki - Portfolio",
  },
  description: "Unravel complex technology and build the 'obvious' that teams can truly use.",
  keywords: ["Azure", "Microsoft", "Technical Specialist", "Portfolio", "C#", "Next.js"],
  authors: [{ name: "Haruki Ino" }],
  creator: "Haruki Ino",

  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://black-mud-02aa94010.6.azurestaticapps.net/",
    title: "Haruki - Portfolio",
    description: "Unravel complex technology and build the 'obvious' that teams can truly use.",
    siteName: "Haruki - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haruki - Portfolio",
    description: "Unravel complex technology and build the 'obvious' that teams can truly use.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="corporate" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoSansJP.variable} font-sans text-slate-800 bg-base-100 min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}