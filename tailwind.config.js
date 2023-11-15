// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,tsx,mdx}",
    "./app/components/**/*.{js,ts,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    nextui({
      themes: {
        dark: {
          colors: {
            warning: {
              DEFAULT: "#FEF08A",
              foreground: "#000000",
            },
            danger: {
              DEFAULT: "#660032",
              foreground: "#FFFFFF",
            },
            focus: "#660032",
          },
        },
      },
    }),
  ],
};

export default config;
