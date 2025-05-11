module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#0a1e43",
          lightBlue: "#32b5fd",
          darkBlue: "#071e45",
          mediumBlue: "#040948",
          navy: "#040c5a",
        },
        secondary: {
          lightBlue: "#eaf8ff",
          gray: "#797979",
          white: "#ffffff",
        },
        accent: {
          orange: "#ec7029",
          lightOrange: "#d78d62",
          brightBlue: "#009dff",
        },
        border: {
          light: "#e0e0e0",
          darkGray: "#666666",
        },
      },
      fontFamily: {
        'open-sans': ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(138deg, #ec7029ff 0%, #d78d62ff 50%, #009dffff 100%)',
      },
    },
  },
  plugins: [],
};