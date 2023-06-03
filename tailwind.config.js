/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4A96FF",
        "primary-hover": "#3F8AFF",
        "primary-color": "#C5C7CA",
        "secondary-color": "#7F8084",
        "tertiary-color": "#6B6C70",
        "border-primary": "#35373B",
        "bg-color": "#191920",
      },
      backgroundImage: {
        "gradient-color":
          "linear-gradient(0deg, #27292d, #27292d), linear-gradient(129.59deg, #969696 0%, #343434 98.18%)",
        "gradient-border":
          "linear-gradient(129.59deg, #969696 0%, #343434 98.18%)",
      },
    },
  },
  plugins: [],
};
