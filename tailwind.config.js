// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary500: "#72063c",
        primary600: "#640233",
        primary700: "#4e0329",
        primary800: "#3b021f",
        accent500: "#ddb52f",
      },
      fontFamily: {
        ["open-sans"]: ["open-sans"],
        ["open-sans-bold"]: ["open-sans-bold"],
      },
    },
  },
  plugins: [],
};
