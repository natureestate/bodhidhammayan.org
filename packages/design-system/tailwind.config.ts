import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: {
            50: "#FFF9E6",
            100: "#FFF0BF",
            200: "#FFE699",
            300: "#FFDB66",
            400: "#FFD133",
            500: "#C8A951",
            600: "#B8963D",
            700: "#9A7B2F",
            800: "#7C6124",
            900: "#5E4919",
          },
          white: "#FFFFFF",
          cream: "#FAF8F5",
          dark: "#1A1A1A",
          text: {
            primary: "#1A1A1A",
            secondary: "#4A4A4A",
            muted: "#8A8A8A",
            light: "#FFFFFF",
          },
        },
        gold: {
          50: "#FFF9E6",
          100: "#FFF0BF",
          200: "#FFE699",
          300: "#FFDB66",
          400: "#FFD133",
          500: "#C8A951",
          600: "#B8963D",
          700: "#9A7B2F",
          800: "#7C6124",
          900: "#5E4919",
        },
        dharma: {
          50: "#FAF8F5",
          100: "#F0EDE6",
          200: "#E0DAD0",
          300: "#C5BBA8",
          400: "#A89A7E",
          500: "#8A7A5E",
          600: "#6E6049",
          700: "#574B38",
          800: "#3D352A",
          900: "#2A241C",
          950: "#1A1A1A",
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
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        thai: ["Sarabun", "Noto Sans Thai", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
};

export default config;
