/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    colors: {
      primary: "#039759",
      white: "#ffffff",
      Dark: "#09141A",
    },
    fontFamily: {
      dmSans: ["DM Sans"],
    },
    extend: {},
  },
  plugins: [],
};
