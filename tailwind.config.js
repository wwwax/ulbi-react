module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        beau: ["beau", "cursive"],
        fira_light: ["fira_light", "consolas"],
        fira_regular: ["fira_regular", "consolas"],
        fira_bold: ["fira_bold", "consolas"],
      },
    },
    colors: {
      primary: "#6495ed",
      secondary: "#ff6347",
      white: "#fff",
      black: "#333",
      red: "#ff0000",
    },
  },
  plugins: [],
};
