module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "var(--primary-blue)",
          "light-blue": "var(--primary-light-blue)",
          "dark-blue": "var(--primary-dark-blue)",
          "medium-blue": "var(--primary-medium-blue)",
          "bright-blue": "var(--primary-bright-blue)",
          "ocean-blue": "var(--primary-ocean-blue)",
          "deep-blue": "var(--primary-deep-blue)"
        },
        secondary: {
          white: "var(--secondary-white)",
          "light-gray": "var(--secondary-light-gray)",
          gray: "var(--secondary-gray)"
        },
        accent: {
          red: "var(--accent-red)"
        },
        border: {
          light: "var(--border-light)",
          dark: "var(--border-dark)"
        }
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
};