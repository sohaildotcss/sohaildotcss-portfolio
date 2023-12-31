/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    keyframes: {
      words: {
        "0%": {
          opacity: "0",
        },
        "50%": {
          opacity: "1",
        },
        "100%": {
          opacity: "0",
        },
      },
    },
    animation: {
      words: "words 0.7s linear",
    },
  },
  plugins: [],
};
