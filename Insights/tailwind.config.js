module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#22a8ff",
          darkBlue: "#0a1e43",
          lightBlue: "#32b5fd",
          navy: "#071e45",
        },
        secondary: {
          gray: "#797979",
          white: "#ffffff",
        },
        accent: {
          DEFAULT: "#22a8ff",
          light: "#eaf8ff",
        },
        border: {
          light: "#e0e0e0",
          dark: "#cccccc",
        },
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        card: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        card: "20px",
        button: "7px",
      },
    },
  },
  plugins: [],
};