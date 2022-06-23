/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "gray-lightest": "#FBFBFD",
        "almost-white": "#F5F5F7",
        "link-blue": "#06C",
      },
    },
  },
  plugins: [],
};
