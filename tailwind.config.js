/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "mystery-mixed": ["mystery-mixed"],
      "ms-gothic": ["ms-gothic"],
    },
    colors: {
      page: "#C7C7C7",
      pink: "#E21B7B",
      green: "#4FE21B",
      darkGreen: "#389817",
      blue: "#1BBEE2",
      purple: "#9747FF",
      red: "#A31616",
      white: "#F5F0F0",
      black: "#1E1E1E",
      lightGrey: "#D9D9D9",
      darkGray: "#5C5A5A",
      h3Black: "#151515",
      h2Black: "#161616",
      grey: "#808080"
    },
  },
  plugins: [],
};
