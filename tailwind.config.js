const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "pf-sm": "800px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        logo: ["var(--font-thaleah-fat)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
