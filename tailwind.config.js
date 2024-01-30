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
    extend: {
      backgroundImage: {
        tile: "linear-gradient(to bottom right, #60C2D1, transparent, #60C2D1, transparent, #60C2D1, transparent, #60C2D1, transparent), url('/TribalScholarshipProgram/image/cap-border.svg')",
      },
      animation: {
        'text-reveal': 'text-reveal 2s linear forwards',
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#73D6E6",
              foreground: "#000000",
            },
            danger: {
              DEFAULT: "#660032",
              foreground: "#FFFFFF",
            },
            focus: "#660032",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#73D6E6",
              foreground: "#000000",
            },
            danger: {
              DEFAULT: "#660032",
              foreground: "#FFFFFF",
            },
            success: {
              DEFAULT: "#74D7E7",
              foreground: "#000000",
            },
            focus: "#660032",
          },
        },
      },
    }),
  ],
};

export default config;
