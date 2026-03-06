import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdf8ef",
          100: "#faefd9",
          200: "#f4dbb2",
          300: "#edc481",
          400: "#e4a44e",
          500: "#dd8d2c",
          600: "#ce7422",
          700: "#ab591e",
          800: "#894720",
          900: "#6f3b1d",
          950: "#3c1d0d",
        },
        dharma: {
          50: "#f6f5f0",
          100: "#e8e5d8",
          200: "#d3cdb4",
          300: "#b9af89",
          400: "#a49766",
          500: "#958758",
          600: "#806e4a",
          700: "#68573d",
          800: "#584937",
          900: "#4d4032",
          950: "#2c231a",
        },
        nature: {
          50: "#f0f9f1",
          100: "#dbf0de",
          200: "#b9e1c0",
          300: "#8bca97",
          400: "#5aad6a",
          500: "#38914c",
          600: "#28753b",
          700: "#215d31",
          800: "#1d4a29",
          900: "#193d23",
          950: "#0d2214",
        },
      },
      fontFamily: {
        thai: ["Sarabun", "Noto Sans Thai", "sans-serif"],
        display: ["Prompt", "Sarabun", "sans-serif"],
      },
    },
  },
};

export default config;
