/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1280px",
    },
    extend: {
      colors: {
        primary: "hsla(349, 100%, 43%, 1)",
        primaryVariant: "hsla(349, 69%, 51%, 1)",
        ratingColor: "hsla(44, 100%, 49%, 1)",
        surface: "hsla(250, 13%, 11%, 1)",
        textColor: "hsla(250, 2%, 59%, 1)",
        background: "hsla(220, 17%, 7%, 1)",
        onBackground: "hsla(220, 100%, 95%, 1)",
        banner: "hsla(250, 6%, 20%, 1)",
        whiteAlpha20: "hsla(0, 0%, 100%, 0.2)",
        onSurface: "hsla(250, 100%, 95%, 1)",
        onSurfaceVariant: "hsla(250, 1%, 44%, 1)",

        // Gradient colors
        bottomOverlay: "180deg, hsla(250, 13%, 11%, 0), hsla(250, 13%, 11%, 1)",
      },
      boxShadow: {
        shadow1: "0 1px 4px hsla(0, 0%, 0%, 0.75)",
        shadow2: "0 2px 4px hsla(350, 100%, 43%, 0.3)",
      },
    },
  },
  plugins: [],
};
