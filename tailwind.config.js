/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primaryBlue: 'hsl(221, 100%, 50%)',
        hoverBlue: '#60ABFF',
        darkGray: 'hsl(217, 20%, 51%)',
        grayishBlue: 'hsl(217, 35%, 45%)',
        grayishBlueFade: 'rgba(75, 106, 156, 0.5)',
        whiteFade: 'rgba(255, 255, 255, 0.75)',
        blackLightM: 'hsl(217, 21%, 21%)',
        blackDarkM: 'hsl(220, 40%, 13%)',
        veryLightGrayLM: 'hsl(227, 100%, 98%)',
        navyDarkMode: 'hsl(222, 41%, 20%)',
        white: 'hsl(0, 0%, 100%)',
        fontBlack: '#222731',
      },
      fontFamily: {
        sans: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [require('daisyui')],
};
