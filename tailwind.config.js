/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Fredoka", "sans-serif"],
      },
      textColor: {
        "custom-red": "#FF0000", // Define your custom text color
        "custom-blue": "#0000FF",
        mountain: "#524C00",
      },
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "dark-grey": "#6a858c",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        codeEditor: "#1E293B",
        mainBg: "#1B2430",
        codeBg: "#94A3B8",
        navBarBg: "#161E2E",
        unitBg: "#d8e0e8",
        UnitCodeEditor: "#8295a9",
        sqlInput: "#3c3c3c",
        sqlSideBar: "#141516",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      fontSize: {
        "2xs": ".65rem",
      },
    },
  },
  plugins: [],
};
