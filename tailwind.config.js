/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        del: "#2b3945",
        dbg: "hsl(207, 26%, 17%)",
        lte: "hsl(200, 15%, 8%)",
        lin: "hsl(0, 0%, 52%)",
        lbg: "hsl(0, 0%, 98%)",
        lel: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
