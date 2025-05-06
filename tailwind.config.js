module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        accent: {
          DEFAULT: "var(--accent-color)",
          foreground: "var(--accent-foreground)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          light: "var(--border-light)",
          dark: "var(--border-dark)",
        },
        blue: {
          500: '#32b5fd',
          600: '#22a8ff',
          700: '#0a1e43',
          800: '#071e45',
        },
        red: {
          500: '#e6797d',
          600: '#d61f26',
        },
        gray: {
          300: '#d9d9d9',
          400: '#797979',
          500: '#eaf8ff',
          600: '#e5f3ff',
        },
        green: {
          300: '#d7ffec',
        }
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'xs': '11px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '22px',
        '3xl': '24px',
        '4xl': '48px',
      },
      borderRadius: {
        'none': '0',
        'sm': '7px',
        'md': '10px',
        'lg': '17px',
        'xl': '19px',
        '2xl': '20px',
        '3xl': '29px',
        'full': '9999px',
      },
    },
  },
  plugins: [],
};