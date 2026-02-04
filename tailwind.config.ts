import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#5B21B6",
        secondary: "#EEE8F7",
        accent: {
          green: "#22C55E",
          DEFAULT: "#22C55E",
        },
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
