// prettier.config.ts
import { RequiredOptions } from "prettier";

const config: RequiredOptions = {
  plugins: ["prettier-plugin-tailwindcss"],
  semi: false,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "none",
  bracketSpacing: false,
  bracketSameLine: false,
  rangeStart: 0,
  rangeEnd: 0,
  parser: "html",
  filepath: "",
  requirePragma: false,
  insertPragma: false,
  proseWrap: "always",
  arrowParens: "always",
  htmlWhitespaceSensitivity: "css",
  endOfLine: "auto",
  quoteProps: "preserve",
  vueIndentScriptAndStyle: false,
  embeddedLanguageFormatting: "off",
  singleAttributePerLine: false,
  experimentalTernaries: false,
  printWidth: 0,
  tabWidth: 0,
};

export default config;
