import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#5B21B6",
        secondary: "#EEE8F7",
      },

      container: {
        center: true,
        padding: "1rem",
      },
    },
  },

  plugins: [],
};

export default config;
