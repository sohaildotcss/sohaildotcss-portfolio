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
      slideUp: {
         "0%": { transform: "translateY(80%)" },
         "75%": { transform: "translateY(0%)" },
        "100%": {
          transform: "translateY(-100%)",
          zIndex: "-10"
        },
        
      },
    },
    animation: {
      slideUp: "slideUp 1s linear"
    },
  },
  plugins: [],
};
