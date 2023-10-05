/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d66bf9",

          secondary: "#8ee532",

          accent: "#0a5568",

          neutral: "#282432",

          "base-100": "#2e2759",

          info: "#3f78d9",

          success: "#2cce75",

          warning: "#91760d",

          error: "#fb0919",
        },
        fontFamily: {
          'lato': ['Lato', 'sans-serif'],
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
