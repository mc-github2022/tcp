/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screen: {
      xl: "1300px",
    },
    container: {
      center: true,
      padding: "2rem",
    },

    colors: {
      primary: "#039759",
      white: "#ffffff",
      dark: "#09141A",
      greenDark: "#105D4D",
      greenDarker: "#093b31",
      blueDark: "#071E32",
      darker: "#09141A",
    },
    fontFamily: {
      dmSans: ["DM Sans"],
    },
    extend: {
      fontSize: {
        clamp: "clamp(60px, 10vw, 120px)",
      },
    },
  },
  plugins: [],
};
