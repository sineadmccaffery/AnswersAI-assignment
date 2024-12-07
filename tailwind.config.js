/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      colors: {
        'black' : '#0E0D0D',
        'dark-gray' : '#161618',
        'gray' : '#242424',
        'light-gray' : '#525252',
        'text-gray' : '#BBBBBB',
        'light-green' : '#DCFF7FFD',
        'green' : '#C9FF3B',
        'dark-green' : '#282E16',
        'white': '#FFFFFF'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        body: ['Roobert', 'sans-serif'],
      },
      extend: {
        backgroundImage: {
            'hamburger' : "./src/assets/icon-hamburger.svg",
            'search' : "./src/assets/icon-search.svg"
        },
      }
    },
}