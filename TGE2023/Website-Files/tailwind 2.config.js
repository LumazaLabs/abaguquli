const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: "#262262",
        purple: "#F552C7",
      },
      boxShadow: {
        purple: " 0 5px 10px 1px #F552C7",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(0)" },
        },
      },
      animation: {
        wave: "wave 1s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
