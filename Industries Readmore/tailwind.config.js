module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#071e45",
          lightBlue: "#22a8ff",
          brightBlue: "#32b5fd",
          darkBlue: "#04108a",
          navy: "#0a1e43",
          oceanBlue: "#0e5d97",
          skyBlue: "#1ca9e1",
        },
        secondary: {
          white: "#ffffff",
          gray: "#e0e0e0",
          lightGray: "#f7f7f7",
          darkGray: "#bfbfbf",
        },
        text: {
          primary: "#071e45",
          secondary: "#333333",
          light: "#666666",
          white: "#ffffff",
        },
        border: {
          light: "#e0e0e0",
          medium: "#bfbfbf",
          dark: "#999999",
        },
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};