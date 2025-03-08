/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#000000",
        },
      },
      fontSize: {
        10: "0.625em",
        12: "0.75em",
        13: "0.8125em",
        14: "0.875em",
        15: "0.9375em",
        16: "1em",
        18: "1.125em",
        20: "1.25em",
        22: "1.375em",
        24: "1.5em",
        26: "1.625em",
        28: "1.75em",
        30: "1.875em",
        32: "2em",
        36: "2.25em",
        40: "2.5em",
        48: "3em",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};
