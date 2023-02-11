/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    colors: {
      'transparent': 'transparent',
      'white': '#ffffff',
      'blue': '#2F06B9',
      'red': '#FF0606',
      'gray': {
        'textGray':'#333333',
        100: '#efefef90',
        200: '#efefef',
        300: '#707070',
      },
      'purple': {
        100: 'rgba(47,6,185,.7)',
        200: 'rgba(47,6,185,.3)'
      },
      extend: {
       
      }
    }

  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}