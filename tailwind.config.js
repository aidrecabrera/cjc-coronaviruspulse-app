module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#643047',
        black: '#001219',
      },
      
    },
  },
  plugins: [],
}