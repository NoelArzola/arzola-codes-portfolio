/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "gray-lightest": "#FBFBFD",
        "gray-for-sure": "#868B88",
        "almost-white": "#F5F5F7",
        "link-blue": "#06C",
        "a-better-gray": "#C1C1C1",
      },
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
