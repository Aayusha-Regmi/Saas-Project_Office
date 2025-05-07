module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "var(--primary-blue)",
          "light-blue": "var(--primary-light-blue)",
          "bright-blue": "var(--primary-bright-blue)",
          "dark-blue": "var(--primary-dark-blue)",
        },
        secondary: {
          white: "var(--secondary-white)",
          "light-gray": "var(--secondary-light-gray)",
          gray: "var(--secondary-gray)",
        },
        accent: {
          orange: "var(--accent-orange)",
          "light-blue": "var(--accent-light-blue)",
        },
        border: {
          light: "var(--border-light)",
          medium: "var(--border-medium)",
        },
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};