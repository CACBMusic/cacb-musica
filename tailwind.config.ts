import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",

        primary: {
          DEFAULT: "#f97316",
          light: "#fb923c",
          yellow: "#facc15",
        },
      },

      boxShadow: {
        glow: "0 0 40px rgba(249, 115, 22, 0.35)",
      },

      backdropBlur: {
        xs: "2px",
      },

      borderRadius: {
        "4xl": "2rem",
      },
    },
  },

  plugins: [],
};

export default config;