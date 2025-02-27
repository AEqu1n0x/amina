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
        "darkGray-20": "#0A1929", // Основной фон (темно-синий)
        "darkGray-50": "#1A2F4D", // Вторичный фон
        "darkGray-100": "#2A436E", // Акцентные элементы
        "darkGray-500": "#E0F2FE", // Основной текст (светло-голубой)

        "darkPrimary-100": "#1E3A5F", // Блоки (темно-синий)
        "darkPrimary-300": "#2E5A8F", // Ховер-состояния
        "darkPrimary-500": "#3B82F6", // Кнопки (яркий акцент)

        "darkSecondary-400": "#60A5FA", // Вторичные элементы
        "darkSecondary-500": "#2563EB", // Акцентные кнопки
        "darkSecondary-hover": "#1D4ED8", // Ховер акцента
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.webp')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.webp')",
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
