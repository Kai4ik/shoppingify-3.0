import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)"],
        ubuntu: ["var(--font-ubuntu)"],
      },
      colors: {
        alabaster: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
export default config;
