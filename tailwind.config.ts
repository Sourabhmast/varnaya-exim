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
        primary: {
          DEFAULT: "#0D2E5E",
          foreground: "#FFFFFF",
        },
        gold: {
          DEFAULT: "#D4AF37", // Brighter base gold
          light: "#F9D783",   // High contrast gold for text
          dark: "#B8860B",
        },
        ivory: "#FFFFF0",
        gray: {
          warm: "#F5F5F5",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};
export default config;
