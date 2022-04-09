const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Inter', // <-- Inter is a default sans font now
  'system-ui',
  // <-- you may provide more font fallbacks here
];
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      baseFont: ['Inter', 'roboto', 'serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        red: '#643047',
        black: '#001219',
        yellow: '#ecdca4',
        blue: '#08141c',
      },
    },
  },
  plugins: [],
}