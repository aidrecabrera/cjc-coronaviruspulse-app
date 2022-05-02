/* This is adding the default font family to the tailwind config. */
const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Inter', // <-- Inter is a default sans font now
  'system-ui',
  // <-- you may provide more font fallbacks here
];
/* This is the tailwind config file. */
module.exports = {
  /* This is telling tailwind to watch the index.html and all the files in the src folder. */
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  /* Adding custom spacing, border radius, and colors to the tailwind config. */
  theme: {
    /* The above code is setting the font family for the website. */
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
    /* Adding custom spacing, border radius, and colors to the tailwind config. */
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
  plugins: [require('@tailwindcss/typography')],
}