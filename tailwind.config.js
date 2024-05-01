
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blueDonker: "#05091B",
        darkBlue: "#252A3E",
        blueLight: "#3D4466",
        blue: "#212E4C",
        lightBlue: "#97A0CC",
        offWhite: "#F0F3FF",
        green: "#6CF0A1",
      },
      fontFamily: {
        dmSans: "DM Sans, sans-serif",
      },
      fontSize: {
        smText: "14px",
        mdText: "16px",
        lText: "24px",
        xlText: "36px"
      }
    },
  },
  plugins: [],
}