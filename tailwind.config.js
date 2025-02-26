/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // светлые цвета
        "gray-20": "#e6f0f9", // фон
        "gray-50": "#cfe4f1",
        "gray-100": "#a1c8e0",
        "gray-500": "#2a4d7d", // текст
        "primary-100": "#a1c8e0", // блоки
        "primary-300": "#3a8fcf",
        "primary-500": "#1d4b8d", // кнопки
        "secondary-400": "#5c7fd7",
        "secondary-500": "#7a9bd8",

        // цвета для темной темы
        "darkGray-20": "#0f0f0f",
        "darkGray-50": "#2D2D2D",
        "darkGray-100": "#404040",
        "darkGray-500": "#E5E5E5",
        "darkPrimary-100": "#3d2424",
        "darkPrimary-300": "#5C1A1A",
        "darkPrimary-500": "#FF6B66",
        "darkSecondary-400": "#FFD700",
        "darkSecondary-500": "#FFB300",
        "darkSecondary-hover": "#CC0000",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
