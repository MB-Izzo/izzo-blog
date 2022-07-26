/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js, ts, jsx, tsx}',
    './components/**/*.{js, ts, jsx, tsx}',    
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#dadada',
      'black': '#141b1e',
      'light-black': '#232a2d',
      'red': '#e57474',
      'green': '#8ccf7e',
      'yellow': '#e5c76b',
      'blue': '#67b0e8',
      'magenta': '#c47fd5',
      'cyan': '#6cbfbf',
      'light-gray': '#b3b9b8',
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
