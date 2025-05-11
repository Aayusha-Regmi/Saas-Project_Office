module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          blue: "var(--primary-blue)",
          "dark-blue": "var(--primary-dark-blue)",
          "light-blue": "var(--primary-light-blue)",
        },
        secondary: {
          blue: "var(--secondary-blue)",
        },
        accent: {
          blue: "var(--accent-blue)",
        },
        text: {
          white: "var(--text-white)",
          black: "var(--text-black)",
          dark: "var(--text-dark)",
          gray: "var(--text-gray)",
          "light-gray": "var(--text-light-gray)",
        },
        border: {
          "light-blue": "var(--border-light-blue)",
          "red-light": "var(--border-red-light)",
        }
      },
    },
  },
  plugins: [],
};