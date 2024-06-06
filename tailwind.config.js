/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Raleway Variable'", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
