// tailwind.config.js
import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,tsx,mdx}',
    './app/components/**/*.{js,ts,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;