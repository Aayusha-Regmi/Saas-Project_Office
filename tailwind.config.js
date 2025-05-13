module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  variants: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover']
    }
  },
  theme: {
    extend: {
      colors: {
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
          blue: "#0a1e43",
          'light-blue': "#32b5fd",
          'dark-blue': "#071e45",
          'medium-blue': "#040948",
          navy: "#040c5a",
          lightBlue: "#32b5fd",
          darkBlue: "#071e45",
          mediumBlue: "#040948",
        },
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
          'light-blue': "#eaf8ff",
          blue: "var(--secondary-blue)",
          lightBlue: "#eaf8ff",
          gray: "#797979",
          white: "#ffffff",
        },
        accent: {
          DEFAULT: "var(--accent-color)",
          foreground: "var(--accent-foreground)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
          red: "var(--accent-red)",
          blue: "var(--accent-blue)",
          orange: "#ec7029",
          lightOrange: "#d78d62",
          brightBlue: "#009dff",
        },
        text: {
          white: "var(--text-white)",
          black: "var(--text-black)",
          dark: "var(--text-dark)",
          gray: "var(--text-gray)",
          "light-gray": "var(--text-light-gray)",
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          light: "var(--border-light)",
          "light-blue": "var(--border-light-blue)",
          "red-light": "var(--border-red-light)",
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
        'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
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
        card: "20px",
        button: "7px",
      },
      boxShadow: {
        card: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(138deg, #ec7029ff 0%, #d78d62ff 50%, #009dffff 100%)',
      },
    },
  },
  plugins: [],
};