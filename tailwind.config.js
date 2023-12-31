/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      ["sm-300"]: "300px",
      sm: "640px",
      md: "768px",
      ["md-800"]: "850px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      keyframes: {
        navbar: {
          "0%": { transform: "translate3d(100%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        navbar: "navbar .7s",
      },
    },
    backgroundPosition: {
      "left-bottom-2": "center bottom .2rem",
    },
    fontFamily: {
      "mystery-mixed": ["mystery-mixed"],
      "ms-gothic": ["ms-gothic"],
    },
    colors: {
      turquoise: "#1BBEE2",
      page: "#C7C7C7",
      pink: "#E21B7B",
      green: "#4FE21B",
      darkGreen: "#389817",
      purple: "#9747FF",
      red: "#ff0000",
      white: "#F5F0F0",
      letterWhite: "#F5F0F0",
      black: "#000000",
      buttonBlack: "#1E1E1E",
      lightGrey: "#D9D9D9",
      darkGray: "#5C5A5A",
      h3Black: "#151515",
      h2Black: "#161616",
      grey: "#808080",
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
