import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azure: "#0078D4", // Microsoft Azure Blue
        atcoder: "#00C0C0", // AtCoder Cyan
      },
    },
  },
  plugins: [
    // DaisyUIは型定義がないため、requireを使うとTSエラーが出ますが、
    // 以下のコメントでその行だけエラーを無視するのが一般的な解決策です。
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("daisyui"),
  ],
  daisyui: {
    themes: ["corporate", "winter"],
  },
};
export default config;