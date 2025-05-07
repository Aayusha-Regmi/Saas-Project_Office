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
        },
        secondary: {
          white: "var(--secondary-white)",
          "light-gray": "var(--secondary-light-gray)",
          gray: "var(--secondary-gray)",
          "dark-gray": "var(--secondary-dark-gray)",
        },
        accent: {
          blue: "var(--accent-blue)",
          green: "var(--accent-green)",
          "dark-green": "var(--accent-dark-green)",
        },
        border: {
          light: "var(--border-light)",
          gray: "var(--border-gray)",
        },
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'pricing-card': '0px 2px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};