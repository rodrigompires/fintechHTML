/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        amarelo: {
          "bg-button": "#FFBB00",
          "bg-after_1": "#FEBD01",
          "bg-after_2": "#F4A90A",
          "bg-outline": "#F5AC08",
          "color-button-register": "#332200",
        },
        cinza: {
          color_li: "#d1c6c6",
          "color-input": "#989494",
          "color-label": "#b3b3b3",
          "color-recover": "#CCCDD0",
          "color-enter-button": "#F8F9F9",
          "bg-button-register": "#332200",
          "bg-button-register-2": "#2E2E2E",
          "color-button-google": "#7B7B7B",
          "color-button-facebook": "#1877F2",
          "color-button-apple": "#000000",
          "color-text-button-apple": "#F2F2F2",
          "color-header-register": "#DEDCDC",
          "bg-form": "rgba(255, 255, 255, 0.1)",
          "bg-widgets": "rgba(217 , 217, 217, 20%)",
        },
      },
    },
  },
  plugins: [],
};
